# Oltermanni

Промо сайт сыров компании Valio.

### Ссылка на сайт

- https://andryuha-nikolaev.github.io/oltermanni/

### Верстка

- Семантическая валидная вёрстка, проходит валидатор без критических ошибок.
- Адаптивная и кроссбраузерная верстка с мобильным меню.
- Растровые изображения retina-ready.
- По возможности использованы векторные изображения.
- Слайдер «В акции участвуют» сделан с помощью библиотеки Swiper.
- У всех интерактивных элементов на десктопе есть ховер. В мобильной версии ховера нет.
- Заголовок "Нам 40 лет - Вам подарки" и блок с правилами отцентрован немного отходя от макета, там было небольшое смещение вправо.
- У футера сделан верхний бордер, чтоб логически отделить от предыдущего блока.
- Плавный скролл при переходе по якорным ссылкам.

### Сборка Webpack

- Сборка фронта залита в репозиторий вместе с проектом.
- Автоматическая оптимизация изображений.

### SCSS

- Для удобства и быстроты верстки использованы переменные.
- Использован миксин для добавления элементу ховера с плавной анимацией.
- Переиспользованы стили повторяющихся блоков.

### Команды

Для установки пакетов используйте команду npm install

- Запуск сервера для разработки

```shell
npm run start
```

- Сборка проекта без оптимизации

```shell
npm run build-dev
```

- Сборка проекта с оптимизацией

```shell
npm run build-prod
```

- Очистка папки dist

```shell
npm run clear
```

- Деплой на gh-pages

```shell
npm run deploy
```
