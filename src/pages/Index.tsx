import { Check, ArrowRight, AlertTriangle, Phone, MapPin, Square, X } from "lucide-react";
import Section from "@/components/landing/Section";
import Banner from "@/components/landing/Banner";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import yuriPhoto from "@/assets/yuri.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      {/* 1. HERO */}
      <Section className="flex min-h-[100svh] flex-col justify-center py-6 sm:py-10">
        <Banner className="px-4 py-4 text-xs sm:text-base">
          Новая методика: для&nbsp;владельцев медицинских центров и&nbsp;врачей
        </Banner>

        <h1 className="mt-6 text-center text-xl font-extrabold uppercase leading-[1.1] tracking-tight sm:mt-8 sm:text-4xl md:text-5xl">
          Ищу 2-х владельцев медцентров, которые хотят стабильный поток первичных пациентов
        </h1>

        <div className="mt-6 sm:mt-8">
          <Banner className="px-4 py-4 text-xs sm:text-base">
            Которые устали работать за&nbsp;копейки и&nbsp;хотят выйти на&nbsp;доход от&nbsp;300&nbsp;000 до&nbsp;600&nbsp;000&nbsp;₸ в&nbsp;день, имея больше свободного времени и&nbsp;меньше стресса
          </Banner>
        </div>

        <div className="mt-6 sm:mt-8">
          <WhatsAppButton />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Записаться на диагностику в WhatsApp
          </p>
        </div>
      </Section>

      {/* 2. БОЛЬ */}
      <Section tone="muted">
        <div className="rounded-2xl border-2 border-destructive/70 bg-background p-5 sm:p-7">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
            Ответьте на вопросы — ответ на которые «ДА»:
          </h2>

          <ul className="mt-6 space-y-5">
            {[
              "Устали работать и нанимать разных таргетологов, SMMщиков, которые обещают результат, но пациентов нет и нет",
              "Видите, как ваши коллеги успешно зарабатывают и путешествуют, а вы смотрите на них и не понимаете «ЧТО ВЫ ДЕЛАЕТЕ НЕ ТАК»",
              "Вынуждены цепляться за каждого пациента, даже на невыгодных условиях",
              "Не знаете, как привлекать клиентов на премиум-услуги и выйти из ловушки дешёвых пациентов?",
              "Больше всего надоело, что пациенты уходят к конкурентам, а вы не понимаете почему",
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
        <div className="mt-6 text-center text-3xl">👇</div>
        <div className="mt-3">
          <WhatsAppButton />
        </div>
      </Section>

      {/* 4. ОБО МНЕ */}
      <Section tone="muted">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
          <img
            src={yuriPhoto}
            alt="Юрий — автор системы «Врач на миллион»"
            className="w-full max-w-sm shrink-0 rounded-2xl object-contain shadow-lg sm:w-64 sm:max-w-none"
          />

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
      <Section>
        <div className="rounded-2xl bg-ink-deep p-7 text-center text-white sm:p-10">
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
          <h2 className="text-2xl font-extrabold sm:text-3xl">Никакого подвоха нет.</h2>
          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            Мы проводим консультации, чтобы показать <span className="font-bold">вам свой</span> метод
            ежедневного привлечения премиум-пациентов на услуги имплантов, виниров и т.д.
          </p>
          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            Если после консультации вы захотите, <span className="font-bold">чтобы мы помогли</span> выйти на
            доход от 500 000 тенге в день с помощью моего метода — то сможете продолжить работу со мной
            на платной основе. Консультация вас ни к чему не обязывает.
          </p>
          <p className="mt-5 text-lg font-bold sm:text-xl">Да-да, нет-нет.</p>
          <p className="mt-2 text-lg font-bold sm:text-xl">ВСЁ по ЧЕСТНОМУ 🤝</p>
        </div>
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

        {/* Тёмная плашка-обводка с оранжевой кнопкой — как в референсе */}
        <div className="mt-6 rounded-2xl bg-ink-deep p-4 sm:p-5">
          <WhatsAppButton
            variant="cta-orange"
            label="🔗 ХОЧУ ПОЛУЧИТЬ ДОСТУП К СИСТЕМЕ «ВРАЧ НА МИЛЛИОН»"
            className="uppercase"
          />
        </div>
      </Section>

      {/* 14. ДОЖИМ */}
      <Section tone="muted">
        <div className="space-y-4 text-base leading-relaxed sm:text-lg">
          <p>
            <span className="font-bold">P.S. Завтра свободных мест может не быть.</span>{" "}
            Я беру максимум 2 клиники в неделю и только одну в каждом городе.
          </p>
          <p>
            <span className="font-bold">P.P.S.</span> Если вы всё ещё думаете — просто представьте,
            где будете через год, когда узнаете,{" "}
            <span className="font-bold">что мои клиенты уже делают по 20+ миллионов</span>.
          </p>
          <div className="flex gap-3 rounded-xl border-l-4 border-banner bg-background p-4">
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
        <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
          В медицинском бизнесе есть два типа клиник
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Те, кто <span className="font-semibold text-foreground">растёт по системе</span>,
          и те, кто оправдывает стагнацию обстоятельствами.
        </p>

        <div className="mt-6">
          <Banner>В какой категории хотите быть&nbsp;вы?</Banner>
        </div>

        <div className="mt-6 rounded-2xl bg-ink-deep p-4 sm:p-5">
          <WhatsAppButton
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
