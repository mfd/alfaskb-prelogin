import { ReactNode } from "react";
import { MobileProductButton } from "./MobileProductButton";

interface MobileProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onAdd?: () => void;
  isFullWidth?: boolean;
}

export function MobileProductCard({
  icon,
  title,
  description,
  onAdd,
  isFullWidth = false,
}: MobileProductCardProps) {
  return (
    <div 
      className={`flex-[1_0_0] ${isFullWidth ? 'max-w-full' : 'max-w-[328px]'} h-[260px] min-w-px relative`} 
      data-name="CardPure"
    >
      <div className="content-stretch flex flex-col items-start justify-between max-w-[inherit] p-[16px] relative w-full h-full bg-[#f2f3f5] inset-0 rounded-[24px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {/* Icon */}
          <div className="content-stretch flex items-start relative shrink-0" data-name="Graphic">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Graphic">
              {icon}
            </div>
          </div>
          
          {/* Text Content */}
          <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 w-full" data-name="Text Content">
            <p className="[text-decoration-skip-ink:none] decoration-dotted font-['SF_Pro_Text:Bold',sans-serif] relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] underline w-full">
              {title}
            </p>
            <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">
              {description}
            </p>
          </div>
        </div>
        
        {/* Add Button */}
        <MobileProductButton onClick={onAdd} />
      </div>
    </div>
  );
}
