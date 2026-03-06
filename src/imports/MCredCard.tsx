import svgPaths from "./svg-gagkncnfkq";
import imgWip6MCredCard from "figma:asset/44690177e6c33f3932ceda7be51d1886a99a6432.png";
import { imgWip6MCredCard1 } from "./svg-wic6l";
import { StatusBadge } from "../app/components/StatusBadge";
import { MobileFinancingButtons } from "../app/components/MobileFinancingButtons";

interface MCredCardProps {
  onOpenFinancing?: () => void;
  onOpenCart?: () => void;
}

export default function MCredCard({ onOpenFinancing, onOpenCart }: MCredCardProps = {}) {
  // Эта карточка рендерится только когда финансирование в корзине
  const isInCart = true;
  return (
    <div className="bg-[#1c1c1e] content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] size-full" data-name="wip6 / M_CredCard">
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="head">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
          <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[194.35%] left-[-36.3%] max-w-none top-[-42.36%] w-[179.01%]" src={imgWip6MCredCard} />
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
        <StatusBadge variant="longFinContrast" />
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="wrap">
          <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.94)] tracking-[0.38px] w-[min-content]">Кредитная линия</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] w-[min-content]">Одобрим единый кредитный лимит на всё и сразу</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] h-[54px] items-start not-italic relative shrink-0 w-full" data-name=".SKBPL_KredCfg">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Text">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(238,238,251,0.55)] w-full">Ваша сумма кредита</p>
          <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 w-full">
            <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[0px] text-[rgba(255,255,255,0.94)] text-ellipsis tracking-[-0.32px] w-full whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden text-[16px]">50 000 000 ₽</p>
            </div>
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] w-full">
              <p className="leading-[16px]">от 50 млн ₽</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(238,238,251,0.55)] w-full">Ваш срок кредита</p>
          <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 w-full">
            <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center relative shrink-0 text-[0px] text-[rgba(255,255,255,0.94)] tracking-[-0.32px] w-full">
              <p className="leading-[20px] text-[16px]">1 мес.</p>
            </div>
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] w-full">
              <p className="leading-[16px]">от 1 до 120 мес.</p>
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
      <div className="absolute inset-x-0 bottom-0 h-px" data-name="Border">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
          <g id="Border">
            <path clipRule="evenodd" d={svgPaths.p131104} fill="var(--fill-0, #E7E8EB)" fillRule="evenodd" id="Border_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
