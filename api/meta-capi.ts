/**
 * Vercel Function — forwards browser pixel events to Meta Conversions API
 * for higher event-coverage parity.
 *
 * Client posts the same payload (event_id, fbp, fbc, custom_data) it pushed
 * into the browser fbq; server forwards with hashed user_data and the same
 * event_id so Meta deduplicates against the browser pixel.
 *
 * Env vars (Vercel project settings → Environment Variables):
 *   META_PIXEL_ID             — pixel id (e.g. 3912939922347990)
 *   META_CAPI_ACCESS_TOKEN    — system-user access token from Events Manager
 *   META_CAPI_TEST_EVENT_CODE — optional, while testing to see events under
 *                               "Test Events"
 */

import { createHash } from "node:crypto";

export const config = {
  runtime: "nodejs",
};

const ALLOWED_EVENTS = ["PageView", "Lead", "ViewContent", "InitiateCheckout"] as const;
type EventName = (typeof ALLOWED_EVENTS)[number];

interface IncomingPayload {
  event_name?: EventName;
  event_id?: string;
  event_time?: number;
  event_source_url?: string;
  action_source?: "website" | "system_generated";
  fbp?: string;
  fbc?: string;
  user_data?: {
    em?: string;
    ph?: string;
    fn?: string;
    ln?: string;
    external_id?: string;
  };
  custom_data?: Record<string, unknown>;
}

const sha256 = (input: string): string =>
  createHash("sha256").update(input.trim().toLowerCase()).digest("hex");

const corsHeaders: HeadersInit = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });

const getClientIp = (req: Request): string | undefined => {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) {
    const first = fwd.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip") ?? undefined;
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "method_not_allowed" }, 405);
  }

  const PIXEL_ID = process.env.META_PIXEL_ID;
  const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
  const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE;

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return json({ error: "capi_not_configured" }, 500);
  }

  let body: IncomingPayload;
  try {
    body = (await req.json()) as IncomingPayload;
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const eventName = body.event_name;
  if (!eventName || !ALLOWED_EVENTS.includes(eventName)) {
    return json({ error: "invalid_event_name" }, 400);
  }

  const eventTime =
    typeof body.event_time === "number" && Number.isFinite(body.event_time)
      ? Math.trunc(body.event_time)
      : Math.floor(Date.now() / 1000);

  const userAgent = req.headers.get("user-agent") ?? "";
  const clientIp = getClientIp(req);

  const userData: Record<string, unknown> = {
    client_user_agent: userAgent,
  };
  if (clientIp) userData.client_ip_address = clientIp;
  if (body.fbp) userData.fbp = body.fbp;
  if (body.fbc) userData.fbc = body.fbc;
  if (body.user_data?.em) userData.em = [sha256(body.user_data.em)];
  if (body.user_data?.ph) userData.ph = [sha256(body.user_data.ph.replace(/\D/g, ""))];
  if (body.user_data?.fn) userData.fn = [sha256(body.user_data.fn)];
  if (body.user_data?.ln) userData.ln = [sha256(body.user_data.ln)];
  if (body.user_data?.external_id) {
    userData.external_id = [sha256(body.user_data.external_id)];
  }

  const event = {
    event_name: eventName,
    event_time: eventTime,
    event_id: body.event_id,
    action_source: body.action_source ?? "website",
    event_source_url: body.event_source_url,
    user_data: userData,
    custom_data: body.custom_data ?? {},
  };

  const payload: { data: unknown[]; test_event_code?: string } = { data: [event] };
  if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

  const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`;

  try {
    const fbRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await fbRes.json().catch(() => ({}))) as Record<string, unknown>;
    if (!fbRes.ok) {
      return json({ ok: false, status: fbRes.status, meta: data }, 502);
    }
    return json({ ok: true, meta: data });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return json({ ok: false, error: message }, 500);
  }
}
