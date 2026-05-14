import { Check, AlertTriangle, MapPin, Square, TrendingUp, Wallet, Sparkles, Megaphone, Inbox, Stethoscope, UserPlus, Receipt, BadgeCheck, Target, Workflow, Layers, HelpCircle, Phone } from "lucide-react";
import Section from "@/components/landing/Section";
import Banner from "@/components/landing/Banner";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import yuriPhoto from "@/assets/yuri.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      {/* 1. HERO + ВИДЕО */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        {/* Декоративный фон */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/60 via-background to-background" />
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-accent-deep/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, hsl(var(--accent-deep)) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 pt-3 pb-4 sm:px-6 sm:pt-10 sm:pb-16">
          {/* Верхняя плашка-капсула */}
          <div className="mx-auto flex w-fit max-w-full items-center gap-1.5 rounded-full border border-accent/30 bg-white/80 px-3 py-1 shadow-sm backdrop-blur sm:gap-2 sm:px-4 sm:py-2">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-deep sm:h-5 sm:w-5">
              <BadgeCheck className="h-2.5 w-2.5 text-white sm:h-3.5 sm:w-3.5" strokeWidth={3} />
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-accent-deep sm:text-xs">
              Методика для&nbsp;медицинских клиник
            </span>
          </div>

          {/* H1 */}
          <h1 className="mt-3 text-center font-extrabold leading-[1.15] tracking-tight text-[19px] sm:mt-5 sm:text-4xl md:text-5xl">
            Как увеличить выручку{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">медицинской&nbsp;клиники</span>
              <span className="absolute inset-x-0 bottom-0.5 -z-0 h-1.5 bg-highlight/70 sm:h-3" />
            </span>{" "}
            <span className="text-accent-deep">в&nbsp;2–3&nbsp;раза</span>{" "}
            без увеличения расходов на&nbsp;рекламу{" "}
            <span className="text-accent-deep whitespace-nowrap">в&nbsp;2026&nbsp;году</span>
          </h1>

          {/* Подзаголовок — скрыт на мобильном для компактности */}
          <p className="mx-auto mt-3 hidden max-w-xl text-center text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:block sm:text-lg">
            Для владельцев медицинских клиник, которые хотят обойти конкурентов
            и увеличить выручку без роста рекламного бюджета
          </p>

          {/* Видео */}
          <div className="relative mx-auto mt-4 w-full max-w-2xl sm:mt-7">
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-accent-deep/25 via-accent/15 to-highlight/25 blur-lg sm:-inset-2 sm:rounded-3xl sm:blur-xl" />
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white bg-black shadow-xl ring-1 ring-accent-deep/10 sm:rounded-2xl sm:border-2 sm:shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Как увеличить выручку медицинской клиники"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-2 text-center text-[11px] italic text-muted-foreground sm:mt-4 sm:text-base">
            Посмотрите видео или прочитайте статью ниже
          </p>

          {/* CTA */}
          <div className="mt-3 sm:mt-6">
            <WhatsAppButton
              label="Забронировать диагностику"
            />
            <p className="mt-2 flex items-center justify-center gap-2 text-center text-[11px] font-medium text-muted-foreground sm:mt-3 sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
              </span>
              Количество мест ограничено
            </p>
          </div>
        </div>
      </section>

      {/* 2. БОЛИ */}
      <Section tone="muted">
        <div className="relative overflow-hidden rounded-3xl border border-destructive/20 bg-background p-5 shadow-lg shadow-destructive/5 sm:p-8">
          {/* Декоративный градиент */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-destructive/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-destructive/60 to-transparent" />

          <div className="relative mx-auto flex w-fit items-center gap-2 rounded-full border border-destructive/30 bg-destructive/5 px-3 py-1">
            <AlertTriangle className="h-3.5 w-3.5 text-destructive" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-destructive sm:text-xs">
              Знакомая ситуация?
            </span>
          </div>

          <h2 className="relative mt-4 text-center text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
            Узнайте себя?
          </h2>

          <ul className="relative mx-auto mt-6 max-w-md space-y-3">
            {[
              "Если у вас нет стабильного потока первичных пациентов",
              "Вы устали постоянно нанимать таргетологов которые что-то делают, но результата как не было, так и нет, и при этом у вас есть ощущение, что вы платите и не понимаете, за что.",
              "Видите, как ваши коллеги успешно зарабатывают и путешествуют, а вы смотрите на них и не понимаете, ЧТО ДЕЛАЕТЕ НЕ ТАК.",
              "Вынуждены цепляться за каждого пациента, даже на невыгодных условиях, и работаете в минус.",
              "Не знаете, как привлекать пациентов на премиум-услуги и выйти из ловушки дешёвых пациентов?",
            ].map((item, i) => (
              <li
                key={i}
                className="group flex items-start gap-3 rounded-xl border border-border/60 bg-muted/40 p-3 transition-colors hover:border-destructive/40 hover:bg-destructive/[0.03] sm:gap-4 sm:p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive ring-1 ring-destructive/20 sm:h-7 sm:w-7">
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Banner>
            ЕСЛИ ОТВЕТИЛИ «ДА» ХОТЯ&nbsp;БЫ НА&nbsp;1&nbsp;ВОПРОС&nbsp; ТО&nbsp;ЭТА ИНФОРМАЦИЯ ТОЧНО ДЛЯ&nbsp;ВАС
          </Banner>
        </div>
      </Section>

      {/* 3. ПЕРЕХОД */}
      <Section>
        <p className="text-center text-lg leading-relaxed sm:text-xl">
          Сейчас я расскажу, как забыть о&nbsp;работе за&nbsp;копейки и&nbsp;начать зарабатывать, как{" "}
          <span className="font-bold text-accent-deep">лучшие клиники Казахстана</span>, имея больше свободного времени и&nbsp;энергии.
        </p>
      </Section>

      {/* 4. СУТЬ СИСТЕМЫ — 3 ЗОНЫ */}
      <Section tone="muted">
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-deep">
          <Sparkles className="h-3.5 w-3.5" />
          Суть системы
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight sm:text-3xl">
          Система, которая работает <br />
          <span className="text-accent-deep">в трёх зонах</span>
        </h2>

        <ul className="mt-7 space-y-4">
          {[
            {
              icon: Target,
              title: "Стоимость привлечения пациента",
              desc: "Это всё, что вы тратите на рекламу, на контент-маркетинг, на листовки, на радио и так далее. Здесь важно знать стоимость одной заявки, то есть обращения, которое поступило в вашу клинику.",
            },
            {
              icon: Workflow,
              title: "Эффективность рекламы и воронки продаж",
              desc: "Как быстро заявка с рекламы превращается в запись и визит на приём. На этом этапе важно фиксировать стоимость визита.",
            },
            {
              icon: Layers,
              title: "Основная продажа курса лечения",
              desc: "Восстановления и так далее. На этом этапе мы измеряем эффективность ваших врачей или кураторов лечения и то, как они проводят первичную диагностику: делают анамнез, презентуют клинику, методику и составляют план лечения.",
            },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={i}
                className="group relative overflow-hidden rounded-2xl border bg-card p-5 shadow-sm sm:p-6"
              >
                <span className="absolute right-3 top-3 text-5xl font-black leading-none text-accent/10 sm:text-6xl">
                  {i + 1}
                </span>
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                    <Icon className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold leading-snug">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 rounded-2xl bg-banner p-5 text-center text-white shadow-lg sm:p-6">
          <p className="text-base font-extrabold uppercase leading-snug text-highlight sm:text-lg">
            Именно здесь находится ваша максимальная прибыль
          </p>
        </div>
      </Section>

      {/* 5. КЕЙСЫ — оставлены без изменений */}
      <Section>
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-deep">
          <Sparkles className="h-3.5 w-3.5" />
          Реальный кейс
        </div>
        <h2 className="text-center font-bold leading-tight sm:text-3xl text-xl">
          Результаты&nbsp;
          <span className="text-accent-deep">из реальных клиник</span>
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground sm:text-base">
          Разные города, разные ниши&nbsp; одна система.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border bg-card shadow-md">
          <div className="border-b bg-accent-soft/40 px-6 py-4 sm:px-8">
            <div className="flex items-center justify-center gap-2 text-center font-semibold text-accent-deep">
              <MapPin className="h-5 w-5 shrink-0" />
              <span className="text-lg sm:text-xl">Клиника из Алматы</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="rounded-xl border-l-4 border-destructive bg-destructive/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-destructive">
                Было
              </p>
              <p className="mt-2 text-base leading-relaxed sm:text-lg">
                Один администратор не справлялся со звонками. Записывал всех подряд приходило только <span className="font-bold text-destructive">30%</span> от записанных.
              </p>
            </div>

            <h3 className="mt-7 text-center text-lg font-bold sm:text-xl">
              Что мы сделали?
            </h3>
            <ul className="mx-auto mt-4 max-w-md space-y-3">
              {[
                "Вывели 2 девушек в отдельный колл-центр",
                "Обучили скриптам продаж первичных консультаций",
                "Поставили задачу: продать приём с предоплатой или полной оплатой",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-muted/50 p-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-base leading-snug sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl bg-banner p-6 text-center text-white shadow-lg">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-highlight">
                <TrendingUp className="h-3.5 w-3.5" />
                Результат за 2 недели
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: Megaphone, value: "830 000 ₸", label: "Расходы на рекламу" },
                  { icon: Inbox, value: "415", label: "Заявок с рекламы" },
                  { icon: Stethoscope, value: "83", label: "Платных диагностик" },
                  { icon: UserPlus, value: "29", label: "Новых пациентов" },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl bg-white/10 p-3">
                    <m.icon className="mx-auto h-5 w-5 text-highlight" />
                    <p className="mt-2 text-lg font-extrabold leading-none sm:text-xl">
                      {m.value}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-tight text-white/80 sm:text-xs">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white/10 p-3">
                <Receipt className="h-5 w-5 text-highlight" />
                <p className="text-sm text-white/80">
                  Средний чек:{" "}
                  <span className="font-extrabold text-white">350 000 ₸</span>
                </p>
              </div>

              <div className="mt-4 rounded-xl bg-white/10 p-4">
                <Wallet className="mx-auto h-6 w-6 text-highlight" />
                <p className="mt-2 text-3xl font-extrabold leading-none text-highlight sm:text-4xl">
                  +13 000 000
                </p>
                <p className="mt-2 text-sm text-white/80">
                  выручки в кассу
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              Тот же бюджет на рекламу в{" "}
              <span className="font-bold text-foreground">3 раза больше</span>{" "}
              реально пришедших и оплативших пациентов.
            </p>
            <p className="mt-3 text-center text-base font-semibold leading-snug sm:text-lg">
              В чём разница?{" "}
              <span className="text-accent-deep">Правильные люди на правильных позициях.</span>
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-3">
          {[
            {
              city: "Астана",
              niche: "Стоматология",
              value: "+8 400 000 ₸",
              period: "за 2 месяца",
              before: "22% доходимости с заявок",
              after: "61% доходимости, график забит на 3 недели вперёд",
            },
            {
              city: "Шымкент",
              niche: "Многопрофильный центр",
              value: "+18 200 000 ₸",
              period: "за 4 месяца",
              before: "Собственник лично закрывал заявки по вечерам",
              after: "Колл-центр работает без владельца, +47 первичных в месяц",
            },
            {
              city: "Караганда",
              niche: "Косметология",
              value: "x2,4",
              period: "к выручке за 3 месяца",
              before: "Повторных пациентов почти не было",
              after: "64% записываются на повторный приём ещё до выхода из кабинета",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border bg-card p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-accent-deep" />
                  {c.city}
                </span>
                <span className="text-sm text-muted-foreground">{c.niche}</span>
              </div>

              <div className="mt-3">
                <p className="whitespace-nowrap text-2xl font-extrabold leading-none text-accent-deep sm:text-3xl">
                  {c.value}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">{c.period}</p>
              </div>

              <div className="mt-4 space-y-2 border-t pt-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  <p className="text-sm leading-snug">
                    <span className="font-semibold text-muted-foreground">Было:</span>{" "}
                    {c.before}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm leading-snug">
                    <span className="font-semibold text-accent-deep">Стало:</span>{" "}
                    {c.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          Это не разовые истории —{" "}
          <span className="font-semibold text-foreground">это повторяющийся результат системы.</span>
        </p>
      </Section>

      {/* 6. ОБО МНЕ */}
      <Section tone="muted">
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-deep">
          <BadgeCheck className="h-3.5 w-3.5" />
          Знакомство
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10">
          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent-deep/20 blur-xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-xl">
              <img
                src={yuriPhoto}
                alt="Юрий — автор системы для медицинских клиник"
                className="block w-full object-cover"
              />
              <div className="border-t bg-card px-4 py-3">
                <p className="text-sm font-bold leading-tight">Юрий</p>
                <p className="text-xs text-muted-foreground">
                  Эксперт по росту медицинских клиник
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-border/60 bg-background p-5 shadow-sm sm:p-7">
            <h2 className="text-center text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-left">
              Меня зовут <span className="text-accent-deep">Юрий</span>
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-accent-deep/70 mx-auto md:mx-0" />

            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-foreground/85 sm:text-lg">
              <p>
                Последние <span className="font-semibold text-foreground">5 лет</span> я занимался именно этим: выстраивал систему, которая позволяет при тех же вложениях в рекламный бюджет увеличивать выручку клиники. Мы с командой прогнали десятки кейсов разных клиник и помогли сделать окупаемость в{" "}
                <span className="rounded bg-highlight/50 px-1 font-bold text-foreground">3, 5 и даже 10 раз</span>.
              </p>
              <p>
                Я беру на себя ответственность за каждый этап. Я точно знаю, на что смотреть, чтобы больше пациентов доходило до клиники, записывалось на лечение и оставалось с вами на долгие годы.
              </p>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-accent-soft to-accent-soft/40 p-4 sm:p-5">
              <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
              <div className="relative flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-deep text-white shadow-md">
                  <BadgeCheck className="h-4.5 w-4.5" strokeWidth={2.5} />
                </span>
                <p className="text-[15px] font-semibold leading-relaxed text-accent-deep sm:text-base">
                  С этой системой вы перестанете терять деньги, а каждая инвестиция в маркетинг начнёт работать на результат.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. СТОИМОСТЬ */}
      <Section>
        <div className="overflow-hidden rounded-3xl border bg-card shadow-md">
          <div className="flex items-center gap-3 border-b bg-accent-soft/50 px-5 py-4 sm:px-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-deep text-white">
              <HelpCircle className="h-5 w-5" />
            </span>
            <p className="text-lg font-extrabold leading-tight sm:text-xl">
              Вы спросите: сколько это стоит?
            </p>
          </div>
          <div className="px-5 py-6 sm:px-7 sm:py-7">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Я не знаю, сколько это стоит, потому что не знаю конкретно вашу проблему и что именно нужно будет делать в первую очередь. Возможно, будет достаточно <span className="font-semibold text-foreground">что-то подправить</span>, а возможно — <span className="font-semibold text-foreground">выстроить всю систему под ключ</span>.
            </p>
          </div>
        </div>
      </Section>

      {/* 8. ФИНАЛЬНЫЙ CTA */}
      <Section tone="muted">
        <h2 className="text-center text-2xl font-extrabold leading-tight sm:text-3xl">
          Если вы хотите оставить конкурентов позади и{" "}
          <span className="text-accent-deep">кратно увеличить выручку</span> вашей клиники…
        </h2>

        <p className="mt-5 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Если хотите, чтобы маркетинг наконец начал приносить результат, а не «съедал» бюджет — жмите на кнопку и записывайтесь на диагностику.
        </p>

        {/* Цена */}
        <div className="mt-6 rounded-2xl bg-banner p-5 text-center text-white shadow-lg sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">
            Диагностика стоит
          </p>
          <p className="mt-1 text-3xl font-extrabold leading-none text-highlight sm:text-4xl">
            10 000 тенге
          </p>
        </div>

        {/* Что внутри */}
        <div className="mt-5 rounded-2xl border bg-card p-5 sm:p-6">
          <p className="text-base leading-relaxed sm:text-lg">
            Мы разберём вашу текущую ситуацию и дадим{" "}
            <span className="font-bold text-accent-deep">готовый пошаговый план</span>: где вы теряете деньги прямо сейчас и как увеличить количество первичных пациентов без дополнительных расходов на рекламу.
          </p>
        </div>

        {/* Алерт */}
        <div className="mt-5 flex items-start gap-3 rounded-xl border-l-4 border-destructive bg-destructive/5 p-4 sm:p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <p className="text-sm font-semibold leading-snug text-foreground sm:text-base">
            Количество мест ограничено, поэтому успейте оставить заявку.
          </p>
        </div>

        <div className="mt-6">
          <WhatsAppButton
            variant="cta-orange"
            label="Забронировать диагностику"
            className="uppercase"
          />
        </div>

        <p className="mt-4 text-center text-base font-bold text-accent-deep sm:text-lg">
          До встречи на разборе!
        </p>
      </Section>

      <footer className="border-t bg-background px-5 py-8 text-center text-xs text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          <Phone className="h-3.5 w-3.5" />
          WhatsApp: +7 747 284 25 95
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Система «Врач на миллион»</p>
      </footer>
    </main>
  );
};

export default Index;
