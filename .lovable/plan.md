Добавить в `index.html` в секцию `<head>` мета-тег:

```html
<meta name="google" content="notranslate" />
```

Это отключит автоперевод страницы браузерами/расширениями, который ломает React DOM и вызывает ошибки `removeChild` / `insertBefore`.