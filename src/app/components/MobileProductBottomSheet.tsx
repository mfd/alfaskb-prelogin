import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-50qzz8jybw";
import imgIconView from "figma:asset/b116ede83d918c70ee33b67dd684fee5df30c0ea.png";
import imgIconView1 from "figma:asset/745488c8f6bf481d7812fab8e092fd177ab9e3bb.png";
import imgIconView2 from "figma:asset/17fe6d92a7c017a237c968c627a7c792bf116508.png";
import imgIconView3 from "figma:asset/2d8f436e8926b098b31a198377f23d2e9a55c7d7.png";
import imgIconView4 from "figma:asset/d16e6a030103ccd22ae1b16e81f4fb0b73c880a3.png";
import imgIconView5 from "figma:asset/52e0ab2ca9d1645496f0a5feb2a3a8b074b833b4.png";
import { imgShapeContent } from "../../imports/svg-e7llm";
import { ALL_MODALS_DATA, UI_TEXT } from '../constants/modals';
import { MOBILE_BENEFIT_ICONS } from './icons/MobileBenefitIcons';

interface MobileProductBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string | null;
}

// Маппинг productId на название продукта
const PRODUCT_ID_TO_NAME: Record<string, string> = {
  "acquiring": "Торговый эквайринг",
  "salary": "Зарплатный проект",
  "ved": "ВЭД",
  "cards": "Бизнес-карты",
  "rko": "РКО для бизнеса",
  "deposits": "Депозиты для бизнеса",
};

// Маппинг иконок продуктов
const PRODUCT_ICONS: Record<string, string> = {
  "Торговый эквайринг": imgIconView,
  "Зарплатный проект": imgIconView1,
  "ВЭД": imgIconView2,
  "Бизнес-карты": imgIconView3,
  "РКО для бизнеса": imgIconView4,
  "Депозиты для бизнеса": imgIconView5,
};

function Cross({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[32px]" data-name="Cross">
      <div className="absolute backdrop-blur-[5px] bg-[rgba(38,55,88,0.06)] left-0 opacity-40 rounded-[50px] size-[32px] top-0" data-name="BG" />
      <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="cross">
        <div className="absolute inset-1/4" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p36d3fa00} fill="var(--fill-0, #898991)" id="icon" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default function MobileProductBottomSheet({ isOpen, onClose, productId }: MobileProductBottomSheetProps) {
  // Обработчик кликов для закрытия
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Закрытие по клику на overlay
      if (target.closest('[data-name=".Overlay"]')) {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }

      // Закрытие по клику на крестик
      if (target.closest('[data-name="Cross"]')) {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  if (!productId) return null;

  const productName = PRODUCT_ID_TO_NAME[productId];
  const productData = productName ? ALL_MODALS_DATA[productName] : null;
  if (!productData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110]">
          {/* Overlay */}
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".Overlay">
            <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
          </div>

          {/* MainBody */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="absolute bottom-0 left-0 right-0"
            data-name="MainBody"
          >
            <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full max-h-[80vh] overflow-y-auto" data-name="MainBody">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
                  {/* Swiper */}
                  <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Swiper">
                    <div className="bg-[#e7e8ec] h-[4px] rounded-[20px] shrink-0 w-[36px]" data-name="swiper" />
                  </div>

                  {/* Header */}
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".Title">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center pr-[8px] py-[12px] relative w-full">
                          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px]">
                            <p className="leading-[28px]">{productData.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start overflow-clip pl-[8px] py-[8px] relative shrink-0 w-[40px]" data-name=".Header / Right slot">
                      <Cross onClick={onClose} />
                    </div>
                  </div>

                  {/* Fixer */}
                  <div className="h-[8px] shrink-0 w-full" data-name="Fixer_8px" />

                  {/* Content */}
                  <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="Content">
                    <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="SwapMe">
                      {/* Product Info */}
                      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                          <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
                            <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">
                              {productData.subtitle}
                            </p>
                          </div>
                          <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
                            <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">
                              {productData.description}
                            </p>
                          </div>
                        </div>
                        {PRODUCT_ICONS[productData.title] && (
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
                            <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
                              <div className="relative shrink-0 size-[64px]" data-name="Content">
                                <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
                                  <img 
                                    alt="" 
                                    className="w-full h-full" 
                                    src={PRODUCT_ICONS[productData.title]}
                                    style={{
                                      objectFit: 'contain'
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Spacer */}
                      <div className="h-[24px] shrink-0 w-full" />

                      {/* Benefits Title */}
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Headline.Typography">
                        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">
                          {UI_TEXT.benefitsTitle}
                        </p>
                      </div>

                      {/* Spacer */}
                      <div className="h-[16px] shrink-0 w-full" />

                      {/* Benefits List */}
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        {productData.benefits.map((benefit, index) => {
                          const IconComponent = MOBILE_BENEFIT_ICONS[benefit.key];
                          
                          return (
                            <div key={index} className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
                              <div className="content-stretch flex items-start min-h-px min-w-px relative w-full" data-name="TopSlot">
                                {IconComponent && (
                                  <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative shrink-0" data-name="Graphic">
                                    <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
                                        <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
                                          <IconComponent />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
                                  <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">
                                    {benefit.title}
                                  </p>
                                  <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full whitespace-pre-line">
                                    {benefit.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}