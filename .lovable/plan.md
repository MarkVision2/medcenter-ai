## Цель

Дублировать каждую заявку с лендинга в Telegram-группу (помимо сохранения в Lovable Cloud и отправки в Meta CAPI). Сообщение должно содержать все поля формы, UTM-метки и номер CTA-кнопки, с которой была открыта форма.

## Что увидит пользователь в Telegram

```
🆕 Заявка на диагностику
Кнопка: #3 — «Записаться за 9 900 ₸»

👤 Имя: Иван Петров
📞 Телефон: +7 (707) 000-00-00
🏥 Клиника: Клиника «Здоровье»
🩺 Ниша: Стоматология

🌐 UTM:
  source: facebook
  medium: cpc
  campaign: diagnostic_q2
  content: hero_v1
  term: —

🔗 Страница: https://medcenter-ai.lovable.app/?utm_source=...
🕒 2026-04-29 14:32 (Asia/Almaty)
```

Если UTM нет — секция UTM не выводится. Если кнопка неизвестна — пишется `Кнопка: не определена`.

## Нумерация CTA-кнопок

В `src/pages/Index.tsx` сейчас 5 CTA `ScrollToFormButton`. Назначаем им стабильные ID/номера и человеко-читаемые названия (по месту в макете):

1. Hero (верх страницы)
2. После блока проблем
3. «Записаться за 9 900 ₸» (блок оффера)
4. CTA в нижнем блоке #1
5. CTA в нижнем блоке #2

Реализация:
- Добавить пропсы `ctaId: number` и `ctaName: string` в `ScrollToFormButton`.
- Прокинуть их в `DiagnosticForm` (через контекст диалога или пропсы) и далее в payload edge-функции как `cta_id` / `cta_name`.
- Проставить значения 1–5 на всех 5 вызовах в `Index.tsx`.

## UTM

- Читать `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` из `window.location.search` при сабмите.
- Сохранять в `sessionStorage` при первом заходе, чтобы UTM не терялись после внутренних переходов.
- Передавать в payload edge-функции как объект `utm`.

## Бэкенд

### 1. Секреты (Lovable Cloud)
Добавить два runtime-секрета:
- `TELEGRAM_BOT_TOKEN` = `8628667168:AAEEiO-CVCW-ypBiubdYkj5OiTtYmIQB5vM`
- `TELEGRAM_CHAT_ID` = `-1003942048094`

Хранить в коде токен нельзя — пойдёт через `add_secret`.

### 2. Edge-функция `submit-diagnostic-lead`
Расширить существующую функцию (не создавать новую, чтобы не плодить точки входа):
- Принимать новые поля: `cta_id`, `cta_name`, `utm` (объект).
- После успешной записи в БД и параллельно с Meta CAPI вызывать `https://api.telegram.org/bot<TOKEN>/sendMessage` с `chat_id = TELEGRAM_CHAT_ID`, `parse_mode: "HTML"`, и собранным сообщением (HTML-escape всех пользовательских значений).
- Ошибка Telegram логируется, но не валит ответ пользователю (заявка всё равно сохранена).

### 3. БД (опционально, рекомендуется)
Добавить в таблицу `diagnostic_leads` колонки, чтобы CRM-данные были полнее:
- `cta_id int`, `cta_name text`
- `utm_source text`, `utm_medium text`, `utm_campaign text`, `utm_content text`, `utm_term text`

Все nullable, без изменения RLS.

## Почему не использовать коннектор Telegram

Можно было бы подключить Telegram через коннектор Lovable, но:
- Нужна только одна операция `sendMessage` с фиксированным токеном бота.
- Прямой вызов `api.telegram.org` проще, не требует подключения и сразу работает.
- Если в будущем понадобится двусторонняя коммуникация (приём сообщений), мигрируем на коннектор.

## Файлы, которые будут изменены

- `supabase/functions/submit-diagnostic-lead/index.ts` — приём cta/utm, отправка в Telegram
- `src/components/landing/ScrollToFormButton.tsx` — пропсы ctaId/ctaName, проброс в форму
- `src/components/landing/DiagnosticForm.tsx` — приём ctaId/ctaName, чтение UTM, отправка в payload
- `src/pages/Index.tsx` — простановка номеров и названий 5 CTA
- Миграция БД — добавление колонок cta/utm
- Добавление секретов `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`

## Шаги выполнения после approve

1. Запросить добавление секретов `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`.
2. Миграция: добавить колонки в `diagnostic_leads`.
3. Обновить edge-функцию (Telegram + новые поля + запись в БД).
4. Обновить фронт: ScrollToFormButton, DiagnosticForm, Index.tsx.
5. Тест: отправить тестовую заявку, убедиться что приходит и в БД, и в Telegram-группу.
