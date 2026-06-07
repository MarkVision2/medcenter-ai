import { type MouseEvent, useState } from "react";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "77776290913";
const WHATSAPP_MESSAGE = "Хочу получить систему привлечения первичных пациентов";

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

interface TrackLeadParams {
  eventId: string;
  ctaId?: number;
  ctaName?: string;
  utm: Utm;
  sourceCode: string;
}

const sendMetaCapiLead = (eventId: string): void => {
  if (typeof window === "undefined") return;

  try {
    const body = JSON.stringify({
      event_name: "Lead",
      event_id: eventId,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: window.location.href,
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
      custom_data: {
        content_name: "WhatsApp Lead",
        content_category: "lead",
      },
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/meta-capi", new Blob([body], { type: "application/json" }));
    } else {
      void fetch("/api/meta-capi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => undefined);
    }
  } catch {
    /* ignore */
  }
};

const trackWhatsAppClick = ({
  eventId,
  ctaId,
  ctaName,
  utm,
  sourceCode,
}: TrackLeadParams): void => {
  if (typeof window === "undefined") return;

  try {
    const body = JSON.stringify({
      click_id: eventId,
      event_id: eventId,
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

    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "text/plain;charset=UTF-8" });
      if (!navigator.sendBeacon(TRACK_CLICK_URL, blob)) {
        void fetch(TRACK_CLICK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body,
          keepalive: true,
          mode: "cors",
        }).catch(() => undefined);
      }
    } else {
      void fetch(TRACK_CLICK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body,
        keepalive: true,
        mode: "cors",
      }).catch(() => undefined);
    }
  } catch (err) {
    console.error("track-whatsapp-click failed", err);
  }

  const dataLayer = (window.dataLayer = window.dataLayer || []);
  dataLayer.push({
    event: "lead",
    event_category: "conversion",
    event_label: ctaName ?? "whatsapp_lead",
    method: "whatsapp",
    cta_id: ctaId ?? null,
    cta_name: ctaName ?? null,
    source_code: sourceCode,
    utm_source: utm.utm_source ?? null,
    utm_medium: utm.utm_medium ?? null,
    utm_campaign: utm.utm_campaign ?? null,
    utm_content: utm.utm_content ?? null,
    utm_term: utm.utm_term ?? null,
    transaction_id: eventId,
  });

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", {
      event_category: "conversion",
      event_label: ctaName ?? "whatsapp_lead",
      transaction_id: eventId,
    });
  }
};

const trackLead = ({
  eventId,
  ctaId,
  ctaName,
  utm,
  sourceCode,
}: TrackLeadParams): void => {
  if (typeof window === "undefined") return;

  const fbq = window.fbq;
  if (typeof fbq === "function") {
    fbq(
      "track",
      "Lead",
      {
        content_name: ctaName ?? "WhatsApp Lead",
        content_category: "lead",
      },
      { eventID: eventId },
    );
  }

  sendMetaCapiLead(eventId);
  trackWhatsAppClick({ eventId, ctaId, ctaName, utm, sourceCode });
};

const openWhatsApp = (): void => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  window.open(url, "_blank", "noopener,noreferrer");
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
  const [open, setOpen] = useState(false);
  const resolvedCtaName = ctaName ?? label;
  const whatsappCtaName = "Попап Записаться на диагностику";

  const handleOpenModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const handleWhatsAppLead = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const eventId = generateClickId();
    const utm = getUtmParams();
    const sourceCode = resolveSourceCode(utm);

    trackLead({
      eventId,
      ctaId,
      ctaName: whatsappCtaName,
      utm,
      sourceCode,
    });

    setOpen(false);
    openWhatsApp();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        type="button"
        variant={variant}
        size="cta"
        onClick={handleOpenModal}
        data-cta-id={ctaId}
        data-cta-name={resolvedCtaName}
        data-action="open-booking-modal"
        className={cn(
          "w-full whitespace-normal text-center font-semibold leading-tight",
          className,
        )}
      >
        <span>{label}</span>
        <ArrowRight className="h-5 w-5" />
      </Button>

      <DialogContent className="max-h-[92svh] w-[calc(100vw-1.25rem)] max-w-md gap-0 overflow-y-auto rounded-[1.5rem] border-0 p-0 shadow-2xl sm:max-w-lg">
        <div className="bg-gradient-to-br from-accent-deep via-accent-deep to-accent px-6 pb-6 pt-8 text-center text-white">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
            <CalendarCheck className="h-6 w-6 text-highlight" strokeWidth={2.5} />
          </div>
          <DialogTitle className="text-xl font-black leading-tight text-white sm:text-2xl">
            Запись на диагностику
          </DialogTitle>
          <DialogDescription className="sr-only">
            Запись на диагностику клиники через WhatsApp
          </DialogDescription>
        </div>

        <div className="px-5 py-6 sm:px-7 sm:py-7">
          <h3 className="text-center text-[1.35rem] font-black leading-tight tracking-tight text-foreground sm:text-2xl">
            Запись на диагностику клиники
          </h3>

          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Если вы руководитель или собственник медицинской клиники в Казахстане и хотите получать
            больше записей на первичную диагностику, увеличить выручку и быть впереди конкурентов,
            жмите кнопку ниже и пишите мне в WhatsApp.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
            Я свяжусь с вами и расскажу подробнее, как проходит диагностика.
          </p>

          <Button
            type="button"
            variant="whatsapp"
            size="cta"
            onClick={handleWhatsAppLead}
            data-action="open-whatsapp-lead"
            className="mt-6 w-full font-semibold"
          >
            Записаться на диагностику
            <ArrowRight className="h-5 w-5" />
          </Button>

          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Если не актуально, можете закрыть страницу
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScrollToFormButton;
