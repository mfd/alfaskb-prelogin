import { ReactNode } from 'react';
import svgPaths from '../../imports/svg-pnkyyxs7im';

interface DesktopProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  onAddClick?: () => void;
  isInCart?: boolean;
}

export function DesktopProductCard({
  icon,
  title,
  description,
  benefits,
  onAddClick,
  isInCart = false,
}: DesktopProductCardProps) {
  return (
    <div 
      className="bg-[#f2f3f5] content-stretch flex h-[172px] items-start justify-between overflow-clip p-[32px] relative rounded-[32px] shrink-0 w-[1140px]" 
      data-name="wip6 / ProdCard"
    >
      <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative" data-name="content">
        <div
          className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[332px]"
          data-name="title"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]"
            data-name="PreloginProductsIcon"
          >
            {icon}
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative"
            data-name="text"
          >
            <p className='font-["SF_Pro_Display",sans-serif] font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap underline-product-title'>
              {title}
            </p>
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content]">
              {description}
            </p>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="benefits">
          <div className="content-stretch flex flex-col items-start pr-[32px] relative w-full">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <div
                  className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full"
                  data-name={`ListItem${index + 1}`}
                >
                  <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
                    <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
                    <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">
                      {benefit}
                    </p>
                  </div>
                </div>
                {index < benefits.length - 1 && (
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
                    <div className="h-[12px] shrink-0 w-full" data-name="12px" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="wip6 / prodBtns-wip6">
        <button
          onClick={onAddClick}
          className="cursor-pointer bg-[#ef3124] content-stretch flex gap-[4px] items-center justify-center min-h-[48px] min-w-[104px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 hover:bg-[#d62b1f] transition-colors"
          data-name="[D] Button"
        >
          <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
            <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
              <div className="relative shrink-0 size-[24px]" data-name="Fixer">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Fixer">
                    <path d={svgPaths.p25f6ce40} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
            <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
              <p className="leading-[24px]">{isInCart ? 'В корзине' : 'Добавить'}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}