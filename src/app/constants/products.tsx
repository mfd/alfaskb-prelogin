// Products data and types - v2.0
import imgIconView1 from "figma:asset/a46b19810327a8da419337ef2b3b3e6ec44f353f.png";
import imgIconView2 from "figma:asset/935b0b72eac0ff8af0d2988501f6bace8e9ca20d.png";
import imgIconView3 from "figma:asset/7e8511301674d39f8cd176578d253954d9e47842.png";
import imgIconView4 from "figma:asset/30d972c5fac439fc586d71b84ea26790ff5d48ee.png";
import imgIconView5 from "figma:asset/1f419c8ea7101b3f8b826ac9e399696f51a0e351.png";
import imgIconView6 from "figma:asset/0ea90dc395def68741ab5acac4eae35370fa3187.png";
import imgIconView7 from "figma:asset/44690177e6c33f3932ceda7be51d1886a99a6432.png";

export const PRODUCT_DATA = {
  acquiring: {
    title: "Торговый эквайринг",
    subtitle: "Приём платежей онлайн и в торговых точках",
    description: "Принимайте оплату картами выгодно",
    benefits: [
      {
        key: "flexible",
        title: "Гибкие условия",
        description: "С учётом вашей сферы деятельности",
      },
      {
        key: "all-methods",
        title: "Все способы оплаты",
        description: "Картами, через СБП и бесконтактно",
      },
      {
        key: "terminals",
        title: "Терминалы на выбор",
        description: "Можно интегрировать с кассой",
      },
      {
        key: "support",
        title: "Поддержка 24/7",
        description:
          "Выделенная горячая линия для среднего и крупного бизнеса",
      },
    ],
  },
  cards: {
    title: "Бизнес-карты",
    subtitle: "Единая корпоративная карта",
    description:
      "Настраивается под ваши потребности, другие карты не нужны",
    benefits: [
      {
        key: "unlimited",
        title: "Неограниченное количество карт",
        description:
          "Заменяет подотчётные средства и командировочные",
      },
      {
        key: "choice",
        title: "Карта на выбор",
        description:
          "Пластиковая, металл, стикер, виртуальная с возможностью довыпуска в любое время",
      },
      {
        key: "management",
        title: "Управление расходами онлайн",
        description:
          "Настраивайте лимиты по картам и ограничивайте круг трат",
      },
      {
        key: "transfers",
        title: "Переводы с карты",
        description:
          "На другие карты до 1,5 млн ₽ в месяц с назначением платежа",
      },
    ],
  },
  ved: {
    title: "ВЭД",
    subtitle: "Валютные переводы между юридическими лицами",
    description: "В иностранной валюте онлайн",
    benefits: [
      {
        key: "gpi",
        title: "GPI-трекер",
        description:
          "Отслеживайте статус платежей в реальном времени бесплатно",
      },
      {
        key: "internet-bank",
        title: "Интернет-банк",
        description:
          "Система сама заполнит часть полей и проведёт валидации",
      },
      {
        key: "fast",
        title: "Всего 1 час",
        description:
          "Занимает отправка валютных платежей от подписания",
      },
      {
        key: "notifications",
        title: "Уведомления",
        description:
          "Бесплатно уведомим контрагента по e-mail о совершении платежа",
      },
    ],
  },
  salary: {
    title: "Зарплатный проект",
    subtitle:
      "Управляйте корпоративным зарплатным проектом онлайн",
    description: "Экономьте ресурсы для развития предприятия",
    benefits: [
      {
        key: "minute",
        title: "От 1 минуты",
        description: "Зачисление зарплаты на счёт",
      },
      {
        key: "support-24",
        title: "Круглосуточная поддержка",
        description: "Персональный зарплатный менеджер",
      },
      {
        key: "time",
        title: "До 23:30",
        description: "Увеличенный операционный день",
      },
      {
        key: "free",
        title: "Бесплатно",
        description: "Снятие наличных в любом банкомате России",
      },
    ],
  },
  rko: {
    title: "РКО для бизнеса",
    subtitle:
      "Расчётно-кассовое обслуживание для вашего бизнеса",
    description:
      "Всё необходимое для ведения бизнеса в одном месте",
    benefits: [
      {
        key: "tech",
        title: "Технологично",
        description:
          "Инкассация в любое время без участия инкассаторов",
      },
      {
        key: "24-7",
        title: "Круглосуточно",
        description: "Платежи клиентам Альфа‑Банка",
      },
      {
        key: "personal",
        title: "Индивидуально",
        description:
          "Персональный менеджер и валютный контролёр",
      },
      {
        key: "convenient",
        title: "Удобно",
        description:
          "Платежи в другие банки с 00:00 до 20:00 мск",
      },
    ],
  },
  deposits: {
    title: "Депозиты для бизнеса",
    subtitle: "Откройте депозит и получайте доход",
    description: "Даже если нет расчётного счёта в банке",
    benefits: [
      {
        key: "online",
        title: "Онлайн",
        description: "Станьте клиентом дистанционно",
      },
      {
        key: "from-day",
        title: "От 1 дня",
        description: "Любой срок размещения от 1 дня до 3 лет",
      },
      {
        key: "rate",
        title: "¼ ключевой ставки",
        description: "Начисляем на остаток по счёту",
      },
      {
        key: "amount",
        title: "От 50 000 ₽ или ¥",
        description: "Минимальная сумма",
      },
    ],
  },
};

export const UI_TEXT = {
  modalClose: "Close modal",
  benefitsTitle: "Преимущества",
  addButton: "Добавить",
  cartTitle: "Корзина финпродуктов",
  emptyCartTitle: "Your list is empty",
  emptyCartDescription:
    "Add products you are interested in for quick consultation and connection in the future",
  okButton: "OK",
  cancelButton: "Cancel",
};

// Desktop Product Interface
export interface DesktopProductData {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: {
    image: string;
    position: {
      left: string;
      top: string;
      width: string;
      height: string;
    };
  };
}

// Mobile Product Interface
export interface MobileProductData {
  id: string;
  title: string;
  description: string;
  icon: {
    image: string;
    position: {
      left: string;
      top: string;
      width?: string;
      height?: string;
      size?: string;
    };
  };
}

// Desktop Products Data
export const DESKTOP_PRODUCTS: DesktopProductData[] = [
  {
    id: "acquiring",
    title: "Торговый эквайринг",
    description: "Приём платежей онлайн и в торговых точках",
    benefits: [
      "Гибкие условия, с учётом вашей сферы деятельности",
      "Терминалы на выбор, можно интегрировать с кассой",
      "Поддержка 24/7",
    ],
    icon: {
      image: imgIconView1,
      position: {
        left: "-4.87%",
        top: "-10%",
        width: "110.72%",
        height: "117.64%",
      },
    },
  },
  {
    id: "salary",
    title: "Зарплатный проект",
    description: "Подключение за 0 ₽ и управление онлайн",
    benefits: [
      "Бесплатное открытие счетов для ваших сотрудников",
      "Дебетовые карты с кэшбэком",
      "Высокий процент на остаток по счёту",
    ],
    icon: {
      image: imgIconView2,
      position: {
        left: "7.17%",
        top: "-4.1%",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "cards",
    title: "Бизнес-карты",
    description: "Единая корпоративная карта, настраивается под ваши потребности",
    benefits: [
      "Контроль расходов в реальном времени",
      "Кэшбэк до 10% за покупки по карте",
      "Лимиты и ограничения по операциям",
    ],
    icon: {
      image: imgIconView3,
      position: {
        left: "-22.22%",
        top: "-19.44%",
        width: "144.44%",
        height: "144.44%",
      },
    },
  },
  {
    id: "ved",
    title: "ВЭД",
    description: "Валютные переводы м/у юрлицами в иностранной валюте онлайн",
    benefits: [
      "Валютный контроль без визитов в банк",
      "Курсы валют без комиссии",
      "Платежи в 150+ стран",
    ],
    icon: {
      image: imgIconView4,
      position: {
        left: "-42.5%",
        top: "-45%",
        width: "180%",
        height: "180%",
      },
    },
  },
  {
    id: "rko",
    title: "РКО для бизнеса",
    description: "Откроем за 1 день и онлайн",
    benefits: [
      "Открытие счёта без визита в отделение",
      "Бесплатное обслуживание первые 3 месяца",
      "Интернет-банк и мобильное приложение",
    ],
    icon: {
      image: imgIconView5,
      position: {
        left: "-12.5%",
        top: "-13.68%",
        width: "135%",
        height: "135%",
      },
    },
  },
  {
    id: "deposits",
    title: "Депозиты для бизнеса",
    description: "Онлайн на срок от 1 дня",
    benefits: [
      "Ставки до 18% годовых",
      "Возможность частичного снятия",
      "Автоматическая пролонгация",
    ],
    icon: {
      image: imgIconView6,
      position: {
        left: "-4.77%",
        top: "-8.33%",
        width: "108.93%",
        height: "108.93%",
      },
    },
  },
];

// Mobile Products Data
export const MOBILE_PRODUCTS: MobileProductData[] = [
  {
    id: "acquiring",
    title: "Торговый эквайринг",
    description: "Приём платежей онлайн и в торговых точках",
    icon: {
      image: imgIconView1,
      position: {
        left: "-4.87%",
        top: "-10%",
        width: "110.72%",
        height: "117.64%",
      },
    },
  },
  {
    id: "payroll",
    title: "Зарплатный проект",
    description: "Подключение за 0 ₽ и управление онлайн",
    icon: {
      image: imgIconView2,
      position: {
        left: "7.17%",
        top: "-4.1%",
        size: "full",
      },
    },
  },
  {
    id: "business-cards",
    title: "Бизнес-карты",
    description: "Карта настраивается под ваши потребности",
    icon: {
      image: imgIconView3,
      position: {
        left: "-22.22%",
        top: "-19.44%",
        size: "[144.44%]",
      },
    },
  },
  {
    id: "ved",
    title: "ВЭД",
    description: "Валютные переводы м/у юрлицами в валюте онлайн",
    icon: {
      image: imgIconView4,
      position: {
        left: "-42.5%",
        top: "-45%",
        size: "[180%]",
      },
    },
  },
  {
    id: "rko",
    title: "РКО для бизнеса",
    description: "Откроем за 1 день и онлайн",
    icon: {
      image: imgIconView5,
      position: {
        left: "-12.5%",
        top: "-13.68%",
        size: "[135%]",
      },
    },
  },
  {
    id: "deposits",
    title: "Депозиты для бизнеса",
    description: "Онлайн на срок от 1 дня",
    icon: {
      image: imgIconView6,
      position: {
        left: "-4.77%",
        top: "-8.33%",
        size: "[108.93%]",
      },
    },
  },
];
