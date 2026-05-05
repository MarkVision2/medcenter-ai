import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Phone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "77472842595";
const KASPI_PAY_URL = "https://pay.kaspi.kz/pay/a3ftc2oi";
const FALLBACK_MESSAGE =
  "Добрый день! Я оставил заявку на диагностику медицинского центра.";

interface LeadData {
  name?: string;
  phone?: string;
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.11 1.6 5.9L0 24l6.42-1.68a11.83 11.83 0 0 0 5.62 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43ZM12.05 21.3h-.01a9.46 9.46 0 0 1-4.82-1.32l-.35-.21-3.81 1 1.02-3.71-.23-.38a9.45 9.45 0 0 1-1.45-5.04c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.78a9.42 9.42 0 0 1 2.78 6.71c0 5.23-4.26 9.49-9.49 9.49Zm5.2-7.1c-.28-.14-1.69-.83-1.95-.93-.26-.1-.45-.14-.64.14-.19.28-.74.93-.9 1.12-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.36 0 1.39 1.02 2.74 1.16 2.93.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.69-.69 1.93-1.36.24-.66.24-1.23.17-1.36-.07-.13-.26-.21-.54-.35Z" />
  </svg>
);

const ThankYou = () => {
  const [lead, setLead] = useState<LeadData | null>(null);

  useEffect(() => {
    document.title = "Заявка принята — Система «Врач на миллион»";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Спасибо за заявку на диагностику медицинского центра. Мы свяжемся с вами в рабочее время.",
      );
    }
    try {
      const raw = sessionStorage.getItem("diagnostic_lead");
      if (raw) setLead(JSON.parse(raw) as LeadData);
    } catch {
      /* ignore */
    }
  }, []);

  const whatsappHref = useMemo(() => {
    const lines = ["Добрый день! Я оставил заявку на диагностику клиники.", ""];
    if (lead?.name) lines.push(`Имя: ${lead.name}`);
    if (lead?.phone) lines.push(`Телефон: ${lead.phone}`);
    const text = lead ? lines.join("\n") : FALLBACK_MESSAGE;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [lead]);

  const handlePayClick = () => {
    try {
      const fbq = (window as any).fbq;
      if (typeof fbq === "function") {
        fbq("track", "InitiateCheckout", {
          content_name: "Диагностика медцентра",
          value: 9900,
          currency: "KZT",
        });
      }
      const gtag = (window as any).gtag;
      if (typeof gtag === "function") {
        gtag("event", "begin_checkout", {
          currency: "KZT",
          value: 9900,
          items: [{ item_name: "Диагностика медцентра" }],
        });
        gtag("event", "click_payment_kaspi", {
          event_category: "engagement",
          value: 9900,
        });
      }
      const dataLayer = ((window as any).dataLayer = (window as any).dataLayer || []);
      dataLayer.push({ event: "click_payment", cta: "kaspi_pay", value: 9900 });
    } catch {
      /* ignore analytics errors */
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <section className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 py-12 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/15 ring-8 ring-accent/5">
          <CheckCircle2 className="h-12 w-12 text-accent" strokeWidth={2.2} />
        </div>

        <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
          Спасибо за вашу заявку!
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Спасибо за вашу заявку на диагностику и стратегический разбор вашей
          клиники. В видео ниже я расскажу, что вас ждёт на диагностике.
        </p>

        {/* Видео-плейсхолдер. TODO: замените YOUTUBE_ID на ID вашего видео */}
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl border bg-black shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Что вас ждёт на диагностике"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Главная CTA — оплата Kaspi */}
        <div className="mt-6 w-full rounded-2xl border-2 border-cta-orange/30 bg-cta-orange/5 p-5">
          <p className="text-base font-semibold">
            Закрепите место — оплатите диагностику
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Оплата через Kaspi Pay. После оплаты место за вами зафиксировано,
            и я свяжусь с вами для согласования времени.
          </p>
          <Button
            asChild
            variant="cta-orange"
            size="cta"
            className="mt-4 w-full font-semibold whitespace-normal text-center"
          >
            <a
              href={KASPI_PAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePayClick}
            >
              <CreditCard className="h-5 w-5" />
              <span>Оплатить диагностику</span>
            </a>
          </Button>
        </div>

        {lead && (
          <div className="mt-6 w-full rounded-2xl border bg-muted/40 p-5 text-left">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Ваши данные
            </p>
            <dl className="mt-3 space-y-2 text-sm">
              {lead.name && (
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Имя</dt>
                  <dd className="font-medium text-right">{lead.name}</dd>
                </div>
              )}
              {lead.phone && (
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Телефон</dt>
                  <dd className="font-medium text-right">{lead.phone}</dd>
                </div>
              )}
            </dl>
          </div>
        )}

        <div className="mt-8 w-full rounded-2xl border-2 border-accent/30 bg-accent/5 p-5">
          <p className="text-base font-semibold">Есть вопросы? Напишите в WhatsApp</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Данные вашей заявки уже подставлены в сообщение — достаточно
            нажать «Отправить».
          </p>
          <Button
            asChild
            variant="whatsapp"
            size="cta"
            className="mt-4 w-full font-semibold whitespace-normal text-center"
          >
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              <span>Написать в WhatsApp</span>
            </a>
          </Button>
        </div>

        <Button asChild variant="ghost" className="mt-6">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Вернуться на главную
          </Link>
        </Button>

        <p className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Phone className="h-3.5 w-3.5" />
          WhatsApp: +7 747 284 25 95
        </p>
      </section>
    </main>
  );
};

export default ThankYou;
