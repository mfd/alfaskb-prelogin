import { ReactNode } from 'react';
import DProductButton from './DProductButton';

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
      data-name="DesktopProductCard"
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
            <p className='font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap underline-product-title'>
              {title}
            </p>
            <p className="leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content]">
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
                  <div className="content-stretch flex gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
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
        <DProductButton
          variant={isInCart ? 'inCart' : 'add'}
          onClick={onAddClick}
        />
      </div>
    </div>
  );
}