import svgPaths from "./svg-g3h07tdvev";
import imgWip6DCredCard from "figma:asset/fba7823a1d9ed597ed66bef65724a783078389b5.png";
import { imgWip6DCredCard1 } from "./svg-sbhrw";
import StatusBadge from "../app/components/StatusBadge";
import DProductButton from "../app/components/DProductButton";

interface DCredCardFastProps {
  onOpenCart?: () => void;
  onEditClick?: () => void;
}

export default function DCredCardFast({ onOpenCart, onEditClick }: DCredCardFastProps) {
  return (
    <div className="bg-[#1c1c1e] content-stretch flex items-start justify-between overflow-clip p-[32px] relative rounded-[32px] size-full" data-name="DesktopCredCard">
      <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative" data-name="content">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[332px]" data-name="title">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="PreloginProductsIcon">
            <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]" data-name="IconView">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute max-w-none" src={imgWip6DCredCard} style={{ left: '0', top: '0', width: '100%', height: '100%' }} />
              </div>
              <div className="relative shrink-0 size-[72px]" data-name="Content">
                <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgWip6DCredCard1}')` }}>
                  <div className="absolute left-0 overflow-clip size-[72px] top-0" data-name="BgImg" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="text">
            <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="wrap">
              <p className='font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] whitespace-nowrap underline-product-title'>Кредитная линия</p>
              <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(238,238,251,0.55)] w-[min-content]">
                Без залога, по 2 документам
                <br aria-hidden="true" />и всего за 3 дня
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[483px]">
          <StatusBadge variant="fastFinContrast" />
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="row">
            <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[152px]" data-name="Text">
              <p className="font-['SF_Pro_Text:Regular',sans-serif] h-[18px] leading-[18px] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">Ваша сумма кредита</p>
              <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] w-full">
                <p className='font-bold leading-[26px] text-[22px] whitespace-nowrap'>192 000 000 ₽</p>
              </div>
              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">
                <p className="leading-[18px]">из 200 млн ₽</p>
              </div>
            </div>
            <div className="h-[66px] relative shrink-0 w-0">
              <div className="absolute inset-[0_-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 66">
                  <path d="M1 0V66" id="Vector 2" stroke="var(--stroke-0, #353539)" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-name="Text">
              <p className="font-['SF_Pro_Text:Regular',sans-serif] h-[18px] leading-[18px] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">Ваш срок кредита</p>
              <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.94)] w-[137px]">
                <p className='font-bold leading-[26px] text-[22px]'>54 мес</p>
              </div>
              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">
                <p className="leading-[18px]">до 36 мес</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[158px]" data-name="wip6 / kredBtns-wip6">
        <DProductButton 
          text="В корзине"
          color="green"
          icon="checkmark"
          onClick={(e) => {
            e.preventDefault();
            if (onOpenCart) {
              onOpenCart();
            }
          }}
          className="w-full"
        />
        <DProductButton 
          text="Изменить"
          color="white"
          icon="edit"
          onClick={(e) => {
            e.preventDefault();
            if (onEditClick) {
              onEditClick();
            }
          }}
          className="w-full"
        />
      </div>
    </div>
  );
}