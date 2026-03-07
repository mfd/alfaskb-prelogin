import svgPaths from "../../imports/svg-958eq3f4f2";
import { imgPrimaryDarkColor, imgPrimaryDarkColor1 } from "../../imports/svg-yw5gu";
import { useCart } from '../contexts/CartContext';
import { COMPANY_INFO } from '../constants/company';

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
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">{COMPANY_INFO.name}</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Text">
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-[120px]" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(238,238,251,0.55)] whitespace-pre-wrap">{`ИНН:  ${COMPANY_INFO.inn}`}</p>
      </div>
      <Frame />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="111">
      <Text16 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Paragraph.Typography">
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">{COMPANY_INFO.phone}</p>
      </div>
    </div>
  );
}

function Text17() {
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
      <Text17 />
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

function Fixer7() {
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

function LeftAddon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer7 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Корзина</p>
      </div>
    </div>
  );
}

function Frame5({ openCart, itemsCount }: { openCart: () => void; itemsCount: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <button onClick={openCart} className="backdrop-blur-[40px] bg-[rgba(222,222,238,0.13)] min-h-[40px] min-w-[88px] relative rounded-[8px] shrink-0 w-full cursor-pointer" data-name="[D] Button">
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
            <LeftAddon7 />
            <Text18 />
          </div>
        </div>
      </button>
      {itemsCount > 0 && (
        <div className="absolute bg-[#ef3124] content-stretch flex items-center justify-center left-[107px] max-h-[20px] min-h-[20px] min-w-[20px] px-[4px] py-[2px] rounded-[16px] top-[-5px]" data-name="Indicator">
          <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.94)] text-center whitespace-nowrap">{itemsCount}</p>
        </div>
      )}
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Выйти</p> 
      </div>
    </div>
  );
}

function Frame4({ openCart, itemsCount }: { openCart: () => void; itemsCount: number }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame5 openCart={openCart} itemsCount={itemsCount} />
      <div className="backdrop-blur-[40px] bg-[rgba(222,222,238,0.13)] content-stretch flex gap-[2px] items-center justify-center min-h-[40px] min-w-[88px] overflow-clip px-[16px] py-[4px] relative rounded-[8px] shrink-0" data-name="[D] Button">
        <Text19 />
      </div>
    </div>
  );
}

function HeaderBtns({ openCart, itemsCount }: { openCart: () => void; itemsCount: number }) {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <Frame3 />
      <Frame4 openCart={openCart} itemsCount={itemsCount} />
    </div>
  );
}

function Content16({ openCart, itemsCount }: { openCart: () => void; itemsCount: number }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <Links />
      <HeaderBtns openCart={openCart} itemsCount={itemsCount} />
    </div>
  );
}

function Content15({ openCart, itemsCount }: { openCart: () => void; itemsCount: number }) {
  return (
    <div className="bg-[#121213] sticky top-0 z-50 w-full" data-name=".MainHeaderV3">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col isolate items-center px-[150px] relative w-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1140px] z-[1]" data-name="Content">
            <div className="h-[16px] shrink-0 w-[1140px]" data-name="PaddingTop" />
            <Content16 openCart={openCart} itemsCount={itemsCount} />
            <div className="h-[16px] shrink-0 w-[1140px]" data-name="PaddingBot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const { openCart, items } = useCart();
  
  return (
          <Content15 openCart={openCart} itemsCount={items.length} />
  );
}