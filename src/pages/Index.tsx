import {
  Check,
  ArrowDown,
  ArrowRight,
  AlertTriangle,
  Phone,
  MapPin,
  TrendingDown,
  TrendingUp,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import Section from "@/components/landing/Section";
import Banner from "@/components/landing/Banner";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import AuthorBadge from "@/components/landing/AuthorBadge";
import StickyCTA from "@/components/landing/StickyCTA";
import yuriPhoto from "@/assets/yuri.png";

/* === Типографика (единая система) ===
   H1: text-3xl sm:text-5xl font-black leading-[1.05]    — только hero
   H2: text-2xl sm:text-3xl font-extrabold leading-tight — секции
   H3: text-lg sm:text-xl font-bold                       — карточки
   body: text-base sm:text-lg leading-relaxed
   micro: text-sm text-muted-foreground
*/

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      {/* ═══════════════ 1. HERO ═══════════════ */}
      <Section spacing="loose" className="pt-10">
        <div className="flex justify-center">
          <Banner size="sm">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Для владельцев медицинских центров
          </Banner>
        </div>

        <h1 className="mt-6 text-center text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl">
          Стабильный поток <span className="text-banner">первичных пациентов</span> для вашего медцентра
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Доход от <span className="font-semibold text-foreground">300 000 до 600 000 ₸ в&nbsp;день</span>,
          больше свободного времени и меньше стресса — за счёт системы «Врач на&nbsp;миллион».
        </p>

        {/* Цифровой якорь — реальный кейс */}
        <div className="mx-auto mt-7 max-w-md rounded-2xl bg-ink-deep p-5 text-center text-white shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">
            Реальный результат за 2 недели
          </p>
          <p className="mt-2 text-3xl font-black leading-none text-highlight sm:text-4xl">
            +10 000 000 ₸
          </p>
          <p className="mt-2 text-sm text-white/80">
            107 новых пациентов с оплатой — без увеличения бюджета на рекламу
          </p>
        </div>

        <div className="mx-auto mt-7 flex justify-center">
          <AuthorBadge />
        </div>

        <div className="mt-7">
          <WhatsAppButton
            variant="cta-orange"
            label="Записаться на диагностику за 9 900 ₸"
            subtitle="Ответим в WhatsApp в течение 15 минут · без обязательств"
            className="uppercase"
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 text-muted-foreground">
          <ArrowDown className="h-5 w-5" />
          <p className="text-xs uppercase tracking-wide">как это работает</p>
        </div>
      </Section>

      {/* ═══════════════ 2. БОЛЬ ═══════════════ */}
      <Section tone="muted">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
          Ответьте честно: что из этого про&nbsp;вас?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Если хотя бы одно «да» — читайте дальше.
        </p>

        <ul className="mt-6 space-y-3">
          {[
            "Постоянно нанимаете таргетологов и SMM-щиков, которые обещают пациентов, но их нет",
            "Видите, как коллеги зарабатывают, покупают машины и квартиры, а вы топчитесь на месте",
            "Цепляетесь за каждого пациента и «дожимаете» скидками, работая в минус",
            "Работаете с дешёвыми пациентами, которые потом возмущаются и просят возврат",
            "Не понимаете, как продавать дорогие услуги, и надеетесь, что пациенты «сами придут»",
            "Хотите, чтобы первичные пациенты приходили сами, а врачи только лечили",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border bg-background p-4"
            >
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-banner"
                aria-hidden="true"
              />
              <span className="text-base leading-relaxed sm:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ═══════════════ 3. ПЕРЕХОД ═══════════════ */}
      <Section spacing="tight">
        <Banner>
          Если ответили «ДА» хотя&nbsp;бы один&nbsp;раз — записывайтесь на&nbsp;диагностику
        </Banner>
        <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Расскажу, как забыть о работе за копейки и зарабатывать как лучшие клиники Казахстана —
          с большим количеством свободного времени.
        </p>
        <div className="mt-7">
          <WhatsAppButton subtitle="Бесплатно · без обязательств" />
        </div>
      </Section>

      {/* ═══════════════ 4. ОБО МНЕ ═══════════════ */}
      <Section tone="muted">
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
          <img
            src={yuriPhoto}
            alt="Юрий — автор системы «Врач на миллион»"
            className="mx-auto w-full max-w-xs rounded-2xl object-cover shadow-lg sm:mx-0 sm:w-56"
          />

          <div>
            <Banner size="sm">Кто я</Banner>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
              Привет, меня зовут Юрий
            </h2>
            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Я прошёл путь от человека, который запускает рекламу для стоматологий, до эксперта,
              создавшего систему привлечения{" "}
              <span className="font-bold">платежеспособных пациентов</span> в медцентры.
            </p>
            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Помогаю клиникам выйти на доход{" "}
              <span className="font-bold">от 500 000 ₸ в день</span> через систему «Врач на миллион» —
              ту самую, которая изменила жизнь уже{" "}
              <span className="font-bold">25+ медцентрам</span>.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════ 5. КЕЙС ═══════════════ */}
      <Section>
        <Banner size="sm">Кейс</Banner>
        <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
          Почему я уверен, что система работает
        </h2>

        <div className="mt-6 overflow-hidden rounded-2xl border bg-card shadow-sm">
          {/* Шапка кейса с цифрой-якорем */}
          <div className="bg-ink-deep p-6 text-white sm:p-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-highlight">
              <MapPin className="h-3.5 w-3.5" />
              Клиника из Астаны · 2 недели
            </div>
            <p className="mt-3 text-3xl font-black leading-none text-highlight sm:text-4xl">
              +10 000 000 ₸ в кассу
            </p>
            <p className="mt-2 text-sm text-white/80">
              107 новых пациентов с оплатой · без увеличения рекламного бюджета
            </p>
          </div>

          {/* Тело кейса */}
          <div className="p-6 sm:p-7">
            <p className="text-base leading-relaxed sm:text-lg">
              Работал один администратор, который не справлялся со звонками. Записывал всех подряд,
              а приходило <span className="font-bold">всего 30%</span>.
            </p>

            <h3 className="mt-6 text-lg font-bold sm:text-xl">Что мы сделали:</h3>
            <ul className="mt-3 space-y-2.5">
              {[
                "Вывели 2 девушек в отдельный колл-центр",
                "Обучили скриптам продаж первичных консультаций",
                "Поставили задачу: продать приём с предоплатой или полной оплатой",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-1 h-5 w-5 shrink-0 text-accent"
                    strokeWidth={3}
                  />
                  <span className="text-base leading-relaxed sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-xl bg-accent-soft p-4 text-base leading-relaxed sm:text-lg">
              Тот же бюджет, но в <span className="font-bold">3 раза больше</span> реально пришедших и
              оплативших пациентов. Разница — в правильных людях на правильных позициях.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════ 6. РЕЗУЛЬТАТ ═══════════════ */}
      <Section tone="muted" spacing="tight">
        <div className="rounded-2xl bg-ink-deep p-7 text-center text-white shadow-lg sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">
            За 3 месяца работы по системе
          </p>
          <p className="mt-4 text-5xl font-black leading-none text-highlight sm:text-7xl">
            60&nbsp;000&nbsp;000&nbsp;₸
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Стабильная система привлечения и удержания пациентов —{" "}
            <span className="font-semibold text-white">без участия собственника</span>.
          </p>
        </div>
      </Section>

      {/* ═══════════════ 7+8. СКЕПСИС + СУТЬ (объединено) ═══════════════ */}
      <Section>
        <Banner size="sm">Без воды</Banner>
        <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
          Звучит круто. А в чём подвох?
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed sm:text-lg">
          <p>
            <span className="font-bold">Никакого подвоха нет.</span> Мы проводим консультации,
            чтобы показать вам наш метод ежедневного привлечения премиум-пациентов на услуги
            ваших докторов.
          </p>
          <p>
            Если после консультации захотите выйти на доход от 500 000 ₸ в день вместе со мной —
            продолжим работу на платной основе. <span className="font-bold">Не захотите — никаких обязательств.</span>
          </p>
        </div>

        <div className="mt-6 rounded-xl border-l-4 border-accent bg-accent-soft p-5">
          <p className="text-base font-bold sm:text-lg">Да-да, нет-нет. Всё по&nbsp;честному 🤝</p>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Без системного подхода вы будете и дальше терять пациентов и деньги. Мы помогаем
            этот подход построить.
          </p>
        </div>
      </Section>

      {/* ═══════════════ 9. ЧТО ПОЛУЧИТЕ ═══════════════ */}
      <Section tone="muted">
        <Banner size="sm">Оффер</Banner>
        <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
          Что вы получите вместе с диагностикой
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Найдём все дыры, через которые утекают ваши пациенты и деньги.
        </p>

        <ul className="mt-6 space-y-3">
          {[
            {
              title: "Часовая консультация 1-на-1 со мной",
              desc: "Покажу, как привлекать пациентов с бюджетами от 500 000 ₸ без сарафанного радио",
              value: "150 000 ₸",
            },
            {
              title: "Карта с пошаговым планом",
              desc: "Как выйти на стабильный доход 300–600 тыс ₸ в день, даже если сейчас в 5 раз меньше",
              value: "80 000 ₸",
            },
            {
              title: "Анализ рекламы и каналов",
              desc: "Разберём текущие источники пациентов и точки утечки бюджета",
              value: "60 000 ₸",
            },
            {
              title: "Тайный звонок",
              desc: "Прозвоним как пациент, запишем разговор, покажем, где администратор сливает заявки",
              value: "50 000 ₸",
            },
          ].map((item, i) => (
            <li
              key={item.title}
              className="rounded-2xl border bg-background p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-black text-accent-foreground">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-bold leading-snug sm:text-lg">
                      {item.title}
                    </h3>
                    <span className="shrink-0 text-sm font-bold text-accent-deep">
                      {item.value}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Ценник */}
        <div className="mt-7 overflow-hidden rounded-2xl bg-ink-deep text-white shadow-lg">
          <div className="flex items-baseline justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
            <span className="text-base sm:text-lg">Общая ценность:</span>
            <span className="text-xl font-bold line-through opacity-60 sm:text-2xl">
              340 000 ₸
            </span>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-xs uppercase tracking-wider text-highlight">
              Стоимость диагностики сегодня
            </p>
            <p className="mt-2 text-5xl font-black text-highlight sm:text-6xl">9&nbsp;900&nbsp;₸</p>
            <div className="mt-5">
              <WhatsAppButton
                variant="cta-orange"
                label="Записаться за 9 900 ₸"
                subtitle="Цена действует только для первых 2 заявок этой недели"
                className="uppercase"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════ 10. УНИКАЛЬНОСТЬ ═══════════════ */}
      <Section spacing="tight">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
          Так на рынке никто не делает
        </h2>
        <p className="mt-4 text-base leading-relaxed sm:text-lg">
          Обычно слышишь: <span className="italic">«Давайте больше рекламы настроим…»</span>
        </p>
        <p className="mt-3 text-base leading-relaxed sm:text-lg">
          А мы сначала закрываем дыры в воронке. Нет смысла лить больше воды в дырявое ведро.
        </p>
      </Section>

      {/* ═══════════════ 11. ОГРАНИЧЕНИЕ ═══════════════ */}
      <Section spacing="tight">
        <div className="flex gap-4 rounded-2xl border-l-4 border-accent bg-accent-soft p-5 sm:p-6">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-accent-deep" />
          <div>
            <p className="text-base font-bold leading-snug sm:text-lg">
              Максимум 2 диагностики в неделю
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              И только с одной клиникой в каждом городе — чтобы не работать с конкурентами.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════ 12. ДВЕ ДОРОГИ ═══════════════ */}
      <Section tone="muted">
        <h2 className="text-center text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
          У вас две дороги
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {/* Красная — первая дорога */}
          <div className="rounded-2xl bg-road-bad p-5 text-road-bad-foreground shadow-lg sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <TrendingDown className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <h3 className="mt-4 text-lg font-extrabold uppercase leading-tight sm:text-xl">
              Первая дорога
            </h3>
            <ul className="mt-4 space-y-3 text-base sm:text-lg">
              {[
                "Закрыть эту страницу",
                "Дальше сидеть без денег",
                "Через год жалеть о потерянном времени",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"
                    aria-hidden="true"
                  />
                  <span className="leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Зелёная — вторая дорога */}
          <div className="rounded-2xl bg-road-good p-5 text-road-good-foreground shadow-lg sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <TrendingUp className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <h3 className="mt-4 text-lg font-extrabold uppercase leading-tight sm:text-xl">
              Вторая дорога
            </h3>
            <ul className="mt-4 space-y-3 text-base sm:text-lg">
              {[
                "Пройти диагностику",
                "Узнать свои слабые места",
                "Зарабатывать как топовая клиника",
              ].map((t, i) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/95 text-xs font-black text-road-good">
                    {i + 1}
                  </span>
                  <span className="leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ═══════════════ 13. CTA — ВРЕМЯ ДЕЙСТВОВАТЬ ═══════════════ */}
      <Section spacing="tight">
        <div className="text-center">
          <Banner size="sm">
            <Clock className="mr-1.5 h-3.5 w-3.5" />
            Время действовать
          </Banner>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
            Готовы перестать терять пациентов?
          </h2>
        </div>

        <div className="mt-6">
          <WhatsAppButton
            variant="cta-orange"
            label="Записаться на диагностику"
            subtitle="9 900 ₸ · ответим в течение 15 минут"
            className="uppercase"
          />
        </div>
      </Section>

      {/* ═══════════════ 14. ДОЖИМ — P.S. ═══════════════ */}
      <Section tone="muted" spacing="tight">
        <div className="space-y-4 text-base leading-relaxed sm:text-lg">
          <p>
            <span className="font-bold">P.S. Завтра свободных мест может не быть.</span>{" "}
            Беру максимум 2 клиники в неделю и только одну в городе.
          </p>
          <p>
            <span className="font-bold">P.P.S.</span> Если ещё думаете — представьте, где будете
            через год, когда узнаете, что{" "}
            <span className="font-bold">мои клиенты делают по 20+ миллионов</span>.
          </p>

          <div className="flex items-start gap-3 rounded-xl border-l-4 border-banner bg-background p-4">
            <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-banner" />
            <p className="font-medium">
              Пока вы думаете — конкуренты внедряют системы продаж и забирают ваших пациентов.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════ 15. ФИНАЛ ═══════════════ */}
      <Section spacing="loose">
        <h2 className="text-center text-2xl font-extrabold leading-tight sm:text-3xl">
          В медицинском бизнесе есть два типа клиник
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Те, кто <span className="font-semibold text-foreground">растёт по системе</span>,
          и те, кто оправдывает стагнацию обстоятельствами.
        </p>

        <p className="mt-7 text-center text-xl font-extrabold sm:text-2xl">
          В какой категории хотите быть&nbsp;вы?
        </p>

        {/* Финальная card-dark с CTA — единственная вторая после блока 6 */}
        <div className="mt-7 overflow-hidden rounded-2xl bg-ink-deep p-6 text-center text-white shadow-xl sm:p-8">
          <div className="flex justify-center">
            <Shield className="h-8 w-8 text-highlight" strokeWidth={2} />
          </div>
          <p className="mt-3 text-base text-white/80 sm:text-lg">
            Один шаг до системы, которая работает на вас
          </p>
          <div className="mt-5">
            <WhatsAppButton
              variant="cta-orange"
              label="Получить доступ к системе"
              subtitle="9 900 ₸ · без обязательств"
              className="uppercase"
            />
          </div>
        </div>
      </Section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t bg-background px-5 py-10">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-sm font-bold text-foreground">
            Юрий · автор системы «Врач на миллион»
          </p>
          <a
            href="https://wa.me/77472842595"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-deep hover:underline"
          >
            <Phone className="h-4 w-4" />
            WhatsApp: +7 747 284 25 95
          </a>
          <div className="border-t pt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Все права защищены
          </div>
        </div>
      </footer>

      <StickyCTA />
    </main>
  );
};

export default Index;