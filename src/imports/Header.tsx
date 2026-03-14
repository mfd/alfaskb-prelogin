import svgPaths from "./svg-3uu1amdxmx";
import { imgPrimaryDarkColor, imgPrimaryDarkColor1 } from "./svg-skctn";

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

function PrimaryLightColor() {
  return <div className="absolute bg-[rgba(3,3,6,0.88)] inset-[0_4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.414px_6.188px] mask-size-[39.234px_11.977px]" data-name="PrimaryLightColor" style={{ maskImage: `url('${imgPrimaryDarkColor}')` }} />;
}

function TabLabel() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="TabLabel">
      <PrimaryDarkColor />
      <PrimaryLightColor />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[80px] overflow-clip px-[16px] py-[12px] relative rounded-[99px] shrink-0" data-name="Tab_1">
      <div className="absolute bg-[rgba(255,255,255,0.94)] inset-0" data-name="Bg" />
      <TabLabel />
    </div>
  );
}

function PrimaryDarkColor1() {
  return <div className="absolute bg-[rgba(255,255,255,0.94)] inset-[0_4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.414px_6.188px] mask-size-[39.234px_11.977px]" data-name="PrimaryDarkColor" style={{ maskImage: `url('${imgPrimaryDarkColor1}')` }} />;
}

function TabLabel1() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="TabLabel">
      <PrimaryDarkColor1 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[80px] overflow-clip px-[16px] py-[12px] relative rounded-[99px] shrink-0" data-name="Tab_2">
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
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">+7 (900) 999-000-22</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Text">
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-[144px]" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.94)]">Вы вошли по номеру</p>
      </div>
      <Frame />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Выйти</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end opacity-0 relative shrink-0" data-name="111">
      <Text />
      <div className="backdrop-blur-[40px] bg-[rgba(222,222,238,0.13)] content-stretch flex gap-[2px] items-center justify-center min-h-[40px] min-w-[88px] overflow-clip px-[16px] py-[4px] relative rounded-[8px] shrink-0" data-name="[D] Button">
        <Text1 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <Links />
      <Component />
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
    <div className="relative shrink-0 w-full" data-name=".MainHeaderV3">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col isolate items-center px-[150px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Header">
      <MainHeaderV />
    </div>
  );
}