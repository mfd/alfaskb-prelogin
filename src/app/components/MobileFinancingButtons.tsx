import svgPaths from "../../imports/svg-x1ydv67pv3";

interface MobileFinancingButtonsProps {
  onEdit: () => void;
  onCart?: () => void;
  showInCart?: boolean;
}

export function MobileFinancingButtons({ onEdit, onCart, showInCart = true }: MobileFinancingButtonsProps) {
  console.log('MobileFinancingButtons rendered', { showInCart });
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="wip6 / kredBtns-wip6">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="DCCardButton">
        {/* Кнопка "Изменить" */}
        <button
          onClick={onEdit}
          className="bg-white flex-[1_0_0] min-h-[48px] min-w-[88px] relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity"
          data-name="[M] CustomButton"
        >
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
              <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
                <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
                  <div className="relative shrink-0 size-[16px]" data-name="Fixer">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Fixer">
                        <path d={svgPaths.p11e0fc00} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                  <p className="leading-[20px]">Изменить</p>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Кнопка "В корзине" */}
        {showInCart && (
          <button
            onClick={onCart}
            className="bg-[#0cc44d] flex-[1_0_0] min-h-[48px] min-w-[88px] relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity"
            data-name="[M] CustomButton"
          >
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
                  <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
                    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="Fixer">
                          <path d={svgPaths.p30c53c80} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                  <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
                    <p className="leading-[20px]">В корзине</p>
                  </div>
                </div>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
