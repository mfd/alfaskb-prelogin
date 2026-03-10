import svgPaths from "./svg-gkapoe50kc";
import imgIconView from "figma:asset/7186d95bd7ca1e12cf93fa27d3d2e711c96d8bb5.png";
import { imgShapeContent } from "./svg-u59g0";

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
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Одобрим единый кредитный лимит на всё и сразу</p>
      </div>
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">Получите решение в срок от 3 до 7 дней</p>
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
            <img alt="" className="absolute left-[1.4%] max-w-none size-full top-0" src={imgIconView} />
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
        <div className="absolute inset-[8.33%_8.33%_4.17%_16.67%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
            <g id="icon">
              <path clipRule="evenodd" d={svgPaths.p2dee2f80} fill="var(--fill-0, #212124)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe1dd080} fill="var(--fill-0, #212124)" fillRule="evenodd" />
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Всего 2 документа</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">На первом этапе только отчётность по формам 1 и 2</p>
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Быстрое онлайн‑решение</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">
            До 200 млн ₽ за 3 дня
            <br aria-hidden="true" />
            и до 500 млн ₽ за 7 дней
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[4.17%_14.48%_5.72%_14.5%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0449 21.6267">
            <g id="icon">
              <path d={svgPaths.p355df100} fill="var(--fill-0, #030306)" fillOpacity="0.88" />
              <path d={svgPaths.p3cc39100} fill="var(--fill-0, #030306)" fillOpacity="0.88" />
            </g>
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
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Только поручительство собственника</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p398b2500} fill="var(--fill-0, #212124)" fillRule="evenodd" />
              <path d={svgPaths.p174fc200} fill="var(--fill-0, #212124)" />
            </g>
          </svg>
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Выбирайте, на что тратить</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Кредитная линия, гарантия, овердрафт, факторинг</p>
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
                <p className="leading-[28px]">Кредитная линия</p>
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
      <div className="absolute bottom-0 content-stretch flex h-[572px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
        <Overlay />
        <MainBody />
      </div>
    </div>
  );
}