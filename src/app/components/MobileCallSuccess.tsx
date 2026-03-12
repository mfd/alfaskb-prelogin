import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { UI_TEXT } from '../constants/modals';
import { useUser } from '../contexts/UserContext';
import { COMPANY_INFO } from '../constants/company';
import imgSidePanel from "figma:asset/3763c4a9aa567a9deb9504e7af991955fe4dcc27.png";

interface MobileCallSuccessProps {
  phoneNumber?: string;
}

export default function MobileCallSuccess({ phoneNumber }: MobileCallSuccessProps) {
  const { userData } = useUser();
  
  // Форматирование телефона для отображения
  const formatPhoneForDisplay = (phoneStr: string) => {
    const digits = phoneStr.replace(/\D/g, '');
    if (digits.length === 11) {
      return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`;
    }
    return phoneStr;
  };

  const displayPhone = phoneNumber || (userData?.phone ? formatPhoneForDisplay(userData.phone) : COMPANY_INFO.phone);

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
                    <p className="leading-[28px] relative shrink-0 text-[20px] tracking-[0.38px] w-full">{UI_TEXT.callSuccessTitle}</p>
                    <p className="leading-[0] relative shrink-0 text-[0px] text-[14px] w-full whitespace-pre-wrap">
                      <span className="leading-[20px]">{UI_TEXT.callSuccessTextPrefix} </span>
                      <span className="leading-[20px] font-bold whitespace-nowrap">{displayPhone} </span>
                      <span className="leading-[20px]">{UI_TEXT.callSuccessTextSuffix}</span>
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