import svgPaths from "./svg-8o35t6fz17";
import imgIconView from "figma:asset/7186d95bd7ca1e12cf93fa27d3d2e711c96d8bb5.png";
import imgIconView1 from "figma:asset/0eea04d3331a3987901314e541223a620220b47e.png";
import imgIconView2 from "figma:asset/44690177e6c33f3932ceda7be51d1886a99a6432.png";
import imgIconView3 from "figma:asset/4469f5679ca3f6c22feca14fe50ece4db25237d6.png";
import { imgShapeContent } from "./svg-0iab4";

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

function BottomSheet() {
  return (
    <div className="absolute h-[500px] left-0 overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-0 w-[360px]" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[572px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
        <Overlay />
        <MainBody />
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".Overlay">
      <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Cross1() {
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

function Fixer8Px1() {
  return <div className="h-[8px] shrink-0 w-full" data-name="Fixer_8px" />;
}

function Frame4() {
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

function ShapeContent1() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Content">
      <ShapeContent1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame4 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-33.33%] max-w-none size-[142.1%] top-[-24.18%]" src={imgIconView1} />
          </div>
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
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

function Filler4() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon4 />
      </div>
      <Filler4 />
    </div>
  );
}

function TopSlot4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic4 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">10 млрд ₽</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Максимальный лимит</p>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
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

function Filler5() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon5 />
      </div>
      <Filler5 />
    </div>
  );
}

function TopSlot5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic5 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">76 месяцев</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Максимальный срок</p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
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

function Filler6() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon6 />
      </div>
      <Filler6 />
    </div>
  );
}

function TopSlot6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic6 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Без залога</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Зависит от финансового состояния</p>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
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

function Filler7() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon7 />
      </div>
      <Filler7 />
    </div>
  );
}

function TopSlot7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic7 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Гибкие условия</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Повышаем сумму и срок в индивидуальном порядке</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot4 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot5 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot6 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot7 />
      </div>
    </div>
  );
}

function TitleContent1() {
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
          <Cross1 />
        </div>
      </div>
      <Fixer8Px1 />
      <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="Content">
        <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="SwapMe">
          <Frame3 />
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
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function MainBody3() {
  return (
    <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="MainBody">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Swiper">
            <div className="bg-[#e7e8ec] h-[4px] rounded-[20px] shrink-0 w-[36px]" data-name="swiper" />
          </div>
          <TitleContent1 />
        </div>
      </div>
    </div>
  );
}

function MainBody2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-end left-0 right-0" data-name="MainBody">
      <MainBody3 />
    </div>
  );
}

function BottomSheet1() {
  return (
    <div className="absolute h-[500px] left-[400px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-0 w-[360px]" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[573px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
        <Overlay1 />
        <MainBody2 />
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".Overlay">
      <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Cross2() {
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

function Fixer8Px2() {
  return <div className="h-[8px] shrink-0 w-full" data-name="Fixer_8px" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Краткосрочный кредит для защиты от кассовых разрывов</p>
      </div>
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">Если деньги от покупателей поступят на счёт позже</p>
      </div>
    </div>
  );
}

function ShapeContent2() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Content">
      <ShapeContent2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame7 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[194.35%] left-[-36.3%] max-w-none top-[-42.36%] w-[179.01%]" src={imgIconView2} />
          </div>
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
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

function Filler8() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon8 />
      </div>
      <Filler8 />
    </div>
  );
}

function TopSlot8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic8 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Лимит</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Рассчитывается индивидуально</p>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%_12.5%_4.17%_12.5%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
            <path d={svgPaths.p3169f800} fill="var(--fill-0, #212124)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler9() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon9 />
      </div>
      <Filler9 />
    </div>
  );
}

function TopSlot9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic9 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">36 месяцев</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Максимальный срок договора</p>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
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

function Filler10() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon10 />
      </div>
      <Filler10 />
    </div>
  );
}

function TopSlot10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic10 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Без залога</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Только поручительство собственника</p>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
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

function Filler11() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon11 />
      </div>
      <Filler11 />
    </div>
  );
}

function TopSlot11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic11 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Гибкие условия</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Для погашения долга и процентов</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot8 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot9 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot10 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot11 />
      </div>
    </div>
  );
}

function TitleContent2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title+Content">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".Title">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pr-[8px] py-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px]">
                <p className="leading-[28px]">Овердрафт</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start overflow-clip pl-[8px] py-[8px] relative shrink-0 w-[40px]" data-name=".Header / Right slot">
          <Cross2 />
        </div>
      </div>
      <Fixer8Px2 />
      <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="Content">
        <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="SwapMe">
          <Frame6 />
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
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function MainBody5() {
  return (
    <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="MainBody">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Swiper">
            <div className="bg-[#e7e8ec] h-[4px] rounded-[20px] shrink-0 w-[36px]" data-name="swiper" />
          </div>
          <TitleContent2 />
        </div>
      </div>
    </div>
  );
}

function MainBody4() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-end left-0 right-0" data-name="MainBody">
      <MainBody5 />
    </div>
  );
}

function BottomSheet2() {
  return (
    <div className="absolute h-[460px] left-[800px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[40px] w-[360px]" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[887px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
        <Overlay2 />
        <MainBody4 />
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".Overlay">
      <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Cross3() {
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

function Fixer8Px3() {
  return <div className="h-[8px] shrink-0 w-full" data-name="Fixer_8px" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Финансируйте поставки и закупки</p>
      </div>
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">
          C отсрочкой платежа
          <br aria-hidden="true" />
          — удобно и быстро
        </p>
      </div>
    </div>
  );
}

function ShapeContent3() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Content">
      <ShapeContent3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame10 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[204.8%] left-[-49.01%] max-w-none top-[-55.06%] w-[193.61%]" src={imgIconView3} />
          </div>
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[11.9%_9.59%_10.82%_9.59%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3977 18.5468">
            <path d={svgPaths.p2d4d7380} fill="var(--fill-0, #212124)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler12() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon12 />
      </div>
      <Filler12 />
    </div>
  );
}

function TopSlot12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic12 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Индивидуальный подход</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Гибкие решения</p>
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%_2.09%_12.5%_2.08%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0001 19">
            <path clipRule="evenodd" d={svgPaths.p9198500} fill="var(--fill-0, #212124)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler13() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon13 />
      </div>
      <Filler13 />
    </div>
  );
}

function TopSlot13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic13 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Улучшайте баланс</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Без увеличения долговой нагрузки</p>
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%_14.48%_5.72%_14.5%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0449 20.6267">
            <g id="icon">
              <path d={svgPaths.p11f87200} fill="var(--fill-0, #030306)" fillOpacity="0.88" />
              <path d={svgPaths.p19295600} fill="var(--fill-0, #030306)" fillOpacity="0.88" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler14() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon14 />
      </div>
      <Filler14 />
    </div>
  );
}

function TopSlot14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic14 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Получите деньги</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">На любые задачи бизнеса</p>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p5897d00} fill="var(--fill-0, #212124)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler15() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon15 />
      </div>
      <Filler15 />
    </div>
  );
}

function TopSlot15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic15 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Экономьте время</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Управляйте финансированием онлайн</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot12 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot13 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot14 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot15 />
      </div>
    </div>
  );
}

function TitleContent3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title+Content">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".Title">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pr-[8px] py-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px]">
                <p className="leading-[28px]">Факторинг</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start overflow-clip pl-[8px] py-[8px] relative shrink-0 w-[40px]" data-name=".Header / Right slot">
          <Cross3 />
        </div>
      </div>
      <Fixer8Px3 />
      <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="Content">
        <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="SwapMe">
          <Frame9 />
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
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function MainBody7() {
  return (
    <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="MainBody">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Swiper">
            <div className="bg-[#e7e8ec] h-[4px] rounded-[20px] shrink-0 w-[36px]" data-name="swiper" />
          </div>
          <TitleContent3 />
        </div>
      </div>
    </div>
  );
}

function MainBody6() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-end left-0 right-0" data-name="MainBody">
      <MainBody7 />
    </div>
  );
}

function BottomSheet3() {
  return (
    <div className="absolute h-[440px] left-[1200px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[60px] w-[360px]" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[641px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
        <Overlay3 />
        <MainBody6 />
      </div>
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="relative size-full">
      <BottomSheet />
      <BottomSheet1 />
      <BottomSheet2 />
      <BottomSheet3 />
    </div>
  );
}