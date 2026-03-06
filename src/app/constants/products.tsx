// Products data and types - v3.0 (unified with modals.ts)
import imgIconView1 from "figma:asset/b116ede83d918c70ee33b67dd684fee5df30c0ea.png";
import imgIconView2 from "figma:asset/745488c8f6bf481d7812fab8e092fd177ab9e3bb.png";
import imgIconView3 from "figma:asset/2d8f436e8926b098b31a198377f23d2e9a55c7d7.png";
import imgIconView4 from "figma:asset/17fe6d92a7c017a237c968c627a7c792bf116508.png";
import imgIconView5 from "figma:asset/d16e6a030103ccd22ae1b16e81f4fb0b73c880a3.png";
import imgIconView6 from "figma:asset/52e0ab2ca9d1645496f0a5feb2a3a8b074b833b4.png";
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
  useObjectFit?: boolean; // Использовать object-fit вместо позиционирования
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
  useObjectFit?: boolean; // Использовать object-fit вместо позиционирования
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
    useObjectFit: PRODUCT_DATA.salary.useObjectFit,
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
    useObjectFit: PRODUCT_DATA.cards.useObjectFit,
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
    useObjectFit: PRODUCT_DATA.ved.useObjectFit,
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
    useObjectFit: PRODUCT_DATA.salary.useObjectFit,
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