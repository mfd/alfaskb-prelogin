import svgPaths from "./svg-ix5nbnhm2b";
import imgIconView from "figma:asset/0eea04d3331a3987901314e541223a620220b47e.png";
import { imgShapeContent } from "./svg-bgpih";

function Overlay() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".Overlay">
      <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Cross() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Cross">
      <div className="absolute backdrop-blur-[5px] bg-[rgba(38,55,88,0.06)] left-0 opacity-40 rounded-[50px] size-[32px] top-0" data-name="BG" />
      <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="cross">
        <div className="absolute inset-1/4" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p36d3fa00} fill="var(--fill-0, #898991)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Fixer8Px() {
  return <div className="h-[8px] shrink-0 w-full" data-name="Fixer_8px" />;
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Все виды банковских гарантий</p>
      </div>
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">Заключайте одно рамочное соглашение — получайте несколько гарантий в течение срока</p>
      </div>
    </div>
  );
}

function ShapeContent() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Content">
      <ShapeContent />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-33.33%] max-w-none size-[142.1%] top-[-24.18%]" src={imgIconView} />
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[16.67%_4.17%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
            <g id="icon">
              <path d={svgPaths.p31008580} fill="var(--fill-0, #212124)" />
              <path clipRule="evenodd" d={svgPaths.p27c08200} fill="var(--fill-0, #212124)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon />
      </div>
      <Filler />
    </div>
  );
}

function TopSlot() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">10 млрд ₽</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Максимальный лимит</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%_4.17%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path clipRule="evenodd" d={svgPaths.p35cafd00} fill="var(--fill-0, #212124)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler1() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon1 />
      </div>
      <Filler1 />
    </div>
  );
}

function TopSlot1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic1 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">76 месяцев</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Максимальный срок</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%_16.67%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path clipRule="evenodd" d={svgPaths.p25945e00} fill="var(--fill-0, #030306)" fillOpacity="0.88" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler2() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon2 />
      </div>
      <Filler2 />
    </div>
  );
}

function TopSlot2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic2 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Без залога</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Зависит от финансового состояния</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[0_14.6%_0_14.58%]" data-name="icon">
          <div className="absolute inset-[2.35%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9958 22.8738">
              <g id="icon">
                <path d={svgPaths.p18217380} fill="var(--fill-0, #212124)" />
                <path d={svgPaths.p3fdb4d00} fill="var(--fill-0, #212124)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filler3() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon3 />
      </div>
      <Filler3 />
    </div>
  );
}

function TopSlot3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic3 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Гибкие условия</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Повышаем сумму и срок в индивидуальном порядке</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot1 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot2 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot3 />
      </div>
    </div>
  );
}

function TitleContent() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title+Content">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".Title">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pr-[8px] py-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px]">
                <p className="leading-[28px]">Банковская гарантия</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start overflow-clip pl-[8px] py-[8px] relative shrink-0 w-[40px]" data-name=".Header / Right slot">
          <Cross />
        </div>
      </div>
      <Fixer8Px />
      <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="Content">
        <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="SwapMe">
          <Frame1 />
          <div className="opacity-0 relative shrink-0 w-full" data-name="SpacerVertical 2.0">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[158px] py-[6px] relative w-full">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3193fc] text-[10px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
                  M - 24px
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Headline.Typography">
            <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Преимущества</p>
          </div>
          <div className="opacity-0 relative shrink-0 w-full" data-name="SpacerVertical 2.0">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[160px] py-[2px] relative w-full">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fbd700] text-[10px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
                  S - 16px
                </p>
              </div>
            </div>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function MainBody1() {
  return (
    <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="MainBody">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Swiper">
            <div className="bg-[#e7e8ec] h-[4px] rounded-[20px] shrink-0 w-[36px]" data-name="swiper" />
          </div>
          <TitleContent />
        </div>
      </div>
    </div>
  );
}

function MainBody() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-end left-0 right-0" data-name="MainBody">
      <MainBody1 />
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] size-full" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[573px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
        <Overlay />
        <MainBody />
      </div>
    </div>
  );
}