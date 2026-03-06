import svgPaths from "./svg-x1ydv67pv3";
import imgWip6MCredCard from "figma:asset/7186d95bd7ca1e12cf93fa27d3d2e711c96d8bb5.png";
import { imgWip6MCredCard1 } from "./svg-otj69";
import { MobileFinancingButtons } from "../app/components/MobileFinancingButtons";
import { formatAmount } from "../app/utils/formatAmount";
import { ALL_MODALS_DATA } from "../app/constants/modals";

interface MCredCardFastProps {
  onOpenFinancing?: () => void;
  onOpenCart?: () => void;
  loanAmount?: string;
  loanTerm?: string;
  financingType?: 'fastfin' | 'longfin';
}

export default function MCredCardFast({ onOpenFinancing, onOpenCart, loanAmount = "1000000", loanTerm = "12", financingType = "fastfin" }: MCredCardFastProps = {}) {
  // Эта карточка рендерится только когда финансирование в корзине
  const isInCart = true;
  
  // Определяем текст лимитов в зависимости от типа финансирования
  const limitTexts = financingType === 'fastfin' 
    ? { amount: 'из 200 млн ₽', term: 'до 36 мес' }
    : { amount: 'из 99 млрд ₽', term: 'до 120 месяцев' };
  
  // Получаем данные из constants
  const creditLineData = ALL_MODALS_DATA["Кредитная линия"];
    
  return (
    <div className="bg-[#1c1c1e] content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] size-full" data-name="wip6 / M_CredCard">
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="head">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="PreloginProductsIcon">
          <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[1.4%] max-w-none size-full top-0" src={imgWip6MCredCard} />
            </div>
            <div className="relative shrink-0 size-[64px]" data-name="Content">
              <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgWip6MCredCard1}')` }}>
                <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="body">
        <div className="bg-[#0cc44d] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Status">
          <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.94)] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Быстро и без проверок</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="wrap">
          <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.94)] tracking-[0.38px] whitespace-nowrap">{creditLineData.title}</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] w-[min-content]">{creditLineData.subtitle}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] h-[54px] items-start not-italic relative shrink-0 w-full" data-name=".SKBPL_KredCfg">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Text">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(238,238,251,0.55)] w-full">Ваша сумма кредита</p>
          <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 w-full">
            <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[0px] text-[rgba(255,255,255,0.94)] text-ellipsis tracking-[-0.32px] w-full whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden text-[16px]">{formatAmount(loanAmount)} ₽</p>
            </div>
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] w-full">
              <p className="leading-[16px]">{limitTexts.amount}</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(238,238,251,0.55)] w-full">Ваш срок кредита</p>
          <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 w-full">
            <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center relative shrink-0 text-[0px] text-[rgba(255,255,255,0.94)] tracking-[-0.32px] w-full">
              <p className="leading-[20px] text-[16px]">{loanTerm} месяцев</p>
            </div>
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] w-full">
              <p className="leading-[16px]">{limitTexts.term}</p>
            </div>
          </div>
        </div>
      </div>
      {isInCart && (
        <MobileFinancingButtons
          onEdit={() => {
            console.log('Edit clicked - opening financing sidebar');
            onOpenFinancing?.();
          }}
          onCart={() => {
            console.log('Cart clicked - opening cart');
            onOpenCart?.();
          }}
          showInCart={true}
        />
      )}
    </div>
  );
}