import { useCart } from '../contexts/CartContext';
import imgIconView from "../../assets/7186d95bd7ca1e12cf93fa27d3d2e711c96d8bb5.png";
import imgIconView1 from "../../assets/a46b19810327a8da419337ef2b3b3e6ec44f353f.png";
import imgIconView2 from "../../assets/935b0b72eac0ff8af0d2988501f6bace8e9ca20d.png";
import imgIconView3 from "../../assets/7e8511301674d39f8cd176578d253954d9e47842.png";
import imgIconView4 from "../../assets/30d972c5fac439fc586d71b84ea26790ff5d48ee.png";
import imgIconView5 from "../../assets/1f419c8ea7101b3f8b826ac9e399696f51a0e351.png";
import imgIconView6 from "../../assets/0ea90dc395def68741ab5acac4eae35370fa3187.png";

export const PRODUCT_ICONS = {
  financing: imgIconView,
  acquiring: imgIconView1,
  salary: imgIconView2,
  cards: imgIconView3,
  ved: imgIconView4,
  rko: imgIconView5,
  deposits: imgIconView6,
};

export interface Product {
  id: string;
  title: string;
  description?: string;
  icon: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'financing',
    title: 'Получите финансирование',
    description: '75 000 000 ₽ / 36 месяцев',
    icon: PRODUCT_ICONS.financing,
  },
  {
    id: 'acquiring',
    title: 'Торговый эквайринг',
    description: 'Приём платежей онлайн и в торговых точках',
    icon: PRODUCT_ICONS.acquiring,
  },
  {
    id: 'salary',
    title: 'Зарплатный проект',
    description: 'Подключение за 0 ₽ и управление онлайн',
    icon: PRODUCT_ICONS.salary,
  },
  {
    id: 'cards',
    title: 'Бизнес-карты',
    description: 'Единая корпоративная карта, настраивается под ваши потребности',
    icon: PRODUCT_ICONS.cards,
  },
  {
    id: 'ved',
    title: 'ВЭД',
    description: 'Валютные переводы м/у юрлицами в иностранной валюте онлайн',
    icon: PRODUCT_ICONS.ved,
  },
  {
    id: 'rko',
    title: 'РКО для бизнеса',
    description: 'Откроем за 1 день и онлайн',
    icon: PRODUCT_ICONS.rko,
  },
  {
    id: 'deposits',
    title: 'Депозиты для бизнеса',
    description: 'Онлайн на срок от 1 дня',
    icon: PRODUCT_ICONS.deposits,
  },
];
