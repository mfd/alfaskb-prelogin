import svgPaths from "../../imports/svg-5jk13o7n2b";
import imgSidePanel from "figma:asset/3763c4a9aa567a9deb9504e7af991955fe4dcc27.png";

interface DesktopCallSuccessProps {
  phoneNumber?: string;
}

export default function DesktopCallSuccess({ phoneNumber = '+7 (999) 999-99-99' }: DesktopCallSuccessProps) {
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
                      <span className="font-bold leading-[20px] text-[14px]">{`${phoneNumber} `}</span>
                      <span className="leading-[24px] text-[16px]">{` в ближайшее время с вами свяжется сотрудник банка, чтобы проконсультировать по выбранным продуктам`}</span>
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