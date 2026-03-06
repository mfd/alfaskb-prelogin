import svgPaths from "./svg-lgvhqyc1hb";
import imgIconView from "figma:asset/fba7823a1d9ed597ed66bef65724a783078389b5.png";
import imgIconView1 from "figma:asset/b116ede83d918c70ee33b67dd684fee5df30c0ea.png";
import imgIconView2 from "figma:asset/745488c8f6bf481d7812fab8e092fd177ab9e3bb.png";
import imgIconView3 from "figma:asset/2d8f436e8926b098b31a198377f23d2e9a55c7d7.png";
import imgIconView4 from "figma:asset/17fe6d92a7c017a237c968c627a7c792bf116508.png";
import imgIconView5 from "figma:asset/d16e6a030103ccd22ae1b16e81f4fb0b73c880a3.png";
import imgIconView6 from "figma:asset/52e0ab2ca9d1645496f0a5feb2a3a8b074b833b4.png";
import { imgPrimaryDarkColor, imgPrimaryDarkColor1, imgShapeContent } from "./svg-073oh";
import StatusBadge from "../app/components/StatusBadge";
import { DesktopProductCard } from "../app/components/DesktopProductCard";
import { DESKTOP_PRODUCTS } from "../app/constants/products";
import { DesktopProductIcon } from "../app/components/DesktopProductIcon";
import DProductButton from "../app/components/DProductButton";
import { PRODUCTS } from "../app/components/ProductCard";

function LogoContainer() {
  return (
    <div className="h-[40px] relative shrink-0 w-[28px]" data-name="LogoContainer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 40">
        <g id="LogoContainer">
          <path clipRule="evenodd" d={svgPaths.p12878700} fill="var(--fill-0, #EF3124)" fillRule="evenodd" id="a-logo" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryDarkColor() {
  return <div className="absolute bg-[rgba(255,255,255,0.94)] inset-[0_4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.414px_6.188px] mask-size-[39.234px_11.977px]" data-name="PrimaryDarkColor" style={{ maskImage: `url('${imgPrimaryDarkColor}')` }} />;
}

function TabLabel() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="TabLabel">
      <PrimaryDarkColor />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[80px] overflow-clip px-[16px] py-[12px] relative rounded-[99px] shrink-0" data-name="Tab_1">
      <TabLabel />
    </div>
  );
}

function PrimaryDarkColor1() {
  return <div className="absolute bg-[rgba(255,255,255,0.94)] inset-[0_4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.414px_6.188px] mask-size-[39.234px_11.977px]" data-name="PrimaryDarkColor" style={{ maskImage: `url('${imgPrimaryDarkColor1}')` }} />;
}

function PrimaryLightColor() {
  return <div className="absolute bg-[rgba(3,3,6,0.88)] inset-[0_4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.414px_6.188px] mask-size-[39.234px_11.977px]" data-name="PrimaryLightColor" style={{ maskImage: `url('${imgPrimaryDarkColor1}')` }} />;
}

function TabLabel1() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="TabLabel">
      <PrimaryDarkColor1 />
      <PrimaryLightColor />
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[80px] overflow-clip px-[16px] py-[12px] relative rounded-[99px] shrink-0" data-name="Tab_2">
      <div className="absolute bg-[rgba(255,255,255,0.94)] inset-0" data-name="Bg" />
      <TabLabel1 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-center min-h-px min-w-px relative" data-name="Links">
      <div className="content-stretch flex items-center relative shrink-0" data-name=".Logo">
        <LogoContainer />
      </div>
      <div className="bg-[rgba(225,225,248,0.09)] content-stretch flex items-start max-w-[1140px] opacity-0 overflow-x-auto overflow-y-clip p-[2px] relative rounded-[99px] shrink-0" data-name="TabsPanel">
        <Tab />
        <Tab1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Paragraph.Typography">
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">ООО «Рога и копыта»</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Text">
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-[120px]" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(238,238,251,0.55)] whitespace-pre-wrap">{`ИНН:  124567543`}</p>
      </div>
      <Frame />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="111">
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Paragraph.Typography">
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">+7 (900) 999-000-22</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Text">
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-[144px]" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(238,238,251,0.55)]">Вы вошли по номеру</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="112">
      <Text1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Component1 />
      <Component2 />
    </div>
  );
}

function Fixer() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.p1fb7b600} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Корзина</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="backdrop-blur-[40px] bg-[rgba(222,222,238,0.13)] min-h-[40px] min-w-[88px] relative rounded-[8px] shrink-0 w-full" data-name="[D] Button">
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
            <LeftAddon />
            <Text2 />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#ef3124] content-stretch flex items-center justify-center left-[107px] max-h-[20px] min-h-[20px] min-w-[20px] px-[4px] py-[2px] rounded-[16px] top-[-5px]" data-name="Indicator">
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.94)] text-center whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Выйти</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame5 />
      <div className="backdrop-blur-[40px] bg-[rgba(222,222,238,0.13)] content-stretch flex gap-[2px] items-center justify-center min-h-[40px] min-w-[88px] overflow-clip px-[16px] py-[4px] relative rounded-[8px] shrink-0" data-name="[D] Button">
        <Text3 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <Links />
      <Frame2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1140px] z-[1]" data-name="Content">
      <div className="h-[16px] shrink-0 w-[1140px]" data-name="PaddingTop" />
      <Content1 />
      <div className="h-[16px] shrink-0 w-[1140px]" data-name="PaddingBot" />
    </div>
  );
}

function MainHeaderV() {
  return (
    <div className="bg-[#121213] relative shrink-0 w-full" data-name=".MainHeaderV3">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col isolate items-center px-[150px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Рога">
      <div className="absolute h-[64px] left-0 top-0 w-[1280px]" data-name="Corners">
        <div className="absolute inset-[0_95%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
            <path clipRule="evenodd" d={svgPaths.p7a05300} fill="var(--fill-0, #121213)" fillRule="evenodd" id="Corners" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[64px] right-0 top-0 w-[1280px]" data-name="Corners">
        <div className="absolute inset-[0_0_0_95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
            <path clipRule="evenodd" d={svgPaths.p3cabb580} fill="var(--fill-0, #121213)" fillRule="evenodd" id="Corners" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="content-stretch flex flex-col items-center px-[70px] relative w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1140px]" data-name="headline">
          <div className="content-stretch flex items-center relative shrink-0 w-[751px]" data-name="Headline.Typography">
            <p className='flex-[1_0_0] font-["SF_Pro_Display",sans-serif] font-bold leading-[48px] min-h-px min-w-px not-italic relative text-[40px] text-[rgba(3,3,6,0.88)]'>
              Подобрали для вас
              <br aria-hidden="true" />
              лучшие продукты и условия
            </p>
          </div>
          <div className="content-stretch flex items-center max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
            <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] max-w-[751px] min-h-px min-w-px not-italic relative text-[18px] text-[rgba(4,4,19,0.55)]">
              Мы проанализировали деятельность вашей компании
              <br aria-hidden="true" />
              и предлагаем персональные спецпредложения по следующим продуктам:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapeContent() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[72px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="Content">
      <ShapeContent />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-name="wrap">
      <p className='font-["SF_Pro_Display",sans-serif] font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)]'>Получите<br aria-hidden="true" />финансирование</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-[rgba(238,238,251,0.55)]">
        Без залога, по 2 документам
        <br aria-hidden="true" />и всего за 3 дня
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[301px]" data-name="text">
      <Wrap />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[332px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[1.4%] max-w-none size-full top-0" src={imgIconView} />
          </div>
          <Content3 />
        </div>
      </div>
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] w-full">
        <p className="not-italic font-bold text-[22px] leading-[26px]">До 200 млн ₽</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">
        <p className="leading-[18px]">до 36 мес</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="row">
      <Text5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[169px]">
      <StatusBadge variant="fastFinContrast" />
      <Row />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-[187px]" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] w-full">
        <p className="not-italic font-bold text-[22px] leading-[26px]">До 2 млрд ₽</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">
        <p className="leading-[18px]">до 120 месяцев</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="row">
      <Text6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[187px]">
      <StatusBadge variant="longFinContrast" />
      <Row1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
      <Frame6 />
      <div className="h-[74.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 74.5">
            <path d="M1 0V74.5" id="Vector 2" stroke="var(--stroke-0, #353539)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0" data-name="content">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Fixer1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fixer">
          <path d={svgPaths.p25f6ce40} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
        <Fixer1 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Добавить</p>
      </div>
    </div>
  );
}

function ShapeContent1() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[72px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="Content">
      <ShapeContent1 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative" data-name="text">
      <p className='font-["SF_Pro_Display",sans-serif] font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap underline-product-title'>Торговый эквайринг</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content]">
        Приём платежей онлайн
        <br aria-hidden="true" />
        и в торговых точках
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[332px]" data-name="title">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[117.64%] left-[-4.87%] max-w-none top-[-10%] w-[110.72%]" src={imgIconView1} />
          </div>
          <Content5 />
        </div>
      </div>
      <Text8 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem1">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem1">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Гибкие условия, с учётом вашей сферы деятельности</p>
      </div>
    </div>
  );
}

function Component12Px() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem2">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem2">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Терминалы на выбор, можно интегрировать с кассой</p>
      </div>
    </div>
  );
}

function Component12Px1() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px1 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem3">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem3">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Поддержка 24/7</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative" data-name="content">
      <Title />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="benefits">
        <div className="content-stretch flex flex-col items-start pr-[32px] relative w-full">
          <ListItem />
          <Shifter />
          <ListItem1 />
          <Shifter1 />
          <ListItem2 />
        </div>
      </div>
    </div>
  );
}

function Fixer2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fixer">
          <path d={svgPaths.p28d167f0} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
        <Fixer2 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Добавить</p>
      </div>
    </div>
  );
}

function ShapeContent2() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[72px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="Content">
      <ShapeContent2 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative" data-name="text">
      <p className='font-["SF_Pro_Display",sans-serif] font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap underline-product-title'>Зарплатный проект</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content]">Подключение за 0 ₽ и управление онлайн</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[332px]" data-name="title">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[7.17%] max-w-none size-full top-[-4.1%]" src={imgIconView2} />
          </div>
          <Content7 />
        </div>
      </div>
      <Text10 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem1">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem1">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Комфортный срок размещения — от 1 дня</p>
      </div>
    </div>
  );
}

function Component12Px2() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px2 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem2">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem2">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Гибкая ставка — зависит от суммы и срока депозита</p>
      </div>
    </div>
  );
}

function Component12Px3() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px3 />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem3">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem3">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">��</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Подберём удобный вид размещения</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative" data-name="content">
      <Title1 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="benefits">
        <div className="content-stretch flex flex-col items-start pr-[32px] relative w-full">
          <ListItem3 />
          <Shifter2 />
          <ListItem4 />
          <Shifter3 />
          <ListItem5 />
        </div>
      </div>
    </div>
  );
}

function Fixer3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fixer">
          <path d={svgPaths.p28d167f0} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
        <Fixer3 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Добавить</p>
      </div>
    </div>
  );
}

function ShapeContent3() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[72px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="Content">
      <ShapeContent3 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative" data-name="text">
      <p className='font-["SF_Pro_Display",sans-serif] font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap underline-product-title'>Бизнес-карты</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content]">Единая корпоративная карта, настраивается под ваши потребности</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[332px]" data-name="title">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-22.22%] max-w-none size-[144.44%] top-[-19.44%]" src={imgIconView3} />
          </div>
          <Content9 />
        </div>
      </div>
      <Text12 />
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem1">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem1">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Единая корпоративная карта настраивается под ваши потребности, другие карты не нужны</p>
      </div>
    </div>
  );
}

function Component12Px4() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px4 />
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem2">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem2">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Неограниченное количество карт для вас и ваших сотрудников</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative" data-name="content">
      <Title2 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="benefits">
        <div className="content-stretch flex flex-col items-start pr-[32px] relative w-full">
          <ListItem6 />
          <Shifter4 />
          <ListItem7 />
        </div>
      </div>
    </div>
  );
}

function Fixer4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fixer">
          <path d={svgPaths.p25f6ce40} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
        <Fixer4 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Добавить</p>
      </div>
    </div>
  );
}

function ShapeContent4() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[72px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="Content">
      <ShapeContent4 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative" data-name="text">
      <p className='font-["SF_Pro_Display",sans-serif] font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap underline-product-title'>ВЭД</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content]">Валютные переводы м/у юрлицами и иностранной валюте онлайн</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[332px]" data-name="title">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-42.5%] max-w-none size-[180%] top-[-45%]" src={imgIconView4} />
          </div>
          <Content11 />
        </div>
      </div>
      <Text14 />
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem1">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem1">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Международные расчёты cо сроком зачисления средств контрагенту — от 1 до 5 рабочих дней</p>
      </div>
    </div>
  );
}

function Component12Px5() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px5 />
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem2">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem2">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Стоимость — от 3,5% до 5% от суммы платежа, включая затраты на конверсию</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative" data-name="content">
      <Title3 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="benefits">
        <div className="content-stretch flex flex-col items-start pr-[32px] relative w-full">
          <ListItem8 />
          <Shifter5 />
          <ListItem9 />
        </div>
      </div>
    </div>
  );
}

function Fixer5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fixer">
          <path d={svgPaths.p25f6ce40} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
        <Fixer5 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Добавить</p>
      </div>
    </div>
  );
}

function ShapeContent5() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[72px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content13() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="Content">
      <ShapeContent5 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative" data-name="text">
      <p className='font-["SF_Pro_Display",sans-serif] font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap underline-product-title'>РКО для бизнеса</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content]">Откроем за 1 день и онлайн</p>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[332px]" data-name="title">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-12.5%] max-w-none size-[135%] top-[-13.68%]" src={imgIconView5} />
          </div>
          <Content13 />
        </div>
      </div>
      <Text16 />
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem1">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem1">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Инкассация в любое время без участия инкассаторов</p>
      </div>
    </div>
  );
}

function Component12Px6() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px6 />
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem2">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem2">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Персональный менеджер и валютный контролёр</p>
      </div>
    </div>
  );
}

function Component12Px7() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px7 />
    </div>
  );
}

function ListItem12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem3">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem3">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Платежи в другие банки с 00:00 до 20:00 мск</p>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative" data-name="content">
      <Title4 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="benefits">
        <div className="content-stretch flex flex-col items-start pr-[32px] relative w-full">
          <ListItem10 />
          <Shifter6 />
          <ListItem11 />
          <Shifter7 />
          <ListItem12 />
        </div>
      </div>
    </div>
  );
}

function Fixer6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fixer">
          <path d={svgPaths.p25f6ce40} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
        <Fixer6 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Добавить</p>
      </div>
    </div>
  );
}

function ShapeContent6() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[72px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content15() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="Content">
      <ShapeContent6 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative" data-name="text">
      <p className='font-["SF_Pro_Display",sans-serif] font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap underline-product-title'>Депозиты для бизнеса</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content]">Онлайн на срок от 1 дня</p>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[332px]" data-name="title">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-4.77%] max-w-none size-[108.93%] top-[-8.33%]" src={imgIconView6} />
          </div>
          <Content15 />
        </div>
      </div>
      <Text18 />
    </div>
  );
}

function ListItem13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem1">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem1">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Онлайн – cтаньте клиентом дистанционно</p>
      </div>
    </div>
  );
}

function Component12Px8() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px8 />
    </div>
  );
}

function ListItem14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem2">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem2">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">1/4 ключевой ставки – начисляем на остаток по счёту</p>
      </div>
    </div>
  );
}

function Component12Px9() {
  return <div className="h-[12px] shrink-0 w-full" data-name="12px" />;
}

function Shifter9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component12Px9 />
    </div>
  );
}

function ListItem15() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem3">
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="ListItem3">
        <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
        <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">Любой срок размещения от 1 дня до 3 лет</p>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative" data-name="content">
      <Title5 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="benefits">
        <div className="content-stretch flex flex-col items-start pr-[32px] relative w-full">
          <ListItem13 />
          <Shifter8 />
          <ListItem14 />
          <Shifter9 />
          <ListItem15 />
        </div>
      </div>
    </div>
  );
}

function Fixer7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fixer">
          <path d={svgPaths.p25f6ce40} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
        <Fixer7 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Добавить</p>
      </div>
    </div>
  );
}

function Cards({ toggleItem, isInCart }: { toggleItem?: (item: any) => void; isInCart?: (productId: string) => boolean }) {
  const handleAddClick = (productId: string) => {
    if (!toggleItem) return;
    
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      toggleItem({ ...product, productId });
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="cards">
      {DESKTOP_PRODUCTS.map((product) => (
        <DesktopProductCard
          key={product.id}
          icon={<DesktopProductIcon data={product} />}
          title={product.title}
          description={product.description}
          benefits={product.benefits}
          onAddClick={() => handleAddClick(product.id)}
          isInCart={isInCart ? isInCart(product.id) : false}
        />
      ))}
    </div>
  );
}

function Section1({ onOpenFinancing, toggleItem, isInCart }: { onOpenFinancing?: () => void; toggleItem?: (item: any) => void; isInCart?: (productId: string) => boolean }) {
  const handleFinancingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onOpenFinancing) {
      onOpenFinancing();
    }
  };
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="content-stretch flex flex-col gap-[24px] items-center px-[70px] mt-[16px] relative w-full">
        <div className="bg-[#1c1c1e] content-stretch flex h-[172px] items-start justify-between overflow-clip p-[32px] relative rounded-[32px] shrink-0 w-[1140px]" data-name="DesktopCredCard">
          <Content2 />
          <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0" data-name="wip6 / kredBtns-wip6">
            <DProductButton variant="add" onClick={handleFinancingClick} />
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] text-center w-[153px]">
              <p className="leading-[16px] text-right">
                Настройте сумму
                <br aria-hidden="true" />
                и условия финансирования
              </p>
            </div>
          </div>
        </div>
        <Cards toggleItem={toggleItem} isInCart={isInCart} />
      </div>
    </div>
  );
}

function Body({ onOpenFinancing, toggleItem, isInCart }: { onOpenFinancing?: () => void; toggleItem?: (item: any) => void; isInCart?: (productId: string) => boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pb-[128px] relative shrink-0 w-[1280px]" data-name="body">
      <Section />
      <Section1 onOpenFinancing={onOpenFinancing} toggleItem={toggleItem} isInCart={isInCart} />
    </div>
  );
}

function BgHeight1() {
  return <div className="bg-[#121213] h-[64px] rounded-tl-[64px] rounded-tr-[64px] shrink-0 w-full" data-name="BG_height_64" />;
}

function BgFill() {
  return <div className="bg-[#121213] flex-[1_0_0] min-h-px min-w-px w-full" data-name="BG_fill" />;
}

function Background() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end overflow-clip rounded-tl-[64px] rounded-tr-[64px]" data-name="Background">
      <BgHeight1 />
      <BgFill />
    </div>
  );
}

function BgHeight() {
  return <div className="h-[32px] rounded-tl-[64px] rounded-tr-[64px] shrink-0 w-full" data-name="BG_height_32" />;
}

function BreadCrumbs() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="BreadCrumbs">
      <BgHeight />
    </div>
  );
}

function SeoText() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[16px] items-start not-italic pb-[40px] relative shrink-0 text-[0px] text-[12px] text-[rgba(238,238,251,0.55)] w-[1140px]" data-name="SeoText">
      <p className="leading-[0] relative shrink-0 w-full whitespace-pre-wrap">
        <span className="leading-[16px]">{`© 2001-2025. АО «Альфа-Банк», официальный сайт. Генеральная лицензия Банка России № 1326 от 16 января 2015 г. `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/make-money/strahovanie_vkladov/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/make-money/strahovanie_vkladov/">
            АО «Альфа-Банк» является участником системы обязательного страхования вкладов.
          </span>
        </a>
        <span className="leading-[16px]">{` `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/annual_report/riskinfo/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/annual_report/riskinfo/">
            Информация о процентных ставках по договорам банковского вклада с физическими лицами.
          </span>
        </a>
        <span className="leading-[16px]">{` `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="http://www.e-disclosure.ru/portal/company.aspx?id=1389">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="http://www.e-disclosure.ru/portal/company.aspx?id=1389">
            Центр раскрытия корпоративной информации.
          </span>
        </a>
        <span className="leading-[16px]">{` `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/legal/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/legal/">
            Раскрытие информации профессионального участника рынка ценных бумаг.
          </span>
        </a>
        <span className="leading-[16px]">{`  `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/shareholders/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/shareholders/">
            Информация о лицах, под контролем либо значительным влиянием которых находится Банк.
          </span>
        </a>
        <span className="leading-[16px]">{` Ул. Каланчёвская, 27, Москва, 107078`}</span>
      </p>
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="leading-[16px]">{`АО «Альфа-Банк» является оператором по обработке персональных данных, информация об обработке персональных данных и сведения о реализуемых требованиях к защите персональных данных отражены в `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/pdn/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/pdn/">
            Политике в отношении обработки персональных данных
          </span>
        </a>
      </p>
      <p className="leading-[16px] relative shrink-0 underline w-full">
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid" href="https://alfabank.ru/about/cookies/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/cookies/">
            АО «Альфа-Банк» использует файлы «cookie» с целью персонализации сервисов и повышения удобства пользования веб-сайтом.
          </span>
        </a>
        <span className="[text-decoration-skip-ink:none] decoration-solid">{` Если вы не хотите, чтобы ваши пользовательские данные обрабатывались, пожалуйста, ограничьте их использование в своём браузере.`}</span>
      </p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col items-center px-[70px] relative shrink-0 w-full" data-name="Content">
      <BreadCrumbs />
      <SeoText />
    </div>
  );
}

function Desktop({ onOpenFinancing, toggleItem, isInCart }: { onOpenFinancing?: () => void; toggleItem?: (item: any) => void; isInCart?: (productId: string) => boolean }) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-1/2 -translate-x-1/2 overflow-clip pt-[72px] top-0 w-[1280px]" data-name="Desktop">
      <Body onOpenFinancing={onOpenFinancing} toggleItem={toggleItem} isInCart={isInCart} />
      <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[64px] rounded-tr-[64px] shrink-0 w-full" data-name="Footer">
        <Background />
        <Content16 />
      </div>
    </div>
  );
}

interface DPreloginProps {
  onOpenFinancing?: () => void;
  toggleItem?: (item: any) => void;
  isInCart?: (productId: string) => boolean;
}

export default function DPrelogin({ onOpenFinancing, toggleItem, isInCart }: DPreloginProps = {}) {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center" data-name="[D]-Prelogin">
      <div className="absolute content-stretch flex flex-col items-center left-1/2 -translate-x-1/2 top-0 w-[1280px]" data-name="wip5 / Header-wip5">
        <MainHeaderV />
        <Component />
      </div>
      <Desktop onOpenFinancing={onOpenFinancing} toggleItem={toggleItem} isInCart={isInCart} />
    </div>
  );
}