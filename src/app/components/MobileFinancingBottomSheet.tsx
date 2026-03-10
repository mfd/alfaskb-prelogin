import { MOBILE_BENEFIT_ICONS } from './icons/MobileBenefitIcons';
import BenefitIconBackground from './icons/BenefitIconBackground';
import { ALL_MODALS_DATA } from '../constants/modals';
import svgPaths from "../../imports/svg-ojwadded7q";
import imgIconViewCreditLine from "figma:asset/fba7823a1d9ed597ed66bef65724a783078389b5.png";
import imgIconViewFactoring from "figma:asset/d1d40253624769c706b16443669c207d450a0cce.png";
import imgIconViewGuarantee from "figma:asset/42c1815a218a3d04336231b42bf5ce9f92b014e5.png";
import imgIconViewOverdraft from "figma:asset/cdc94f594ce360f650b3258f60a9e696e28cfae9.png";
import { imgShapeContent as imgMaskCreditLine } from "../../imports/svg-0t3pi";
import { imgShapeContent as imgMaskFactoring } from "../../imports/svg-0t3pi";
import { imgShapeContent as imgMaskGuarantee } from "../../imports/svg-0t3pi";
import { imgShapeContent as imgMaskOverdraft } from "../../imports/svg-0t3pi";

interface MobileFinancingBottomSheetProps {
  financingType: string;
}

const FINANCING_ICONS: Record<string, string> = {
  'Кредитная линия': imgIconViewCreditLine,
  'Факторинг': imgIconViewFactoring,
  'Банковская гарантия': imgIconViewGuarantee,
  'Овердрафт': imgIconViewOverdraft,
};

const FINANCING_MASKS: Record<string, string> = {
  'Кредитная линия': imgMaskCreditLine,
  'Факторинг': imgMaskFactoring,
  'Банковская гарантия': imgMaskGuarantee,
  'Овердрафт': imgMaskOverdraft,
};

const FINANCING_ICON_POSITIONS: Record<string, { left: string; top: string; width: string; height: string }> = {
  'Кредитная линия': { left: '0', top: '0', width: '100%', height: '100%' },
  'Факторинг': { left: '0', top: '0', width: '100%', height: '100%' },
  'Банковская гарантия': { left: '0', top: '0', width: '100%', height: '100%' },
  'Овердрафт': { left: '0', top: '0', width: '100%', height: '100%' },
};

// Обёртка для иконок без фона (24x24)
function MobileIconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        {children}
      </div>
    </div>
  );
}

function Cross() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Cross">
      <div className="absolute backdrop-blur-[5px] bg-[rgba(38,55,88,0.06)] left-0 opacity-40 rounded-[50px] size-[32px] top-0" data-name="BG" />
      <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="cross">
        <div className="absolute inset-1/4" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p36d3fa00} fill="var(--fill-0, #898991)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function MobileFinancingBottomSheet({ financingType }: MobileFinancingBottomSheetProps) {
  const modalData = ALL_MODALS_DATA[financingType];
  
  if (!modalData) {
    return null;
  }

  const iconSrc = FINANCING_ICONS[financingType];
  const iconMask = FINANCING_MASKS[financingType];
  const iconPosition = FINANCING_ICON_POSITIONS[financingType];

  return (
    <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full max-h-[80vh] overflow-y-auto" data-name="MainBody">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          {/* Swiper */}
          <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Swiper">
            <div className="bg-[#e7e8ec] h-[4px] rounded-[20px] shrink-0 w-[36px]" data-name="swiper" />
          </div>

          {/* Title + Content */}
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title+Content">
            {/* Header */}
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".Title">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center pr-[8px] py-[12px] relative w-full">
                    <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px]">
                      <p className="leading-[28px]">{modalData.title}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start overflow-clip pl-[8px] py-[8px] relative shrink-0 w-[40px]" data-name=".Header / Right slot">
                <Cross />
              </div>
            </div>

            {/* Fixer */}
            <div className="h-[8px] shrink-0 w-full" data-name="Fixer_8px" />

            {/* Content */}
            <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="Content">
              <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="SwapMe">
                
                {/* Subtitle and Icon */}
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                    <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
                      <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">
                        {modalData.subtitle}
                      </p>
                    </div>
                    <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
                      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">
                        {modalData.description}
                      </p>
                    </div>
                  </div>

                  {/* Product Icon */}
                  {iconSrc && iconMask && (
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
                      <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img 
                            alt="" 
                            className="absolute max-w-none" 
                            src={iconSrc}
                            style={{
                              left: '0',
                              top: '0',
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain'
                            }}
                          />
                        </div>
                        <div className="relative shrink-0 size-[64px]" data-name="Content">
                          <div 
                            className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" 
                            data-name="ShapeContent" 
                            style={{ maskImage: `url('${iconMask}')` }}
                          >
                            <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg">
                              <img 
                                alt="" 
                                className="absolute max-w-none" 
                                src={iconSrc}
                                style={{
                                  left: '0',
                                  top: '0',
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Spacer */}
                <div className="opacity-0 relative shrink-0 w-full" data-name="SpacerVertical 2.0">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-center px-[158px] py-[6px] relative w-full">
                      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3193fc] text-[10px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
                        M - 24px
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits Title */}
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Headline.Typography">
                  <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">
                    Преимущества
                  </p>
                </div>

                {/* Small Spacer */}
                <div className="opacity-0 relative shrink-0 w-full" data-name="SpacerVertical 2.0">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-center px-[160px] py-[2px] relative w-full">
                      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fbd700] text-[10px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
                        S - 16px
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  {modalData.benefits.map((benefit) => {
                    const IconComponent = MOBILE_BENEFIT_ICONS[benefit.key];
                    
                    return (
                      <div key={benefit.key} className="content-stretch flex flex-col items-start max-w-[328px] min-w-[270px] relative shrink-0 w-full" data-name="PureCard">
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
                          <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
                            <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative self-stretch shrink-0" data-name="Graphic">
                              <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
                                <MobileIconWrapper>
                                  {IconComponent && <IconComponent />}
                                </MobileIconWrapper>
                              </div>
                              <div className="flex-[1_0_0] min-h-px min-w-px w-[40px]" data-name="Filler" />
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
                              <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">
                                {benefit.title}
                              </p>
                              <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full">
                                {benefit.description}
                              </p>
                            </div>
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
    </div>
  );
}