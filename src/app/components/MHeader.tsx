import svgPaths from "../../imports/svg-8rxqz1wqhb";
import { COMPANY_INFO } from "../constants/company";

function Fixer9() {
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
            d={svgPaths.p176e4b00}
            fill="var(--fill-0, white)"
            fillOpacity="0.94"
            id="PaintMe"
          />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon8() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="LeftAddon"
    >
      <div
        className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0"
        data-name="LeftAddon"
      >
        <Fixer9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div
      className="content-stretch flex flex-col items-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Выход</p>
      </div>
    </div>
  );
}

function Btns() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0"
      data-name="Btns"
    >
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">{COMPANY_INFO.phone}</p>
      </div>
      <div
        className="backdrop-blur-[40px] bg-[rgba(214,214,229,0.07)] content-stretch flex gap-[2px] items-center justify-center min-h-[32px] min-w-[80px] overflow-clip px-[12px] py-[4px] relative rounded-[8px] shrink-0"
        data-name="[M] Button"
      >
        <LeftAddon8 />
        <Text10 />
      </div>
    </div>
  );
}

export default function MHeader() {
  return (
    <div
      className="fixed mprelogin-header left-1/2 -translate-x-1/2 top-0 w-full h-[56px] bg-[#000000] z-50 max-w-[600px]"
      data-name="MobileHeader"
    >
      <div className="">
        <div className="w-full relative h-full">
          <div
            className="absolute content-stretch flex items-center justify-between left-[16px] right-[16px] top-[12px]"
            data-name="Content"
          >
            <div
              className="h-[32px] relative shrink-0 w-[22px]"
              data-name="a-logo"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 22 32"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.peb74480}
                  fill="var(--fill-0, #EF3124)"
                  fillRule="evenodd"
                  id="a-logo"
                />
              </svg>
            </div>
            <Btns />
          </div>
        </div>
      </div>
    </div>
  );
}