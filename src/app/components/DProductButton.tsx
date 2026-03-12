import svgPathsCheckmark from "../../imports/svg-w578t1oyss";
import svgPathsPlus from "../../imports/svg-pnkyyxs7im";
import svgPathsEdit from "../../imports/svg-g3h07tdvev";

export type ButtonVariant = 'add' | 'inCart' | 'edit';
export type ButtonColor = 'red' | 'green' | 'white' | 'gray';
export type ButtonIcon = 'plus' | 'checkmark' | 'edit';

interface DProductButtonProps {
  // Новый API: можно передать кастомный текст и цвет
  text?: string;
  color?: ButtonColor;
  icon?: ButtonIcon | null;
  
  // Старый API: для обратной совместимости
  variant?: ButtonVariant;
  hideIcon?: boolean;
  overrideColors?: {
    bg?: string;
    hover?: string;
    textColor?: string;
  };
  
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function DProductButton({ 
  text, 
  color, 
  icon, 
  variant, 
  onClick, 
  className = '', 
  hideIcon = false, 
  overrideColors,
  type = 'button'
}: DProductButtonProps) {
  // Старые варианты для обратной совместимости
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

  // Конфигурация цветов
  const colorConfig = {
    red: {
      bg: 'bg-[#ef3124]',
      hover: 'hover:bg-[#d82a1f]',
      textColor: 'text-[rgba(255,255,255,0.94)]',
      iconFill: 'white',
      iconOpacity: '0.94',
      backdrop: '',
    },
    green: {
      bg: 'bg-[#0cc44d]',
      hover: 'hover:bg-[#0bb043]',
      textColor: 'text-[rgba(255,255,255,0.94)]',
      iconFill: 'white',
      iconOpacity: '0.94',
      backdrop: '',
    },
    white: {
      bg: 'bg-white',
      hover: 'hover:bg-[#f5f5f5]',
      textColor: 'text-[rgba(3,3,6,0.88)]',
      iconFill: '#030306',
      iconOpacity: '0.88',
      backdrop: '',
    },
    gray: {
      bg: 'bg-[rgba(15,25,55,0.1)]',
      hover: 'hover:bg-[rgba(15,25,55,0.15)]',
      textColor: 'text-[rgba(3,3,6,0.88)]',
      iconFill: '#030306',
      iconOpacity: '0.88',
      backdrop: 'backdrop-blur-[40px]',
    },
  };

  // Конфигурация иконок
  const iconConfig = {
    plus: svgPathsPlus.p25f6ce40,
    checkmark: svgPathsCheckmark.p28d167f0,
    edit: svgPathsEdit.p23ff1b00,
  };

  // Определяем, используется ли новый API или старый
  const useNewApi = text !== undefined || color !== undefined || icon !== undefined;

  let finalText: string;
  let finalBg: string;
  let finalHover: string;
  let finalTextColor: string;
  let finalIcon: string | null;
  let finalIconFill: string;
  let finalIconOpacity: string;
  let showIcon: boolean;
  let finalBackdrop: string;

  if (useNewApi) {
    // Новый API
    const selectedColor = color || 'red';
    const colorSettings = colorConfig[selectedColor];

    finalText = text || '';
    finalBg = overrideColors?.bg || colorSettings.bg;
    finalHover = overrideColors?.hover || colorSettings.hover;
    finalTextColor = overrideColors?.textColor || colorSettings.textColor;
    finalIconFill = colorSettings.iconFill;
    finalIconOpacity = colorSettings.iconOpacity;
    finalBackdrop = colorSettings.backdrop;
    
    // icon может быть null (явно без иконки), undefined (используем дефолт), или название иконки
    if (icon === null) {
      showIcon = false;
      finalIcon = null;
    } else if (icon === undefined) {
      // Дефолтная иконка для цвета
      showIcon = true;
      finalIcon = selectedColor === 'red' ? iconConfig.plus : 
                  selectedColor === 'green' ? iconConfig.checkmark : 
                  iconConfig.edit;
    } else {
      showIcon = true;
      finalIcon = iconConfig[icon];
    }
  } else {
    // Старый API (для обратной совместимости)
    const config = variants[variant || 'add'];
    
    finalText = config.text;
    finalBg = overrideColors?.bg || config.bg;
    finalHover = overrideColors?.hover || config.hover;
    finalTextColor = overrideColors?.textColor || config.textColor;
    finalIcon = config.icon;
    finalIconFill = config.iconFill;
    finalIconOpacity = config.iconOpacity;
    showIcon = !hideIcon;
    finalBackdrop = '';
  }

  return (
    <button
      onClick={onClick}
      className={`${finalBg} ${finalBackdrop} content-stretch flex gap-[4px] items-center justify-center min-h-[48px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 w-[156px] ${finalHover} transition-colors cursor-pointer ${className}`}
      data-name={variant ? variants[variant].dataName : 'Button'}
      type={type}
    >
      {showIcon && finalIcon && (
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="LeftAddon">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Icon-Placeholder">
            <div className="h-[24px] relative shrink-0 w-[24px]">
              <svg className="absolute block h-[24px] left-[0px] top-[0px] w-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path 
                  d={finalIcon} 
                  fill={finalIconFill} 
                  fillOpacity={finalIconOpacity}
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
        <div className={`flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] ${finalTextColor} whitespace-nowrap`}>
          <p className="leading-[24px]">{finalText}</p>
        </div>
      </div>
    </button>
  );
}