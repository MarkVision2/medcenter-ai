import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadInput {
  name?: string;
  phone?: string;
  clinic?: string;
  niche?: string;
  project_id?: string;
  event_id?: string;
  fbp?: string;
  fbc?: string;
  user_agent?: string;
  referrer?: string;
  event_source_url?: string;
}

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function normalizePhone(raw: string): string {
  return raw.replace(/[^\d]/g, "");
}

function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/);
  return { first: parts[0] ?? "", last: parts.slice(1).join(" ") };
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

    const body = (await req.json().catch(() => ({}))) as LeadInput;

    const project_id = body.project_id || "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
    const name = (body.name ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const clinic = (body.clinic ?? "").trim();
    const niche = (body.niche ?? "").trim();

    const errors: Record<string, string> = {};
    if (name.length < 2 || name.length > 100) errors.name = "Введите имя (2-100 символов)";
    if (phone.replace(/\D/g, "").length < 7) errors.phone = "Введите корректный номер телефона";
    if (clinic.length < 2 || clinic.length > 200) errors.clinic = "Введите название клиники";
    if (niche.length < 2 || niche.length > 100) errors.niche = "Выберите направление";

    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({ error: "validation", fields: errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const eventId = body.event_id || crypto.randomUUID();

    const forwarded = req.headers.get("x-forwarded-for") ?? "";
    const clientIp =
      forwarded.split(",")[0]?.trim() || req.headers.get("cf-connecting-ip") || "";
    const userAgent = body.user_agent || req.headers.get("user-agent") || "";

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    
    // Вставляем лид в основную таблицу CRM 'leads'
    const { error: dbError } = await supabase.from("leads").insert({
      project_id,
      name,
      phone,
      source: "landing_diagnostic",
      status: "new",
      metadata: {
        clinic,
        niche,
        user_agent: userAgent || null,
        referrer: body.referrer || null,
        fbp: body.fbp || null,
        fbc: body.fbc || null,
        meta_event_id: eventId,
      },
    });

    if (dbError) {
      console.error("DB insert failed", dbError);
      return new Response(
        JSON.stringify({ error: "Не удалось сохранить заявку. Попробуйте ещё раз." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    let capiResult: unknown = { skipped: true };
    if (PIXEL_ID && ACCESS_TOKEN) {
      try {
        const phoneDigits = normalizePhone(phone);
        const { first, last } = splitName(name);

        const userData: Record<string, unknown> = {
          client_user_agent: userAgent,
          ph: [await sha256Hex(phoneDigits)],
          fn: first ? [await sha256Hex(first)] : [],
          ln: last ? [await sha256Hex(last)] : [],
        };
        if (clientIp) userData.client_ip_address = clientIp;
        if (body.fbp) userData.fbp = body.fbp;
        if (body.fbc) userData.fbc = body.fbc;

        const eventTime = Math.floor(Date.now() / 1000);
        const payload = {
          data: [
            {
              event_name: "Lead",
              event_time: eventTime,
              event_id: eventId,
              action_source: "website",
              event_source_url: body.event_source_url,
              user_data: userData,
              attribution_data: { attribution_share: "0.3" },
              custom_data: {
                currency: "KZT",
                value: "9900",
                content_name: "Диагностика медцентра",
                content_category: "lead",
                lead_event_source: "diagnostic_form",
                clinic_name: clinic,
                niche,
              },
              original_event_data: {
                event_name: "Lead",
                event_time: eventTime,
              },
            },
          ],
        };

        const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`;
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
      JSON.stringify({ success: true, event_id: eventId, capi: capiResult }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("submit-diagnostic-lead error", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
