import { Check, ArrowRight, AlertTriangle, Phone, MapPin, Square, X, TrendingUp, Users, Wallet, Sparkles, Gift, MessageCircle, Map, BarChart3, PhoneCall, BadgeCheck, Award, Building2 } from "lucide-react";
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
        <div className="rounded-md bg-destructive px-5 py-5 sm:px-6 sm:py-6 text-center">
          <p className="text-primary-foreground font-sans font-semibold sm:text-xl md:text-2xl">
            Проверенная методика
          </p>
          <p className="mt-1 text-primary-foreground font-sans font-semibold sm:text-xl md:text-2xl">
            для владельцев медицинских центров
          </p>
        </div>

        {/* Главный заголовок */}
        <h1 className="mt-4 text-center font-extrabold uppercase leading-[1.1] tracking-tight sm:mt-10 sm:text-4xl md:text-5xl whitespace-pre-line text-xl">
          ИЩУ 2-Х ВЛАДЕЛЬЦЕВ МЕДИЦИНСКИХ ЦЕНТРОВ, КОТОРЫЕ ХОТЯТ СТАБИЛЬНЫЙ ПОТОК ПЕРВИЧНЫХ ПАЦИЕНТОВ,{"\n"}И ПОЛНОСТЬЮ ЗАПОЛНИТЬ ГРАФИК ВСЕХ ДОКТОРОВ
        </h1>

        {/* Синий баннер */}
        <div className="mt-3 sm:mt-10">
          <Banner className="px-3 py-4 sm:px-6 sm:py-6 text-base">
            Которые устали работать за&nbsp;копейки и&nbsp;хотят выйти на&nbsp;доход от&nbsp;300&nbsp;000 до&nbsp;600&nbsp;000&nbsp;₸ в&nbsp;день, имея больше свободного времени и&nbsp;меньше стресса
          </Banner>
        </div>

        {/* Картинка с ноутбуком — оформленная сцена */}
        <div className="mt-6 sm:mt-10">
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-xl">
            {/* Радиальный фон */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),transparent_65%)] blur-2xl"
            />
            {/* Бейдж сверху */}
            <div className="mb-3 flex justify-center sm:mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Авторская система
              </span>
            </div>

            {/* Карточка со сценой */}
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-muted/60 to-background px-4 pt-6 pb-4 shadow-[0_20px_60px_-25px_hsl(var(--primary)/0.35)] sm:px-8 sm:pt-10 sm:pb-6">
              {/* Тонкая сетка на фоне */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:28px_28px]"
              />
              <img
                src={heroLaptop}
                alt="Система «Врач на миллион» — превращение первичных заявок в пациентов"
                width={1024}
                height={1024}
                loading="eager"
                className="relative mx-auto block w-full max-w-[360px] drop-shadow-[0_18px_24px_rgba(0,0,0,0.18)] sm:max-w-lg"
              />
              {/* Тень-блик под ноутбуком */}
              <div
                aria-hidden
                className="relative mx-auto -mt-2 h-3 w-[70%] rounded-[50%] bg-foreground/20 blur-md"
              />
            </div>

            {/* Подпись-фичи */}
            <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
              {[
                { icon: BarChart3, label: "Поток заявок" },
                { icon: Users, label: "Запись докторов" },
                { icon: TrendingUp, label: "Рост выручки" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 rounded-xl border border-border/60 bg-card/60 px-2 py-2 text-center backdrop-blur-sm sm:flex-row sm:justify-center sm:gap-2 sm:py-3"
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden />
                  <span className="text-[11px] font-medium leading-tight text-foreground/80 sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Кнопка */}
        <div className="mt-6 sm:mt-8">
          <ScrollToFormButton />
        </div>
      </Section>

      {/* 2. БОЛЬ */}
      <Section tone="muted">
        <div className="rounded-2xl border-2 border-destructive/70 bg-background p-5 sm:p-7">
          <h2 className="text-center text-2xl font-extrabold leading-tight sm:text-3xl">
            Ответьте на вопросы — ответ на которые «ДА»:
          </h2>

          <ul className="mx-auto mt-6 max-w-md space-y-5">
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
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border bg-card p-3 text-center shadow-sm sm:p-4">
                <Building2 className="mx-auto h-5 w-5 text-accent-deep" />
                <p className="mt-2 text-xl font-extrabold sm:text-2xl">25+</p>
                <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                  мед. центров
                </p>
              </div>
              <div className="rounded-xl border bg-card p-3 text-center shadow-sm sm:p-4">
                <TrendingUp className="mx-auto h-5 w-5 text-accent-deep" />
                <p className="mt-2 text-xl font-extrabold sm:text-2xl">500к+</p>
                <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                  тг в день
                </p>
              </div>
              <div className="rounded-xl border bg-card p-3 text-center shadow-sm sm:p-4">
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

        <div className="mt-6 overflow-hidden rounded-2xl border bg-card shadow-md">
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
            <div className="mt-7 rounded-2xl bg-banner p-6 text-center text-white shadow-lg">
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
        <div className="rounded-2xl bg-banner p-7 text-center text-white sm:p-10">
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
        <div className="rounded-2xl border-2 border-destructive/70 bg-background p-6 sm:p-8">
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
        <h2 className="text-center text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl md:text-3xl">
          ЕСЛИ ТЫ ХОЧЕШЬ ЗАБЫТЬ О РАБОТЕ ЗА КОПЕЙКИ И НАЧАТЬ ЗАРАБАТЫВАТЬ КАК ТОПОВЫЙ МЕДИЦИНСКИЙ ЦЕНТР, ИМЕЯ БОЛЬШЕ СВОБОДНОГО ВРЕМЕНИ И ЭНЕРГИИ 
        </h2>
        <p className="mt-5 text-center leading-relaxed sm:text-lg text-lg">
          Это требует <span className="font-semibold">системного подхода</span>. Без системы вы будете
          и дальше терять пациентов и деньги.
        </p>
      </Section>

      {/* 9. ЧТО ПОЛУЧИТЕ */}
      <Section>
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-deep">
          <Gift className="h-3.5 w-3.5" />
          4 шага диагностики
        </div>
        <h2 className="text-center font-bold leading-tight sm:text-3xl text-xl">
          Что вы получите вместе{"\n"}
          <span className="text-accent-deep">с консультацией</span>
        </h2>
        <p className="mt-3 text-center text-base text-muted-foreground sm:text-lg whitespace-pre-line">
          Найдём все дыры, через которые утекают{"\n"}ваши пациенты и деньги.
        </p>

        <ul className="mt-7 space-y-4">
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
              title: "Анализ рекламы и каналов привлечения",
              desc: "Разберём текущие источники пациентов и точки утечки бюджета",
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
              <li
                key={i}
                className="group relative overflow-hidden rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
              >
                <span className="absolute right-3 top-3 text-5xl font-black leading-none text-accent/10 sm:text-6xl">
                  {i + 1}
                </span>
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                    <Icon className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.desc}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-sm font-bold text-accent-deep">
                      Ценность: {item.value}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 overflow-hidden rounded-2xl bg-banner text-white shadow-xl">
          <div className="space-y-3 p-6 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-base text-white/80 sm:text-lg">Общая ценность:</span>
              <span className="text-xl font-bold line-through opacity-70 sm:text-2xl">
                340 000 ₸
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-base font-semibold text-highlight sm:text-lg">
                Ваша экономия:
              </span>
              <span className="text-xl font-extrabold text-highlight sm:text-2xl">
                −330 100 ₸
              </span>
            </div>
          </div>

          <div className="border-t border-white/20 bg-white/5 px-6 py-6 text-center sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Стоимость диагностики сегодня
            </p>
            <p className="mt-2 text-5xl font-black leading-none text-highlight sm:text-6xl">
              9 900 ₸
            </p>
            <p className="mt-3 text-sm text-white/70">
              Окупится с первого пациента
            </p>
            <div className="mt-5">
              <ScrollToFormButton label="Записаться за 9 900 ₸" />
            </div>
          </div>
        </div>
      </Section>

      {/* 10. УНИКАЛЬНОСТЬ */}
      <Section tone="muted">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          На рынке я не видел, чтобы так кто-то делал
        </h2>
        <p className="mt-4 text-center leading-relaxed sm:text-lg text-xl">
          Обычно это: <span className="italic">«Давайте больше рекламы настроим…»</span>
        </p>
        <p className="mt-3 text-center leading-relaxed sm:text-lg text-xl">
          А мы сначала закроем все дыры в воронке. Нет смысла лить больше воды в дырявое ведро.
        </p>
      </Section>

      {/* 11. ОГРАНИЧЕНИЕ */}
      <Section>
        <div className="flex items-center gap-4 rounded-2xl border-l-4 border-accent bg-accent-soft p-5 sm:p-6">
          <AlertTriangle className="h-6 w-6 shrink-0 text-accent-deep" />
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
      <Section tone="muted">
        <h2 className="text-center text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Две дороги:
        </h2>

        {/* Развилка-эмодзи между заголовком и карточками */}
        <div className="mt-4 flex justify-center text-5xl sm:text-6xl" aria-hidden="true">
          🛣️
        </div>

        <div className="mt-2 grid grid-cols-2 gap-3 sm:gap-4">
          {/* Красная — первая дорога */}
          <div className="rounded-3xl bg-road-bad p-5 text-road-bad-foreground shadow-lg sm:p-6">
            <div className="flex justify-center text-5xl sm:text-6xl" aria-hidden="true">
              🤷‍♂️
            </div>
            <h3 className="mt-3 text-center text-xl font-black uppercase leading-tight sm:text-2xl">
              Первая<br />дорога:
            </h3>
            <ul className="mt-5 space-y-4 text-base sm:text-lg">
              {[
                "Закрыть эту страницу",
                "Дальше сидеть без денег",
                "Через год жалеть о потерянном времени",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <X className="mt-1 h-4 w-4 shrink-0" strokeWidth={3} />
                  <span className="leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Зелёная — для волков */}
          <div className="rounded-3xl bg-road-good p-5 text-road-good-foreground shadow-lg sm:p-6">
            <div className="flex justify-center text-5xl sm:text-6xl" aria-hidden="true">
              🐺
            </div>
            <h3 className="mt-3 text-center text-xl font-black uppercase leading-tight sm:text-2xl">
              Вторая дорога<br />(для&nbsp;волков):
            </h3>
            <ul className="mt-5 space-y-4 text-base sm:text-lg">
              {[
                "Пройти диагностику",
                "Узнать свои слабые места",
                "Начать зарабатывать как босс",
              ].map((t, i) => (
                <li key={t} className="flex gap-2">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/90 text-sm font-black text-road-good shadow-sm"
                  >
                    {i + 1}
                  </span>
                  <span className="leading-snug">{t}</span>
                </li>
              ))}
            </ul>
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

      {/* 14. ДОЖИМ */}
      <Section tone="muted">
        <div className="space-y-4 text-center text-base leading-relaxed sm:text-lg">
          <p>
            <span className="font-bold">P.S. Завтра свободных мест может не быть.</span>{" "}
            Я беру максимум 2 клиники в неделю и только одну в каждом городе.
          </p>
          <p>
            <span className="font-bold">P.P.S.</span> Если вы всё ещё думаете — просто представьте,
            где будете через год, когда узнаете,{" "}
            <span className="font-bold">что мои клиенты уже делают по 20+ миллионов</span>.
          </p>
          <div className="flex items-center gap-3 rounded-xl border-l-4 border-banner bg-background p-4 text-left">
            <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-banner" />
            <p className="font-medium">
              Помните: пока вы думаете, ваши конкуренты внедряют системы продаж и забирают
              ваших пациентов.
            </p>
          </div>
        </div>
      </Section>

      {/* 15. ФИНАЛ */}
      <Section>
        <h2 className="text-center text-2xl font-extrabold leading-tight sm:text-3xl">
          В медицинском бизнесе есть два типа клиник
        </h2>
        <p className="mt-4 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Те, кто <span className="font-semibold text-foreground">растёт по системе</span>,
          и те, кто оправдывает стагнацию обстоятельствами.
        </p>

        <div className="mt-6">
          <Banner>В какой категории хотите быть&nbsp;вы?</Banner>
        </div>

        <div className="mt-6">
          <ScrollToFormButton
            variant="cta-orange"
            label="🔗 ХОЧУ ПОЛУЧИТЬ ДОСТУП К СИСТЕМЕ «ВРАЧ НА МИЛЛИОН»"
            className="uppercase"
          />
        </div>
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
