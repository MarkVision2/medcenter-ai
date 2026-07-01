import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import ScrollToFormButton from "./ScrollToFormButton";

const WHATSAPP_NUMBER = "77776290913";
const WHATSAPP_MESSAGE = "Юрий, добрый день! Хочу получать больше пациентов и записаться на диагностику мед клиники";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.11 1.6 5.9L0 24l6.42-1.68a11.83 11.83 0 0 0 5.62 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43ZM12.05 21.3h-.01a9.46 9.46 0 0 1-4.82-1.32l-.35-.21-3.81 1 1.02-3.71-.23-.38a9.45 9.45 0 0 1-1.45-5.04c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.78a9.42 9.42 0 0 1 2.78 6.71c0 5.23-4.26 9.49-9.49 9.49Zm5.2-7.1c-.28-.14-1.69-.83-1.95-.93-.26-.1-.45-.14-.64.14-.19.28-.74.93-.9 1.12-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.36 0 1.39 1.02 2.74 1.16 2.93.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.69-.69 1.93-1.36.24-.66.24-1.23.17-1.36-.07-.13-.26-.21-.54-.35Z" />
  </svg>
);

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      const dl = (window.dataLayer = window.dataLayer || []);
      dl.push({
        event: "cta_click",
        event_category: "engagement",
        event_label: "Плавающая WhatsApp кнопка",
        cta_name: "Плавающая WhatsApp кнопка",
      });
    }
  };

  return (
    <>
      {/* Mobile sticky bottom CTA */}
      <div
        aria-hidden={!visible}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-border/40 bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 sm:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mb-1 flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-destructive">
          <Flame className="h-3.5 w-3.5" strokeWidth={2.75} />
          <span>Осталось 3 места в этом месяце</span>
        </div>
        <ScrollToFormButton
          label="Записаться на диагностику"
          variant="cta-orange"
          ctaName="Sticky Mobile CTA"
          className="h-12 text-[15px]"
        />
      </div>

      {/* Floating WhatsApp bubble (desktop + tablet) */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        aria-label="Написать в WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl ring-4 ring-accent/25 transition-transform hover:scale-110 hover:bg-accent-deep sm:flex"
      >
        <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-accent/40" />
        <span className="relative">
          <WhatsAppIcon />
        </span>
      </a>
    </>
  );
};

export default FloatingCTA;