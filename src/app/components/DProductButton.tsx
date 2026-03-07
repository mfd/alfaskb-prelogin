import svgPathsCheckmark from "../../imports/svg-w578t1oyss";
import svgPathsPlus from "../../imports/svg-pnkyyxs7im";
import svgPathsEdit from "../../imports/svg-g3h07tdvev";

export type ButtonVariant = 'add' | 'inCart' | 'edit';

interface DProductButtonProps {
  variant: ButtonVariant;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  hideIcon?: boolean;
  overrideColors?: {
    bg?: string;
    hover?: string;
    textColor?: string;
  };
}

export default function DProductButton({ variant, onClick, className = '', hideIcon = false, overrideColors }: DProductButtonProps) {
  const variants = {
    add: {
      bg: 'bg-[#ef3124]',
      hover: 'hover:bg-[#d82a1f]',
      text: 'Добавить',
      icon: svgPathsPlus.p25f6ce40,
      iconSize: 'h-[24px] left-[0px] top-[0px] w-[24px]',
      dataName: 'Button_Add',
      textColor: 'text-[rgba(255,255,255,0.94)]',
      iconFill: 'white',
      iconOpacity: '0.94',
    },
    inCart: {
      bg: 'bg-[#0cc44d]',
      hover: 'hover:bg-[#0bb043]',
      text: 'В корзине',
      icon: svgPathsCheckmark.p28d167f0,
      iconSize: 'h-[24px] left-[0px] top-[0px] w-[24px]',
      dataName: 'Button_InCart',
      textColor: 'text-[rgba(255,255,255,0.94)]',
      iconFill: 'white',
      iconOpacity: '0.94',
    },
    edit: {
      bg: 'bg-white',
      hover: 'hover:bg-[#f5f5f5]',
      text: 'Изменить',
      icon: svgPathsEdit.p23ff1b00,
      iconSize: 'h-[24px] left-[0px] top-[0px] w-[24px]',
      dataName: 'Button_Edit',
      textColor: 'text-[rgba(3,3,6,0.88)]',
      iconFill: '#030306',
      iconOpacity: '0.88',
    },
  };

  const config = variants[variant];
  
  // Применяем переопределенные цвета, если они предоставлены
  const bg = overrideColors?.bg || config.bg;
  const hover = overrideColors?.hover || config.hover;
  const textColor = overrideColors?.textColor || config.textColor;

  return (
    <button
      onClick={onClick}
      className={`${bg} content-stretch flex gap-[4px] items-center justify-center min-h-[48px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 w-[156px] ${hover} transition-colors cursor-pointer ${className}`}
      data-name={config.dataName}
    >
      {!hideIcon && (
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="LeftAddon">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Icon-Placeholder">
            <div className="h-[24px] relative shrink-0 w-[24px]">
              <svg className={`absolute block ${config.iconSize}`} fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path 
                  d={config.icon} 
                  fill={config.iconFill} 
                  fillOpacity={config.iconOpacity}
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
        <div className={`flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] ${textColor} whitespace-nowrap`}>
          <p className="leading-[24px]">{config.text}</p>
        </div>
      </div>
    </button>
  );
}