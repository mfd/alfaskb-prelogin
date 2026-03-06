import { useCart } from '../contexts/CartContext';
import imgIconView1 from "figma:asset/b116ede83d918c70ee33b67dd684fee5df30c0ea.png";
import imgIconView2 from "figma:asset/745488c8f6bf481d7812fab8e092fd177ab9e3bb.png";
import imgIconView3 from "figma:asset/2d8f436e8926b098b31a198377f23d2e9a55c7d7.png";
import imgIconView4 from "figma:asset/17fe6d92a7c017a237c968c627a7c792bf116508.png";
import imgIconView5 from "figma:asset/d16e6a030103ccd22ae1b16e81f4fb0b73c880a3.png";
import imgIconView6 from "figma:asset/52e0ab2ca9d1645496f0a5feb2a3a8b074b833b4.png";
import { PRODUCT_DATA } from '../constants/modals';

export const PRODUCT_ICONS = {
  financing: imgIconView2,
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