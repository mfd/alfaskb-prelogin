import svgPathsPlus from "../../imports/svg-pnkyyxs7im";
import svgPathsEdit from "../../imports/svg-x1ydv67pv3";
import svgPathsCheckmark from "../../imports/svg-x1ydv67pv3";

export type MButtonVariant = 'add' | 'inCart' | 'edit';

interface MButtonProps {
  variant?: MButtonVariant;
  onClick?: () => void;
  text?: string;
}

export function MButton({ variant = 'add', onClick, text }: MButtonProps) {
  const variants = {
    add: {
      bg: 'bg-white',
      icon: svgPathsPlus.p25f6ce40,
      iconFill: '#030306',
      iconOpacity: '0.88',
      text: text || 'Добавить',
      textColor: 'text-[rgba(3,3,6,0.88)]',
    },
    edit: {
      bg: 'bg-white',
      icon: svgPathsEdit.p11e0fc00,
      iconFill: '#030306',
      iconOpacity: '0.88',
      text: text || 'Изменить',
      textColor: 'text-[rgba(3,3,6,0.88)]',
    },
    inCart: {
      bg: 'bg-[#0cc44d]',
      icon: svgPathsCheckmark.p30c53c80,
      iconFill: 'white',
      iconOpacity: '0.94',
      text: text || 'В корзине',
      textColor: 'text-[rgba(255,255,255,0.94)]',
    },
  };

  const config = variants[variant];

  return (
    <div 
      className={`${config.bg} flex-[1_0_0] min-h-[40px] min-w-[88px] relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity`}
      data-name="[M] CustomButton"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
          {/* Icon */}
          <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
            <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
              <div className="relative shrink-0 size-[16px]" data-name="Fixer">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Fixer">
                    <path 
                      d={config.icon} 
                      fill={`var(--fill-0, ${config.iconFill})`}
                      fillOpacity={config.iconOpacity}
                      id="PaintMe" 
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Button Text */}
          <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
            <div className={`flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${config.textColor} whitespace-nowrap`}>
              <p className="leading-[20px]">{config.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}