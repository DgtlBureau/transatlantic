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

// CASES INDIA

import casesIndiaMobileFirst from "../src/assets/images/cases/india/india-mobile-1.jpg";
import casesIndiaMobileSecond from "../src/assets/images/cases/india/india-mobile-2.jpg";

import casesIndiaTabletFirst from "../src/assets/images/cases/india/india-tablet-1.jpg";
import casesIndiaTabletSecond from "../src/assets/images/cases/india/india-tablet-2.jpg";

import casesIndiaDesktopFirst from "../src/assets/images/cases/india/india-desktop-1.jpg";
import casesIndiaDesktopSecond from "../src/assets/images/cases/india/india-desktop-2.jpg";

// CASES STEEL

import casesSteelMobileFirst from "../src/assets/images/cases/steel/steel-mobile-1.jpg";
import casesSteelMobileSecond from "../src/assets/images/cases/steel/steel-mobile-2.JPG";

import casesSteelTabletFirst from "../src/assets/images/cases/steel/steel-tablet-1.jpg";
import casesSteelTabletSecond from "../src/assets/images/cases/steel/steel-tablet-2.jpg";

import casesSteelDesktopFirst from "../src/assets/images/cases/steel/steel-desktop-1.jpg";
import casesSteelDesktopSecond from "../src/assets/images/cases/steel/steel-desktop-2.jpg";

// CASES DANGEROUS

import casesDangerousMobileFirst from "../src/assets/images/cases/dangerous/dangerous-mobile-1.jpg";
import casesDangerousMobileSecond from "../src/assets/images/cases/dangerous/dangerous-mobile-2.jpg";

import casesDangerousTabletFirst from "../src/assets/images/cases/dangerous/dangerous-tablet-1.jpg";
import casesDangerousTabletSecond from "../src/assets/images/cases/dangerous/dangerous-tablet-2.jpg";

import casesDangerousDesktopFirst from "../src/assets/images/cases/dangerous/dangerous-desktop-1.jpg";
import casesDangerousDesktopSecond from "../src/assets/images/cases/dangerous/dangerous-desktop-2.jpg";

// CARGO TANKS

import tankOne from "../src/assets/images/service/tanks/tank-1.png";
import tank1 from "../src/assets/images/service/tanks/image-1.png";
import tank2 from "../src/assets/images/service/tanks/image-2.png";
import tank3 from "../src/assets/images/service/tanks/image-3.png";
import tank4 from "../src/assets/images/service/tanks/image-4.png";
import tank5 from "../src/assets/images/service/tanks/image-5.png";
import tank6 from "../src/assets/images/service/tanks/image-6.png";

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
    path: "#",
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
    path: "#",
    imgBlue: craneBlue,
    imgGray: craneGray,
    heading: "Гусеничные экскаваторы из Индии",
    caseHeading: "Гусеничные экскаваторы из Индии",
    alt: "crane",
    tasks: {
      title: "Задача",
      descr:
        "Доставить гусеничные экскаваторы из Индии в разные регионы России",
      conditions: [
        {
          id: 0,
          heading: "Груз",
          text: "24 экскаватора",
        },
        {
          id: 1,
          heading: "Срок",
          text: "42 дня от погрузки до получения",
        },
      ],
    },
    process: {
      title: "Процесс",
      descr: [
        {
          id: 0,
          text: "В морской перевозке экскаваторы перевозились на flat rack платформах длиной 40 футов, на каждую платформу размещался 1 экскаватор. После таможенной очистки в порту Владивостока экскаваторы были перегружены на жд платформы по 2 штуки на каждую.",
        },
      ],
    },
    route: {
      title: "Маршрут",
      descr: [
        {
          id: 0,
          text: "Из индийского порта Ченнаи во Владивосток, далее отправляли на жд платформах в разные российские регионы.",
        },
      ],
    },
    result: {
      title: "Результат",
      results: [
        {
          id: 0,
          text: "За 42 дня мы привезли нашему клиенту все экскаваторы в 6 разных регионов России.",
        },
      ],
      imagesMobile: [
        {
          id: 0,
          src: casesIndiaMobileFirst,
          alt: "image",
          imgDescr: "Экскаваторы на жд платформе",
        },
        {
          id: 1,
          src: casesIndiaMobileSecond,
          alt: "image",
          imgDescr: "Упакованные экскаваторы",
        },
      ],
      imagesTablet: [
        {
          id: 0,
          src: casesIndiaTabletFirst,
          alt: "image",
          imgDescr: "Экскаваторы на жд платформе",
        },
        {
          id: 1,
          src: casesIndiaTabletSecond,
          alt: "image",
          imgDescr: "Упакованные экскаваторы",
        },
      ],
      imagesDesktop: [
        {
          id: 0,
          src: casesIndiaDesktopFirst,
          alt: "image",
          imgDescr: "Экскаваторы на жд платформе",
        },
        {
          id: 1,
          src: casesIndiaDesktopSecond,
          alt: "image",
          imgDescr: "Упакованные экскаваторы",
        },
      ],
    },
  },
  {
    id: 2,
    path: "#",
    imgBlue: containerBlue,
    imgGray: containerGray,
    heading: "1000 контейнеров стали из Китая",
    caseHeading: "1000 контейнеров стали из Китая",
    alt: "container",
    tasks: {
      title: "Задача",
      descr: "Регулярная ритмичная поставка рулонной стали из Китая",
      conditions: [
        {
          id: 0,
          heading: "Срок",
          text: "6 лет доставляем груз клиенту",
        },
        {
          id: 1,
          heading: "Объем",
          text: "Более 1000 контейнеров",
        },
      ],
    },
    process: {
      title: "Процесс",
      descr: [
        {
          id: 0,
          text: "Точками вывоза являются три разных порта в Китае и мы максимально быстро забираем груз с завода и привозим в порты, где с минимальными задержками отправляем морем во Владивосток. Поддерживаем связь с продавцом груза нашего клиента и полностью под ключ управляем процессом. Налаженная работа позволяет клиенту экономить.",
        },
      ],
    },
    route: {
      title: "Маршрут",
      descr: [
        {
          id: 0,
          text: "Обычно груз уходит из 3 разных портов Китая – Шанхай, Ксиамень, Тайсанг в порт Владивостока. В России мы перегружаем груз на жд платформы и перевозим 3 города – Екатеринбург, Москву, Новосибирск.",
        },
      ],
    },
    result: {
      title: "Результат",
      results: [
        {
          id: 0,
          text: "Уже 6 лет наш клиент регулярно и надежно получает рулонную сталь из Китая, за все время им было получено 27000 тонн (более 1000 контейнеров).",
        },
      ],
      imagesMobile: [
        {
          id: 0,
          src: casesSteelMobileFirst,
          alt: "image",
          imgDescr: "Рулонная сталь в контейнере",
        },
        {
          id: 1,
          src: casesSteelMobileSecond,
          alt: "image",
          imgDescr: "Рулонная сталь в контейнере",
        },
      ],
      imagesTablet: [
        {
          id: 0,
          src: casesSteelTabletFirst,
          alt: "image",
          imgDescr: "Рулонная сталь в контейнере",
        },
        {
          id: 1,
          src: casesSteelTabletSecond,
          alt: "image",
          imgDescr: "Рулонная сталь в контейнере",
        },
      ],
      imagesDesktop: [
        {
          id: 0,
          src: casesSteelDesktopFirst,
          alt: "image",
          imgDescr: "Рулонная сталь в контейнере",
        },
        {
          id: 1,
          src: casesSteelDesktopSecond,
          alt: "image",
          imgDescr: "Рулонная сталь в контейнере",
        },
      ],
    },
  },
  {
    id: 3,
    path: "#",
    imgBlue: shipBlue,
    imgGray: shipGray,
    heading: "20 000 тонн опасного груза из Китая",
    caseHeading: "20 000 тонн опасного груза из Китая",
    alt: "ship",
    tasks: {
      title: "Задача",
      descr:
        "Стабильная доставка фурфурилового спирта (опасный груз) в Свердловскую область из Китая",
      conditions: [
        {
          id: 0,
          heading: "Срок",
          text: "Доставляем более 6 лет",
        },
        {
          id: 1,
          heading: "Масштаб",
          text: "Более 19 800 тонн",
        },
      ],
    },
    process: {
      title: "Процесс",
      descr: [
        {
          id: 0,
          text: "Важной частью перевозки является верная подготовка документов, требующихся для перевозки “опасного” груза, т.к. фурфуриловый спирт относится к веществам 2 класса опасности. Также мы всегда внимательно проверяем сохранность упаковки груза на всех этапах перевозки. Бочки со спиртом обматываются в пленку, а вся партия обшивается досками в каждом контейнере.",
        },
      ],
    },
    route: {
      title: "Маршрут",
      descr: [
        {
          id: 0,
          text: "Из порта Шанхая морским путем мы доставляем контейнеры с с фурфуриловым спиртом во Владивосток, а далее перегружаем на жд, и везем в Свердловскую область.",
        },
      ],
    },
    result: {
      title: "Результат",
      results: [
        {
          id: 0,
          text: "6 лет стабильной и безопасной доставки опасного, но нужного сырья для производства нашего клиента.",
        },
      ],
      imagesMobile: [
        {
          id: 0,
          src: casesDangerousMobileFirst,
          alt: "image",
          imgDescr: "Бочки в контейнере",
        },
        {
          id: 1,
          src: casesDangerousMobileSecond,
          alt: "image",
          imgDescr: "Полная упаковка груза",
        },
      ],
      imagesTablet: [
        {
          id: 0,
          src: casesDangerousTabletFirst,
          alt: "image",
          imgDescr: "Бочки в контейнере",
        },
        {
          id: 1,
          src: casesDangerousTabletSecond,
          alt: "image",
          imgDescr: "Полная упаковка груза",
        },
      ],
      imagesDesktop: [
        {
          id: 0,
          src: casesDangerousDesktopFirst,
          alt: "image",
          imgDescr: "Бочки в контейнере",
        },
        {
          id: 1,
          src: casesDangerousDesktopSecond,
          alt: "image",
          imgDescr: "Полная упаковка груза",
        },
      ],
    },
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
              text: "Тип и характеристики груза",
            },
            { id: 1, text: "Маршрут перевозки" },
            { id: 2, text: "Желаемый срок доставки и готовность груза" },
          ],
        },
        {
          id: 2,
          heading: "Мы предложим",
          list: [
            {
              id: 0,
              text: "Стоимость перевозки",
            },
            { id: 1, text: "Несколько вариантов доставки груза" },
            {
              id: 2,
              text: "Особое отношение и заботу",
            },
          ],
        },
      ],
      descr:
        "Возьмем на себя все задачи по перевозке – вам остается только передать нам груз",
    },
    route: {
      title: "Маршруты перевозок",

      routes: [
        {
          id: 0,
          to: "Азиатско-тихоокеанский регион",
          from: "Из портов Дальнего Востока",
        },
        {
          id: 1,
          to: "Европа и Америка",
          from: "Из портов Санкт-Петербурга и стран Балтии",
        },
        {
          id: 2,
          to: "Африка, Иран, ОАЭ",
          from: "Южные порты России",
        },
        {
          id: 3,
          to: "По России",
          from: "В любую точку",
        },
        {
          id: 4,
          to: "Турция",
          from: "Из порта Новороссийск",
        },
        {
          id: 5,
          to: "По суше в Китай",
          from: "Через Россию, Казахстан и Монголию",
        },
      ],
    },
    containers: {
      title: "Типы контейнеров",
      standart: {
        heading: "Стандартный контейнер 20-40 футов",
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
          img: tank1,
          alt: "container",
          descr:
            "За счет возможности поддержания в них определенной температуры могут применяться для перевозок температурных грузов.",
        },
        {
          id: 1,
          heading: "Высокие контейнеры",
          img: tank2,
          alt: "container",
          descr:
            "Благодаря увеличенному объему подходят для транспортировки крупных товарных партий.",
        },
        {
          id: 2,
          heading: "Флекси-танк",
          img: tank3,
          alt: "container",
          descr: "Актуален при перевозке химических растворов и средств.",
        },
        {
          id: 3,
          heading: "Flat rack",
          img: tank4,
          alt: "container",
          descr:
            "Из-за отсутствия боковых стенок зачастую эксплуатируется при доставке негабаритных партий.",
        },
        {
          id: 4,
          heading: "Негабаритные платформы",
          img: tank5,
          alt: "container",
          descr:
            "Подходят для контейнерных перевозок жд транспортом, когда необходимо доставить товары разного типа на самые дальние расстояния.",
        },
        {
          id: 5,
          heading: "Open top",
          img: tank6,
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
