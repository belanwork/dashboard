# React Приложение было созданно по [этому](https://github.com/avito-tech/pro-fe-trainee-task/blob/master/README.md) техническому заданию.

## Инструкция:

### `npm install`
### `npm start`

Устанавливает модули и запускает веб приложение на 3000 порте. 

## Дополнительное описание:

В задании было указанно:

> Если в поле ничего не введено, то показывается список 10ти самых популярных репозиториев.

API GitHub не предусматривает поиск репозиториев из раздела [TRENDING](https://github.com/trending), поэтому мною было принятно решение по созданию собственного API. Я создал его с помощью [NodeJS Express](https://github.com/belanwork/trendingAPI) и [Python](https://github.com/belanwork/trendingAPI/blob/master/python/script.py). Раз в 10 минут, Express запускает Python скрипт, который получает весь html код, парсит и записывает результат в файл. [Сервер](http://belan.ml/) возвращает результат из [файла](https://github.com/belanwork/trendingAPI/blob/master/python/result/result.txt).