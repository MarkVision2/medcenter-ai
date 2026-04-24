import { Check, ArrowRight, AlertTriangle, Phone, MapPin, Target, Sparkles } from "lucide-react";
import Section from "@/components/landing/Section";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      {/* 1. HERO */}
      <Section className="pt-10 sm:pt-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-deep sm:text-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Проверенная методика для владельцев медицинских центров
        </div>

        <h1 className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          Ищу 2-х владельцев медицинских центров,
          <br />
          которые хотят стабильный поток пациентов и полностью заполнить всех своих докторов
        </h1>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Которые устали работать за копейки и хотят выйти на доход
          <span className="font-semibold text-foreground"> от 300 000 до 600 000 тенге в день</span>,
          имея больше свободного времени и меньше стресса.
        </p>

        <div className="mt-8">
          <WhatsAppButton />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Записаться на диагностику в WhatsApp
          </p>
        </div>
      </Section>

      {/* 2. БОЛЬ */}
      <Section tone="muted">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
          Теперь ответьте себе честно. Вы устали:
        </h2>

        <ul className="mt-6 space-y-4">
          {[
            "Постоянно нанимать таргетологов и SMM-специалистов, которые обещают пациентов, но их нет",
            "Видеть, как коллеги зарабатывают, покупают машины и квартиры, а вы топчитесь на одном месте",
            "Цепляться за каждого пациента и «дожимать» скидками, работая в минус",
            "Работать с дешёвыми пациентами, которые не дают прибыли, потом возмущаются и просят возврат",
            "Не понимать, как продавать дорогие услуги, и надеяться, что пациенты «сами придут»",
            "Хотите создать пассивный доход, чтобы первичные пациенты приходили сами и оставляли вам деньги, а врачи лечили",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 rounded-lg bg-background p-4 shadow-sm">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-base leading-relaxed sm:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. ПЕРЕХОД */}
      <Section>
        <div className="rounded-2xl border border-accent/20 bg-accent-soft/60 p-6 sm:p-8">
          <p className="text-base leading-relaxed sm:text-lg">
            Если вы поставили мысленно хотя бы одну галочку — записывайтесь на диагностику и получите
            <span className="font-semibold"> пошаговый план роста</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Я расскажу, как вам забыть о работе за копейки и начать зарабатывать как лучшие клиники
            Казахстана, имея больше свободного времени и энергии.
          </p>

          <div className="mt-6 flex justify-center text-2xl">👇</div>
          <div className="mt-3">
            <WhatsAppButton />
          </div>
        </div>
      </Section>

      {/* 4. ОБО МНЕ */}
      <Section tone="muted">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
          <div
            className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-background ring-4 ring-accent-soft sm:h-40 sm:w-40"
            aria-label="Фото Юрия (плейсхолдер)"
          >
            <span className="text-xs text-muted-foreground">Фото Юрия</span>
          </div>

          <div className="mt-5 sm:mt-0">
            <h2 className="text-2xl font-bold sm:text-3xl">Привет, меня зовут Юрий</h2>
            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Я прошёл путь от просто человека, который запускает рекламу для стоматологий и
              медицинских центров, до эксперта, который создал систему, по которой мед. центры
              получают не просто заявки, а именно <span className="font-semibold">«платежеспособных» пациентов</span>.
            </p>
            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Я помогаю медицинским клиникам вырваться из замкнутого круга и выйти на доход
              <span className="font-semibold"> от 500 000 тенге в день</span> через систему
              «Врач на миллион» — ту самую систему, которая изменила жизнь уже{" "}
              <span className="font-semibold">25+ мед. центрам</span>.
            </p>
          </div>
        </div>
      </Section>

      {/* 5. КЕЙС */}
      <Section>
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
          Но почему я так уверен, что эта система реально работает?
        </h2>

        <div className="mt-6 rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-sm font-medium text-accent-deep">
            <MapPin className="h-4 w-4" />
            Конкретный пример. Клиника из Астаны
          </div>

          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            Работал один администратор, который не справлялся со звонками. Записывал всех подряд,
            а приходило <span className="font-semibold">30%</span> от записанных.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Что мы сделали?</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Вывели 2 девушек в отдельный колл-центр",
              "Обучили скриптам продаж первичных консультаций",
              "Поставили задачу: продать приём с предоплатой или полной оплатой",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={3} />
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-accent-soft p-5">
            <div className="text-sm font-medium uppercase tracking-wide text-accent-deep">
              Результат за 2 недели
            </div>
            <p className="mt-2 text-xl font-bold leading-tight sm:text-2xl">
              107 новых пациентов с оплатой
            </p>
            <p className="mt-1 text-xl font-bold text-accent-deep sm:text-2xl">
              +10 000 000 тенге в кассу
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              без дополнительных трат на рекламу
            </p>
          </div>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Тот же бюджет на рекламу, но в 3 раза больше реально пришедших и оплативших пациентов.
            В чём разница? <span className="font-semibold text-foreground">Правильные люди на правильных позициях.</span>
          </p>
        </div>
      </Section>

      {/* 6. РЕЗУЛЬТАТ */}
      <Section tone="accent">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-deep">
            За 3 месяца
          </p>
          <p className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            60 000 000 тенге
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Выстроили стабильную систему привлечения первичных пациентов и их удержания —{" "}
            <span className="font-semibold text-foreground">без участия собственника клиники</span>.
          </p>
        </div>
      </Section>

      {/* 7. СКЕПСИС */}
      <Section>
        <h2 className="text-2xl font-bold sm:text-3xl">Звучит круто. А в чём подвох?</h2>
        <p className="mt-5 text-base leading-relaxed sm:text-lg">
          <span className="font-semibold">Никакого подвоха нет.</span>
        </p>
        <p className="mt-3 text-base leading-relaxed sm:text-lg">
          Мы проводим консультации, чтобы показать вам наш метод ежедневного привлечения премиум-пациентов
          на услуги ваших докторов и способ создания премиальных продуктов, которые нужны вашим
          пациентам и за которые они готовы платить дорого.
        </p>
        <p className="mt-3 text-base leading-relaxed sm:text-lg">
          Если после консультации вы захотите, чтобы мы помогли выйти на доход от 500 000 тенге
          в день с помощью моего метода — сможете продолжить работу со мной на платной основе.
        </p>
        <p className="mt-5 rounded-lg bg-muted p-4 text-base font-medium sm:text-lg">
          Консультация вас ни к чему не обязывает. Да-да, нет-нет. Всё по честному 🤝
        </p>
      </Section>

      {/* 8. СУТЬ */}
      <Section tone="muted">
        <h2 className="text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl md:text-3xl">
          Если ты хочешь забыть о работе за копейки и начать зарабатывать как топовый медицинский центр,
          имея больше свободного времени и энергии —
        </h2>
        <p className="mt-5 text-base leading-relaxed sm:text-lg">
          это требует <span className="font-semibold">системного подхода</span>. Без системы вы будете
          и дальше терять пациентов и деньги.
        </p>
      </Section>

      {/* 9. ЧТО ПОЛУЧИТЕ */}
      <Section>
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
          Что вы получите вместе с консультацией
        </h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          Найдём все дыры, через которые утекают ваши пациенты и деньги.
        </p>

        <ul className="mt-6 space-y-4">
          {[
            {
              title: "Часовая консультация 1-на-1 со мной",
              desc: "Покажу, как привлекать первичных пациентов с бюджетами от 500 000 тенге без бесконечного поиска и сарафанного радио",
              value: "150 000 тг",
            },
            {
              title: "Карта с пошаговым планом",
              desc: "Как выйти на стабильный доход 300 000 – 600 000 тг в день, даже если сейчас зарабатываете в 5 раз меньше",
              value: "80 000 тг",
            },
            {
              title: "Анализ рекламы и каналов привлечения",
              desc: "Разберём текущие источники пациентов и точки утечки бюджета",
              value: "60 000 тг",
            },
            {
              title: "Тайный звонок",
              desc: "Прозвоним как пациент, запишем разговор, покажем, где администратор сливает заявки",
              value: "50 000 тг",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.desc}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-accent-deep">
                    Ценность: {item.value}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl bg-foreground p-6 text-background sm:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-base sm:text-lg">Общая ценность:</span>
            <span className="text-xl font-bold line-through opacity-70 sm:text-2xl">
              340 000 тг
            </span>
          </div>
          <div className="mt-4 border-t border-background/20 pt-4">
            <p className="text-sm uppercase tracking-wide opacity-80">
              Стоимость диагностики сегодня
            </p>
            <p className="mt-2 text-4xl font-extrabold sm:text-5xl">9 900 ₸</p>
          </div>
          <div className="mt-6">
            <WhatsAppButton label="Записаться на диагностику за 9 900 ₸" />
          </div>
        </div>
      </Section>

      {/* 10. УНИКАЛЬНОСТЬ */}
      <Section tone="muted">
        <h2 className="text-2xl font-bold sm:text-3xl">
          На рынке я не видел, чтобы так кто-то делал
        </h2>
        <p className="mt-4 text-base leading-relaxed sm:text-lg">
          Обычно это: <span className="italic">«Давайте больше рекламы настроим…»</span>
        </p>
        <p className="mt-3 text-base leading-relaxed sm:text-lg">
          А мы сначала закроем все дыры в воронке. Нет смысла лить больше воды в дырявое ведро.
        </p>
      </Section>

      {/* 11. ОГРАНИЧЕНИЕ */}
      <Section>
        <div className="flex gap-4 rounded-2xl border-l-4 border-accent bg-accent-soft p-5 sm:p-6">
          <AlertTriangle className="h-6 w-6 shrink-0 text-accent-deep" />
          <div>
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
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Итак, у вас две дороги
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border bg-background p-6">
            <div className="text-3xl">🤷🏻‍♂️</div>
            <h3 className="mt-3 text-lg font-bold">Первая дорога</h3>
            <ul className="mt-4 space-y-3 text-base text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-destructive">✖</span>
                Закрыть эту страницу
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">✖</span>
                Дальше сидеть без денег
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">✖</span>
                Через год жалеть о потерянном времени
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-accent bg-accent-soft p-6 shadow-md">
            <div className="text-3xl">🐺</div>
            <h3 className="mt-3 text-lg font-bold text-accent-deep">
              Вторая дорога — для волков
            </h3>
            <ul className="mt-4 space-y-3 text-base">
              <li className="flex gap-2">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                Пройти диагностику
              </li>
              <li className="flex gap-2">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                Узнать свои слабые места
              </li>
              <li className="flex gap-2">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                Начать зарабатывать как босс
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 13. CTA — ВРЕМЯ ДЕЙСТВОВАТЬ */}
      <Section>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent-deep">
            <Target className="h-3.5 w-3.5" />
            Время действовать
          </div>
          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
            Если готовы перестать терять пациентов — нажимайте на кнопку ниже
          </h2>

          <div className="mt-6 flex justify-center text-2xl">👇</div>
          <div className="mt-3">
            <WhatsAppButton />
          </div>
        </div>
      </Section>

      {/* 14. ДОЖИМ */}
      <Section tone="muted">
        <div className="flex gap-3">
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-accent-deep" />
          <p className="text-base font-medium leading-relaxed sm:text-lg">
            Помните: пока вы думаете, ваши конкуренты внедряют системы продаж и забирают
            ваших пациентов.
          </p>
        </div>
      </Section>

      {/* 15. ФИНАЛ */}
      <Section>
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
          В медицинском бизнесе есть два типа клиник
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Те, кто <span className="font-semibold text-foreground">растёт по системе</span>,
          и те, кто оправдывает стагнацию обстоятельствами.
        </p>
        <p className="mt-6 text-lg font-semibold sm:text-xl">
          В какой категории хотите быть вы?
        </p>

        <div className="mt-6">
          <WhatsAppButton />
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
