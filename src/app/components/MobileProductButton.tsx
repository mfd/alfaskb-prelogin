interface MobileProductButtonProps {
  onClick?: () => void;
  text?: string;
}

export function MobileProductButton({ onClick, text = "Добавить" }: MobileProductButtonProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="DCCardButton">
      <div 
        className="bg-white flex-[1_0_0] min-h-[40px] min-w-[88px] relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity" 
        data-name="[M] CustomButton"
        onClick={onClick}
      >
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
            {/* Plus Icon */}
            <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
              <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
                <div className="relative shrink-0 size-[16px]" data-name="Fixer">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="Fixer">
                      <path d="M7.333 7.333V3h1.334v4.333H13v1.334H8.667V13H7.333V8.667H3V7.333h4.333z" fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Button Text */}
            <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
              <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                <p className="leading-[20px]">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
