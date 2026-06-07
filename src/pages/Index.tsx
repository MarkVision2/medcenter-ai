import { Check, AlertTriangle, MapPin, TrendingUp, Wallet, Sparkles, Megaphone, Inbox, Stethoscope, UserPlus, Receipt, BadgeCheck, Target, Workflow, Layers, HelpCircle, Phone, ArrowRight, X, Clock, Flame } from "lucide-react";
import Section from "@/components/landing/Section";
import Banner from "@/components/landing/Banner";
import ScrollToFormButton from "@/components/landing/ScrollToFormButton";
import yuriPhoto from "@/assets/yuri-optimized.jpg";
import aigerimPhoto from "@/assets/aigerim.jpg";
import heroDoctorPhoto from "@/assets/hero-doctor.png";

const painPoints = [
  {
    text: "Если у вас нет стабильного потока первичных пациентов",
  },
  {
    text: "Вы устали постоянно нанимать таргетологов которые что-то делают, но результата как не было, так и нет, и при этом у вас есть ощущение, что вы платите и не понимаете, за что.",
  },
  {
    text: (
      <>
        Видите, как ваши коллеги успешно зарабатывают и путешествуют, а вы смотрите на них и не понимаете,{" "}
        <span className="font-extrabold text-foreground">ЧТО ДЕЛАЕТЕ НЕ ТАК.</span>
      </>
    ),
  },
  {
    text: "Вынуждены цепляться за каждого пациента, даже на невыгодных условиях, и работаете в минус.",
  },
  {
    text: "Не знаете, как привлекать пациентов на премиум-услуги и выйти из ловушки дешёвых пациентов?",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-accent-soft/30 via-background to-background text-foreground antialiased">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-background to-background" />
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-lg px-2 pb-5 pt-2 sm:max-w-3xl sm:px-6 sm:pb-14 sm:pt-8">
          {/* Единый оффер-блок: медицинский → белый → медицинский */}
          <div className="overflow-hidden rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:rounded-3xl">
            {/* Шапка */}
            <div className="bg-accent-deep px-4 py-4 text-center sm:px-8 sm:py-6">
              <div className="flex items-center justify-center gap-1.5">
                <Sparkles className="h-4 w-4 shrink-0 text-highlight sm:h-5 sm:w-5" strokeWidth={2.5} />
                <span className="text-[15px] font-bold italic leading-none text-highlight sm:text-lg">
                  Проверенная методика:
                </span>
              </div>
              <p className="mt-2 text-[11px] font-bold uppercase leading-snug tracking-[0.08em] text-white sm:text-sm">
                Для владельцев медицинских центров
              </p>
            </div>

            {/* Главный оффер */}
            <div className="bg-white px-3 py-5 sm:px-10 sm:py-10">
              <h1 className="text-center text-[17px] font-black uppercase leading-[1.18] tracking-tight text-foreground sm:text-[34px] sm:leading-[1.1]">
                Ищу{" "}
                <span className="text-accent">2</span>{" "}
                владельцев медицинских центров, которые хотят стабильный поток пациентов и полную загрузку всех докторов.
              </h1>
            </div>

            {/* Усилитель */}
            <div className="bg-accent-deep px-3 py-4 text-center sm:px-8 sm:py-7">
              <p className="text-[11.5px] font-bold uppercase leading-[1.35] tracking-[0.04em] text-highlight sm:text-base sm:leading-snug">
                <span className="rounded-sm bg-white/15 px-1 py-0.5">Тех</span>, кто устал работать за копейки и хочет выйти на доход{" "}
                <span className="underline decoration-highlight decoration-2 underline-offset-[3px]">
                  от 300 000 до 500 000 тенге
                </span>{" "}
                в день , с большим количеством свободного времени и меньшим стрессом.
              </p>
            </div>
          </div>

          {/* Фото */}
          <div className="relative mt-2.5 overflow-hidden rounded-[1.25rem] bg-white shadow-[0_8px_30px_rgba(22,80,60,0.08)] ring-1 ring-accent/10 sm:mt-5 sm:rounded-3xl">
            <div className="aspect-[4/5] w-full sm:aspect-[16/10]">
              <img
                src={heroDoctorPhoto}
                alt="Врач многопрофильной клиники"
                className="h-full w-full object-cover object-[center_20%]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-3 pb-4 text-center sm:pb-7">
              <p className="text-[15px] font-bold leading-snug text-white drop-shadow-md sm:text-xl">
                Первичные пациенты каждый месяц.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. БОЛИ */}
      <Section tone="default" contentClassName="sm:max-w-2xl">
        <div className="text-center">
          <div className="landing-badge-warn mx-auto">
            <AlertTriangle className="h-3.5 w-3.5" strokeWidth={2.5} />
            <span>Знакомая ситуация?</span>
          </div>

          <h2 className="landing-title mt-5 sm:mt-6">Узнайте себя?</h2>
        </div>

        <ul className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
          {painPoints.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl bg-white px-3.5 py-3.5 shadow-[0_4px_20px_rgba(22,80,60,0.06)] ring-1 ring-accent/10 sm:gap-4 sm:px-4 sm:py-4"
            >
              <span className="landing-icon-wrap mt-0.5 h-7 w-7 sm:h-8 sm:w-8">
                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={3} />
              </span>
              <span className="text-[14.5px] leading-[1.45] text-foreground/85 sm:text-base sm:leading-relaxed">
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 sm:mt-7">
          <Banner className="px-4 py-4 text-[13px] leading-snug sm:px-6 sm:py-6 sm:text-xl">
            ЕСЛИ ОТВЕТИЛИ «ДА» ХОТЯ&nbsp;БЫ НА&nbsp;1&nbsp;ВОПРОС&nbsp;— ТО&nbsp;ЭТА ИНФОРМАЦИЯ ТОЧНО ДЛЯ&nbsp;ВАС
          </Banner>
        </div>
      </Section>

      {/* 3. ПЕРЕХОД */}
      <Section tone="soft">
        <div className="landing-card px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-center text-lg leading-relaxed sm:text-xl">
            Сейчас я расскажу, как забыть о&nbsp;работе за&nbsp;копейки и&nbsp;начать зарабатывать, как{" "}
            <span className="font-bold text-accent-deep">лучшие клиники Казахстана</span>, имея больше свободного времени и&nbsp;энергии.
          </p>
        </div>
      </Section>

      {/* 4. СУТЬ СИСТЕМЫ — 3 ЗОНЫ */}
      <Section tone="default">
        <div className="landing-badge mx-auto mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          Суть системы
        </div>
        <h2 className="landing-title">
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
                className="landing-card p-5 sm:p-6"
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

        <div className="mt-6">
          <Banner className="sm:p-6">
            Именно здесь находится ваша максимальная прибыль
          </Banner>
        </div>
      </Section>

      {/* 5. КЕЙСЫ */}
      <Section tone="soft" contentClassName="max-w-6xl">
        <div className="landing-badge mx-auto mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          Реальный кейс
        </div>
        <h2 className="landing-title text-xl sm:text-3xl">
          Результаты{" "}
          <span className="text-accent-deep">из реальных клиник</span>
        </h2>
        <p className="landing-subtitle">
          Разные города, разные ниши — одна система.
        </p>

        <div className="landing-card mx-auto mt-6 max-w-2xl">
          {/* Знакомство с героиней */}
          <div className="border-b bg-gradient-to-br from-accent-soft via-accent-soft/40 to-background px-5 py-6 sm:px-8 sm:py-7">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
              <img
                src={aigerimPhoto}
                alt="Айгерим — директор многопрофильной клиники"
                loading="lazy"
                decoding="async"
                width={160}
                height={160}
                className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-white shadow-lg sm:h-28 sm:w-28"
              />
              <div className="text-center sm:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-deep ring-1 ring-accent/20">
                  <BadgeCheck className="h-3 w-3" />
                  Знакомьтесь
                </span>
                <p className="mt-2 text-xl font-black leading-tight sm:text-2xl">Айгерим</p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground sm:text-base">
                  Директор многопрофильной клиники
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            {/* Запрос при обращении */}
            <div className="rounded-2xl border-l-4 border-accent/30 bg-accent-soft/50 p-4 sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Запрос при обращении
              </p>
              <p className="mt-2 text-base italic leading-relaxed sm:text-lg">
                «Нужен SMM, чтобы было больше пациентов и выручки»
              </p>
            </div>

            {/* Что увидел на диагностике */}
            <div className="mt-4 rounded-2xl border-l-4 border-accent-deep bg-accent-soft/50 p-4 sm:p-5">
              <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-deep">
                <Target className="h-3.5 w-3.5" />
                Что увидел на диагностике
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                SMM здесь не поможет. В клинике не было системы, которая стабильно приводит первичных пациентов на платную диагностику и оставляет их на курс лечения. Клиника работала в основном через ОСМС, а из платных услуг — только обед за 1000 тенге.
              </p>
            </div>

            {/* Трансформация: До / После */}
            <h3 className="mt-7 text-center text-lg font-bold sm:text-xl">
              Трансформация клиники
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-4">
                <p className="text-[11px] font-black uppercase tracking-wider text-destructive">
                  До
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "Дорогие процедуры почти не продаются",
                    "Скидки съедают прибыль",
                    "Пациенты только по сарафану",
                    "Кабинеты простаивают",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-snug">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-accent/30 bg-accent-soft/60 p-4">
                <p className="text-[11px] font-black uppercase tracking-wider text-accent-deep">
                  После
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    <>Выручка выросла на <span className="font-bold">10+ млн ₸</span></>,
                    <>Загруженность клиники до <span className="font-bold">80%</span></>,
                    <>Увеличили чек в <span className="font-bold">3 раза</span></>,
                    "Пациенты остаются на курсы лечения",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-snug">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Как решали задачу — 3 шага */}
            <div className="mt-7">
              <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-deep">
                <Workflow className="h-3.5 w-3.5" />
                Как решали задачу — 3 шага
              </div>
              <h3 className="mt-3 text-center text-lg font-bold sm:text-xl">
                Что мы сделали
              </h3>

              <ol className="mt-4 space-y-3">
                {[
                  {
                    title: "Упаковали продукт",
                    text: "Разработали пакеты лечения, посчитали себестоимость, выстроили стратегию продаж.",
                  },
                  {
                    title: "Перестроили отдел продаж",
                    text: "Отказались от формата «просто консультаций». Вывели 2 девушек в отдельный колл-центр, обучили скриптам и поставили задачу — продать приём с предоплатой или полной оплатой.",
                  },
                  {
                    title: "Запустили рекламу",
                    text: "Написали сценарии, сняли видео, запустили рекламу, получили первые обращения и записи на диагностику.",
                  },
                ].map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-2xl bg-white p-4 ring-1 ring-accent/10 sm:p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-deep text-base font-black text-white shadow-md sm:h-11 sm:w-11 sm:text-lg">
                      {i + 1}
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-bold leading-snug sm:text-lg">{step.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Синий блок с результатом — оставляем как был */}
        <div className="mx-auto mt-6 max-w-2xl">
          <div className="landing-accent-panel p-6 text-center sm:p-8">
              <div className="landing-badge mx-auto border-0 bg-white/15 text-highlight ring-white/20">
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
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 xl:gap-5 lg:grid-cols-3">
          {[
            {
              city: "Астана",
              niche: "Стоматология",
              value: "+8,4 млн ₸",
              period: "дополнительной выручки за 2 месяца",
              before: "22% доходимости с заявок",
              after: "61% доходимости, график забит на 3 недели вперёд",
            },
            {
              city: "Шымкент",
              niche: "Многопрофильный центр",
              value: "+18,2 млн ₸",
              period: "дополнительной выручки за 4 месяца",
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
              className="landing-card flex min-w-0 flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(22,80,60,0.12)]"
            >
              <div className="border-b bg-gradient-to-br from-accent-soft/80 via-background to-background px-5 py-5">
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-accent-deep ring-1 ring-accent/15">
                      <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                      <span>{c.city}</span>
                    </span>
                    <p className="mt-3 text-base font-semibold leading-snug text-foreground">
                      {c.niche}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent-deep/10 px-3 py-1.5 text-xs font-black text-accent-deep">
                    0{i + 1}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <div className="flex min-h-[11.25rem] flex-col justify-between rounded-2xl bg-accent-deep p-4 text-white shadow-lg shadow-accent-deep/15 sm:min-h-[13.5rem] sm:px-5 sm:py-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-highlight">
                      Результат
                    </p>
                    <TrendingUp className="h-5 w-5 text-highlight" strokeWidth={2.5} />
                  </div>
                  <p className="mt-4 text-[2.35rem] font-black leading-[0.95] tracking-tight sm:text-[2.8rem] lg:text-[2.35rem] xl:text-[2.75rem]">
                    {c.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-snug text-white/78">
                    {c.period}
                  </p>
                </div>

                <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-destructive">
                      До системы
                    </p>
                    <p className="mt-2 text-base leading-snug text-foreground/78">
                      {c.before}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-accent-deep/55">
                    <span className="h-px flex-1 bg-border" />
                    <ArrowRight className="h-5 w-5" />
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-accent-deep">
                      После внедрения
                    </p>
                    <p className="mt-2 text-base font-semibold leading-snug text-foreground">
                      {c.after}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl rounded-2xl bg-accent-soft/60 px-4 py-3 text-center text-sm leading-relaxed text-muted-foreground ring-1 ring-accent/10 sm:text-base">
          Это не разовые истории —{" "}
          <span className="font-semibold text-foreground">это повторяющийся результат системы.</span>
        </p>
      </Section>

      {/* 6. ОБО МНЕ */}
      <Section tone="default" className="sm:py-20" contentClassName="max-w-5xl">
        <div className="landing-badge mx-auto mb-6">
          <BadgeCheck className="h-3.5 w-3.5" />
          Знакомство
        </div>

        <div className="landing-card">
          <div className="grid lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)]">
            <div className="bg-gradient-to-br from-accent-soft/80 via-background to-background p-4 sm:p-6 lg:p-7">
              <div className="mx-auto max-w-sm overflow-hidden rounded-[1.5rem] border bg-card shadow-lg lg:max-w-none">
                <img
                  src={yuriPhoto}
                  alt="Юрий — автор системы для медицинских клиник"
                  loading="lazy"
                  decoding="async"
                  width={720}
                  height={1080}
                  className="block aspect-[4/5] w-full object-cover object-center lg:aspect-[5/6]"
                />
                <div className="border-t bg-card px-5 py-4">
                  <p className="text-lg font-black leading-tight">Юрий</p>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">
                    Эксперт по росту медицинских клиник
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7 lg:p-9">
              <figure className="relative rounded-2xl border border-accent/15 bg-gradient-to-br from-accent-soft/60 to-background p-5 sm:p-6">
                <span aria-hidden className="absolute -top-3 left-5 select-none font-serif text-5xl leading-none text-accent-deep/40">“</span>
                <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                  Я помогаю клиникам находить <span className="font-semibold text-foreground">неочевидные точки потерь</span>: от рекламы и заявок до администраторов, первичных консультаций и повторных продаж.
                </p>
              </figure>

              <div className="mt-5 grid gap-3 sm:gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border bg-card p-4 sm:p-5 shadow-sm">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-deep">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
                    Подход
                  </div>
                  <p className="text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                    Я не смотрю на рекламу отдельно от продаж. В клинике всё связано: <span className="font-semibold text-foreground">заявка, звонок, запись, визит, план лечения и повторный приём.</span>
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-4 sm:p-5 shadow-sm">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-highlight/40 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                    На диагностике
                  </div>
                  <p className="text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                    Ищем не «красивую гипотезу», а <span className="font-semibold text-foreground">конкретные места, где сейчас утекают пациенты и деньги.</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-highlight/50 bg-gradient-to-br from-highlight/30 via-highlight/15 to-transparent p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-foreground/60">
                  Результат работы
                </p>
                <p className="mt-2 text-xl font-black leading-tight text-foreground sm:text-2xl">
                  Помогали клиникам повышать окупаемость в
                </p>
                <div className="mt-3 flex flex-wrap items-baseline gap-2">
                  <span className="rounded-lg bg-highlight px-3 py-1 text-2xl font-black text-foreground sm:text-3xl">3×</span>
                  <span className="rounded-lg bg-highlight px-3 py-1 text-2xl font-black text-foreground sm:text-3xl">5×</span>
                  <span className="rounded-lg bg-foreground px-3 py-1 text-2xl font-black text-background sm:text-3xl">10×</span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-accent/25 bg-accent-soft/55 p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-deep text-white shadow-sm">
                    <BadgeCheck className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <p className="text-base font-extrabold leading-snug text-accent-deep sm:text-lg">
                    С этой системой вы перестанете терять деньги, а каждая инвестиция в маркетинг начнёт работать на результат.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. СТОИМОСТЬ */}
      <Section tone="soft">
        <div className="landing-card">
          <div className="flex items-center gap-3 border-b border-accent/10 bg-accent-soft/50 px-5 py-4 sm:px-7">
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
      <Section tone="default" contentClassName="max-w-5xl">
        <h2 className="landing-title">
          Если вы хотите оставить конкурентов позади и{" "}
          <span className="text-accent-deep">кратно увеличить выручку</span> вашей клиники…
        </h2>

        <p className="landing-subtitle mt-5 sm:text-lg">
          Если хотите, чтобы маркетинг наконец начал приносить результат, а не «съедал» бюджет — жмите на кнопку и записывайтесь на диагностику.
        </p>

        <div className="landing-card mt-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-gradient-to-br from-accent-deep via-accent to-accent-deep p-5 text-white sm:p-7 lg:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-highlight">
                Что будет на диагностике
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Найдём, где клиника теряет заявки, пациентов и деньги
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/82 sm:text-lg">
                За одну встречу разложим вашу текущую систему по этапам и покажем,
                что исправить в первую очередь, чтобы маркетинг начал давать результат.
              </p>

              <div className="mt-6 rounded-2xl bg-white/12 p-4 ring-1 ring-white/15">
                <p className="text-sm font-semibold uppercase tracking-wide text-highlight">
                  Итог диагностики
                </p>
                <p className="mt-2 text-xl font-black leading-snug">
                  Готовый план роста без увеличения рекламного бюджета
                </p>
              </div>
            </div>

            <div className="grid gap-3 p-4 sm:p-5 lg:p-6">
              {[
                {
                  title: "Разберём текущую воронку",
                  text: "Посмотрим путь пациента от рекламы до записи и найдём места, где заявки остывают.",
                },
                {
                  title: "Проверим рекламу и источники",
                  text: "Поймём, какие каналы приводят качественных пациентов, а какие просто съедают бюджет.",
                },
                {
                  title: "Найдём потери в админах и продажах",
                  text: "Разберём, почему люди не доходят до приёма, не покупают лечение или не возвращаются.",
                },
                {
                  title: "Соберём пошаговый план",
                  text: "Вы получите список действий: что исправить сейчас, что внедрить дальше и где будет самый быстрый рост.",
                },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4 rounded-2xl bg-accent-soft/40 p-4 ring-1 ring-accent/10 sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                    <span className="text-sm font-black">{i + 1}</span>
                  </span>
                  <div>
                    <p className="text-base font-extrabold leading-snug sm:text-lg">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
            У вас два пути
          </h3>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-xl">
            Какой выберете для своей клиники?
          </p>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-destructive/90 via-destructive to-destructive/80 p-5 text-white shadow-[0_8px_30px_rgba(180,40,40,0.15)] sm:p-7 lg:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/14 text-white sm:h-20 sm:w-20">
                <TrendingUp className="h-8 w-8 rotate-180" strokeWidth={3} />
              </span>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Путь 1
              </p>
            </div>

            <h4 className="relative mt-9 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Оставить как есть
            </h4>

            <ul className="relative mt-7 space-y-4 text-base leading-snug text-white/95 sm:text-lg">
              {[
                "Закрыть страницу и забыть",
                "Продолжать терять пациентов и сливать рекламный бюджет",
                "Смотреть, как коллеги забирают ваш рынок",
                "Через год вернуться к тем же проблемам, но дороже",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] landing-accent-panel p-5 sm:p-7 lg:p-8">
            <div className="absolute right-5 top-5 rounded-full bg-highlight px-4 py-2 text-[11px] font-black uppercase tracking-widest text-foreground shadow-md sm:right-7">
              Рекомендуем
            </div>
            <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-highlight/10 blur-3xl" />
            <div className="relative flex items-center gap-4 pr-36">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/14 text-white sm:h-20 sm:w-20">
                <TrendingUp className="h-8 w-8" strokeWidth={3} />
              </span>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Путь 2
              </p>
            </div>

            <h4 className="relative mt-9 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Построить систему
            </h4>

            <ul className="relative mt-7 space-y-4 text-base leading-snug text-white/95 sm:text-lg">
              {[
                "Записаться на диагностику",
                "Увидеть, где клиника теряет деньги",
                "Получить пошаговый план роста выручки",
                "Стать клиникой №1 в своём городе",
              ].map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-accent-deep">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-5">
          <div className="landing-accent-panel p-5 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/10">
                <Clock className="h-7 w-7" strokeWidth={2.5} />
              </span>
              <div>
                <p className="text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-4xl">
                  Завтра свободных мест может не быть
                </p>
                <p className="mt-3 text-base leading-snug text-highlight sm:text-xl">
                  Я беру <span className="font-black">только 1 клинику</span> и только одну в нише в городе.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border-2 border-dashed border-accent/30 bg-white px-5 py-6 text-center shadow-[0_4px_20px_rgba(22,80,60,0.06)] sm:px-8 sm:py-8">
            <p className="mx-auto max-w-4xl text-lg font-medium leading-relaxed text-foreground/85 sm:text-2xl">
              Если вы всё ещё думаете — просто представьте, где будете через год, когда узнаете, что{" "}
              <span className="box-decoration-clone rounded bg-highlight/35 px-1.5 font-black text-foreground">
                клиники-конкуренты уже делают по 20+ миллионов в месяц
              </span>
              .
            </p>
          </div>

          <div className="landing-accent-panel p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/14 text-highlight ring-1 ring-white/10">
                <Flame className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <p className="text-xl font-semibold leading-snug sm:text-2xl">
                Пока вы думаете — ваши{" "}
                <span className="font-black text-highlight">коллеги-клиники внедряют системы продаж</span>{" "}
                и забирают ваших пациентов.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ScrollToFormButton
            variant="cta-orange"
            label="Забронировать диагностику клиники"
            className="uppercase"
            ctaId={2}
            ctaName="Финальный CTA — Забронировать диагностику"
          />
        </div>

        <p className="mt-4 text-center text-base font-bold text-accent-deep sm:text-lg">
          До встречи на разборе!
        </p>
      </Section>

      <footer className="border-t border-accent/10 bg-accent-soft/30 px-5 py-8 text-center text-xs text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          <Phone className="h-3.5 w-3.5" />
          WhatsApp: +7 777 629 09 13
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Система MarkVision AI</p>
      </footer>
    </main>
  );
};

export default Index;
