import { useCart } from '../contexts/CartContext';
import imgIconView from "figma:asset/7186d95bd7ca1e12cf93fa27d3d2e711c96d8bb5.png";
import imgIconView1 from "figma:asset/a46b19810327a8da419337ef2b3b3e6ec44f353f.png";
import imgIconView2 from "figma:asset/935b0b72eac0ff8af0d2988501f6bace8e9ca20d.png";
import imgIconView3 from "figma:asset/7e8511301674d39f8cd176578d253954d9e47842.png";
import imgIconView4 from "figma:asset/30d972c5fac439fc586d71b84ea26790ff5d48ee.png";
import imgIconView5 from "figma:asset/1f419c8ea7101b3f8b826ac9e399696f51a0e351.png";
import imgIconView6 from "figma:asset/0ea90dc395def68741ab5acac4eae35370fa3187.png";
import { PRODUCT_DATA } from '../constants/modals';

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

// Построено из PRODUCT_DATA из modals.ts + financing
export const PRODUCTS: Product[] = [
  {
    id: 'financing',
    title: 'Получите финансирование',
    description: '75 000 000 ₽ / 36 месяцев',
    icon: PRODUCT_ICONS.financing,
  },
  {
    id: 'acquiring',
    title: PRODUCT_DATA.acquiring.title,
    description: PRODUCT_DATA.acquiring.cardDescription || PRODUCT_DATA.acquiring.subtitle,
    icon: PRODUCT_ICONS.acquiring,
  },
  {
    id: 'salary',
    title: PRODUCT_DATA.salary.title,
    description: PRODUCT_DATA.salary.cardDescription || PRODUCT_DATA.salary.subtitle,
    icon: PRODUCT_ICONS.salary,
  },
  {
    id: 'cards',
    title: PRODUCT_DATA.cards.title,
    description: PRODUCT_DATA.cards.cardDescription || PRODUCT_DATA.cards.subtitle,
    icon: PRODUCT_ICONS.cards,
  },
  {
    id: 'ved',
    title: PRODUCT_DATA.ved.title,
    description: PRODUCT_DATA.ved.cardDescription || PRODUCT_DATA.ved.subtitle,
    icon: PRODUCT_ICONS.ved,
  },
  {
    id: 'rko',
    title: PRODUCT_DATA.rko.title,
    description: PRODUCT_DATA.rko.cardDescription || PRODUCT_DATA.rko.subtitle,
    icon: PRODUCT_ICONS.rko,
  },
  {
    id: 'deposits',
    title: PRODUCT_DATA.deposits.title,
    description: PRODUCT_DATA.deposits.cardDescription || PRODUCT_DATA.deposits.subtitle,
    icon: PRODUCT_ICONS.deposits,
  },
];
