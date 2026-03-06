import svgPaths from "./svg-xe87gnk8kz";
import imgIconView from "figma:asset/935b0b72eac0ff8af0d2988501f6bace8e9ca20d.png";
import { imgShapeContent } from "./svg-d7vce";
import StatusBadge from "../app/components/StatusBadge";

function ShapeContent() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute left-0 overflow-clip size-[72px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="Content">
      <ShapeContent />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="wrap">
      <p className='font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] whitespace-nowrap underline-product-title'>Овердрафт</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(238,238,251,0.55)] w-[min-content]">Краткосрочный кредит для защиты от кассовых разрывов</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="text">
      <Wrap />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[332px]" data-name="title">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[7.17%] max-w-none size-full top-[-4.1%]" src={imgIconView} />
          </div>
          <Content1 />
        </div>
      </div>
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[157px]" data-name="Text">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] h-[18px] leading-[18px] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">Ваша сумма кредита</p>
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] w-full">
        <p className="font-bold leading-[26px] text-[22px] whitespace-nowrap">200 000 000 ₽</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">
        <p className="leading-[18px]">из 99 млрд ₽</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Text">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] h-[18px] leading-[18px] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">Ваш срок кредита</p>
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] w-[137px]">
        <p className="font-bold leading-[26px] text-[22px]">36 мес</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">
        <p className="leading-[18px]">до 120 месяцев</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="row">
      <Text1 />
      <div className="h-[66px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 66">
            <path d="M1 0V66" id="Vector 2" stroke="var(--stroke-0, #353539)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Text2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[483px]">
      <StatusBadge variant="longFinContrast" />
      <Row />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative" data-name="content">
      <Title />
      <Frame />
    </div>
  );
}

function Fixer() {
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

function LeftAddon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
        <Fixer />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">В корзине</p>
      </div>
    </div>
  );
}

function Fixer1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fixer">
          <path d={svgPaths.p23ff1b00} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
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

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
        <p className="leading-[24px]">Изменить</p>
      </div>
    </div>
  );
}

export default function DCredCardLong() {
  return (
    <div className="bg-[#1c1c1e] content-stretch flex items-start justify-between overflow-clip p-[32px] relative rounded-[32px] size-full" data-name="wip6 / D_CredCard">
      <Content />
      <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[158px]" data-name="wip6 / kredBtns-wip6">
        <div className="bg-[#0cc44d] min-h-[48px] min-w-[104px] relative rounded-[8px] shrink-0 w-full" data-name="[D] CustomButton">
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
              <LeftAddon />
              <Text3 />
            </div>
          </div>
        </div>
        <div className="bg-white min-h-[48px] min-w-[104px] relative rounded-[8px] shrink-0 w-full" data-name="[D] CustomButton">
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
              <LeftAddon1 />
              <Text4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
