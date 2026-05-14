import { type MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "77472842595";
const WHATSAPP_MESSAGE = "Хочу записаться на диагностику клиники";

// MarkVision multi-tenant click tracker (separate Supabase project).
// Resolves cabinet by host, writes the click into whatsapp_clicks, and
// fires Meta CAPI "Contact" (intent — not Lead). The real "Lead" event is
// fired server-side from greenapi-webhook when the user actually sends the
// WhatsApp message carrying the [#xxxxxxxx] marker we append below.
const TRACK_CLICK_URL =
  "https://szfgdruhlebfvcmlvxdk.supabase.co/functions/v1/track-whatsapp-click";

type Fbq = (
  command: "track",
  eventName: string,
  params?: Record<string, unknown>,
  options?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    fbq?: Fbq;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const getCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : undefined;
};

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;
type UtmKey = (typeof UTM_KEYS)[number];
type Utm = Partial<Record<UtmKey, string>>;
const UTM_STORAGE_KEY = "lovable_utm_v1";

const getUtmParams = (): Utm => {
  if (typeof window === "undefined") return {};
  const out: Utm = {};
  try {
    const params = new URLSearchParams(window.location.search);
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v && v.trim()) out[k] = v.trim().slice(0, 200);
    }
    if (Object.keys(out).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(out));
      return out;
    }
    const cached = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached) as Utm;
      return parsed && typeof parsed === "object" ? parsed : {};
    }
  } catch {
    /* ignore */
  }
  return out;
};

// Map utm_source / click-id cookies to a short, human-decodable code.
// Yuri sees this in WhatsApp: fb = Facebook/Meta/Instagram, g = Google,
// yt = YouTube, tg = Telegram, direct = no campaign attribution.
const resolveSourceCode = (utm: Utm): string => {
  const raw = (utm.utm_source ?? "").toLowerCase().trim();
  if (raw) {
    if (/^(fb|facebook|meta|ig|instagram)$/.test(raw)) return "fb";
    if (/^(g|google|adwords|googleads|gads)$/.test(raw)) return "g";
    if (/^(yt|youtube)$/.test(raw)) return "yt";
    if (/^(tg|telegram)$/.test(raw)) return "tg";
    return raw.replace(/[^a-z0-9]+/g, "").slice(0, 6) || "src";
  }
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("fbclid") || getCookie("_fbc")) return "fb";
    if (params.get("gclid") || params.get("gbraid") || params.get("wbraid")) return "g";
  }
  return "direct";
};

// 8-character URL-safe id used as: (a) marker [#xxxxxxxx] in the WhatsApp
// message text and (b) eventID for the browser pixel Contact event. The
// greenapi-webhook matches this marker against whatsapp_clicks and fires
// the Meta CAPI "Lead" event with the original fbp/fbc when the user
// actually sends the message.
const CLICK_ID_CHARS =
  "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
const generateClickId = (): string => {
  let s = "";
  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    const buf = new Uint8Array(8);
    crypto.getRandomValues(buf);
    for (let i = 0; i < buf.length; i++) {
      s += CLICK_ID_CHARS[buf[i] % CLICK_ID_CHARS.length];
    }
    return s;
  }
  for (let i = 0; i < 8; i++) {
    s += CLICK_ID_CHARS[Math.floor(Math.random() * CLICK_ID_CHARS.length)];
  }
  return s;
};

interface TrackContactParams {
  clickId: string;
  ctaId?: number;
  ctaName?: string;
  utm: Utm;
  sourceCode: string;
}

// Browser-side bookkeeping for the click. Lead is intentionally NOT fired
// here — only an intent-level Contact + analytics events. The real Lead
// fires from the server only when the WhatsApp message arrives.
const trackContactIntent = ({
  clickId,
  ctaId,
  ctaName,
  utm,
  sourceCode,
}: TrackContactParams): void => {
  if (typeof window === "undefined") return;

  // Meta Pixel — Contact (intent, not Lead) with eventID matching the
  // server-side track-whatsapp-click call for dedup.
  const fbq = window.fbq;
  if (typeof fbq === "function") {
    fbq(
      "track",
      "Contact",
      {
        content_name: "WhatsApp Click",
        content_category: "contact",
      },
      { eventID: clickId },
    );
  }

  // GTM dataLayer — kept as a high-signal "contact_intent" event so existing
  // GTM triggers can still route by channel, but no longer marked as a Lead
  // conversion in Google Ads.
  const dataLayer = (window.dataLayer = window.dataLayer || []);
  dataLayer.push({
    event: "contact_intent",
    event_category: "engagement",
    event_label: ctaName ?? "whatsapp_cta",
    method: "whatsapp",
    cta_id: ctaId ?? null,
    cta_name: ctaName ?? null,
    source_code: sourceCode,
    utm_source: utm.utm_source ?? null,
    utm_medium: utm.utm_medium ?? null,
    utm_campaign: utm.utm_campaign ?? null,
    utm_content: utm.utm_content ?? null,
    utm_term: utm.utm_term ?? null,
    transaction_id: clickId,
  });

  // gtag direct fallback — also as engagement, not a conversion event.
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "click_whatsapp", {
      event_category: "engagement",
      event_label: ctaName ?? "whatsapp_cta",
      transaction_id: clickId,
    });
  }

  // MarkVision tracker — persists the click in whatsapp_clicks with
  // fbp/fbc/UTM/cabinet, and fires Meta CAPI "Contact" server-side. When
  // the user actually messages WhatsApp, greenapi-webhook reads the
  // [#marker] from the message, looks up this row, and only then fires
  // the Meta CAPI "Lead" event with full attribution.
  try {
    const body = JSON.stringify({
      click_id: clickId,
      event_id: clickId,
      event_source_url: window.location.href,
      user_agent: navigator.userAgent,
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
      fbclid: new URLSearchParams(window.location.search).get("fbclid") ?? undefined,
      referrer: document.referrer,
      utm_source: utm.utm_source ?? undefined,
      utm_medium: utm.utm_medium ?? undefined,
      utm_campaign: utm.utm_campaign ?? undefined,
      utm_content: utm.utm_content ?? undefined,
      utm_term: utm.utm_term ?? undefined,
      source_label: "medcenter-ai",
    });
    // sendBeacon survives navigation/tab switch to WhatsApp on mobile.
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([body], { type: "application/json" });
      if (!navigator.sendBeacon(TRACK_CLICK_URL, blob)) {
        void fetch(TRACK_CLICK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true,
        }).catch(() => undefined);
      }
    } else {
      void fetch(TRACK_CLICK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => undefined);
    }
  } catch (err) {
    console.error("track-whatsapp-click failed", err);
  }
};

interface ScrollToFormButtonProps {
  label?: string;
  className?: string;
  variant?: "whatsapp" | "cta-orange";
  ctaId?: number;
  ctaName?: string;
}

const ScrollToFormButton = ({
  label = "Записаться на диагностику",
  className,
  variant = "whatsapp",
  ctaId,
  ctaName,
}: ScrollToFormButtonProps) => {
  const resolvedCtaName = ctaName ?? label;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const clickId = generateClickId();
    const utm = getUtmParams();
    const sourceCode = resolveSourceCode(utm);

    // Visible suffix: channel code Yuri reads in WhatsApp + a hidden marker
    // greenapi-webhook parses to attribute the real Lead event server-side.
    const text = `${WHATSAPP_MESSAGE}. ${sourceCode} [#${clickId}]`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    trackContactIntent({
      clickId,
      ctaId,
      ctaName: resolvedCtaName,
      utm,
      sourceCode,
    });

    // window.open inside a user click → no popup blocker.
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Button
      type="button"
      variant={variant}
      size="cta"
      onClick={handleClick}
      data-cta-id={ctaId}
      data-cta-name={resolvedCtaName}
      className={cn(
        "font-semibold leading-tight whitespace-normal text-center w-full",
        className,
      )}
    >
      <span>{label}</span>
      <ArrowRight className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToFormButton;
