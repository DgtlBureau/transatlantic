import first from "../src/assets/images/teams/image-1.png";
import second from "../src/assets/images/teams/image-2.png";
import third from "../src/assets/images/teams/image-3.png";
import fourth from "../src/assets/images/teams/image-4.png";
import fifth from "../src/assets/images/teams/image-5.png";
import sixth from "../src/assets/images/teams/image-6.png";

// CASES CHINA

import casesChinaMobileFirst from "../src/assets/images/cases/china/china-mobile-1.jpg";
import casesChinaMobileSecond from "../src/assets/images/cases/china/china-mobile-2.jpg";
import casesChinaMobileThird from "../src/assets/images/cases/china/china-mobile-3.jpg";

import casesChinaTabletFirst from "../src/assets/images/cases/china/china-tablet-1.jpg";
import casesChinaTabletSecond from "../src/assets/images/cases/china/china-tablet-2.jpg";
import casesChinaTabletThird from "../src/assets/images/cases/china/china-tablet-3.jpg";

import casesChinaDesktopFirst from "../src/assets/images/cases/china/china-desktop-1.jpg";
import casesChinaDesktopSecond from "../src/assets/images/cases/china/china-desktop-2.jpg";
import casesChinaDesktopThird from "../src/assets/images/cases/china/china-desktop-3.jpg";

import tankOne from "../src/assets/images/service/tanks/tank-1.png";
import tankSecond from "../src/assets/images/service/tanks/tank-2.png";
import containerHero from "../src/assets/images/service/tanks/container-hero.png";
import containerSmall from "../src/assets/images/park/container-20.png";
import containerBig from "../src/assets/images/park/container-40.png";

import containerBlue from "../src/assets/images/cases/containers-blue.png";
import craneBlue from "../src/assets/images/cases/crane-blue.png";
import machineBlue from "../src/assets/images/cases/machine-blue.png";
import shipBlue from "../src/assets/images/cases/ship-blue.png";

import containerGray from "../src/assets/images/cases/containers-gray.png";
import craneGray from "../src/assets/images/cases/crane-gray.png";
import machineGray from "../src/assets/images/cases/machine-gray.png";
import shipGray from "../src/assets/images/cases/ship-gray.png";

export const Teams = [
  {
    id: 0,
    avatar: first,
    name: "Юлия Бакаева",
    business: "Генеральный директор",
  },
  {
    id: 1,
    avatar: second,
    name: "Эдгар Мартиросян",
    business: "Коммерческий директор",
  },
  {
    id: 2,
    avatar: third,
    name: "Елена Клепцина",
    business: "Главный бухгалтер",
  },
  {
    id: 3,
    avatar: fourth,
    name: "Полина Орёл",
    business: "Руководитель отдела логистики",
  },
  {
    id: 4,
    avatar: fifth,
    name: "Юлия Субботкина",
    business: "Руководитель отдела экспортных перевозок",
  },
  {
    id: 5,
    avatar: sixth,
    name: "Дмитрий Медведков",
    business: "Руководитель отдела импортных перевозок",
  },
  {
    id: 6,
    avatar: first,
    name: "ИринаПархоменко",
    business: "Руководитель отдела персонала",
  },
  {
    id: 7,
    avatar: second,
    name: "Ирина Попова",
    business: "Руководитель отдела продаж",
  },
  {
    id: 8,
    avatar: third,
    name: "Михаил Епанчинцев",
    business: "Руководитель отдела перевозок по России",
  },
  {
    id: 9,
    avatar: fourth,
    name: "Дмитрий Коледа",
    business: "Руководитель офиса в Москве",
  },
];

export const casesPage = [
  {
    id: 0,
    path: "1",
    imgBlue: machineBlue,
    imgGray: machineGray,
    heading: "Станок весом 172 тонны из Китая",
    caseHeading: "Доставка станка весом 172 тонны из Китая",
    alt: "machine",
    tasks: {
      title: "Задача",
      descr:
        "Доставка оборудования для автоматической электродуговой сварки металлов общим весом 172 072 кг из порта Ксинганг в город Волгодонск",
      conditions: [
        {
          id: 0,
          heading: "Контейнеры",
          text: "10 контейнеров 40 футов",
        },
        {
          id: 1,
          heading: "172 072 кг",
          text: "Общий вес станка в собранном виде",
        },
        { id: 2, heading: "Негабарит", text: "3 крупных места" },
        { id: 3, heading: "Срок", text: "45 дней от погрузки до получения" },
      ],
    },
    process: {
      title: "Процесс",
      descr: [
        {
          id: 0,
          text: "Нам предстояло рассчитать оптимальное кол-во контейнеров для перевозки мелких деталей станка и предложить вариант транспортировки негабаритных деталей. Особое условие – груз должен прибыть в порт назначения на один терминал (для таможенной очистки) и примерно в одно и то же время (для избежания лишних расходов по хранению).",
        },
        {
          id: 1,
          text: "Мелкие детали было решено отправить в 10*40 футовых контейнерах на линии FESCO в порт ВМТП. Почему именно этот порт? – Здесь есть возможности по разгрузке тяжелых и негабаритных грузов. Это тоже нужно было учитывать при выборе порта назначения.",
        },
        {
          id: 2,
          text: "По негабаритным местам – сначала хотели использовать контейнеры типа Flat Rack (FR), но это оказалось очень дорого. Предложили клиенту отправить их балкерным судном (когда груз просто ставится на корабль), что оказалось в разы дешевле и не менее надежно. Осталось только подобрать суда примерно с одной датой выхода и подстроится под готовность груза клиента.",
        },
      ],
    },
    route: {
      title: "Маршрут",
      descr: [
        {
          id: 0,
          text: "Груз был получен в Китае и доставлен в порт Ксинганг, откуда морским путем был переправлен во Владивосток на двух разных судах с разницей в 5 дней.",
        },
        {
          id: 1,
          text: "Сухопутная часть проходила так: с контейнерами проблем не возникло, они все были отправлены по жд до станции Ростов-Товарный с дальнейшим вывозом на авто до склада клиента в г. Волгодонск. А негабаритные детали были отправлены автопоездом, ввиду высокой стоимости жд платформ.",
        },
      ],
    },
    result: {
      title: "Результат",
      results: [
        {
          id: 0,
          text: "1. Срок доставки составил 45 суток",
        },
        {
          id: 1,
          text: "2. Груз пришел в сохранности, без каких-либо повреждений, несмотря на перегрузы и сложности транспортировки негабаритных деталей",
        },
        {
          id: 2,
          text: "3. Выполнены особые условия по доставке в одно время и на один терминал",
        },
        {
          id: 3,
          text: "4. Предложена оптимальная стоимость на всех этапах перевозки",
        },
      ],
      imagesMobile: [
        {
          id: 0,
          src: casesChinaMobileFirst,
          alt: "image",
          imgDescr: "Негабаритный груз перед отправкой",
        },
        {
          id: 1,
          src: casesChinaMobileSecond,
          alt: "image",
          imgDescr: "Негабаритный груз перед отправкой",
        },
        {
          id: 2,
          src: casesChinaMobileThird,
          alt: "image",
          imgDescr: "Негабаритный груз перед отправкой",
        },
      ],
      imagesTablet: [
        {
          id: 0,
          src: casesChinaTabletFirst,
          alt: "image",
          imgDescr: "Негабаритный груз перед отправкой",
        },
        {
          id: 1,
          src: casesChinaTabletSecond,
          alt: "image",
          imgDescr: "Негабаритный груз перед отправкой",
        },
        {
          id: 2,
          src: casesChinaTabletThird,
          alt: "image",
          imgDescr: "Негабаритный груз перед отправкой",
        },
      ],
      imagesDesktop: [
        {
          id: 0,
          src: casesChinaDesktopFirst,
          alt: "image",
          imgDescr: "Негабаритный груз перед отправкой",
        },
        {
          id: 1,
          src: casesChinaDesktopSecond,
          alt: "image",
          imgDescr: "Негабаритный груз перед отправкой",
        },
        {
          id: 2,
          src: casesChinaDesktopThird,
          alt: "image",
          imgDescr: "Негабаритный груз перед отправкой",
        },
      ],
    },
  },
  {
    id: 1,
    path: "2",
    imgBlue: craneBlue,
    imgGray: craneGray,
    heading: "Гусеничные экскаваторы из Индии",
    alt: "crane",
  },
  {
    id: 2,
    path: "3",
    imgBlue: containerBlue,
    imgGray: containerGray,
    heading: "1000 контейнеров за 6 лет из Китая",
    alt: "container",
  },
  {
    id: 3,
    path: "4",
    imgBlue: shipBlue,
    imgGray: shipGray,
    heading: "20 000 тонн опасного груза из Китая",
    alt: "ship",
  },
];

export const servicesPage = [
  {
    id: 0,
    path: "1",
    // img: crane,
    heading: "Контейнерные перевозки",
    alt: "crane",
  },
  {
    id: 1,
    path: "/cargo",
    img: containerHero,
    heading: "Контейнерные перевозки",
    alt: "lighthouse",
    process: {
      title: "Как оказывается услуга",
      services: [
        {
          id: 0,
          heading: "Нам необходимо узнать",
          list: [
            {
              id: 0,
              text: "Какой у вас груз (опасные перевозим тоже, но будут нужны сертификаты)",
            },
            { id: 1, text: "Откуда и куда он должен быть перевезен" },
            { id: 2, text: "Когда груз будет готов к отгрузке" },
          ],
          subdescr:
            "После этого мы сможем ответить по цене перевозки – требуется 30-60 минут на расчет.",
        },
        {
          id: 2,
          heading: "Мы посчитаем",
          list: [
            {
              id: 0,
              text: "В какой порт ближе и удобнее перевезти груз",
            },
            { id: 1, text: "Степень загрузки портов и ЖД станций" },
            {
              id: 2,
              text: "Даты отправки-прибытия, стыковку с ЖД линией или транзитную перевозку на автомобильных контейнеровозах",
            },
          ],
          subdescr: "И предложим вам лучшие условия",
        },
      ],
      descr:
        "Берем на себя все заботы по перевозке – вам остается только передать нам груз.",
    },
    route: {
      title: "Маршрут перевозок",
      routes: [
        {
          id: 0,
          to: "Морской путь на север России ",
          from: "Из Архангельска и Мурманска",
        },
        {
          id: 1,
          to: "Морской путь в Азиатско-Тихоокеанский регион",
          from: "Из Владивостока и Советской Гавани",
        },
        {
          id: 2,
          to: "Морской путь в Европу и Америку",
          from: "Из Санкт-Петербурга",
        },
        {
          id: 3,
          to: "Морской путь в Турцию",
          from: "Из Новороссийска",
        },
        {
          id: 4,
          to: "Морской путь в Африку и Иран",
          from: "Из Новороссийска",
        },
        {
          id: 5,
          to: "Сухопутный путь в Китай",
          from: "Из Забайкальска",
        },
      ],
    },
    containers: {
      title: "Типы контейнеров",
      standart: {
        heading: "Стандартный крытый контейнер 20-40 футов",
        img: tankOne,
        descr:
          "Имеем собственный парк стандартных 20 и 40 футовых контейнеров для перевозок в самых важных портах России и ключевых стран. При необходимости погрузки нетипичных грузов мы подбираем оборудование для вашей перевозки. ",
        dimensionsHeading: "Габариты:",
        dimensions: [
          {
            id: 0,
            bold: "20 футов",
            text: "длина 6 058 м, ширина 2 438 м, высота 2 591 м, грузоподъемность до 22 тонн",
          },
          {
            id: 1,
            bold: "40 футов",
            text: "длина 12 192 м, ширина 2 350 м, высота 2 390 м, грузоподъемность до 27 тонн",
          },
        ],
      },
      list: [
        {
          id: 0,
          heading: "Контейнер-рефрижератор",
          img: tankSecond,
          alt: "container",
          descr:
            "За счет возможности поддержания в них определенной температуры могут применяться для перевозок температурных грузов.",
        },
        {
          id: 1,
          heading: "Высокие контейнеры",
          img: tankSecond,
          alt: "container",
          descr:
            "Благодаря увеличенному объему подходят для транспортировки крупных товарных партий.",
        },
        {
          id: 2,
          heading: "Флекси-танк",
          img: tankSecond,
          alt: "container",
          descr: "Актуален при перевозке химических растворов и средств.",
        },
        {
          id: 3,
          heading: "Платформа",
          img: tankSecond,
          alt: "container",
          descr:
            "Из-за отсутствия боковых стенок зачастую эксплуатируется при доставке негабаритных партий.",
        },
        {
          id: 4,
          heading: "Негабаритные платформы",
          img: tankSecond,
          alt: "container",
          descr:
            "Подходят для контейнерных перевозок жд транспортом, когда необходимо доставить товары разного типа на самые дальние расстояния.",
        },
        {
          id: 5,
          heading: "C открытым верхом",
          img: tankSecond,
          alt: "container",
          descr:
            "Используются для транспортировки предметов, чья высота превышает 2,4 метра. В пути они укрываются тентом для защиты от негативных погодных явлений.",
        },
      ],
    },
  },

  {
    id: 2,
    path: "3",
    // img: shipSecond,
    heading: "ЖД перевозки",
    alt: "ship",
  },
  {
    id: 3,
    path: "4",
    // img: shipOne,
    heading: "Автомобильные перевозки",
    alt: "ship",
  },

  {
    id: 4,
    path: "5",
    // img: shipSecond,
    heading: "Авиа",
    alt: "ship",
  },
];

export const parkPage = [
  {
    id: 0,
    img: containerSmall,
    heading: "20 футов Dry Cube",
    descr:
      "Самый универсальный вид контейнера. Подойдет для большинства грузов",
    weight: "22000",
    volume: "33",
    length: "5898",
    width: "2352",
    height: "2393",
    property: "Жесткие",
  },
  {
    id: 1,
    img: containerBig,
    heading: "40 футов Dry Cube",
    descr:
      "Удлиненная вдвое версия самого популярного контейнера для перевозок ",
    weight: "27000",
    volume: "67",
    length: "12032",
    width: "2352",
    height: "2393",
    property: "Жесткие",
  },
];

export const cargo = [
  { id: 0, text: "Грузы на паллетах" },
  { id: 1, text: "Любые упакованные “мелкие товары”" },
  { id: 2, text: "Электрооборудование" },
  { id: 3, text: "Опасные грузы (при наличии документов)" },
  { id: 4, text: "Металлопрокат" },
  { id: 5, text: "Пиломатериалы" },
  { id: 6, text: "Жидкие грузы во флекситанках" },
  { id: 7, text: "И почти все, что угодно" },
];
