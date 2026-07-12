import {
  Check,
  X,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  ShieldCheck,
  Target,
  Megaphone,
  Workflow,
  BadgeCheck,
  Stethoscope,
  Phone,
  Receipt,
  HelpCircle,
  ArrowRight,
  MapPin,
  Layers,
} from "lucide-react";
import Section from "@/components/landing/Section";
import ScrollToFormButton from "@/components/landing/ScrollToFormButton";

import yuriPhoto from "@/assets/yuri-optimized.jpg";
import heroDoctorPhoto from "@/assets/hero-doctor.png";

const heroBullets = [
  "Найдём, где клиника теряет пациентов",
  "Рассчитаем потенциал роста выручки",
  "Покажем пошаговый план внедрения",
];

const stats = [
  { icon: Users, value: "50+", label: "медицинских клиник" },
  { icon: Award, value: "8 лет", label: "в медицинском маркетинге" },
  { icon: TrendingUp, value: "2–3×", label: "рост выручки за 3–6 месяцев" },
  { icon: ShieldCheck, value: "1 клиника", label: "одной специализации в одном городе" },
];

const painPoints = [
  "Реклама приводит обращения, но пациенты не доходят до приёма.",
  "Администраторы теряют заявки на этапе звонка.",
  "Врачи проводят консультации, но пациент говорит «я подумаю».",
  "Вы не понимаете, какая реклама приносит прибыль, а какая просто расходует бюджет.",
  "Владельцу приходится самому контролировать маркетинг, продажи и персонал.",
];

const case1Funnel = [
  { icon: Receipt, value: "830 000 ₸", label: "рекламный бюджет" },
  { icon: Megaphone, value: "415", label: "обращений" },
  { icon: Stethoscope, value: "83", label: "платных диагностики" },
  { icon: Users, value: "29", label: "новых пациентов" },
];

const systemParts = [
  { icon: Megaphone, label: "Маркетинг" },
  { icon: Layers, label: "Контент" },
  { icon: TrendingUp, label: "Аналитика" },
  { icon: BadgeCheck, label: "Отдел продаж" },
  { icon: Phone, label: "Работа администраторов" },
  { icon: Stethoscope, label: "Первичная консультация врача" },
];

const diagnosticSteps = [
  "Проверяем маркетинг и рекламу.",
  "Разбираем работу администраторов.",
  "Смотрим путь пациента от заявки до оплаты.",
  "Находим места, где теряются деньги.",
  "Готовим индивидуальный план роста.",
];

const diagnosticOutcomes = [
  "где теряются пациенты;",
  "какие изменения дадут самый быстрый рост;",
  "что необходимо внедрить в первую очередь.",
];

const implementedList = [
  "Пакеты лечения.",
  "Новый сценарий работы администраторов.",
  "Контент.",
  "Рекламу.",
  "Сквозную аналитику.",
];

const faqs = [
  {
    q: "Сколько длится диагностика?",
    a: "Обычно 1,5–2 часа.",
  },
  {
    q: "Подходит ли небольшим клиникам?",
    a: "Да. Размер клиники не имеет значения. Важнее желание системно расти.",
  },
  {
    q: "Если уже работали с агентствами?",
    a: "Большинство наших клиентов приходят именно после неудачного опыта работы с подрядчиками.",
  },
  {
    q: "Какие данные понадобятся?",
    a: "Только информация о текущем маркетинге и работе клиники.",
  },
];

const futureVision = [
  "Врачи загружены.",
  "Вы знаете стоимость каждого пациента.",
  "Администраторы доводят большинство заявок до визита.",
  "Каждая рекламная кампания приносит понятный финансовый результат.",
  "Вы принимаете решения на основе цифр, а не догадок.",
];

const finalBullets = [
  "Где клиника теряет пациентов.",
  "Где теряет деньги.",
  "Какие изменения дадут максимальный рост.",
  "С чего начать уже на следующий день.",
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-accent-soft/30 via-background to-background text-foreground antialiased">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-background to-background" />
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-highlight/10 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-lg px-3 pb-6 pt-4 sm:max-w-4xl sm:px-6 sm:pb-14 sm:pt-10">
          <div className="grid gap-6 sm:grid-cols-[1.05fr_0.95fr] sm:items-center sm:gap-10">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-deep px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-highlight sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2.6} />
                Проверенная система роста медицинских клиник
              </div>

              <h1 className="mt-4 text-[24px] font-black uppercase leading-[1.1] tracking-tight text-foreground sm:text-[40px]">
                Помогаем медицинским клиникам увеличить{" "}
                <span className="text-accent">количество оплаченных пациентов</span>{" "}
                и построить систему <span className="text-accent">роста выручки</span>.
              </h1>

              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground sm:text-base">
                <span className="font-bold text-foreground">Не продаём просто рекламу.</span>{" "}
                Строим систему, в которой реклама, администраторы, врачи и аналитика работают вместе и превращают обращения в оплаченных пациентов.
              </p>

              <div className="mt-6">
                <ScrollToFormButton
                  variant="cta-orange"
                  label="Записаться на диагностику"
                  className="uppercase"
                  ctaId={1}
                  ctaName="Hero CTA"
                />
              </div>

              <ul className="mt-5 space-y-2.5">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-foreground sm:text-[15px]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-deep text-highlight">
                      <Check className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[1.25rem] bg-white shadow-[0_12px_40px_rgba(22,80,60,0.14)] ring-1 ring-accent/10 sm:rounded-3xl">
              <div className="aspect-[4/5] w-full sm:aspect-[4/5]">
                <img
                  src={heroDoctorPhoto}
                  alt="Врач медицинской клиники"
                  className="h-full w-full object-cover object-[center_20%]"
                  loading="eager"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4 text-center sm:pb-6">
                <p className="text-[15px] font-bold leading-snug text-white drop-shadow-md sm:text-lg">
                  Первичные пациенты каждый месяц.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.1 STATS */}
      <section aria-label="Показатели" className="border-y border-accent/10 bg-accent-soft/40">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-5 py-6 sm:grid-cols-4 sm:gap-6 sm:py-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-accent-deep ring-1 ring-accent/15 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
              </span>
              <p className="mt-2 text-xl font-black leading-none text-accent-deep sm:text-2xl">{value}</p>
              <p className="mt-1 text-[11px] font-medium leading-tight text-muted-foreground sm:text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ПОЧЕМУ КЛИНИКИ НЕДОПОЛУЧАЮТ ПРИБЫЛЬ */}
      <Section tone="default" contentClassName="sm:max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase leading-tight text-accent-deep sm:text-4xl">
            Почему большинство клиник <span className="text-accent">недополучают прибыль</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            <span className="font-semibold text-foreground">Проблема редко в рекламе.</span>{" "}
            Чаще всего деньги теряются между заявкой и оплатой лечения.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:gap-4">
          {painPoints.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-2xl border border-accent/10 bg-white p-4 shadow-sm sm:p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <X className="h-4 w-4" strokeWidth={3} />
              </span>
              <p className="text-[14px] leading-snug text-foreground sm:text-base">{p}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl bg-accent-deep p-5 text-center sm:p-6">
          <p className="text-[15px] font-semibold leading-snug text-highlight sm:text-lg">
            Именно эти точки потерь мы находим во время диагностики.
          </p>
        </div>
      </Section>

      {/* 3. РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ */}
      <Section tone="soft" contentClassName="sm:max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase leading-tight text-accent-deep sm:text-4xl">
            Реальные <span className="text-accent">результаты</span> наших клиентов
          </h2>
        </div>

        {/* Кейс 1 */}
        <article className="mt-8 overflow-hidden rounded-3xl border border-accent/10 bg-white shadow-[0_10px_30px_rgba(22,80,60,0.08)]">
          <header className="flex items-center justify-between gap-3 bg-accent-deep px-5 py-4 sm:px-7">
            <div className="flex items-center gap-2 text-highlight">
              <MapPin className="h-4 w-4" strokeWidth={2.5} />
              <span className="text-[13px] font-bold uppercase tracking-wide sm:text-sm">
                Астана • Многопрофильная клиника
              </span>
            </div>
            <span className="rounded-full bg-highlight/15 px-3 py-1 text-[11px] font-black text-highlight sm:text-xs">
              Кейс №1
            </span>
          </header>

          <div className="grid gap-3 p-5 sm:grid-cols-4 sm:gap-4 sm:p-7">
            {case1Funnel.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl bg-accent-soft/60 p-4 text-center ring-1 ring-accent/10"
              >
                <Icon className="h-5 w-5 text-accent-deep" strokeWidth={2.4} />
                <p className="mt-2 text-lg font-black text-accent-deep sm:text-xl">{value}</p>
                <p className="mt-1 text-[11.5px] font-medium leading-tight text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-accent/10 bg-gradient-to-r from-accent-deep to-accent px-5 py-5 text-center sm:px-7 sm:py-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-highlight/80">
              Дополнительная выручка
            </p>
            <p className="mt-1 text-3xl font-black leading-none text-highlight sm:text-5xl">
              +13 000 000 ₸
            </p>
          </div>
        </article>

        {/* Кейс 2 и 3 */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <article className="flex flex-col rounded-3xl border border-accent/10 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-accent-deep">
                <MapPin className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-[12px] font-bold uppercase tracking-wide sm:text-sm">Шымкент</span>
              </div>
              <span className="rounded-full bg-accent-deep/10 px-2.5 py-1 text-[10.5px] font-black text-accent-deep">
                Кейс №2
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-destructive/5 p-4 ring-1 ring-destructive/15">
                <p className="text-[10.5px] font-bold uppercase tracking-wide text-destructive">До внедрения</p>
                <p className="mt-2 text-[13.5px] leading-snug text-foreground">
                  <span className="text-lg font-black">22%</span> пациентов доходили до приёма.
                </p>
              </div>
              <div className="rounded-2xl bg-accent-soft/70 p-4 ring-1 ring-accent/20">
                <p className="text-[10.5px] font-bold uppercase tracking-wide text-accent-deep">После внедрения</p>
                <p className="mt-2 text-[13.5px] leading-snug text-foreground">
                  <span className="text-lg font-black text-accent-deep">61%</span> доходимости. Запись вперёд на несколько недель.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-accent-deep px-4 py-3 text-center">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-highlight/80">
                Дополнительная выручка
              </p>
              <p className="mt-0.5 text-2xl font-black text-highlight sm:text-3xl">+8,4 млн ₸</p>
            </div>
          </article>

          <article className="flex flex-col rounded-3xl border border-accent/10 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-accent-deep">
                <MapPin className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-[12px] font-bold uppercase tracking-wide sm:text-sm">Караганда</span>
              </div>
              <span className="rounded-full bg-accent-deep/10 px-2.5 py-1 text-[10.5px] font-black text-accent-deep">
                Кейс №3
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-destructive/5 p-4 ring-1 ring-destructive/15">
                <p className="text-[10.5px] font-bold uppercase tracking-wide text-destructive">До внедрения</p>
                <p className="mt-2 text-[13.5px] leading-snug text-foreground">
                  Повторные пациенты практически отсутствовали.
                </p>
              </div>
              <div className="rounded-2xl bg-accent-soft/70 p-4 ring-1 ring-accent/20">
                <p className="text-[10.5px] font-bold uppercase tracking-wide text-accent-deep">После внедрения</p>
                <p className="mt-2 text-[13.5px] leading-snug text-foreground">
                  <span className="text-lg font-black text-accent-deep">64%</span> пациентов записываются повторно ещё до выхода из кабинета.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-accent-deep px-4 py-3 text-center">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-highlight/80">
                Рост выручки
              </p>
              <p className="mt-0.5 text-2xl font-black text-highlight sm:text-3xl">×2,4</p>
            </div>
          </article>
        </div>

        <div className="mt-8">
          <ScrollToFormButton
            variant="cta-orange"
            label="Хочу такой же результат"
            className="uppercase"
            ctaId={2}
            ctaName="После кейсов"
          />
        </div>
      </Section>

      {/* 4. ПОЧЕМУ ЭТИ РЕЗУЛЬТАТЫ */}
      <Section tone="default" contentClassName="sm:max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase leading-tight text-accent-deep sm:text-4xl">
            Почему эти результаты <span className="text-accent">получаются</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Большинство агентств продают рекламу.{" "}
            <span className="font-bold text-foreground">Мы строим систему.</span>
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {systemParts.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-accent/10 bg-white p-4 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                <Icon className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <p className="text-[14.5px] font-semibold leading-snug text-foreground sm:text-base">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[14.5px] leading-relaxed text-muted-foreground sm:text-base">
          Когда все элементы работают вместе — клиника начинает зарабатывать значительно больше{" "}
          <span className="font-semibold text-foreground">без хаоса и постоянной смены подрядчиков.</span>
        </p>
      </Section>

      {/* 5. ЧТО ПРОИСХОДИТ НА ДИАГНОСТИКЕ */}
      <Section tone="soft" contentClassName="sm:max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase leading-tight text-accent-deep sm:text-4xl">
            Что происходит <span className="text-accent">на диагностике</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            За одну встречу мы полностью разбираем путь пациента.
          </p>
        </div>

        <ol className="mt-8 space-y-3">
          {diagnosticSteps.map((step, i) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-2xl border border-accent/10 bg-white p-4 shadow-sm sm:p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-deep text-highlight text-sm font-black">
                {i + 1}
              </span>
              <p className="text-[14.5px] leading-snug text-foreground sm:text-base">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-3xl bg-accent-deep p-6 sm:p-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-highlight/80">
            После встречи вы точно будете понимать:
          </p>
          <ul className="mt-3 space-y-2">
            {diagnosticOutcomes.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-white sm:text-base">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-highlight" strokeWidth={2.6} />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 6. РЕАЛЬНЫЙ ПРИМЕР ДИАГНОСТИКИ */}
      <Section tone="default" contentClassName="sm:max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase leading-tight text-accent-deep sm:text-4xl">
            Реальный пример <span className="text-accent">диагностики</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-4">
          <div className="rounded-2xl border border-accent/15 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent-deep">
              Запрос клиента
            </p>
            <p className="mt-2 text-[15px] italic leading-snug text-foreground sm:text-lg">
              «Нужен SMM, чтобы увеличить поток пациентов.»
            </p>
          </div>

          <div className="rounded-2xl border border-accent/15 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent-deep">
              Что показала диагностика
            </p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-foreground sm:text-base">
              Проблема оказалась <span className="font-bold">совсем не в социальных сетях.</span>{" "}
              В клинике отсутствовала система, которая превращает обращения в оплаченных пациентов.
            </p>
          </div>

          <div className="rounded-2xl border border-accent/15 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent-deep">Что внедрили</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {implementedList.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] leading-snug text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-accent-deep to-accent p-6 text-center sm:p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-highlight/80">Результат</p>
            <p className="mt-1 text-3xl font-black leading-none text-highlight sm:text-5xl">
              +13 000 000 ₸
            </p>
            <p className="mt-2 text-[13px] font-semibold text-white/85 sm:text-sm">
              дополнительной выручки
            </p>
          </div>
        </div>
      </Section>

      {/* 7. КТО ПРОВОДИТ ДИАГНОСТИКУ */}
      <Section tone="soft" contentClassName="sm:max-w-4xl">
        <div className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:gap-10">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_rgba(22,80,60,0.14)] ring-1 ring-accent/10">
            <div className="aspect-[4/5] w-full">
              <img
                src={yuriPhoto}
                alt="Юрий Запойнов — эксперт по маркетингу медицинских клиник"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
              Кто проводит диагностику
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-accent-deep sm:text-4xl">
              Юрий Запойнов
            </h2>
            <p className="mt-2 text-[14.5px] font-semibold text-muted-foreground sm:text-base">
              Эксперт по маркетингу медицинских клиник
            </p>

            <div className="mt-5 space-y-3 text-[14.5px] leading-relaxed text-foreground sm:text-base">
              <p>
                Более <span className="font-bold">8 лет</span> занимаюсь медицинским маркетингом.
                Помогал запускать клиники, выстраивать коммерческие отделы и внедрять системы роста выручки.
              </p>
              <div className="rounded-2xl bg-accent-deep p-4 text-white sm:p-5">
                <p className="text-[14.5px] leading-snug sm:text-base">
                  На диагностике <span className="font-bold text-highlight">я не продаю рекламу.</span>{" "}
                  Я ищу реальные причины, по которым клиника теряет пациентов и деньги.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. ПОЧЕМУ СТОИМОСТЬ НЕ УКАЗАНА */}
      <Section tone="default" contentClassName="sm:max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase leading-tight text-accent-deep sm:text-4xl">
            Почему стоимость <span className="text-accent">не указана</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            { icon: Target, text: "Иногда достаточно изменить рекламу." },
            { icon: Workflow, text: "Иногда необходимо перестроить путь пациента." },
            { icon: Users, text: "Иногда проблема в работе администраторов или врачей." },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="rounded-2xl border border-accent/10 bg-white p-5 text-center shadow-sm"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                <Icon className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <p className="mt-3 text-[14px] leading-snug text-foreground">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 rounded-2xl bg-accent-deep p-5 text-center text-[14.5px] leading-relaxed text-white sm:p-6 sm:text-base">
          Каждая клиника находится на разном этапе. Поэтому сначала проводится{" "}
          <span className="font-bold text-highlight">диагностика</span>. После неё вы получаете индивидуальный план и только потом предложение по внедрению.
        </p>
      </Section>

      {/* 9. FAQ */}
      <Section tone="soft" contentClassName="sm:max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase leading-tight text-accent-deep sm:text-4xl">
            Частые <span className="text-accent">вопросы</span>
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-accent/10 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
                  <HelpCircle className="h-4 w-4" strokeWidth={2.6} />
                </span>
                <div>
                  <p className="text-[15px] font-bold text-accent-deep sm:text-base">{q}</p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. БУДУЩЕЕ КЛИНИКИ */}
      <Section tone="default" contentClassName="sm:max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase leading-tight text-accent-deep sm:text-4xl">
            Представьте свою клинику <span className="text-accent">через несколько месяцев</span>
          </h2>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {futureVision.map((v) => (
            <li
              key={v}
              className="flex items-start gap-3 rounded-2xl border border-accent/10 bg-white p-4 shadow-sm sm:p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-deep text-highlight">
                <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
              </span>
              <p className="text-[14.5px] leading-snug text-foreground sm:text-base">{v}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-[14.5px] leading-relaxed text-muted-foreground sm:text-base">
          Именно ту систему мы строим вместе с{" "}
          <span className="font-semibold text-foreground">владельцами медицинских клиник.</span>
        </p>
      </Section>

      {/* ФИНАЛЬНЫЙ БЛОК */}
      <Section tone="soft" contentClassName="sm:max-w-3xl">
        <div className="overflow-hidden rounded-3xl bg-accent-deep p-6 text-center shadow-[0_20px_60px_rgba(22,80,60,0.25)] sm:p-10">
          <h2 className="text-2xl font-black uppercase leading-tight text-highlight sm:text-4xl">
            Запишитесь на диагностику
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-white/85 sm:text-base">
            За одну встречу покажем:
          </p>

          <ul className="mx-auto mt-5 grid max-w-xl gap-2.5 text-left">
            {finalBullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-white sm:text-base">
                <Check className="mt-1 h-4 w-4 shrink-0 text-highlight" strokeWidth={3} />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <ScrollToFormButton
              variant="cta-orange"
              label="Записаться на диагностику"
              className="uppercase"
              ctaId={3}
              ctaName="Финальный CTA"
            />
          </div>

          <p className="mt-4 text-[12.5px] font-medium text-white/70 sm:text-sm">
            Работаем только с одной клиникой одной специализации в одном городе.
          </p>
        </div>
      </Section>

      <footer className="border-t border-accent/10 bg-accent-soft/30 px-5 py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} MarkVision Medical</p>
      </footer>
    </main>
  );
};

export default Index;
