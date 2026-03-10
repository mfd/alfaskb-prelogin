import svgPaths from "./svg-b5gelmi08a";
import imgIconView from "figma:asset/a46b19810327a8da419337ef2b3b3e6ec44f353f.png";
import imgIconView1 from "figma:asset/935b0b72eac0ff8af0d2988501f6bace8e9ca20d.png";
import imgIconView2 from "figma:asset/30d972c5fac439fc586d71b84ea26790ff5d48ee.png";
import imgIconView3 from "figma:asset/7e8511301674d39f8cd176578d253954d9e47842.png";
import imgIconView4 from "figma:asset/1f419c8ea7101b3f8b826ac9e399696f51a0e351.png";
import imgIconView5 from "figma:asset/0ea90dc395def68741ab5acac4eae35370fa3187.png";
import { imgShapeContent } from "./svg-ul2ok";

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
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Приём платежей онлайн и в торговых точках</p>
      </div>
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">Принимайте оплату картами выгодно</p>
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
            <img alt="" className="absolute h-[117.64%] left-[-4.87%] max-w-none top-[-10%] w-[110.72%]" src={imgIconView} />
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
        <div className="absolute inset-[11.9%_9.59%_10.82%_9.59%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3977 18.5468">
            <path d={svgPaths.p2d4d7380} fill="var(--fill-0, #212124)" id="icon" />
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
      <div className="content-stretch flex gap-[10px] items-start overflow-clip px-[8px] relative shrink-0" data-name="Graphic">
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Гибкие условия</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">С учётом вашей сферы деятельности</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[4.17%_20.83%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 22">
            <g id="icon">
              <path clipRule="evenodd" d={svgPaths.pb4f4100} fill="#212124" fillRule="evenodd" />
              <path d={svgPaths.p6f43570} fill="#212124" />
              <path d={svgPaths.p1a387900} fill="#212124" />
            </g>
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Терминалы на выбор</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Можно интегрировать с кассой</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[12.5%_4.17%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <g id="icon">
              <path d={svgPaths.pcaa4280} fill="var(--fill-0, #030306)" fillOpacity="0.88" />
              <path d={svgPaths.p7a08280} fill="var(--fill-0, #030306)" fillOpacity="0.88" />
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Все способы оплаты</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Картами, через СБП и бесконтактно</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">{`Поддержка 24/7 `}</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Выделенная горячая линия для среднего и крупного бизнеса</p>
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
                <p className="leading-[28px]">Торговый эквайринг</p>
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
    <div className="absolute h-[460px] left-[269px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[229px] w-[360px]" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[887px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
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
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Управляйте корпоративным зарплатным проектом онлайн</p>
      </div>
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">Экономьте ресурсы для развития предприятия</p>
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
            <img alt="" className="absolute left-[7.17%] max-w-none size-full top-[-4.1%]" src={imgIconView1} />
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">От 1 минуты</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Зачисление зарплаты на счёт</p>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">До 23:30</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Увеличенный операционный день</p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p10e5a9f0} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="icon" />
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Круглосуточная поддержка</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Персональный зарплатный менеджер</p>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%_16.67%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path clipRule="evenodd" d={svgPaths.p100c6b00} fill="var(--fill-0, #212124)" fillRule="evenodd" id="icon" />
          </svg>
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Бесплатно</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Снятие наличных в любом банкомате России</p>
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
                <p className="leading-[28px]">Зарплатный проект</p>
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
    <div className="absolute h-[480px] left-[669px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[209px] w-[360px]" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[887px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
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
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Валютные переводы между юридическими лицами</p>
      </div>
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">В иностранной валюте онлайн</p>
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
            <img alt="" className="absolute left-[-42.5%] max-w-none size-[180%] top-[-45%]" src={imgIconView2} />
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
        <div className="absolute inset-[16.63%_16.63%_13.15%_13.15%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8532 16.8543">
            <path d={svgPaths.p3ca6280} fill="var(--fill-0, #212124)" id="icon" />
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">GPI-трекер</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Отслеживайте статус платежей в реальном времени бесплатно</p>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Всего 1 час</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Занимает отправка валютных платежей от подписания</p>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pea49c00} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="icon" />
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Интернет-банк</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Система сама заполнит часть полей и проведёт валидации</p>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9997 18">
            <path d={svgPaths.p6022600} fill="var(--fill-0, #212124)" id="icon" />
          </svg>
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Уведомления</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Бесплатно уведомим контрагента по e‑mail о совершении платежа</p>
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
                <p className="leading-[28px]">ВЭД</p>
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
    <div className="absolute h-[520px] left-[1469px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[169px] w-[360px]" data-name="BottomSheet">
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
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Единая корпоративная карта</p>
      </div>
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">Настраивается под ваши потребности, другие карты не нужны</p>
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
            <img alt="" className="absolute left-[-22.22%] max-w-none size-[144.44%] top-[-19.44%]" src={imgIconView3} />
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Неограниченное количество карт</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Заменяет подотчётные средства и командировочные</p>
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.pb645480} fill="var(--fill-0, #212124)" />
              <path d={svgPaths.p1c0c4000} fill="var(--fill-0, #212124)" />
              <path clipRule="evenodd" d={svgPaths.p35389200} fill="var(--fill-0, #212124)" fillRule="evenodd" />
            </g>
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Карта на выбор</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Пластиковая, металл, стикер, виртуальная с возможностью довыпуска в любое время</p>
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute bottom-1/4 flex items-center justify-center left-[12.5%] right-[12.5%] top-1/4">
          <div className="-scale-y-100 flex-none h-[12px] w-[18px]">
            <div className="relative size-full" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                <g id="icon">
                  <path d={svgPaths.p280e3100} fill="var(--fill-0, #030306)" fillOpacity="0.88" />
                  <path d={svgPaths.p227a1b00} fill="var(--fill-0, #030306)" fillOpacity="0.88" />
                  <path d={svgPaths.p22390b80} fill="var(--fill-0, #030306)" fillOpacity="0.88" />
                </g>
              </svg>
            </div>
          </div>
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Управление расходами онлайн</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Настраивайте лимиты по картам и ограничивайте круг трат</p>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
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
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Переводы с карты</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">На другие карты до 1,5 млн ₽ в месяц с назначением платежа</p>
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
                <p className="leading-[28px]">Бизнес-карты</p>
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
    <div className="absolute h-[540px] left-[1069px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[149px] w-[360px]" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[887px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
        <Overlay3 />
        <MainBody6 />
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".Overlay">
      <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Cross4() {
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

function Fixer8Px4() {
  return <div className="h-[8px] shrink-0 w-full" data-name="Fixer_8px" />;
}

function Frame13() {
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

function ShapeContent4() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Content">
      <ShapeContent4 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame13 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-12.5%] max-w-none size-[135%] top-[-13.68%]" src={imgIconView4} />
          </div>
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%_16.67%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path clipRule="evenodd" d={svgPaths.p100c6b00} fill="var(--fill-0, #212124)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler16() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon16 />
      </div>
      <Filler16 />
    </div>
  );
}

function TopSlot16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic16 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Технологично</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Инкассация в любое время без участия инкассаторов</p>
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[4.17%_25.13%_4.16%_24.87%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 22.0012">
            <g id="icon">
              <path d={svgPaths.p3caaf900} fill="#212124" />
              <path d={svgPaths.p151a300} fill="#212124" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler17() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon17 />
      </div>
      <Filler17 />
    </div>
  );
}

function TopSlot17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic17 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Индивидуально</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Персональный менеджер и валютный контролёр</p>
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%_4.17%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path clipRule="evenodd" d={svgPaths.p35cafd00} fill="var(--fill-0, #030306)" fillOpacity="0.88" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler18() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon18 />
      </div>
      <Filler18 />
    </div>
  );
}

function TopSlot18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic18 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Круглосуточно</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Платежи клиентам Альфа‑Банка</p>
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 18">
            <path d={svgPaths.p8f41f20} fill="var(--fill-0, #212124)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler19() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon19 />
      </div>
      <Filler19 />
    </div>
  );
}

function TopSlot19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic19 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Удобно</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">
            Платежи в другие банки
            <br aria-hidden="true" />
            с 00:00 до 20:00 мск
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot16 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot17 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot18 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot19 />
      </div>
    </div>
  );
}

function TitleContent4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title+Content">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".Title">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pr-[8px] py-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px]">
                <p className="leading-[28px]">РКО для бизнеса</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start overflow-clip pl-[8px] py-[8px] relative shrink-0 w-[40px]" data-name=".Header / Right slot">
          <Cross4 />
        </div>
      </div>
      <Fixer8Px4 />
      <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="Content">
        <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="SwapMe">
          <Frame12 />
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
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function MainBody9() {
  return (
    <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="MainBody">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Swiper">
            <div className="bg-[#e7e8ec] h-[4px] rounded-[20px] shrink-0 w-[36px]" data-name="swiper" />
          </div>
          <TitleContent4 />
        </div>
      </div>
    </div>
  );
}

function MainBody8() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-end left-0 right-0" data-name="MainBody">
      <MainBody9 />
    </div>
  );
}

function BottomSheet4() {
  return (
    <div className="absolute h-[520px] left-[1869px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[169px] w-[360px]" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[592px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
        <Overlay4 />
        <MainBody8 />
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".Overlay">
      <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Cross5() {
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

function Fixer8Px5() {
  return <div className="h-[8px] shrink-0 w-full" data-name="Fixer_8px" />;
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">Откройте депозит и получайте доход</p>
      </div>
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">Даже если нет расчётного счёта в банке</p>
      </div>
    </div>
  );
}

function ShapeContent5() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Content">
      <ShapeContent5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame16 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-4.77%] max-w-none size-[108.93%] top-[-8.33%]" src={imgIconView5} />
          </div>
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p18609380} fill="var(--fill-0, #212124)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler20() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon20 />
      </div>
      <Filler20 />
    </div>
  );
}

function TopSlot20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic20 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">Онлайн</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Станьте клиентом дистанционно</p>
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[10.42%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <g id="icon">
              <path clipRule="evenodd" d={svgPaths.p3ca5d300} fill="#212124" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p33a9800} fill="#212124" fillRule="evenodd" />
              <path d={svgPaths.p7313000} fill="#212124" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler21() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon21 />
      </div>
      <Filler21 />
    </div>
  );
}

function TopSlot21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic21 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">¼ ключевой ставки</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Начисляем на остаток по счёту</p>
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[8.33%_4.17%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path clipRule="evenodd" d={svgPaths.p35cafd00} fill="var(--fill-0, #030306)" fillOpacity="0.88" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filler22() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon22 />
      </div>
      <Filler22 />
    </div>
  );
}

function TopSlot22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic22 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">От 1 дня</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">
            Любой срок размещения
            <br aria-hidden="true" />
            от 1 дня до 3 лет
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon23() {
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

function Filler23() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />;
}

function Graphic23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
      <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
        <Icon23 />
      </div>
      <Filler23 />
    </div>
  );
}

function TopSlot23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <Graphic23 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">От 50 000 ₽ или ¥</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">Минимальная сумма</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot20 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot21 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot22 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
        <TopSlot23 />
      </div>
    </div>
  );
}

function TitleContent5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title+Content">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".Title">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pr-[8px] py-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px]">
                <p className="leading-[28px]">Депозиты для бизнеса</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start overflow-clip pl-[8px] py-[8px] relative shrink-0 w-[40px]" data-name=".Header / Right slot">
          <Cross5 />
        </div>
      </div>
      <Fixer8Px5 />
      <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="Content">
        <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="SwapMe">
          <Frame15 />
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
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function MainBody11() {
  return (
    <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="MainBody">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Swiper">
            <div className="bg-[#e7e8ec] h-[4px] rounded-[20px] shrink-0 w-[36px]" data-name="swiper" />
          </div>
          <TitleContent5 />
        </div>
      </div>
    </div>
  );
}

function MainBody10() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-end left-0 right-0" data-name="MainBody">
      <MainBody11 />
    </div>
  );
}

function BottomSheet5() {
  return (
    <div className="absolute h-[460px] left-[2269px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[229px] w-[360px]" data-name="BottomSheet">
      <div className="absolute bottom-0 content-stretch flex h-[532px] items-start left-0 rounded-tl-[24px] rounded-tr-[24px] w-[360px]" data-name="BottomSheet">
        <Overlay5 />
        <MainBody10 />
      </div>
    </div>
  );
}

export default function Frame18() {
  return (
    <div className="bg-[#ccc] relative size-full">
      <BottomSheet />
      <BottomSheet1 />
      <BottomSheet2 />
      <BottomSheet3 />
      <BottomSheet4 />
      <BottomSheet5 />
    </div>
  );
}