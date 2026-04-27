import { useEffect, useState, useRef } from "react";
import { Check, ArrowRight, AlertTriangle, Phone, MapPin, Square, X, TrendingUp, Users, Wallet, Sparkles, Gift, MessageCircle, Map, BarChart3, PhoneCall, BadgeCheck, Award, Building2, Clock } from "lucide-react";
import Section from "@/components/landing/Section";
import Banner from "@/components/landing/Banner";
import ScrollToFormButton from "@/components/landing/ScrollToFormButton";
import yuriPhoto from "@/assets/yuri.png";
import heroLaptop from "@/assets/hero-laptop.png";

const Index = () => {

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">


      {/* 1. HERO */}
      <Section className="pt-3 pb-4 sm:pt-10 sm:pb-12">
        {/* Красный баннер */}
        <div className="rounded-xl bg-destructive px-5 py-5 sm:px-6 sm:py-6 text-center shadow-lg shadow-destructive/20 animate-fade-in">
          <p className="text-primary-foreground font-sans font-semibold sm:text-xl md:text-2xl">
            Проверенная методика
          </p>
          <p className="mt-1 text-primary-foreground font-sans font-semibold sm:text-xl md:text-2xl">
            для владельцев медицинских центров
          </p>
        </div>

        {/* Главный заголовок */}
        <h1 className="mt-4 text-center font-extrabold uppercase leading-[1.1] tracking-tight sm:mt-10 sm:text-4xl md:text-5xl whitespace-pre-line text-xl animate-fade-in-up" style={{animationDelay:'0.15s'}}>
          ИЩУ 2-Х ВЛАДЕЛЬЦЕВ МЕДИЦИНСКИХ ЦЕНТРОВ, КОТОРЫЕ ХОТЯТ СТАБИЛЬНЫЙ ПОТОК ПЕРВИЧНЫХ ПАЦИЕНТОВ,{"\n"}И ПОЛНОСТЬЮ ЗАПОЛНИТЬ ГРАФИК ВСЕХ ДОКТОРОВ
        </h1>

        {/* Синий баннер */}
        <div className="mt-3 sm:mt-10">
          <Banner className="px-3 py-4 sm:px-6 sm:py-6 text-base">
            Которые устали работать за&nbsp;копейки и&nbsp;хотят выйти на&nbsp;доход от&nbsp;300&nbsp;000 до&nbsp;600&nbsp;000&nbsp;₸ в&nbsp;день, имея больше свободного времени и&nbsp;меньше стресса
          </Banner>
        </div>

        {/* Картинка с ноутбуком — прозрачный фон, естественно вписана */}
        <div className="mt-1 sm:mt-4">
          <img
            src={heroLaptop}
            alt="Система «Врач на миллион» — превращение первичных заявок в пациентов"
            width={1024}
            height={1024}
            className="mx-auto block w-full max-w-[250px] sm:max-w-md"
          />
        </div>

        {/* Кнопка */}
        <div className="mt-1 sm:mt-4">
          <ScrollToFormButton />
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Заполните форму ниже — это займёт 30 секунд
          </p>
        </div>
      </Section>

      {/* 2. БОЛЬ */}
      <Section tone="muted">
        <div className="rounded-2xl border-2 border-destructive/70 bg-background p-5 sm:p-7 shadow-xl shadow-destructive/5">
          <h2 className="text-center text-2xl font-extrabold leading-tight sm:text-3xl">
            Ответьте на вопросы — ответ на которые «ДА»:
          </h2>

          <ul className="mx-auto mt-6 max-w-md space-y-5 stagger-children">
            {[
              "Устали работать и нанимать разных таргетологов, SMMщиков, которые обещают результат, но пациентов нет и нет",
              "Видите, как ваши коллеги успешно зарабатывают и путешествуют, а вы смотрите на них и не понимаете ЧТО ДЕЛАЕТЕ НЕ ТАК",
              "Вынуждены цепляться за каждого пациента, даже на невыгодных условиях и работаете в минус",
              "Не знаете, как привлекать клиентов на премиум-услуги и выйти из ловушки дешёвых пациентов?",
              "Больше всего надоело, что пациенты уходят к конкурентам,\nа вы не понимаете почему",
              "Хотите создать систему, при которой пациенты приходят сами, а врачи только лечат",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <Square
                  className="mt-1 h-6 w-6 shrink-0 text-banner"
                  strokeWidth={2.5}
                />
                <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 3. ПЕРЕХОД */}
      <Section>
        <Banner>
          Если ответили «ДА» хотя&nbsp;бы на&nbsp;1&nbsp;вопрос — записывайтесь на&nbsp;диагностику
        </Banner>
        <p className="mt-5 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Я расскажу, как забыть о работе за копейки и начать зарабатывать как лучшие клиники
          Казахстана, имея больше свободного времени и энергии.
        </p>
        <div className="mt-6 text-center text-3xl">​</div>
        <div className="mt-3">
          <ScrollToFormButton />
        </div>
      </Section>

      {/* 4. ОБО МНЕ */}
      <Section tone="muted">
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-deep">
          <BadgeCheck className="h-3.5 w-3.5" />
          Знакомство
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10">
          {/* Фото + подпись */}
          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent-deep/20 blur-xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-xl">
              <img
                src={yuriPhoto}
                alt="Юрий — автор системы «Врач на миллион»"
                className="block w-full object-cover"
              />
              <div className="border-t bg-card px-4 py-3">
                <p className="text-sm font-bold leading-tight">Юрий</p>
                <p className="text-xs text-muted-foreground">
                  Автор системы «Врач на миллион»
                </p>
              </div>
            </div>
          </div>

          {/* Текст */}
          <div>
            <h2 className="text-center text-2xl font-bold leading-tight sm:text-3xl md:text-left">
              Привет, меня зовут{" "}
              <span className="text-accent-deep">Юрий</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Я прошёл путь от маркетолога, который запускает рекламу для стоматологий и
              медицинских центров, до эксперта, который создал систему, по которой мед. центры
              получают не просто заявки, а именно{" "}
              <span className="font-semibold">«платежеспособных» пациентов</span>.
            </p>

            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Я помогаю медицинским клиникам вырваться из замкнутого круга и выйти на доход{" "}
              <span className="font-semibold text-accent-deep">от 500 000 тенге в день</span>{" "}
              через систему «Врач на миллион» — ту самую систему, которая изменила жизнь уже{" "}
              <span className="font-semibold">25+ мед. центрам</span>.
            </p>

            {/* Метрики */}
            <div className="mt-6 grid grid-cols-3 gap-3 stagger-children">
              <div className="rounded-xl border bg-card p-3 text-center shadow-sm sm:p-4 hover:shadow-md transition-shadow duration-200">
                <Building2 className="mx-auto h-5 w-5 text-accent-deep" />
                <p className="mt-2 text-xl font-extrabold sm:text-2xl">25+</p>
                <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                  мед. центров
                </p>
              </div>
              <div className="rounded-xl border bg-card p-3 text-center shadow-sm sm:p-4 hover:shadow-md transition-shadow duration-200">
                <TrendingUp className="mx-auto h-5 w-5 text-accent-deep" />
                <p className="mt-2 text-xl font-extrabold sm:text-2xl">500к+</p>
                <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                  тг в день
                </p>
              </div>
              <div className="rounded-xl border bg-card p-3 text-center shadow-sm sm:p-4 hover:shadow-md transition-shadow duration-200">
                <Award className="mx-auto h-5 w-5 text-accent-deep" />
                <p className="mt-2 text-xl font-extrabold sm:text-2xl">7+</p>
                <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                  лет в нише
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. КЕЙС */}
      <Section>
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-deep">
          <Sparkles className="h-3.5 w-3.5" />
          Реальный кейс
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight sm:text-3xl">
          Но почему я так уверен,{" "}
          <span className="text-accent-deep">что эта система реально работает?</span>
        </h2>

        <div className="mt-6 overflow-hidden rounded-2xl border bg-card shadow-xl">
          {/* Шапка карточки */}
          <div className="border-b bg-accent-soft/40 px-6 py-4 sm:px-8">
            <div className="flex items-center justify-center gap-2 text-center font-semibold text-accent-deep">
              <MapPin className="h-5 w-5 shrink-0" />
              <span className="text-lg sm:text-xl">Клиника из Астаны</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Проблема */}
            <div className="rounded-xl border-l-4 border-destructive bg-destructive/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-destructive">
                Было
              </p>
              <p className="mt-2 text-base leading-relaxed sm:text-lg">
                Один администратор не справлялся со звонками. Записывал всех подряд —
                приходило только <span className="font-bold text-destructive">30%</span> от записанных.
              </p>
            </div>

            {/* Что сделали */}
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

            {/* Результат */}
            <div className="mt-7 rounded-2xl bg-banner p-6 text-center text-white shadow-xl shadow-banner/30">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-highlight">
                <TrendingUp className="h-3.5 w-3.5" />
                Результат за 2 недели
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/10 p-4">
                  <Users className="mx-auto h-6 w-6 text-highlight" />
                  <p className="mt-2 text-3xl font-extrabold leading-none sm:text-4xl">
                    107
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    новых пациентов с оплатой
                  </p>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <Wallet className="mx-auto h-6 w-6 text-highlight" />
                  <p className="mt-2 text-2xl font-extrabold leading-none text-highlight sm:text-3xl">
                    +10 млн ₸
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    в кассу
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-white/70">
                без дополнительных трат на рекламу
              </p>
            </div>

            {/* Вывод */}
            <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              Тот же бюджет на рекламу — в{" "}
              <span className="font-bold text-foreground">3 раза больше</span>{" "}
              реально пришедших и оплативших пациентов.
            </p>
            <p className="mt-3 text-center text-base font-semibold leading-snug sm:text-lg">
              В чём разница?{" "}
              <span className="text-accent-deep">Правильные люди на правильных позициях.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* 6. РЕЗУЛЬТАТ */}
      <Section>
        <div className="rounded-2xl bg-banner p-7 text-center text-white sm:p-10 shadow-xl shadow-banner/25">
          <p className="text-sm font-semibold uppercase tracking-wider text-highlight">
            За 3 месяца
          </p>
          <p className="mt-4 text-4xl font-extrabold leading-none text-highlight sm:text-6xl">
            60 000 000 ₸
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Выстроили стабильную систему привлечения первичных пациентов и их удержания —{" "}
            <span className="font-semibold text-white">без участия собственника клиники</span>.
          </p>
        </div>
      </Section>

      {/* 7. СКЕПСИС */}
      <Section tone="muted">
        <div className="rounded-2xl border-2 border-destructive/70 bg-background p-6 sm:p-8 shadow-lg shadow-destructive/5">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Никакого подвоха нет.</h2>
          <p className="mt-4 text-center text-base leading-relaxed sm:text-lg">
            Мы проводим консультации, чтобы показать <span className="font-bold">вам свой</span> метод
            ежедневного привлечения премиум-пациентов на услуги имплантов, виниров и т.д.
          </p>
          <p className="mt-4 text-center text-base leading-relaxed sm:text-lg">
            Если после консультации вы захотите, <span className="font-bold">чтобы мы помогли</span> выйти на
            доход от 500 000 тенге в день с помощью моего метода — то сможете продолжить работу со мной
            на платной основе. Консультация вас ни к чему не обязывает.
          </p>
          <p className="mt-5 text-center text-lg font-bold sm:text-xl">Да-да, нет-нет.</p>
          <p className="mt-2 text-center text-lg font-bold sm:text-xl">ВСЁ по ЧЕСТНОМУ 🤝</p>
        </div>
      </Section>

      {/* 8. СУТЬ */}
      <Section tone="muted">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-banner via-banner to-accent-deep p-8 sm:p-10 text-white shadow-2xl shadow-banner/30">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-highlight/10 blur-2xl" aria-hidden="true" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm shadow-lg">
              <TrendingUp className="h-7 w-7 text-highlight" />
            </div>

            <h2 className="text-center text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl md:text-3xl">
              ЕСЛИ ТЫ ХОЧЕШЬ ЗАБЫТЬ О РАБОТЕ ЗА КОПЕЙКИ И НАЧАТЬ ЗАРАБАТЫВАТЬ КАК ТОПОВЫЙ МЕДИЦИНСКИЙ ЦЕНТР, ИМЕЯ БОЛЬШЕ СВОБОДНОГО ВРЕМЕНИ И ЭНЕРГИИ 
            </h2>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-highlight/60" />

            <p className="mt-5 text-center leading-relaxed sm:text-lg text-lg text-white/85">
              Это требует <span className="font-semibold text-highlight">системного подхода</span>. Без системы вы будете
              и дальше терять пациентов и деньги.
            </p>

            <div className="mt-7">
              <ScrollToFormButton label="Записаться на диагностику" />
            </div>
          </div>
        </div>
      </Section>

      {/* 9. ЧТО ПОЛУЧИТЕ */}
      <Section containerClassName="max-w-5xl">
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-deep ring-1 ring-accent/20">
          <Gift className="h-4 w-4" />
          4 шага диагностики
        </div>
        <h2 className="text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Что вы получите вместе <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-accent-deep to-accent bg-clip-text text-transparent">с консультацией</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground sm:text-lg">
          Найдём все дыры, через которые утекают ваши пациенты и деньги, и составим персональную стратегию роста.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: MessageCircle,
              title: "Часовая консультация 1-на-1 со мной",
              desc: "Покажу, как привлекать первичных пациентов с бюджетами от 500 000 тенге без бесконечного поиска и сарафанного радио",
              value: "150 000 ₸",
            },
            {
              icon: Map,
              title: "Карта с пошаговым планом",
              desc: "Как выйти на стабильный доход 300 000 – 600 000 ₸ в день, даже если сейчас зарабатываете в 5 раз меньше",
              value: "80 000 ₸",
            },
            {
              icon: BarChart3,
              title: "Анализ рекламы и каналов",
              desc: "Разберём текущие источники пациентов и найдем точки утечки вашего рекламного бюджета",
              value: "60 000 ₸",
            },
            {
              icon: PhoneCall,
              title: "Тайный звонок",
              desc: "Прозвоним как пациент, запишем разговор, покажем, где администратор сливает заявки",
              value: "50 000 ₸",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-gradient-to-b from-card to-card/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 sm:p-8"
              >
                <div className="absolute right-0 top-0 -mr-4 -mt-4 h-32 w-32 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" aria-hidden="true" />
                <span className="absolute right-6 top-6 text-7xl font-black leading-none text-accent/5 transition-colors duration-300 group-hover:text-accent/10">
                  {i + 1}
                </span>
                
                <div className="relative z-10">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent-deep ring-1 ring-accent/20 shadow-inner">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.desc}
                  </p>
                </div>
                
                <div className="relative z-10 mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-accent-soft/80 px-4 py-2 text-sm font-semibold text-accent-deep">
                  Ценность: {item.value}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-banner via-banner/95 to-banner text-white shadow-2xl shadow-banner/30 ring-1 ring-white/10">
          {/* Subtle bg glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-highlight/20 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 space-y-4 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <span className="text-base text-white/80 sm:text-lg">Общая ценность:</span>
              <span className="text-xl font-bold line-through opacity-70 sm:text-2xl">
                340 000 ₸
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 pt-2">
              <span className="text-base font-semibold text-highlight sm:text-lg">
                Ваша экономия:
              </span>
              <span className="text-xl font-extrabold text-highlight sm:text-2xl">
                −330 100 ₸
              </span>
            </div>
          </div>

          <div className="relative z-10 border-t border-white/10 bg-black/10 px-6 py-8 text-center backdrop-blur-sm sm:px-10">
            <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-50" aria-hidden="true" />
            <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 shadow-sm backdrop-blur-md">
              Стоимость диагностики сегодня
            </div>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="text-5xl font-black leading-none text-highlight sm:text-7xl">
                9 900
              </span>
              <span className="text-2xl font-bold text-highlight/90 sm:text-3xl">₸</span>
            </div>
            <p className="mt-4 text-sm font-medium text-white/80">
              Окупится с первого пациента
            </p>
            <div className="mt-6">
              <ScrollToFormButton label="Записаться за 9 900 ₸" />
            </div>
          </div>
        </div>
      </Section>

      {/* 10. УНИКАЛЬНОСТЬ */}
      <Section tone="muted" containerClassName="max-w-5xl">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-background p-8 shadow-xl ring-1 ring-border sm:p-12">
          {/* Decorative elements */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-destructive/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-deep ring-1 ring-accent/20">
            <Award className="h-4 w-4" />
            Наш подход
          </div>

          <h2 className="text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            На рынке я не видел, чтобы <br className="hidden sm:block" /> так кто-то делал
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Как делают все */}
            <div className="relative rounded-2xl bg-destructive/5 p-6 ring-1 ring-destructive/10 transition-transform hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-destructive/80">
                Обычно это:
              </p>
              <p className="mt-2 text-xl font-bold italic text-foreground">
                «Давайте просто настроим больше рекламы…»
              </p>
            </div>

            {/* Как делаем мы */}
            <div className="relative rounded-2xl bg-accent-soft/40 p-6 ring-1 ring-accent/20 transition-transform hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-deep">
                <Check className="h-6 w-6" strokeWidth={3} />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent-deep/80">
                А мы сначала:
              </p>
              <p className="mt-2 text-xl font-bold text-foreground">
                Закроем все дыры в воронке.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border bg-muted/50 p-6 text-center shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-shimmer" aria-hidden="true" />
            <p className="text-lg font-semibold sm:text-xl text-foreground">
              Нет смысла лить больше воды в дырявое ведро. 🪣💧
            </p>
          </div>
        </div>
      </Section>

      {/* 11. ОГРАНИЧЕНИЕ */}
       <Section>
        <div className="flex items-center gap-4 rounded-2xl border-l-4 border-accent bg-accent-soft p-5 sm:p-6 shadow-md">
          <div className="relative">
            <AlertTriangle className="h-6 w-6 shrink-0 text-accent-deep" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-destructive animate-ping" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-destructive" />
          </div>
          <div className="flex-1 text-center">
            <p className="text-base font-semibold leading-snug sm:text-lg">
              Важно: делаем максимум 2 исследования в неделю.
            </p>
            <p className="mt-2 text-base leading-snug text-muted-foreground sm:text-lg">
              И только с одной клиникой в городе.
            </p>
          </div>
        </div>
      </Section>

      {/* 12. ВЫБОР — ДВЕ ДОРОГИ */}
      <Section tone="muted" containerClassName="max-w-6xl">
        <h2 className="text-center text-4xl font-black uppercase tracking-tight sm:text-5xl drop-shadow-sm">
          Две дороги:
        </h2>

        {/* Развилка-эмодзи между заголовком и карточками */}
        <div className="mt-4 flex justify-center text-5xl sm:text-6xl" aria-hidden="true">
          🛣️
        </div>

        <div className="mx-auto mt-6 grid max-w-5xl gap-6 sm:grid-cols-2">
          {/* Красная — первая дорога */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-road-bad to-road-bad/80 p-8 text-road-bad-foreground shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-road-bad/30 ring-1 ring-black/5">
            <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="flex justify-center text-6xl drop-shadow-md sm:text-7xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                🤷‍♂️
              </div>
              <h3 className="mt-6 text-center text-2xl font-black uppercase leading-tight tracking-wide sm:text-3xl">
                Первая дорога:
              </h3>
              <div className="mt-8 space-y-5">
                {[
                  "Закрыть эту страницу",
                  "Дальше сидеть без денег",
                  "Через год жалеть о потерянном времени",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm shadow-inner">
                      <X className="h-5 w-5 text-white/90" strokeWidth={3} />
                    </div>
                    <span className="text-lg font-medium leading-tight sm:text-xl text-white/95 pt-0.5">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Зелёная — для волков */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-road-good to-road-good/90 p-8 text-road-good-foreground shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-road-good/30 ring-2 ring-white/30">
            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/20 blur-3xl transition-transform duration-500 group-hover:scale-150" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="flex justify-center text-6xl drop-shadow-md sm:text-7xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                🐺
              </div>
              <h3 className="mt-6 text-center text-2xl font-black uppercase leading-tight tracking-wide sm:text-3xl">
                Вторая дорога <br className="hidden sm:block" />
                <span className="text-white/90 opacity-90 text-xl sm:text-2xl">(для волков):</span>
              </h3>
              <div className="mt-8 space-y-5">
                {[
                  "Пройти диагностику",
                  "Узнать свои слабые места",
                  "Начать зарабатывать как босс",
                ].map((t, i) => (
                  <div key={t} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
                      <span className="text-lg font-black text-road-good">{i + 1}</span>
                    </div>
                    <span className="text-lg font-bold leading-tight sm:text-xl text-white pt-0.5">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 13. CTA — ВРЕМЯ ДЕЙСТВОВАТЬ */}
      <Section>
        <h2 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl">
          Время действовать
        </h2>

        <div className="mt-7">
          <Banner>
            Если хотите понять как&nbsp;вырасти — нажимайте на&nbsp;кнопку ниже
          </Banner>
        </div>

        <div className="mt-6">
          <ScrollToFormButton
            variant="cta-orange"
            label="🔗 ХОЧУ ПОЛУЧИТЬ ДОСТУП К СИСТЕМЕ «ВРАЧ НА МИЛЛИОН»"
            className="uppercase"
          />
        </div>
      </Section>

      {/* 14. ВАЖНОЕ НАПОМИНАНИЕ */}
      <Section tone="muted" containerClassName="max-w-4xl">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-card p-6 sm:p-10 shadow-2xl ring-1 ring-border">
          {/* Subtle glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-banner/5 to-transparent animate-pulse" aria-hidden="true" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 ring-8 ring-destructive/5">
              <Clock className="h-8 w-8 text-destructive animate-pulse" />
            </div>
            
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl">
              Помните:
            </h3>
            
            <p className="mt-6 text-lg font-medium leading-relaxed sm:text-xl text-muted-foreground max-w-2xl">
              Пока вы думаете, ваши конкуренты внедряют системы продаж и <span className="font-bold text-foreground">забирают ваших пациентов</span>.
            </p>
          </div>
        </div>
      </Section>

      {/* 15. ФИНАЛ */}
      <Section className="pb-20" containerClassName="max-w-5xl">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-card to-card/40 p-8 shadow-2xl ring-1 ring-border sm:p-14 text-center">
          {/* Subtle glow */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-64 w-full max-w-xl rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl text-foreground">
              В медицинском бизнесе <br className="hidden sm:block" /> есть <span className="text-accent-deep">два типа</span> клиник
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-2xl">
              Те, кто <span className="font-bold text-foreground underline decoration-accent/30 decoration-4 underline-offset-4">растёт по системе</span>, и те, кто оправдывает стагнацию обстоятельствами.
            </p>

            <div className="mx-auto mt-10 max-w-lg">
              <div className="rounded-2xl bg-gradient-to-r from-banner/90 to-banner px-6 py-4 text-center shadow-lg ring-1 ring-banner/50">
                <p className="text-lg font-black uppercase tracking-widest text-white sm:text-xl">
                  В какой категории хотите быть вы?
                </p>
              </div>
            </div>

            <div className="mt-10 mx-auto max-w-md">
              <ScrollToFormButton
                variant="cta-orange"
                label="🔗 ХОЧУ ПОЛУЧИТЬ ДОСТУП К СИСТЕМЕ «ВРАЧ НА МИЛЛИОН»"
                className="w-full text-sm sm:text-base py-6 rounded-2xl shadow-xl shadow-orange-500/20 uppercase"
              />
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t bg-muted px-5 py-10 pb-24 sm:pb-10 text-center text-xs text-muted-foreground">
        <a
          href="https://wa.me/77472842595"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
        >
          <Phone className="h-3.5 w-3.5" />
          WhatsApp: +7 747 284 25 95
        </a>
        <p className="mt-3">© {new Date().getFullYear()} Система «Врач на миллион»</p>
      </footer>
    </main>
  );
};

export default Index;
