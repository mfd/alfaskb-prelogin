import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../contexts/CartContext';
import { useState, useEffect } from 'react';
import svgPaths from "../../imports/svg-a5942q3te2";
import svgPathsCart from "../../imports/svg-ojwadded7q";
import { imgD1 } from "../../imports/svg-qw21c";
import imgFaceThinking from "figma:asset/0b7600ba10ccefdd829b525e4cfd2a18ac97c830.png";
import imgSidePanel from "figma:asset/6878f065873d30757849f54fc518cb914868a499.png";
import { UI_TEXT, PRODUCT_DATA } from '../constants/products';
import { FINANCING_IMAGES } from '../constants/financingImages';
import { ALL_MODALS_DATA } from '../constants/modals';
import { PRODUCTS } from './ProductCard';
import { COMPANY_INFO } from '../constants/company';
import { formatAmount } from '../utils/formatAmount';
import DesktopCartContent from './DesktopCartContent';
import DesktopCallSuccess from './DesktopCallSuccess';

function Cross({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[48px] cursor-pointer" data-name="Cross">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[40px] left-1/2 rounded-[50px] size-[48px] top-1/2" data-name="BG" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cross-medium">
        <div className="absolute inset-[12.5%]" data-name="shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.0001">
            <path d={svgPaths.p10274900} fill="var(--fill-0, #212124)" id="shape" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[4px] relative shrink-0 w-full" data-name="Title">
      <p className="flex-[1_0_0] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[30px] text-[rgba(3,3,6,0.88)] text-center">Ваш список пуст</p>
    </div>
  );
}

function Filler() {
  return <div className="h-[48px] shrink-0 w-[98px]" data-name="Filler" />;
}

function Text({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-sf-text-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-left whitespace-nowrap">
        <p className="leading-[24px]">Понятно</p>
      </div>
    </div>
  );
}

function Buttons({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-center relative shrink-0" data-name="Buttons">
      <button onClick={onClick} className="backdrop-blur-[40px] bg-[rgba(15,25,55,0.1)] content-stretch cursor-pointer flex gap-[4px] items-center justify-center min-h-[48px] min-w-[104px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 hover:bg-[rgba(15,25,55,0.15)] transition-colors" data-name="Button_2">
        <Text onClick={onClick} />
      </button>
    </div>
  );
}

function Filler1() {
  return <div className="h-[48px] shrink-0 w-[98px]" data-name="Filler" />;
}

function TopSlot({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="TopSlot">
        <div className="content-stretch flex items-start justify-center pb-[24px] relative rounded-[24px] shrink-0 w-full" data-name="Graphic">
          <div className="overflow-clip relative shrink-0 size-[72px]" data-name="face_thinking">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFaceThinking} />
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Text Content">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center px-[16px] relative w-full">
              <Title />
              <p className="font-sf-text-regular leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-center w-full">Добавляйте интересующие вас продукты для быстрой консультации и подключения в будущем</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-end justify-center overflow-clip pt-[24px] relative shrink-0 w-full" data-name=".Button">
          <Filler />
          <Buttons onClick={onClick} />
          <Filler1 />
        </div>
      </div>
    </div>
  );
}

function CustomContentPartEmpty({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="[Custom Content Part]">
      <div className="content-stretch flex flex-col items-start px-[40px] relative size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full" data-name=".Basket-ServiceMessage">
          <div className="content-stretch flex flex-col h-[672px] items-center justify-center relative shrink-0 w-full" data-name="ServiceMessage">
            <TopSlot onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Fixer() {
  return <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px" data-name="Fixer" />;
}

function Footer({ onCancel, onSubmit }: { onCancel: () => void, onSubmit: () => void }) {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-end justify-end pb-[40px] pt-[24px] px-[40px] relative shrink-0 w-[500px]" data-name="⥂ Footer">
      <button 
        onClick={onCancel}
        className="backdrop-blur-[40px] bg-[rgba(15,25,55,0.1)] flex-[1_0_0] min-h-[48px] min-w-[104px] relative rounded-[8px] hover:bg-[rgba(15,25,55,0.15)] transition-colors cursor-pointer" 
        data-name="Button_1"
      >
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
              <div className="flex flex-col font-sf-text-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                <p className="leading-[24px]">Отменить</p>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button 
        onClick={onSubmit}
        className="bg-[#ff3d00] flex-[1_0_0] min-h-[48px] min-w-[104px] relative rounded-[8px] hover:bg-[#e63900] transition-colors cursor-pointer" 
        data-name="Button_2"
      >
        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
              <div className="flex flex-col font-sf-text-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                <p className="leading-[24px]">Отправить заявку</p>
              </div>
            </div>
          </div>
        </div>
      </button>
      <div className="absolute h-px left-0 right-0 top-0" data-name="Border">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 1">
          <g id="Border">
            <path clipRule="evenodd" d="M500 1H0V0H500V1Z" fill="var(--fill-0, #E7E8EC)" fillRule="evenodd" id="Border_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SuccessMessage() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="[Custom Content Part]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] md:px-[40px] relative size-full">
          <div className="content-stretch flex flex-col h-[500px] items-center justify-center relative shrink-0" data-name="SwapMe">
            <div className="content-stretch flex flex-col h-[712px] items-center pt-[153px] relative shrink-0 w-[328px]" data-name="ServiceMessage">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="TopSlot">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="TopSlot">
                  <div className="content-stretch flex items-start justify-center pb-[24px] relative rounded-[24px] shrink-0 w-full" data-name="Graphic">
                    <div className="content-stretch flex flex-col items-center relative shrink-0 size-[72px]" data-name="Image Small">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute w-full h-full object-contain" src={imgSidePanel} />
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip w-full" data-name=".Graphic/Image Small" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text Content">
                    <div className="content-stretch flex items-start justify-center pb-[4px] relative shrink-0 w-full" data-name="Title">
                      <p className="flex-[1_0_0] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[30px] text-[rgba(3,3,6,0.88)] text-center">Звонок заказан</p>
                    </div>
                    <p className="font-sf-text-regular leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(3,3,6,0.88)] text-center w-full whitespace-pre-wrap">
                      <span className="leading-[24px] text-[16px]">
                        По указанному номеру
                        <br aria-hidden="true" />
                      </span>
                      <span className="font-bold leading-[20px] text-[14px]">{`${COMPANY_INFO.phone} `}</span>
                      <span className="leading-[24px] text-[16px]">{` в ближайшее время с вами свяжется сотрудник банка, чтобы проконсультировать по выбранным продуктам`}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for cart items
const cartSvgPaths = {
  p2077b180: "M17.4054 10.8473L7.25307 20.9997H3.00014V16.7468L13.1525 6.59441L17.4054 10.8473ZM16.4533 3.29363C16.8447 2.90217 17.4798 2.90217 17.8712 3.29363L20.7062 6.12859C21.0977 6.52005 21.0977 7.1551 20.7062 7.54656L18.9093 9.34343L14.6564 5.0905L16.4533 3.29363Z",
  p22e1fc00: "M19.0014 8.00018L17.6928 20.2131C17.5839 21.2294 16.7256 22.0002 15.7035 22.0002H8.29824C7.27615 22.0002 6.41787 21.2294 6.30898 20.2131L5.00137 8.00018H19.0014ZM9.50137 11.506V17.506C9.50137 17.506 9.50137 18.007 10.2514 18.007C11.0009 18.0068 11.0014 17.506 11.0014 17.506V11.506H9.50137ZM13.0014 11.506V17.506C13.0014 17.506 13.0014 18.007 13.7514 18.007C14.5009 18.0068 14.5014 17.506 14.5014 17.506V11.506H13.0014ZM13.0014 3.00018H18.64C19.8759 3.00021 20.8159 4.11024 20.6127 5.32928L20.5014 6.00018H3.50137L3.38906 5.32928C3.18589 4.11025 4.12589 3.00024 5.36172 3.00018H11.0014V1.00018H13.0014V3.00018Z"
};

function ShapeContent({ icon }: { icon: string }) {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px] size-[40px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgD1}')` }}>
      <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content1({ icon }: { icon: string }) {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Content">
      <ShapeContent icon={icon} />
    </div>
  );
}

function Fixer3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fixer">
          <path d={cartSvgPaths.p22e1fc00} fill="var(--fill-0, #040413)" fillOpacity="0.55" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

interface CartItemCardProps {
  title: string;
  icon: string;
  onRemove: () => void;
  onEdit?: () => void;
  onTitleClick?: () => void;
  financingType?: 'fastfin' | 'longfin';
  itemId?: string;
  selectedFinancingType?: string;
  loanAmount?: string;
  loanTerm?: string;
  productId?: string;
  isLastItem?: boolean;
}

function CartRow({ title, icon, onRemove, onEdit, onTitleClick, financingType, itemId, selectedFinancingType, loanAmount, loanTerm, productId, isLastItem }: CartItemCardProps) {
  // Для продукта финансирования показываем выбранный тип вместо общего названия
  const displayTitle = itemId === 'financing' && selectedFinancingType
    ? selectedFinancingType
    : title;

  // Получаем описание из данных продукта
  const getProductDescription = () => {
    // Для продукта финансирования показываем сумму и сроки
    if (itemId === 'financing' && loanAmount && loanTerm) {
      return `${formatAmount(loanAmount)} ₽ / ${loanTerm} мес`;
    }
    
    // Для обычных продуктов показываем их description из карточек
    if (productId) {
      const product = PRODUCTS.find(p => p.id === productId);
      return product?.description;
    }
    
    return undefined;
  };

  const displayDescription = getProductDescription();

  // Для продукта финансирования используем картинку в зависимости от selectedFinancingType
  const displayIcon = itemId === 'financing' && selectedFinancingType && FINANCING_IMAGES[selectedFinancingType]
    ? FINANCING_IMAGES[selectedFinancingType]
    : icon;

  // Получаем позицию иконки из данных модалки
  const iconPosition = ALL_MODALS_DATA[displayTitle]?.iconPosition || {
    left: '-4.77%',
    top: '-8.33%',
    width: '108.93%',
    height: '108.93%'
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip py-[16px] relative shrink-0 w-[420px]" data-name="row">
      <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="content">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
          <div className="content-stretch flex flex-col items-center justify-center max-h-[40px] max-w-[40px] min-h-[40px] min-w-[40px] relative shrink-0 size-[72px]" data-name="IconView">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img 
                alt="" 
                className="absolute w-full h-full object-contain" 
                src={displayIcon} 
              />
            </div>
            <Content1 icon={displayIcon} />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative" data-name="Text Content">
          <div className="w-full">
            <span 
              onClick={onTitleClick}
              className={`underline-cart-link font-sf-text-medium leading-[24px] text-[16px] text-[rgba(3,3,6,0.88)] ${onTitleClick ? 'cursor-pointer hover:opacity-70 transition-opacity' : ''}`}
            >
              {displayTitle}
            </span>
          </div>
          {displayDescription && (
            <p className="font-sf-text-regular leading-[20px] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full truncate pr-[56px]">{displayDescription}</p>
          )}
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center right-[0px] top-1/2" data-name="act">
          {onEdit && (
            <button onClick={onEdit} className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative shrink-0 hover:opacity-70 transition-opacity" data-name="[D] Button">
              <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
                <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
                  <div className="relative shrink-0 size-[24px]" data-name="Fixer">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Fixer">
                        <path d={cartSvgPaths.p2077b180} fill="var(--fill-0, #040413)" fillOpacity="0.55" id="PaintMe" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          )}
          <button onClick={onRemove} className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative shrink-0 hover:opacity-70 transition-opacity" data-name="[D] Button">
            <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
              <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
                <div className="relative shrink-0 size-[24px]" data-name="Fixer">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="Fixer">
                      <path d={cartSvgPaths.p22e1fc00} fill="var(--fill-0, #040413)" fillOpacity="0.55" id="PaintMe" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function CustomContentPartWithItems({ items, removeItem, onOpenFinancing, onOpenProductModal }: { items: any[], removeItem: (id: string) => void, onOpenFinancing: () => void, onOpenProductModal: (productId: string) => void }) {
  // Сортируем элементы: финансирование всегда первым
  const sortedItems = [...items].sort((a, b) => {
    if (a.id === 'financing') return -1;
    if (b.id === 'financing') return 1;
    return 0;
  });

  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full overflow-y-auto ios-scrollbar" data-name="[Custom Content Part]">
      <div className="content-stretch flex flex-col items-start px-[16px] md:px-[40px] pt-[16px] relative size-full">
        <div className="content-stretch flex flex-col items-start w-full" data-name=".Basket-ServiceMessage">
          {sortedItems.map((item, index) => {
            // Определяем, что открывать при клике на заголовок
            const handleTitleClick = () => {
              if (item.id === 'financing' && item.selectedFinancingType) {
                // Для финансирования открываем модалку соответствующего типа
                onOpenProductModal(item.selectedFinancingType);
              } else if (item.id !== 'financing') {
                // Для остальных продуктов открываем их модалки
                onOpenProductModal(item.title);
              }
            };

            const isLastItem = index === sortedItems.length - 1;

            return (
              <CartRow
                key={item.id}
                title={item.title}
                icon={item.icon}
                onRemove={() => removeItem(item.id)}
                onEdit={item.id === 'financing' ? onOpenFinancing : undefined}
                onTitleClick={handleTitleClick}
                financingType={item.financingType}
                itemId={item.id}
                selectedFinancingType={item.selectedFinancingType}
                loanAmount={item.loanAmount}
                loanTerm={item.loanTerm}
                productId={item.productId}
                isLastItem={isLastItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function CartSidebar({ onOpenFinancing, onOpenProductModal }: { onOpenFinancing: () => void, onOpenProductModal: (productId: string) => void }) {
  const { isOpen, closeCart, items, removeItem, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Блокировка скролла страницы когда корзина открыта
  useEffect(() => {
    if (isOpen) {
      // Вычисляем ширину скроллбара
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Блокируем скролл и компенсируем смещение
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Сброс состояния при закрытии корзины
  const handleClose = () => {
    closeCart();
    // Небольшая задержка перед сбросом состояния, чтобы анимация закрытия прошла
    setTimeout(() => setIsSubmitted(false), 200);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    clearCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'linear' }}
            onClick={handleClose}
            className="fixed inset-0 bg-[rgba(19,19,19,0.5)] z-[100]"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.15, ease: 'linear' }}
            className="fixed right-0 top-0 h-full w-[500px] z-[101]"
            data-name="SidePanel"
          >
            <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="SidePanel">
              {/* Header */}
              {isSubmitted ? (
                <>
                  {/* Header для Success экрана */}
                  <div className="bg-white relative shrink-0 w-full" data-name="Header">
                    <div className="content-stretch flex gap-[16px] items-start pb-[16px] pl-[16px] md:pl-[40px] pr-[16px] md:pr-[28px] pt-[36px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Title">
                        <div className="content-stretch flex flex-col gap-[8px] items-start pr-[48px] w-full" />
                      </div>
                      <div className="absolute content-stretch flex items-start right-[16px] md:left-[424px] top-[28px]" data-name="Cross">
                        <Cross onClick={handleClose} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Success Message */}
                  <DesktopCallSuccess phoneNumber={COMPANY_INFO.phone} />
                  
                  {/* Footer для Success экрана */}
                  <div className="bg-white content-stretch flex items-end justify-end min-h-[40px] pt-[24px] relative shrink-0 w-[500px]" data-name="⥂ Footer">
                    <Fixer />
                  </div>
                </>
              ) : (
                <>
                  {/* Header */}
                  <div className="bg-white relative shrink-0 w-full" data-name="Header">
                    <div className="content-stretch flex gap-[16px] items-start pb-[16px] pl-[16px] md:pl-[40px] pr-[16px] md:pr-[28px] pt-[36px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Title">
                        <div className="content-stretch flex flex-col gap-[8px] items-start pr-[48px] relative w-full">
                          <p className="font-bold leading-[36px] min-w-full not-italic relative shrink-0 text-[30px] text-[rgba(3,3,6,0.88)] w-[min-content]">{UI_TEXT.cartTitle}</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex items-start right-[16px] md:left-[424px] top-[28px]" data-name="Cross">
                        <Cross onClick={handleClose} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Border">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 1">
                        <g id="Border">
                          <path clipRule="evenodd" d="M500 1H0V0H500V1Z" fill="var(--fill-0, #E7E8EB)" fillRule="evenodd" id="Border_2" />
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  {items.length === 0 ? (
                    <CustomContentPartEmpty onClick={handleClose} />
                  ) : (
                    <CustomContentPartWithItems items={items} removeItem={removeItem} onOpenFinancing={onOpenFinancing} onOpenProductModal={onOpenProductModal} />
                  )}

                  {/* Footer */}
                  {items.length === 0 ? (
                    <div className="bg-white content-stretch flex items-end justify-end min-h-[40px] relative shrink-0 w-[500px]" data-name=".D_Footer">
                      <Fixer />
                    </div>
                  ) : (
                    <Footer 
                      onCancel={handleClose}
                      onSubmit={handleSubmit}
                    />
                  )}
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}