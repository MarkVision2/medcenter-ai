// @ts-nocheck
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ClickEventBody {
  click_id: string;
  event_id?: string;
  event_source_url?: string;
  user_agent?: string;
  fbp?: string;
  fbc?: string;
  fbclid?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
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

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const PIXEL_ID = Deno.env.get("META_PIXEL_ID");
    const ACCESS_TOKEN = Deno.env.get("META_CAPI_ACCESS_TOKEN");

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return new Response(
        JSON.stringify({ error: "Backend not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = (await req.json().catch(() => ({}))) as ClickEventBody;

    if (!body?.click_id || typeof body.click_id !== "string") {
      return new Response(
        JSON.stringify({ error: "click_id is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const forwarded = req.headers.get("x-forwarded-for") ?? "";
    const clientIp =
      forwarded.split(",")[0]?.trim() || req.headers.get("cf-connecting-ip") || "";
    const userAgent = body.user_agent || req.headers.get("user-agent") || "";
    const eventId = body.event_id || body.click_id;

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { error: dbError } = await supabase.from("whatsapp_clicks").insert({
      click_id: body.click_id,
      event_id: eventId,
      event_source_url: body.event_source_url || null,
      user_agent: userAgent || null,
      client_ip: clientIp || null,
      fbp: body.fbp || null,
      fbc: body.fbc || null,
      fbclid: body.fbclid || null,
      referrer: body.referrer || null,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      utm_content: body.utm_content || null,
      utm_term: body.utm_term || null,
    });

    if (dbError) {
      console.error("whatsapp_clicks insert failed", dbError);
    }

    let capiResult: unknown = { skipped: true };
    if (PIXEL_ID && ACCESS_TOKEN) {
      try {
        const userData: Record<string, unknown> = {
          client_user_agent: userAgent,
        };
        if (clientIp) userData.client_ip_address = clientIp;
        if (body.fbp) userData.fbp = body.fbp;
        if (body.fbc) {
          userData.fbc = body.fbc;
        } else if (body.fbclid) {
          userData.fbc = `fb.1.${Math.floor(Date.now() / 1000)}.${body.fbclid}`;
        }

        const externalIdSource = [body.fbp ?? "", clientIp, userAgent].join("|");
        if (externalIdSource.replace(/\|/g, "").length > 0) {
          userData.external_id = await sha256Hex(externalIdSource);
        }

        const eventTime = Math.floor(Date.now() / 1000);
        const payload = {
          data: [
            {
              event_name: "Contact",
              event_time: eventTime,
              event_id: eventId,
              action_source: "website",
              event_source_url: body.event_source_url,
              user_data: userData,
              custom_data: {
                content_name: "WhatsApp Click",
                content_category: "contact",
                lead_event_source: "whatsapp_button",
              },
              original_event_data: {
                event_name: "Contact",
                event_time: eventTime,
              },
            },
          ],
        };

        const url = `https://graph.facebook.com/v22.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`;
        const fbRes = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        capiResult = await fbRes.json();
        if (!fbRes.ok) {
          console.error("Meta CAPI error", fbRes.status, capiResult);
        }
      } catch (capiErr) {
        console.error("Meta CAPI exception", capiErr);
      }
    }

    return new Response(
      JSON.stringify({ success: true, click_id: body.click_id, event_id: eventId, capi: capiResult }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("track-whatsapp-click error", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
