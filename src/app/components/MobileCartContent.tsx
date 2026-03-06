import { useCart } from '../contexts/CartContext';
import svgPaths from "../../imports/svg-ojwadded7q";
import { imgSidePanel1 } from "../../imports/svg-o3edg";
import { PRODUCTS, PRODUCT_ICONS } from './ProductCard';
import { PRODUCT_DATA } from '../constants/modals';
import { ALL_MODALS_DATA } from '../constants/modals';
import { FINANCING_IMAGES } from '../constants/financingImages';
import { formatAmount } from '../utils/formatAmount';

interface CartItem {
  id: string;
  title: string;
  description?: string;
  icon: string;
  productId: string;
  selectedFinancingType?: string;
  loanAmount?: string;
  loanTerm?: string;
}

interface MobileCartContentProps {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onItemClick?: (productId: string) => void;
  onEditFinancing?: () => void;
}

export default function MobileCartContent({ items, onRemoveItem, onItemClick, onEditFinancing }: MobileCartContentProps) {
  // Сортируем items так, чтобы финансирование было первым
  const sortedItems = [...items].sort((a, b) => {
    if (a.id === 'financing') return -1;
    if (b.id === 'financing') return 1;
    return 0;
  });

  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-start pt-[16px] relative shrink-0 w-full" data-name="SwapMe">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {sortedItems.map((item) => {
            // Получаем данные продукта из констант
            const productData = PRODUCTS.find(p => p.id === item.productId);
            
            // Для финансирования показываем тип финансирования, а не "Получите финансирование"
            let title = productData?.title || item.title;
            if (item.id === 'financing' && item.selectedFinancingType) {
              title = item.selectedFinancingType;
            }
            
            // Для финансирования используем картинку в зависимости от selectedFinancingType
            let icon = productData?.icon || item.icon;
            if (item.id === 'financing' && item.selectedFinancingType && FINANCING_IMAGES[item.selectedFinancingType]) {
              icon = FINANCING_IMAGES[item.selectedFinancingType];
            }
            
            // Для финансирования показываем сумму и срок
            let description = productData?.description || item.description;
            if (item.id === 'financing' && item.loanAmount && item.loanTerm) {
              description = `${formatAmount(item.loanAmount)} ₽ / ${item.loanTerm} мес`;
            }
            
            const hasDescription = !!description;
            
            // Получаем позицию иконки из данных модалки
            const iconPosition = ALL_MODALS_DATA[title]?.iconPosition || {
              left: '0',
              top: '0',
              width: '100%',
              height: '100%'
            };

            return (
              <div key={item.id} className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="PureCard">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
                  <div className={`content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative ${!hasDescription ? 'h-[44px]' : ''}`} data-name="TopSlot">
                    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[12px] relative self-stretch shrink-0" data-name="Graphic">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="Graphic">
                        <div className="content-stretch flex flex-col items-center justify-center max-h-[40px] max-w-[40px] min-h-[40px] min-w-[40px] relative shrink-0 size-[72px]" data-name="IconView">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute max-w-none" src={icon} style={{
                              left: iconPosition.left,
                              top: iconPosition.top,
                              width: iconPosition.width,
                              height: iconPosition.height
                            }} />
                          </div>
                          <div className="relative shrink-0 size-[40px]" data-name="Content">
                            <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px] size-[40px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgSidePanel1}')` }}>
                              <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="BgImg" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name="Filler" />
                    </div>
                    <div className={`content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative ${!hasDescription ? 'justify-center self-stretch' : ''}`} data-name="Text Content">
                      <p 
                        className="leading-[20px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] w-full cursor-pointer"
                        onClick={() => onItemClick?.(item.productId)}
                      >
                        {title}
                      </p>
                      {description && (
                        <p className="pr-[24px] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full whitespace-nowrap overflow-hidden text-ellipsis">
                          {description}
                        </p>
                      )}
                    </div>
                    <div className="content-stretch flex gap-[16px] items-center justify-center relative self-stretch shrink-0" data-name="RightAddon">
                      {item.productId === 'financing' && (
                        <button 
                          onClick={onEditFinancing}
                          className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
                          data-name="[D] Button"
                        >
                          <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
                            <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
                              <div className="relative shrink-0 size-[24px]" data-name="Fixer">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                  <g id="Fixer">
                                    <path d={svgPaths.p3dd0a800} fill="var(--fill-0, #040413)" fillOpacity="0.55" id="PaintMe" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </button>
                      )}
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
                        data-name="[D] Button"
                      >
                        <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
                          <div className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="LeftAddon">
                            <div className="relative shrink-0 size-[24px]" data-name="Fixer">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g id="Fixer">
                                  <path d={svgPaths.p194aa200} fill="var(--fill-0, #040413)" fillOpacity="0.55" id="PaintMe" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}