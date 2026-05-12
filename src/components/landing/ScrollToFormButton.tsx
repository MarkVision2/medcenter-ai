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

const generateEventId = (): string =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;

interface TrackLeadParams {
  eventId: string;
  ctaId?: number;
  ctaName?: string;
}

const trackLeadEvents = ({ eventId, ctaId, ctaName }: TrackLeadParams): void => {
  if (typeof window === "undefined") return;

  // Meta Pixel — Lead event (eventID kept for future server-side CAPI dedup).
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

  // GTM / GA4 dataLayer event.
  const dataLayer = (window.dataLayer = window.dataLayer || []);
  dataLayer.push({
    event: "generate_lead",
    event_category: "engagement",
    event_label: ctaName ?? "whatsapp_cta",
    method: "whatsapp",
    cta_id: ctaId ?? null,
    cta_name: ctaName ?? null,
    value: 9900,
    currency: "KZT",
    transaction_id: eventId,
  });

  // gtag direct (fires when GA/Ads is loaded outside GTM).
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
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleClick = (_e: MouseEvent<HTMLAnchorElement>) => {
    trackLeadEvents({
      eventId: generateEventId(),
      ctaId,
      ctaName: resolvedCtaName,
    });
  };

  return (
    <Button
      asChild
      variant={variant}
      size="cta"
      className={cn(
        "font-semibold leading-tight whitespace-normal text-center w-full",
        className,
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        data-cta-id={ctaId}
        data-cta-name={resolvedCtaName}
      >
        <span>{label}</span>
        <ArrowRight className="h-5 w-5" />
      </a>
    </Button>
  );
};

export default ScrollToFormButton;
