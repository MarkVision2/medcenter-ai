// @ts-nocheck
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-webhook-token",
};

interface ParsedMessage {
  phone: string;
  text: string;
  senderName?: string;
  timestamp?: number;
}

function parseIncoming(raw: any): ParsedMessage | null {
  const body = raw?.body ?? raw ?? {};

  // Green-API
  if (body.senderData && body.messageData) {
    const typeWebhook = body.typeWebhook;
    if (typeWebhook && typeWebhook !== "incomingMessageReceived") return null;

    const sender = String(body.senderData.sender || body.senderData.chatId || "");
    const phone = sender.replace(/[@a-z.]/gi, "").replace(/\D/g, "");
    const text =
      body.messageData?.textMessageData?.textMessage ||
      body.messageData?.extendedTextMessageData?.text ||
      "";
    if (!phone || !text) return null;
    return {
      phone,
      text,
      senderName: body.senderData.senderName,
      timestamp: typeof body.timestamp === "number" ? body.timestamp : undefined,
    };
  }

  // Meta WhatsApp Cloud API
  const messages = body.entry?.[0]?.changes?.[0]?.value?.messages || [];
  if (messages.length) {
    const m = messages[0];
    if (m.type !== "text") return null;
    const phone = String(m.from || "").replace(/\D/g, "");
    const text = m.text?.body || "";
    if (!phone || !text) return null;
    return {
      phone,
      text,
      timestamp: m.timestamp ? parseInt(String(m.timestamp), 10) : undefined,
    };
  }

  return null;
}

function extractMarker(text: string): string | null {
  const match = text.match(/\[#([A-HJ-NP-Za-km-z2-9]{6,16})\]/);
  return match ? match[1] : null;
}

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Meta WhatsApp Cloud API verification handshake (GET ?hub.mode=subscribe...)
  if (req.method === "GET") {
    const url = new URL(req.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");
    const META_VERIFY = Deno.env.get("META_WA_VERIFY_TOKEN");
    if (mode === "subscribe" && META_VERIFY && token === META_VERIFY) {
      return new Response(challenge || "", { status: 200 });
    }
    return new Response("ok", { status: 200 });
  }

  const WEBHOOK_TOKEN = Deno.env.get("WHATSAPP_WEBHOOK_TOKEN");
  if (WEBHOOK_TOKEN) {
    const url = new URL(req.url);
    const provided =
      req.headers.get("x-webhook-token") || url.searchParams.get("token");
    if (provided !== WEBHOOK_TOKEN) {
      return new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const PIXEL_ID = Deno.env.get("META_PIXEL_ID");
    const ACCESS_TOKEN = Deno.env.get("META_CAPI_ACCESS_TOKEN");

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return new Response(JSON.stringify({ error: "Backend not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const raw = await req.json().catch(() => ({}));
    const parsed = parseIncoming(raw);

    if (!parsed) {
      // Green-API also pushes status/ack webhooks — just ack them.
      return new Response(
        JSON.stringify({ ok: true, skipped: "not_an_incoming_text" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const marker = extractMarker(parsed.text);
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    if (!marker) {
      console.log("WA incoming without marker", {
        phone: parsed.phone,
        text_preview: parsed.text.slice(0, 80),
      });
      return new Response(
        JSON.stringify({ ok: true, skipped: "no_marker" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { data: click, error: fetchErr } = await supabase
      .from("whatsapp_clicks")
      .select("*")
      .eq("click_id", marker)
      .maybeSingle();

    if (fetchErr) {
      console.error("whatsapp_clicks fetch error", fetchErr);
      return new Response(JSON.stringify({ error: fetchErr.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!click) {
      console.log("marker not found in whatsapp_clicks", { marker });
      return new Response(
        JSON.stringify({ ok: true, skipped: "marker_not_found", marker }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (click.converted) {
      return new Response(
        JSON.stringify({ ok: true, skipped: "already_converted", marker }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    await supabase
      .from("whatsapp_clicks")
      .update({
        converted: true,
        converted_at: new Date().toISOString(),
        whatsapp_phone: parsed.phone,
        whatsapp_first_message: parsed.text.slice(0, 500),
      })
      .eq("click_id", marker);

    let capiResult: unknown = { skipped: "no_pixel" };
    if (PIXEL_ID && ACCESS_TOKEN) {
      const userData: Record<string, unknown> = {
        ph: [await sha256Hex(parsed.phone)],
      };
      if (click.fbp) userData.fbp = click.fbp;
      if (click.fbc) userData.fbc = click.fbc;
      if (click.user_agent) userData.client_user_agent = click.user_agent;
      if (click.client_ip) userData.client_ip_address = click.client_ip;

      const externalIdSource = [
        click.fbp ?? "",
        click.client_ip ?? "",
        click.user_agent ?? "",
      ].join("|");
      if (externalIdSource.replace(/\|/g, "").length > 0) {
        userData.external_id = await sha256Hex(externalIdSource);
      }

      const eventTime = parsed.timestamp || Math.floor(Date.now() / 1000);
      const fbPayload = {
        data: [
          {
            event_name: "Lead",
            event_time: eventTime,
            event_id: click.event_id || click.click_id,
            action_source: "website",
            event_source_url: click.event_source_url,
            user_data: userData,
            custom_data: {
              currency: "KZT",
              value: "0",
              content_name: "WhatsApp Conversation",
              content_category: "lead",
              lead_event_source: "whatsapp_message",
            },
            original_event_data: {
              event_name: "Lead",
              event_time: eventTime,
            },
          },
        ],
      };

      const fbUrl = `https://graph.facebook.com/v22.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`;
      const fbRes = await fetch(fbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fbPayload),
      });
      capiResult = await fbRes.json();
      if (!fbRes.ok) {
        console.error("CAPI Lead error", fbRes.status, capiResult);
      }
    }

    return new Response(
      JSON.stringify({ ok: true, lead_sent: true, marker, capi: capiResult }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("whatsapp-incoming error", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
