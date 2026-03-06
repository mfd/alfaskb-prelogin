import svgPaths from "./svg-jk6wjpgdyc";
import imgFaceThinking from "figma:asset/0b7600ba10ccefdd829b525e4cfd2a18ac97c830.png";
type MFooterProps = {
  className?: string;
  custom?: boolean;
  footer?: boolean;
  prop2ndButton?: boolean;
  prop3rdButton?: boolean;
  stickyFooter?: boolean;
  style?: "Horizontal" | "Vertical";
};

function MFooter({ className, custom = false, footer = true, prop2ndButton = false, prop3rdButton = false, stickyFooter = false, style = "Horizontal" }: MFooterProps) {
  const isFooterAndCustomAndVertical = footer && custom && style === "Vertical";
  const isFooterAndNotCustomAndHorizontal = footer && !custom && style === "Horizontal";
  const isFooterAndNotCustomAndVertical = footer && !custom && style === "Vertical";
  const isNotFooterAndNotCustomAndHorizontal = !footer && !custom && style === "Horizontal";
  return (
    <div className={className || `bg-white content-stretch flex items-start relative w-[360px] ${isNotFooterAndNotCustomAndHorizontal ? "justify-end min-h-[16px] px-[8px]" : isFooterAndCustomAndVertical ? "flex-col h-[80px] p-[16px]" : isFooterAndNotCustomAndVertical ? "flex-col gap-[12px] p-[16px]" : "gap-[12px] p-[16px]"}`}>
      {footer && !custom && ["Horizontal", "Vertical"].includes(style) && (
        <div className={`bg-[#ef3124] min-h-[48px] min-w-[104px] relative rounded-[12px] ${isFooterAndNotCustomAndVertical ? "shrink-0 w-full" : "flex-[1_0_0]"}`} data-name="Button_1">
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
              <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
                  <p className="leading-[24px]">Primary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isFooterAndNotCustomAndHorizontal && (
        <div className="backdrop-blur-[40px] bg-[rgba(38,55,88,0.06)] flex-[1_0_0] min-h-[48px] min-w-[104px] relative rounded-[12px]" data-name="Button_2">
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
              <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                  <p className="leading-[24px]">Secondary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isFooterAndNotCustomAndHorizontal && stickyFooter && (
        <div className="absolute h-px left-0 right-0 top-0" data-name="Border">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <g id="Border">
              <path clipRule="evenodd" d="M360 1H0V0H360V1Z" fill="var(--fill-0, #E7E8EC)" fillRule="evenodd" id="Border_2" />
            </g>
          </svg>
        </div>
      )}
      {isFooterAndNotCustomAndVertical && prop2ndButton && (
        <div className="backdrop-blur-[40px] bg-[rgba(38,55,88,0.06)] min-h-[48px] min-w-[104px] relative rounded-[12px] shrink-0 w-full" data-name="Button_2">
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
              <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                  <p className="leading-[24px]">ButtonMob</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isFooterAndNotCustomAndVertical && prop3rdButton && (
        <div className="backdrop-blur-[40px] bg-[rgba(38,55,88,0.06)] min-h-[48px] min-w-[104px] relative rounded-[12px] shrink-0 w-full" data-name="Button_3">
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
              <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                  <p className="leading-[24px]">ButtonMob</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isFooterAndNotCustomAndVertical && stickyFooter && (
        <div className="absolute h-px left-0 right-0 top-0" data-name="Border">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <g id="Border">
              <path clipRule="evenodd" d="M360 1H0V0H360V1Z" fill="var(--fill-0, #E7E8EC)" fillRule="evenodd" id="Border_2" />
            </g>
          </svg>
        </div>
      )}
      {isFooterAndCustomAndVertical && (
        <div className="bg-[#ebf1fe] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name=".BottomAddon">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="h-[48px] shrink-0 w-full" data-name="Fixer" />
          </div>
          <div aria-hidden="true" className="absolute border border-[#2288fa] border-dashed inset-0 pointer-events-none rounded-[8px]" />
        </div>
      )}
      {isFooterAndCustomAndVertical && stickyFooter && (
        <div className="absolute h-px left-0 right-0 top-0" data-name="Border">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <g id="Border">
              <path clipRule="evenodd" d="M360 1H0V0H360V1Z" fill="var(--fill-0, #E7E8EC)" fillRule="evenodd" id="Border_2" />
            </g>
          </svg>
        </div>
      )}
      {isNotFooterAndNotCustomAndHorizontal && <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px" data-name="Fixer" />}
    </div>
  );
}

export default function SidePanel({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col h-[800px] items-start overflow-clip relative rounded-[16px] w-[360px]"} data-name="SidePanel">
      <div className="bg-white content-stretch flex gap-[16px] items-center min-h-[64px] px-[8px] py-[16px] relative shrink-0 w-[360px]" data-name=".M_Header">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[8px] pr-[56px] shrink-0 w-[344px]" data-name="Title" />
        <div className="absolute content-stretch flex items-start overflow-clip p-[8px] right-[8px] top-[8px]" data-name=".M_Cross">
          <div className="relative shrink-0 size-[32px]" data-name="Cross">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[5px] bg-[rgba(38,55,88,0.06)] left-1/2 rounded-[50px] size-[32px] top-1/2" data-name="BG" />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cross">
              <div className="absolute inset-1/4" data-name="icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p36d3fa00} fill="var(--fill-0, #898991)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="[Custom Content Part]">
        <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name=".Basket-ServiceMessage">
            <div className="content-stretch flex flex-col items-start py-[16px] relative size-full">
              <div className="content-stretch flex flex-col h-[672px] items-center justify-center relative shrink-0 w-full" data-name="ServiceMessage">
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="TopSlot">
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="TopSlot">
                    <div className="content-stretch flex items-start justify-center pb-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Graphic">
                      <div className="overflow-clip relative shrink-0 size-[72px]" data-name="face_thinking">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFaceThinking} />
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-name="Text Content">
                      <div className="flex flex-col items-center size-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic px-[16px] relative text-[rgba(3,3,6,0.88)] text-center w-full">
                          <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[20px] tracking-[0.38px] w-full">Ваш список пуст</p>
                          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] w-full">Добавляйте интересующие вас продукты для быстрой консультации и подключения в будущем</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-end justify-between overflow-clip pt-[24px] relative shrink-0 w-full" data-name=".Button">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center justify-end min-h-px min-w-px relative" data-name="Buttons">
                        <button className="backdrop-blur-[40px] bg-[rgba(38,55,88,0.06)] cursor-pointer min-h-[48px] min-w-[104px] relative rounded-[12px] shrink-0 w-full" data-name="Button_2">
                          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
                              <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                                <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-left whitespace-nowrap">
                                  <p className="leading-[24px]">Понятно</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MFooter className="bg-white min-h-[16px] relative shrink-0 w-full" footer={false} prop2ndButton />
    </div>
  );
}