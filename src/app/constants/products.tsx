// Products data and types - v3.0 (unified with modals.ts)
import imgIconView1 from "figma:asset/a46b19810327a8da419337ef2b3b3e6ec44f353f.png";
import imgIconView2 from "figma:asset/935b0b72eac0ff8af0d2988501f6bace8e9ca20d.png";
import imgIconView3 from "figma:asset/7e8511301674d39f8cd176578d253954d9e47842.png";
import imgIconView4 from "figma:asset/30d972c5fac439fc586d71b84ea26790ff5d48ee.png";
import imgIconView5 from "figma:asset/1f419c8ea7101b3f8b826ac9e399696f51a0e351.png";
import imgIconView6 from "figma:asset/0ea90dc395def68741ab5acac4eae35370fa3187.png";
import { PRODUCT_DATA } from "./modals";

// Иконки продуктов
export const PRODUCT_ICONS = {
  acquiring: imgIconView1,
  salary: imgIconView2,
  cards: imgIconView3,
  ved: imgIconView4,
  rko: imgIconView5,
  deposits: imgIconView6,
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

// Desktop Products Data - построены из PRODUCT_DATA из modals.ts
export const DESKTOP_PRODUCTS: DesktopProductData[] = [
  {
    id: "acquiring",
    title: PRODUCT_DATA.acquiring.title,
    description: PRODUCT_DATA.acquiring.cardDescription || PRODUCT_DATA.acquiring.subtitle,
    benefits: PRODUCT_DATA.acquiring.cardBenefits || [],
    icon: {
      image: PRODUCT_ICONS.acquiring,
      position: PRODUCT_DATA.acquiring.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "salary",
    title: PRODUCT_DATA.salary.title,
    description: PRODUCT_DATA.salary.cardDescription || PRODUCT_DATA.salary.subtitle,
    benefits: PRODUCT_DATA.salary.cardBenefits || [],
    icon: {
      image: PRODUCT_ICONS.salary,
      position: PRODUCT_DATA.salary.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "cards",
    title: PRODUCT_DATA.cards.title,
    description: PRODUCT_DATA.cards.cardDescription || PRODUCT_DATA.cards.subtitle,
    benefits: PRODUCT_DATA.cards.cardBenefits || [],
    icon: {
      image: PRODUCT_ICONS.cards,
      position: PRODUCT_DATA.cards.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "ved",
    title: PRODUCT_DATA.ved.title,
    description: PRODUCT_DATA.ved.cardDescription || PRODUCT_DATA.ved.subtitle,
    benefits: PRODUCT_DATA.ved.cardBenefits || [],
    icon: {
      image: PRODUCT_ICONS.ved,
      position: PRODUCT_DATA.ved.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "rko",
    title: PRODUCT_DATA.rko.title,
    description: PRODUCT_DATA.rko.cardDescription || PRODUCT_DATA.rko.subtitle,
    benefits: PRODUCT_DATA.rko.cardBenefits || [],
    icon: {
      image: PRODUCT_ICONS.rko,
      position: PRODUCT_DATA.rko.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "deposits",
    title: PRODUCT_DATA.deposits.title,
    description: PRODUCT_DATA.deposits.cardDescription || PRODUCT_DATA.deposits.subtitle,
    benefits: PRODUCT_DATA.deposits.cardBenefits || [],
    icon: {
      image: PRODUCT_ICONS.deposits,
      position: PRODUCT_DATA.deposits.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
];

// Mobile Products Data - построены из PRODUCT_DATA из modals.ts
export const MOBILE_PRODUCTS: MobileProductData[] = [
  {
    id: "acquiring",
    title: PRODUCT_DATA.acquiring.title,
    description: PRODUCT_DATA.acquiring.cardDescription || PRODUCT_DATA.acquiring.subtitle,
    icon: {
      image: PRODUCT_ICONS.acquiring,
      position: PRODUCT_DATA.acquiring.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "salary",
    title: PRODUCT_DATA.salary.title,
    description: PRODUCT_DATA.salary.cardDescription || PRODUCT_DATA.salary.subtitle,
    icon: {
      image: PRODUCT_ICONS.salary,
      position: {
        ...(PRODUCT_DATA.salary.iconPosition || {
          left: "0",
          top: "0",
        }),
        size: "full",
      },
    },
  },
  {
    id: "cards",
    title: PRODUCT_DATA.cards.title,
    description: PRODUCT_DATA.cards.cardDescription || PRODUCT_DATA.cards.subtitle,
    icon: {
      image: PRODUCT_ICONS.cards,
      position: PRODUCT_DATA.cards.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "ved",
    title: PRODUCT_DATA.ved.title,
    description: PRODUCT_DATA.ved.cardDescription || PRODUCT_DATA.ved.subtitle,
    icon: {
      image: PRODUCT_ICONS.ved,
      position: PRODUCT_DATA.ved.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "rko",
    title: PRODUCT_DATA.rko.title,
    description: PRODUCT_DATA.rko.cardDescription || PRODUCT_DATA.rko.subtitle,
    icon: {
      image: PRODUCT_ICONS.rko,
      position: PRODUCT_DATA.rko.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    id: "deposits",
    title: PRODUCT_DATA.deposits.title,
    description: PRODUCT_DATA.deposits.cardDescription || PRODUCT_DATA.deposits.subtitle,
    icon: {
      image: PRODUCT_ICONS.deposits,
      position: PRODUCT_DATA.deposits.iconPosition || {
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      },
    },
  },
];
