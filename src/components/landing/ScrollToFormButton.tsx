import { type MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "77472842595";
const WHATSAPP_MESSAGE = "Хочу записаться на диагностику клиники";

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

const generateEventId = (): string =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;

interface TrackLeadParams {
  eventId: string;
  ctaId?: number;
  ctaName?: string;
  utm: Utm;
  sourceCode: string;
}

const trackLeadEvents = ({
  eventId,
  ctaId,
  ctaName,
  utm,
  sourceCode,
}: TrackLeadParams): void => {
  if (typeof window === "undefined") return;

  // Meta Pixel — Lead event with eventID for future server-side CAPI dedup.
  const fbq = window.fbq;
  if (typeof fbq === "function") {
    fbq(
      "track",
      "Lead",
      {
        content_name: "Диагностика медцентра",
        content_category: "lead",
        value: 9900,
        currency: "KZT",
      },
      { eventID: eventId },
    );
  }

  // GTM dataLayer — carries UTM + source code so triggers can route by channel.
  const dataLayer = (window.dataLayer = window.dataLayer || []);
  dataLayer.push({
    event: "generate_lead",
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
    value: 9900,
    currency: "KZT",
    transaction_id: eventId,
  });

  // gtag direct fallback for Google Ads conversions when GTM bypassed.
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: ctaName ?? "whatsapp_cta",
      value: 9900,
      currency: "KZT",
      transaction_id: eventId,
    });
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
    const eventId = generateEventId();
    const utm = getUtmParams();
    const sourceCode = resolveSourceCode(utm);

    // Plain trailing channel code, e.g. "Хочу записаться на диагностику клиники. fb"
    const text = `${WHATSAPP_MESSAGE}. ${sourceCode}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    trackLeadEvents({
      eventId,
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
