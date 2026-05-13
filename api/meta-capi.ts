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

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createHash } from "node:crypto";

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

const setCors = (res: VercelResponse): void => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
};

const getClientIp = (req: VercelRequest): string | undefined => {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string") {
    const first = fwd.split(",")[0]?.trim();
    if (first) return first;
  }
  if (Array.isArray(fwd) && fwd.length > 0) return fwd[0];
  const real = req.headers["x-real-ip"];
  if (typeof real === "string") return real;
  return undefined;
};

const parseBody = (req: VercelRequest): IncomingPayload => {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as IncomingPayload;
    } catch {
      return {};
    }
  }
  return req.body as IncomingPayload;
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }

  const PIXEL_ID = process.env.META_PIXEL_ID;
  const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
  const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE;

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    res.status(500).json({ error: "capi_not_configured" });
    return;
  }

  const body = parseBody(req);

  const eventName = body.event_name;
  if (!eventName || !ALLOWED_EVENTS.includes(eventName)) {
    res.status(400).json({ error: "invalid_event_name" });
    return;
  }

  const eventTime =
    typeof body.event_time === "number" && Number.isFinite(body.event_time)
      ? Math.trunc(body.event_time)
      : Math.floor(Date.now() / 1000);

  const userAgent = (req.headers["user-agent"] as string | undefined) ?? "";
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

  // Hard cap upstream call so the Vercel function never sits idle near the
  // platform timeout if Graph stalls.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);

  try {
    const fbRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const data = (await fbRes.json().catch(() => ({}))) as Record<string, unknown>;
    if (!fbRes.ok) {
      res.status(502).json({ ok: false, status: fbRes.status, meta: data });
      return;
    }
    res.status(200).json({ ok: true, meta: data });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    res.status(500).json({ ok: false, error: message });
  } finally {
    clearTimeout(timeout);
  }
}
