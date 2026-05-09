import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarCheck, CheckCircle2, Clock3, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "77472842595";
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
    document.title = "Заявка принята — MarkVision AI";
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

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/70 via-background to-background" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--accent-deep)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <section className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-5 py-10 text-center sm:py-14">
        <div className="rounded-[2rem] border bg-card/95 p-5 shadow-xl shadow-accent/10 sm:p-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/15 ring-8 ring-accent/5">
            <CheckCircle2 className="h-12 w-12 text-accent" strokeWidth={2.2} />
          </div>

          <p className="mx-auto mt-5 w-fit rounded-full bg-accent-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-accent-deep">
            Заявка отправлена
          </p>

          <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            Спасибо за заявку на диагностику
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Я свяжусь с вами в ближайшее время, чтобы подтвердить запись,
            уточнить детали по вашей клинике и согласовать удобное время для
            диагностики.
          </p>

          <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Свяжусь с вами",
                text: "Проверю заявку и напишу или позвоню.",
              },
              {
                icon: CalendarCheck,
                title: "Подберём время",
                text: "Согласуем удобный слот для диагностики.",
              },
              {
                icon: MessageCircle,
                title: "Разберём клинику",
                text: "Посмотрим, где сейчас теряются заявки и деньги.",
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-2xl border bg-background p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                    <Icon className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                  <p className="mt-3 text-sm font-extrabold leading-snug">
                    {step.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/25 bg-accent-soft/55 p-4 text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-deep text-white">
              <Clock3 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-base font-extrabold leading-snug text-accent-deep">
                Обычно отвечаю в ближайшее рабочее время
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Если хотите ускорить подтверждение, напишите в WhatsApp по кнопке ниже.
              </p>
            </div>
          </div>

          {lead && (
            <div className="mt-5 w-full rounded-2xl border bg-muted/40 p-5 text-left">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Ваши данные
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                {lead.name && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Имя</dt>
                    <dd className="text-right font-medium">{lead.name}</dd>
                  </div>
                )}
                {lead.phone && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Телефон</dt>
                    <dd className="text-right font-medium">{lead.phone}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}

          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <Button
              asChild
              variant="whatsapp"
              size="cta"
              className="w-full font-semibold whitespace-normal text-center"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                <span>Написать в WhatsApp</span>
              </a>
            </Button>

            <Button asChild variant="outline" size="cta" className="font-semibold">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                На главную
              </Link>
            </Button>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Phone className="h-3.5 w-3.5" />
            WhatsApp: +7 747 284 25 95
          </p>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
