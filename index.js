const express = require('express');

const app = express();
app.use(express.json());

const PORT = 8080;

app.get("/num/:num", (req, res) => {
    const num = req.params.num;
    res.send(num);
});

app.get("/uravnenie?:uravnenie", (req, res) => {
    const uravnenie = req.params.uravnenie;
    const a = req.query.a;
    const b = req.query.b;
    const c = req.query.c;
    const D = b * b - 4 * a * b * c;

    if(D < 0) {
        res.send("Нет корней");
    } else if (D > 0) {
        res.send(`x1 = ${((-b + Math.sqrt(D)) / (2 * a))}, x2 = ${((-b - Math.sqrt(D)) / (2 * a))}`);
    } else {
        res.send (`x = ${(-b / (2 * a))}`);
    }
});

app.get("/date?:date", (req, res) => {
    const date = new Date(req.query.date);
    const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    res.send(days[date.getDay()]);
});

app.get("/fib/:fib", (req, res) => {
    function fib(n) {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
        return b;
      }
      res.send(fib(req.params.fib));
});

app.get("/reg/:reg", (req, res) => {
    const regions = [
    ('Республика Адыгея (Адыгея)'),
    ('Республика Башкортостан'),
    ('Республика Бурятия'),
    ('Республика Алтай'),
    ('Республика Дагестан'),
    ('Республика Ингушетия'),
    ('Кабардино-Балкарская Республика'),
    ('Республика Калмыкия'),
    ('Карачаево-Черкесская Республика'),
    ('Республика Карелия'),
    ('Республика Коми'),
    ('Республика Марий Эл'),
    ('Республика Мордовия'),
    ('Республика Саха (Якутия)'),
    ('Республика Северная Осетия — Алания'),
    ('Республика Татарстан (Татарстан)'),
    ('Республика Тыва'),
    ('Удмуртская Республика'),
    ('Республика Хакасия'),
    ('Чеченская Республика'),
    ('Чувашская Республика — Чувашия'),
    ('Алтайский край'),
    ('Краснодарский край'),
    ('Красноярский край'),
    ('Приморский край'),
    ('Ставропольский край'),
    ('Хабаровский край'),
    ('Амурская область'),
    ('Архангельская область'),
    ('Астраханская область'),
    ('Белгородская область'),
    ('Брянская область'),
    ('Владимирская область'),
    ('Волгоградская область'),
    ('Вологодская область'),
    ('Воронежская область'),
    ('Ивановская область'),
    ('Иркутская область'),
    ('Калининградская область'),
    ('Калужская область'),
    ('Камчатский край'),
    ('Кемеровская область — Кузбасс'),
    ('Кировская область'),
    ('Костромская область'),
    ('Курганская область'),
    ('Курская область'),
    ('Ленинградская область'),
    ('Липецкая область'),
    ('Магаданская область'),
    ('Московская область'),
    ('Мурманская область'),
    ('Нижегородская область'),
    ('Новгородская область'),
    ('Новосибирская область'),
    ('Омская область'),
    ('Оренбургская область'),
    ('Орловская область'),
    ('Пензенская область'),
    ('Пермский край'),
    ('Псковская область'),
    ('Ростовская область'),
    ('Рязанская область'),
    ('Самарская область'),
    ('Саратовская область'),
    ('Сахалинская область'),
    ('Свердловская область'),
    ('Смоленская область'),
    ('Тамбовская область'),
    ('Тверская область'),
    ('Томская область'),
    ('Тульская область'),
    ('Тюменская область'),
    ('Ульяновская область'),
    ('Челябинская область'),
    ('Забайкальский край'),
    ('Ярославская область'),
    ('город федерального значения Москва'),
    ('город федерального значения Санкт-Петербург'),
    ('Еврейская автономная область'),
    ('Ненецкий автономный округ'),
    ('Ханты-Мансийский автономный округ — Югра'),
    ('Чукотский автономный округ'),
    ('Ямало-Ненецкий автономный округ'),
    ('Запорожская область'),
    ('Республика Крым'),
    ('город федерального значения Севастополь'),
    ('Донецкая Народная Республика'),
    ('Луганская Народная Республика'),
    ('Херсонская область')];
    res.send(regions[req.params.req + 1]);
});

app.listen(PORT);