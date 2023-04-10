import first from "../src/assets/images/teams/image-1.png";
import second from "../src/assets/images/teams/image-2.png";
import third from "../src/assets/images/teams/image-3.png";
import fourth from "../src/assets/images/teams/image-4.png";
import fifth from "../src/assets/images/teams/image-5.png";
import sixth from "../src/assets/images/teams/image-6.png";
import shipOne from "../src/assets/images/cases-page/ship-1.png";
import shipSecond from "../src/assets/images/cases-page/ship-2.png";
import crane from "../src/assets/images/cases-page/crane.png";
import lighthouse from "../src/assets/images/cases-page/lighthouse.png";
import caseImg from "../src/assets/images/case-page/case-1.png";

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
    img: crane,
    heading: "Мы везли груз из Австралии в России",
    alt: "crane",
  },
  { id: 1, path: "2", img: shipOne, heading: "Металл 2022", alt: "ship" },
  {
    id: 2,
    path: "3",
    img: shipSecond,
    heading: "Evergreen в Суэцком канале",
    alt: "ship",
  },
  {
    id: 3,
    path: "3",
    img: shipSecond,
    heading: "Evergreen в Суэцком канале",
    alt: "ship",
  },
  {
    id: 4,
    path: "4",
    img: lighthouse,
    heading: "Самая быстрая грузоперевозка в 2022 году",
    alt: "lighthouse",
    tasks: {
      title: "Задача",
      descr:
        "Доставить сварочное оборудование для автоматической электродуговой сварки металлов из порта Ксинганг в город Волгодонск",
      conditions: [
        {
          id: 0,
          heading: "33 места",
          text: "10 контейнеров 40HC + 3 негабаритных",
        },
        {
          id: 1,
          heading: "172 072 кг",
          text: "Общий вес станка в собранном виде",
        },
        { id: 2, heading: "2 варианта отправки", text: "FR/OT или балком" },
        { id: 3, heading: "Срок", text: "45 дней от погрузки до получения" },
      ],
    },
    process: {
      title: "Процесс",
      descr: [
        {
          id: 0,
          text: "Так как это является единым станком, то весь груз должен был приплыть на один терминал для подачи одной декларации.",
        },
        {
          id: 1,
          text: "Десять 40-футовых контейнеров было решено отправить на линии FESCO на терминал ВМТП (Владивосток).",
        },
        {
          id: 2,
          text: "А 3 негабаритных места отправляли балком на другой линии и другом судне. Так же цель была чтобы они пришли примерно одновременно, чтобы не возник простой и расходы. В результате слаженной работы грузы были отправлены примерно в разрезе 5 дней друг от друга на разных судах и линиях, пришли на один терминал и примерно в одно и тоже время.",
        },
      ],
    },
    route: {
      title: "Маршрут грузоперевозки",
      descr: [
        {
          id: 0,
          text: "Далее десять 40-футовых контейнеров были отгружены в Ростов с дальнейшим вывозом в Волгодонск до склада.",
        },
        {
          id: 1,
          text: "3 места были погружены на автопоезд и отправлены тралом до Волгодонска до склада.",
        },
        {
          id: 2,
          text: "Весь товар пришел в сохранности, что являлось очень важной частью перевозки, так как стоимость груза очень дорогая.",
        },
      ],
      to: "Сухопутный путь в Китай",
      from: "Из Забайкальска",
    },
    result: {
      title: "Результат",
      results: [
        {
          id: 0,
          text: "1. Загрузили и уплыли это все из Китая в течение 5 дней с даты готовности груза",
        },
        { id: 1, text: "2. Прибыли на 1 терминал" },
        { id: 2, text: "3. Прибыли обе партии практически одновременно" },
        { id: 3, text: "4. Погрузили на тралы без задержек и повреждений" },
        { id: 4, text: "5. Доставили все в сохранности" },
      ],
      images: [
        { id: 0, src: caseImg, alt: "image", imgDescr: "Подпись к фотографии" },
        { id: 1, src: caseImg, alt: "image", imgDescr: "Подпись к фотографии" },
        { id: 2, src: caseImg, alt: "image", imgDescr: "Подпись к фотографии" },
      ],
    },
  },
  { id: 5, path: "2", img: shipOne, heading: "Металл 2022", alt: "ship" },
  {
    id: 6,
    path: "4",
    img: lighthouse,
    heading: "Самая быстрая грузоперевозка в 2022 году",
    alt: "lighthouse",
  },
  { id: 7, path: "2", img: shipOne, heading: "Металл 2022", alt: "ship" },
  {
    id: 8,
    path: "1",
    img: crane,
    heading: "Мы везли груз из Австралии в России",
    alt: "crane",
  },
  { id: 9, path: "2", img: shipOne, heading: "Металл 2022", alt: "ship" },
  {
    id: 10,
    path: "4",
    img: lighthouse,
    heading: "Самая быстрая грузоперевозка в 2022 году",
    alt: "lighthouse",
  },
  { id: 11, path: "2", img: shipOne, heading: "Металл 2022", alt: "ship" },
  {
    id: 12,
    path: "1",
    img: crane,
    heading: "Мы везли груз из Австралии в России",
    alt: "crane",
  },
];
