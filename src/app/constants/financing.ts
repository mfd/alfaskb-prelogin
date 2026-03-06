export const FINANCING_TYPES = {
  fastFin: [
    'Кредитная линия',
    'Банковская гарантия',
    'Овердрафт',
    'Факторинг',
  ],
  longFin: [
    'Кредитная линия',
    'Банковская гарантия',
    'Овердрафт',
  ],
} as const;

export type FinancingType = typeof FINANCING_TYPES['fastFin'][number] | typeof FINANCING_TYPES['longFin'][number];

export type FinancingCardKey = | 'fastFin' | 'longFin';

export const FINANCING_TITLES: Record<string, string> = {
  'Кредитная линия': 'Кредитная линия',
  'Факторинг': 'Факторинг',
  'Банковская гарантия': 'Банковская гарантия',
  'Овердрафт': 'Овердрафт',
};

export const FINANCING_SUBTITLES: Record<string, string> = {
  'Кредитная линия': 'Одобрим единый кредитный лимит на всё и сразу',
  'Факторинг': 'Финансируйте поставки и закупки',
  'Банковская гарантия': 'Все виды банковских гарантий',
  'Овердрафт': 'Краткосрочный кредит для защиты от кассовых разрывов',
};

// Данные для позиций иконок финансирования
export const FINANCING_ICON_POSITIONS: Record<string, { 
  left: string; 
  top: string; 
  width?: string; 
  height?: string; 
  maxWidth?: string; 
}> = {
  'Кредитная линия': {
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    maxWidth: 'none',
  },
  'Банковская гарантия': {
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    maxWidth: 'none',
  },
  'Овердрафт': {
    left: '-36.3%',
    top: '-42.36%',
    width: '179.01%',
    height: '194.35%',
    maxWidth: 'none',
  },
  'Факторинг': {
    left: '-49.01%',
    top: '-55.06%',
    width: '193.61%',
    height: '204.8%',
    maxWidth: 'none',
  },
};

export const FINANCING_CONFIG = {
  fastFin: {
    minAmount: 1000000,
    maxAmount: 200000000,
    minTerm: 1,
    maxTerm: 36,
    defaultAmount: 75000000, // Значение по умолчанию как в десктопе
    defaultTerm: 18, // Значение по умолчанию
    title: 'Вам одобрен кредитный лимит',
    description: 'До 200 млн ₽, до 36 мес, быстро и без проверок',
    cardDescription: 'Когда нужны деньги на развитие своего дела',
    cardAmountLabel: 'до 200 млн ₽',
    cardTermLabel: 'до 36 мес.',
    minAmountLabel: '1 млн ₽',
    maxAmountLabel: '200 млн ₽',
    minTermLabel: '1 мес',
    maxTermLabel: '36 мес',
  },
  longFin: {
    minAmount: 50000000, // 50 млн
    maxAmount: 99000000000, // 99 млрд
    minTerm: 1,
    maxTerm: 120,
    defaultAmount: 75000000, // Значение по умолчанию как в десктопе
    defaultTerm: 18, // Значение по умолчанию
    title: 'На общих условиях',
    description: 'До 2 млрд ₽, до 120 мес, потребуется проверка',
    cardDescription: 'Когда нужны деньги на развитие своего дела',
    cardAmountLabel: 'до 99 млрд ₽',
    cardTermLabel: 'до 120 мес.',
    minAmountLabel: '50 млн ₽',
    maxAmountLabel: '≥200 млн ₽', // Показываем ≥200 млн вместо 99 млрд
    minTermLabel: '1 мес',
    maxTermLabel: '120 мес',
  },
} as const;