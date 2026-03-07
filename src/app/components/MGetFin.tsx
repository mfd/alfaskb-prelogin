import svgPaths from "../../imports/svg-8rxqz1wqhb";
import imgIconView from "figma:asset/fba7823a1d9ed597ed66bef65724a783078389b5.png";
import { imgShapeContent1 } from "../../imports/svg-xqvb8";
import StatusBadge from "./StatusBadge";

function ShapeContent1() {
  return (
    <div
      className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0"
      data-name="ShapeContent"
      style={{ maskImage: `url('${imgShapeContent1}')` }}
    >
      <div
        className="absolute left-0 overflow-clip size-[64px] top-0"
        data-name="BgImg"
      />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="relative shrink-0 size-[64px]"
      data-name="Content"
    >
      <ShapeContent1 />
    </div>
  );
}

function Head1() {
  return (
    <div
      className="content-stretch flex items-start justify-between relative shrink-0 w-full"
      data-name="head"
    >
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]"
        data-name="PreloginProductsIcon"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]"
          data-name="IconView"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute left-[1.4%] max-w-none size-full top-0"
              src={imgIconView}
            />
          </div>
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[rgba(255,255,255,0.94)] w-full"
      data-name="body"
    >
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[20px] tracking-[0.38px] w-full font-bold">
        Получите финансирование
      </p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] w-full">
        Без залога, по 2 документам
        <br aria-hidden="true" />и всего за 3 дня
      </p>
    </div>
  );
}

function Text() {
  return (
    <div
      className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-[187px]"
      data-name="Text"
    >
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] tracking-[-0.32px] w-full">
        <p className="leading-[20px] font-bold">До 200 млн ₽</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] w-full">
        <p className="leading-[16px]">до 36 мес</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="row"
    >
      <Text />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[187px]">
      <StatusBadge variant="fastFinContrast" />
      <Row />
    </div>
  );
}

function Text1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-[187px]"
      data-name="Text"
    >
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] tracking-[-0.32px] w-full">
        <p className="leading-[20px] font-bold">До 2 млрд ₽</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] w-full">
        <p className="leading-[16px]">до 120 мес</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="row"
    >
      <Text1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[187px]">
      <StatusBadge variant="longFinContrast" />
      <Row1 />
    </div>
  );
}

function SelectFlow({
  onFastFinClick,
  onLongFinClick,
}: {
  onFastFinClick?: (e: React.MouseEvent) => void;
  onLongFinClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full"
      data-name="selectFlow"
    >
      <div onClick={onFastFinClick} className="cursor-pointer">
        <Frame4 />
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 296 2"
          >
            <path
              d="M296 1L0 1"
              id="Vector 2"
              stroke="var(--stroke-0, #353539)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div onClick={onLongFinClick} className="cursor-pointer">
        <Frame5 />
      </div>
    </div>
  );
}

function Fixer1() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Fixer"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Fixer">
          <path
            d={svgPaths.pb73ca00}
            fill="var(--fill-0, white)"
            fillOpacity="0.94"
            id="PaintMe"
          />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="LeftAddon"
    >
      <div
        className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0"
        data-name="LeftAddon"
      >
        <Fixer1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="content-stretch flex flex-col items-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Добавить</p>
      </div>
    </div>
  );
}

interface MGetFinProps {
  onAddClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onFastFinClick?: (e: React.MouseEvent) => void;
  onLongFinClick?: (e: React.MouseEvent) => void;
}

export default function MGetFin({
  onAddClick,
  onFastFinClick,
  onLongFinClick,
}: MGetFinProps) {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 w-full p-[0px]"
      data-name="M_CredCard"
    >
      <div
        className="bg-[#1c1c1e] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]"
        data-name="CardMain"
      >
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
            <Head1 />
            <Body1 />
            <SelectFlow
              onFastFinClick={onFastFinClick}
              onLongFinClick={onLongFinClick}
            />
            <div
              className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full"
              data-name="wip6 / kredBtns-wip6"
            >
              <button
                className="bg-[#ef3124] min-h-[40px] min-w-[88px] relative rounded-[12px] shrink-0 w-full"
                data-name="Button_1"
                onClick={onAddClick}
              >
                <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                    <LeftAddon />
                    <Text2 />
                  </div>
                </div>
              </button>
              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] text-center w-full">
                <p className="leading-[16px]">
                  Настройте сумму и условия финансирования
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}