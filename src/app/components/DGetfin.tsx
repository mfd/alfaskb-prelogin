import svgPaths from "../../imports/svg-lgvhqyc1hb";
import imgIconView from "figma:asset/fba7823a1d9ed597ed66bef65724a783078389b5.png";
import { imgShapeContent } from "../../imports/svg-073oh";
import StatusBadge from "./StatusBadge";
import DProductButton from "./DProductButton";

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

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[301px]" data-name="text">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-name="wrap">
        <p className='font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)]'>Получите<br aria-hidden="true" />финансирование</p>
        <p className="leading-[24px] relative shrink-0 text-[16px] text-[rgba(238,238,251,0.55)]">
          Без залога, по 2 документам
          <br aria-hidden="true" />и всего за 3 дня
        </p>
      </div>
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



function fastFin() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[169px]">
      <StatusBadge variant="fastFinContrast" />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="row">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative" data-name="Text">
          <div className="flex flex-col justify-center relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] w-full">
            <p className="not-italic font-bold text-[22px] leading-[26px]">До 200 млн ₽</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">
            <p className="leading-[18px]">до 36 мес</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function longFin() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[187px]">
      <StatusBadge variant="longFinContrast" />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="row">
        <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-[187px]" data-name="Text">
          <div className="flex flex-col justify-center relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] w-full">
            <p className="not-italic font-bold text-[22px] leading-[26px]">До 2 млрд ₽</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">
            <p className="leading-[18px]">до 120 месяцев</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
      <fastFin />
      <div className="h-[74.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 74.5">
            <path d="M1 0V74.5" id="Vector 2" stroke="var(--stroke-0, #353539)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <longFin />
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

interface DGetfinProps {
  onAddClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DGetfin({ onAddClick }: DGetfinProps) {
  return (
    <div className="bg-[#1c1c1e] content-stretch flex h-[172px] items-start justify-between overflow-clip p-[32px] relative rounded-[32px] shrink-0 w-[1140px]" data-name="DesktopCredCard">
      <Content2 />
      <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0" data-name="wip6 / kredBtns-wip6">
        <DProductButton variant="add" onClick={onAddClick} />
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] text-center w-[153px]">
          <p className="leading-[16px] text-right">
            Настройте сумму
            <br aria-hidden="true" />
            и условия финансирования
          </p>
        </div>
      </div>
    </div>
  );
}
