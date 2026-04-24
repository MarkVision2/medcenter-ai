import { useEffect, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Фиксированная кнопка WhatsApp снизу экрана.
 * Появляется после прокрутки за hero (~600px).
 * Только на мобильном/планшете — на десктопе CTA и так всегда видна в потоке.
 */
const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-3 transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="pointer-events-auto rounded-2xl bg-background/95 p-2 shadow-2xl ring-1 ring-border backdrop-blur">
        <WhatsAppButton
          variant="cta-orange"
          label="Записаться на диагностику"
          className="uppercase"
        />
      </div>
    </div>
  );
};

export default StickyCTA;