interface ModalBenefit {
  key: string;
  title: string;
  description: string;
}

interface ModalData {
  title: string;
  subtitle: string;
  description: string;
  cardDescription?: string; // Короткое описание для карточек продуктов
  cardBenefits?: string[]; // Краткий список выгод для десктопных карточек
  benefits: ModalBenefit[];
  iconKey?: string;
  maskKey?: string;
  iconPosition?: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
  useObjectFit?: boolean; // Использовать object-fit вместо позиционирования
}

export const ALL_MODALS_DATA: Record<string, ModalData> = {
  // Финансирование
  "Кредитная линия": {
    title: "Кредитная линия",
    subtitle: "Одобрим единый кредитный лимит на всё и сразу",
    description: "Получите решение в срок от 3 до 7 дней",
    benefits: [
      {
        key: "documents",
        title: "Всего 2 документа",
        description: "На первом этапе только отчётность по формам 1 и 2",
      },
      {
        key: "fast-decision",
        title: "Быстрое онлайн‑решение",
        description: "До 200 млн ₽ за 3 дня и до 500 млн ₽ за 7 дней",
      },
      {
        key: "no-collateral",
        title: "Без залога",
        description: "Только поручительство собственника",
      },
      {
        key: "flexibility",
        title: "Выбирайте, на что тратить",
        description: "Кредитная линия, гарантия, овердрафт, факторинг",
      },
    ],
    iconKey: "credit-line",
    maskKey: "credit-line",
    iconPosition: {
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
    },
  },
  Факторинг: {
    title: "Факторинг",
    subtitle: "Финансируйте поставки и закупки",
    description: "Получайте деньги сразу после отгрузки товара",
    benefits: [
      {
        key: "fast",
        title: "Быстрое финансирование",
        description:
          "До 90% от суммы поставки сразу после отгрузки",
      },
      {
        key: "protection",
        title: "Защита от неплатежей",
        description: "Страхование дебиторской задолженности",
      },
      {
        key: "analytics",
        title: "Аналитика контрагентов",
        description: "Проверка надёжности покупателей",
      },
      {
        key: "control",
        title: "Контроль задолженности",
        description: "Профессиональное управление дебиторкой",
      },
    ],
    iconKey: "factoring",
    maskKey: "factoring",
    iconPosition: {
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
    },
  },
  "Банковская гарантия": {
    title: "Банковская гарантия",
    subtitle: "Все виды банковских гарантий",
    description:
      "Для участия в тендерах и исполнения контрактов",
    benefits: [
      {
        key: "tender",
        title: "Для тендеров",
        description:
          "Обеспечение заявок на участие в госзакупках",
      },
      {
        key: "contract",
        title: "Контрактные",
        description:
          "Гарантия исполнения обязательств по договору",
      },
      {
        key: "customs",
        title: "Таможенные",
        description: "Обеспечение уплаты таможенных платежей",
      },
      {
        key: "fast-issue",
        title: "Быстрое оформление",
        description: "Решение за 1-3 рабочих дня",
      },
    ],
    iconKey: "guarantee",
    maskKey: "guarantee",
    iconPosition: {
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
    },
  },
  Овердрафт: {
    title: "Овердрафт",
    subtitle:
      "Краткосрочный кредит для защиты от кассовых разрывов",
    description:
      "Если деньги от покупателей поступят на счёт позже",
    benefits: [
      {
        key: "limit",
        title: "Лимит",
        description: "Рассчитывается индивидуально",
      },
      {
        key: "term",
        title: "36 месяцев",
        description: "Максимальный срок договора",
      },
      {
        key: "no-collateral",
        title: "Без залога",
        description: "Только поручительство собственника",
      },
      {
        key: "flexibility",
        title: "Гибкие условия",
        description: "Для погашения долга и процентов",
      },
    ],
    iconKey: "overdraft",
    maskKey: "overdraft",
    iconPosition: {
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
    },
  },

  // Продукты
  "Торговый эквайринг": {
    title: "Торговый эквайринг",
    subtitle: "Приём платежей онлайн и в торговых точках",
    description: "Принимайте оплату картами выгодно",
    cardDescription:
      "Приём платежей онлайн и в торговых точках",
    cardBenefits: [
      "Гибкие условия, с учётом вашей сферы деятельности",
      "Терминалы на выбор, можно интегрировать с кассой",
      "Поддержка 24/7",
    ],
    benefits: [
      {
        key: "flexible",
        title: "Гибкие условия",
        description: "С учётом вашей сферы деятельности",
      },
      {
        key: "all-methods",
        title: "Все способы оплаты",
        description: "Картами, через СБП и бесконтактно",
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
          "Выделенная горячая линия для среднего и крупного бизнеса",
      },
    ],
    iconKey: "acquiring",
    maskKey: "acquiring",
    iconPosition: {
      left: "-4.87%",
      top: "-10%",
      width: "110.72%",
      height: "117.64%",
    },
  },
  "Зарплатный проект": {
    title: "Зарплатный проект",
    subtitle:
      "Управляйте корпоративным зарплатным проектом онлайн",
    description: "Экономьте ресурсы для развития предприятия",
    cardDescription: "Подключение за 0 ₽ и управление онлайн",
    cardBenefits: [
      "Бесплатное открытие счетов для ваших сотрудников",
      "Дебетовые карты с кэшбэком",
      "Высокий процент на остаток по счёту",
    ],
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
    iconKey: "salary",
    maskKey: "salary",
    iconPosition: {
      left: "7.17%",
      top: "-4.1%",
      width: "100%",
      height: "100%",
    },
    useObjectFit: true, // Используем object-fit для корректного отображения
  },
  "Бизнес-карты": {
    title: "Бизнес-карты",
    subtitle: "Единая корпоративная карта",
    description:
      "Настраивается под ваши потребности, другие карты не нужны",
    cardDescription:
      "Настраивается под ваши потребности, другие карты не нужны",
    cardBenefits: [
      "Контроль расходов в реальном времени",
      "Кэшбэк до 10% за покупки по карте",
      "Лимиты и ограничения по операциям",
    ],
    benefits: [
      {
        key: "unlimited",
        title: "Неограниченное количество карт",
        description:
          "Заменяет подотчётные средства и командировочные",
      },
      {
        key: "choice",
        title: "Карта на выбор",
        description:
          "Пластиковая, металл, стикер, виртуальная с возможностью довыпуска в любое время",
      },
      {
        key: "management",
        title: "Управление расходами онлайн",
        description:
          "Настраивайте лимиты по картам и ограничивайте круг трат",
      },
      {
        key: "transfers",
        title: "Переводы с карты",
        description:
          "На другие карты до 1,5 млн ₽ в месяц с назначением платежа",
      },
    ],
    iconKey: "cards",
    maskKey: "cards",
    iconPosition: {
      left: "-22.22%",
      top: "-19.44%",
      width: "144.44%",
      height: "144.44%",
    },
    useObjectFit: true,
  },
  ВЭД: {
    title: "ВЭД",
    subtitle: "Валютные переводы между юридическими лицами",
    description: "В иностранной валюте онлайн",
    cardDescription:
      "Валютные переводы м/у юрлицами в иностранной валюте онлайн",
    cardBenefits: [
      "Валютный контроль без визитов в банк",
      "Курсы валют без комиссии",
      "Платежи в 150+ стран",
    ],
    benefits: [
      {
        key: "gpi",
        title: "GPI-трекер",
        description:
          "Отслеживайте статус платежей в реальном времени бесплатно",
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
    iconKey: "ved",
    maskKey: "ved",
    iconPosition: {
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
    },
    useObjectFit: true, // Используем object-fit для корректного отображения
  },
  "РКО для бизнеса": {
    title: "РКО для бизнеса",
    subtitle:
      "Расчётно-кассовое обслуживание для вашего бизнеса",
    description:
      "Всё необходимое для ведения бизнеса в одном месте",
    cardDescription: "Откроем за 1 день и онлайн",
    cardBenefits: [
      "Открытие счёта без визита в отделение",
      "Бесплатное обслуживание первые 3 месяца",
      "Интернет-банк и мобильное приложение",
    ],
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
    iconKey: "rko",
    maskKey: "rko",
    iconPosition: {
      left: "-12.5%",
      top: "-13.68%",
      width: "135%",
      height: "135%",
    },
  },
  "Депозиты для бизнеса": {
    title: "Депозиты для бизнеса",
    subtitle: "Откройте депозит и получайте доход",
    description: "Даже если нет расчётного счёта в банке",
    cardDescription: "Откройте депозит и получайте доход",
    cardBenefits: [
      "Ставки до 18% годовых",
      "Возможность частичного снятия",
      "Автоматическая пролонгация",
    ],
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
    iconKey: "deposits",
    maskKey: "deposits",
    iconPosition: {
      left: "-4.77%",
      top: "-8.33%",
      width: "108.93%",
      height: "108.93%",
    },
  },
};

export const UI_TEXT = {
  modalClose: "Закрыть",
  benefitsTitle: "Преимущества",
  addButton: "Добавить",
  cartTitle: "Корзина финпродуктов",
  emptyCartTitle: "Ваш список пуст",
  emptyCartDescription:
    "Добавляйте интересующие вас продукты для быстрой консультации и подключения в будущем",
  emptyCartButton: "Понятно",
  callSuccessTitle: "Звонок заказан",
  callSuccessTextPrefix: "По указанному номеру",
  callSuccessTextSuffix: "в ближайшее время с вами свяжется сотрудник банка, чтобы проконсультировать по выбранным продуктам",
};

// Маппинг данных продуктов для использования с короткими ключами (acquiring, salary, etc.)
export const PRODUCT_DATA = {
  acquiring: ALL_MODALS_DATA["Торговый эквайринг"],
  salary: ALL_MODALS_DATA["Зарплатный проект"],
  cards: ALL_MODALS_DATA["Бизнес-карты"],
  ved: ALL_MODALS_DATA["ВЭД"],
  rko: ALL_MODALS_DATA["РКО для бизнеса"],
  deposits: ALL_MODALS_DATA["Депозиты для бизнеса"],
};

// Обратный маппинг: от productId к названию продукта
export const PRODUCT_ID_TO_NAME: Record<string, string> = {
  acquiring: "Торговый эквайринг",
  salary: "Зарплатный проект",
  cards: "Бизнес-карты",
  ved: "ВЭД",
  rko: "РКО для бизнеса",
  deposits: "Депозиты для бизнеса",
};