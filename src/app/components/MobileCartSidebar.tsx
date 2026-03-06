import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../contexts/CartContext';
import { useState, useEffect } from 'react';
import svgPaths from "../../imports/svg-a5942q3te2";
import svgPathsCart from "../../imports/svg-ojwadded7q";
import { imgD1 } from "../../imports/svg-qw21c";
import imgFaceThinking from "figma:asset/0b7600ba10ccefdd829b525e4cfd2a18ac97c830.png";
import imgSidePanel from "figma:asset/6878f065873d30757849f54fc518cb914868a499.png";
import { PRODUCT_DATA, UI_TEXT, ALL_MODALS_DATA } from '../constants/modals';
import { FINANCING_IMAGES } from '../constants/financingImages';
import { PRODUCTS } from './ProductCard';
import { COMPANY_INFO } from '../constants/company';
import { formatAmount } from '../utils/formatAmount';
import MobileCartContent from './MobileCartContent';
import MobileCallSuccess from './MobileCallSuccess';

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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFaceThinking} style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }} />
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Text Content">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center px-[16px] relative w-full">
              <Title />
              <p className="font-sf-text-regular leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-center w-full">Добавляйте интересующие вас продукты для быстрой консультации и подключения в будущем</p>
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
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full" data-name=".Basket-ServiceMessage">
          <div className="content-stretch flex flex-col h-[672px] items-center justify-center relative shrink-0 w-full" data-name="ServiceMessage">
            <TopSlot onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({ onCancel, onSubmit }: { onCancel: () => void, onSubmit: () => void }) {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-end justify-end pb-[40px] pt-[24px] px-[16px] relative shrink-0 w-full" data-name="Footer">
      <button 
        onClick={onCancel}
        className="backdrop-blur-[40px] bg-[rgba(15,25,55,0.1)] content-stretch cursor-pointer flex gap-[4px] items-center justify-center min-h-[48px] min-w-[104px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 hover:bg-[rgba(15,25,55,0.15)] transition-colors" 
        data-name="Button_2"
      >
        <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
          <div className="flex flex-col font-sf-text-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-left whitespace-nowrap">
            <p className="leading-[24px]">Отменить</p>
          </div>
        </div>
      </button>
      <button 
        onClick={onSubmit}
        className="bg-[#ef3124] content-stretch cursor-pointer flex gap-[4px] items-center justify-center min-h-[48px] min-w-[136px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 hover:bg-[#d92b1f] transition-colors" 
        data-name="Button_1"
      >
        <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
          <div className="flex flex-col font-sf-text-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] text-left whitespace-nowrap">
            <p className="leading-[24px]">Оставить заявку</p>
          </div>
        </div>
      </button>
    </div>
  );
}

interface MobileCartSidebarProps {
  onOpenFinancing: () => void;
  onOpenProductModal: (productId: string) => void;
}

export default function MobileCartSidebar({ onOpenFinancing, onOpenProductModal }: MobileCartSidebarProps) {
  const { items, removeItem, isOpen, closeCart, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  // Блокировка скролла при открытой корзине
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setShowSuccess(false);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = () => {
    setShowSuccess(true);
    clearCart();
  };

  const handleCancel = () => {
    closeCart();
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    closeCart();
  };

  // Обработка клика на заголовок продукта
  const handleProductClick = (productId: string) => {
    onOpenProductModal(productId);
  };

  // Обработка клика на кнопку редактирования финансирования
  const handleEditFinancing = () => {
    onOpenFinancing();
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
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={closeCart}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.15, ease: 'linear' }}
            className="fixed right-0 top-0 h-full w-full bg-white z-[101] flex flex-col"
            data-name="SidePanel"
          >
            {showSuccess ? (
              // Success экран из Figma
              <>
                {/* Header пустой */}
                <div className="bg-white content-stretch flex gap-[16px] items-center min-h-[64px] px-[8px] py-[16px] relative shrink-0 w-full" data-name="Header">
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[8px] pr-[56px] shrink-0 w-full" data-name="Title" />
                  <button onClick={handleCloseSuccess} className="absolute content-stretch cursor-pointer flex items-start overflow-clip p-[8px] right-[8px] top-[8px]" data-name="Cross">
                    <div className="relative shrink-0 size-[32px]" data-name="Cross">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[5px] bg-[rgba(38,55,88,0.06)] left-1/2 rounded-[50px] size-[32px] top-1/2" data-name="BG" />
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cross">
                        <div className="absolute inset-1/4" data-name="icon">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                            <path d={svgPathsCart.p36d3fa00} fill="var(--fill-0, #898991)" id="icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                
                {/* Success Content */}
                <MobileCallSuccess phoneNumber={COMPANY_INFO.phone} />
                
                {/* Footer пустой */}
                <div className="bg-white min-h-[16px] relative shrink-0 w-full" data-name="Footer">
                  <div className="flex flex-row justify-end min-h-[inherit] size-full">
                    <div className="content-stretch flex items-start justify-end min-h-[inherit] pt-[16px] px-[8px] relative w-full">
                      <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px" data-name="Fixer" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Header из Figma */}
                <div className="bg-white content-stretch flex gap-[16px] items-center min-h-[64px] px-[8px] py-[16px] relative shrink-0 w-full" data-name="Header">
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[8px] pr-[56px] relative shrink-0 w-full" data-name="Title">
                    <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px] w-[min-content]">
                      Корзина финпродуктов
                    </p>
                  </div>
                  <button onClick={closeCart} className="absolute content-stretch cursor-pointer flex items-start overflow-clip p-[8px] right-[8px] top-[8px]" data-name="Cross">
                    <div className="relative shrink-0 size-[32px]" data-name="Cross">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[5px] bg-[rgba(38,55,88,0.06)] left-1/2 rounded-[50px] size-[32px] top-1/2" data-name="BG" />
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cross">
                        <div className="absolute inset-1/4" data-name="icon">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                            <path d={svgPathsCart.p36d3fa00} fill="var(--fill-0, #898991)" id="icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Content */}
                {items.length === 0 ? (
                  <CustomContentPartEmpty onClick={closeCart} />
                ) : (
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full overflow-auto" data-name="[Custom Content Part]">
                    <MobileCartContent 
                      items={items} 
                      onRemoveItem={removeItem}
                      onItemClick={handleProductClick}
                      onEditFinancing={handleEditFinancing}
                    />
                  </div>
                )}

                {/* Footer из Figma */}
                {items.length === 0 ? (
                  <div className="bg-white content-stretch flex items-end justify-end min-h-[40px] relative shrink-0 w-full" data-name=".D_Footer">
                    <div className="h-[24px] shrink-0 w-[98px]" />
                  </div>
                ) : (
                  <div className="bg-white relative shrink-0 w-full" data-name="Footer">
                    <div className="content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
                      <div className="bg-[#ef3124] flex-[1_0_0] min-h-[48px] min-w-[104px] relative rounded-[12px] cursor-pointer hover:bg-[#d92b1f] transition-colors" data-name="Button_1" onClick={handleSubmit}>
                        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
                            <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
                                <p className="leading-[24px]">Отправить заявку</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute h-px left-0 right-0 top-0" data-name="Border">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
                          <g id="Border">
                            <path clipRule="evenodd" d="M360 1H0V0H360V1Z" fill="var(--fill-0, #E7E8EC)" fillRule="evenodd" id="Border_2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}