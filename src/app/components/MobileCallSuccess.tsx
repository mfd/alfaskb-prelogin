import svgPaths from "../../imports/svg-5jk13o7n2b";
import imgSidePanel from "figma:asset/3763c4a9aa567a9deb9504e7af991955fe4dcc27.png";

interface MobileCallSuccessProps {
  phoneNumber?: string;
}

export default function MobileCallSuccess({ phoneNumber = '+7 (999) 999-99-99' }: MobileCallSuccessProps) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="[Custom Content Part]">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full flex flex-col justify-center pb-[64px]" data-name="SwapMe">
          <div className="content-stretch flex flex-col items-start py-[16px] relative">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="ServiceMessage">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="TopSlot">
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="TopSlot">
                  <div className="content-stretch flex items-start justify-center pb-[24px] relative rounded-[24px] shrink-0 w-full" data-name="Graphic">
                    <div className="content-stretch flex flex-col items-center relative shrink-0 size-[72px]" data-name="Image Small">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[113.75%] left-[-6.83%] max-w-none top-[-8.75%] w-[113.67%]" src={imgSidePanel} />
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip w-full" data-name=".Graphic/Image Small" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-[rgba(3,3,6,0.88)] text-center w-full" data-name="Text Content">
                    <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[20px] tracking-[0.38px] w-full">Звонок заказан</p>
                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px] text-[14px] w-full whitespace-pre-wrap">
                      <span className="leading-[20px]">{`По указанному номеру `}</span>
                      <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px]">{phoneNumber}  </span>
                      <span className="leading-[20px]">в ближайшее время с вами свяжется сотрудник банка, чтобы проконсультировать по выбранным продуктам</span>
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