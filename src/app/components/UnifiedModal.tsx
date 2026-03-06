import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-pnraektoeb";
import BenefitIconBackground from './icons/BenefitIconBackground';
import StarIcon from './icons/StarIcon';
import CardPaymentIcon from './icons/CardPaymentIcon';
import TerminalIcon from './icons/TerminalIcon';
import ClockIcon from './icons/ClockIcon';
import CardsStackIcon from './icons/CardsStackIcon';
import ExpenseManagementIcon from './icons/ExpenseManagementIcon';
import CardTransferIcon from './icons/CardTransferIcon';
import GpiTrackerIcon from './icons/GpiTrackerIcon';
import InternetBankIcon from './icons/InternetBankIcon';
import NotificationIcon from './icons/NotificationIcon';
import HeadsetIcon from './icons/HeadsetIcon';
import TimeManagementIcon from './icons/TimeManagementIcon';
import BankIcon from './icons/BankIcon';
import UserManagerIcon from './icons/UserManagerIcon';
import LightningIcon from './icons/LightningIcon';
import OnlineIcon from './icons/OnlineIcon';
import PercentIcon from './icons/PercentIcon';
import MoneyIcon from './icons/MoneyIcon';
import CheckShieldIcon from './icons/CheckShieldIcon';
import DocumentAnalyticsIcon from './icons/DocumentAnalyticsIcon';
import ControlIcon from './icons/ControlIcon';
import TenderIcon from './icons/TenderIcon';
import ContractIcon from './icons/ContractIcon';
import CustomsIcon from './icons/CustomsIcon';
import AutomaticIcon from './icons/AutomaticIcon';
import AvailabilityIcon from './icons/AvailabilityIcon';
import imgIconViewAcquiring from "figma:asset/b116ede83d918c70ee33b67dd684fee5df30c0ea.png";
import imgIconViewCards from "figma:asset/2d8f436e8926b098b31a198377f23d2e9a55c7d7.png";
import imgIconViewVed from "figma:asset/17fe6d92a7c017a237c968c627a7c792bf116508.png";
import imgIconViewSalary from "figma:asset/745488c8f6bf481d7812fab8e092fd177ab9e3bb.png";
import imgIconViewRko from "figma:asset/d16e6a030103ccd22ae1b16e81f4fb0b73c880a3.png";
import imgIconViewDeposits from "figma:asset/52e0ab2ca9d1645496f0a5feb2a3a8b074b833b4.png";
import imgIconViewCreditLine from "figma:asset/fba7823a1d9ed597ed66bef65724a783078389b5.png";
import { imgModalV3 as imgMaskDeposits } from "../../imports/svg-u69pn";
import { imgShapeContent as imgMaskAcquiring } from "../../imports/svg-oe1bh";
import { imgModalV3 as imgMaskSalary } from "../../imports/svg-nieob";
import { imgModalV3 as imgMaskCards } from "../../imports/svg-8bzsp";
import { imgModalV3 as imgMaskVed } from "../../imports/svg-mlh0v";
import { imgModalV3 as imgMaskRko } from "../../imports/svg-u69pn";
import { imgShapeContent as imgMaskCreditLine } from "../../imports/svg-7vz8u";
import { ALL_MODALS_DATA, UI_TEXT } from '../constants/modals';
import DProductButton from './DProductButton';

interface UnifiedModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalKey: string;
  onAddToCart?: (modalKey: string) => void;
  isInCart?: boolean;
  onOpenCart?: () => void;
}

const MODAL_ICONS: Record<string, string> = {
  acquiring: imgIconViewAcquiring,
  cards: imgIconViewCards,
  ved: imgIconViewVed,
  salary: imgIconViewSalary,
  rko: imgIconViewRko,
  deposits: imgIconViewDeposits,
  'credit-line': imgIconViewCreditLine,
};

const MODAL_MASKS: Record<string, string> = {
  acquiring: imgMaskAcquiring,
  cards: imgMaskCards,
  ved: imgMaskVed,
  salary: imgMaskSalary,
  rko: imgMaskRko,
  deposits: imgMaskDeposits,
  'credit-line': imgMaskCreditLine,
};

export const BENEFIT_ICONS: Record<string, React.ComponentType> = {
  // Продукты
  flexible: StarIcon,
  'all-methods': CardPaymentIcon,
  terminals: TerminalIcon,
  support: ClockIcon,
  unlimited: StarIcon,
  choice: CardsStackIcon,
  management: ExpenseManagementIcon,
  transfers: CardTransferIcon,
  gpi: GpiTrackerIcon,
  'internet-bank': InternetBankIcon,
  fast: ClockIcon,
  notifications: NotificationIcon,
  minute: CardTransferIcon,
  'support-24': HeadsetIcon,
  time: ClockIcon,
  free: BankIcon,
  tech: BankIcon,
  '24-7': TimeManagementIcon,
  personal: UserManagerIcon,
  convenient: LightningIcon,
  online: OnlineIcon,
  'from-day': TimeManagementIcon,
  rate: PercentIcon,
  amount: MoneyIcon,
  // Финансирование
  limit: StarIcon,
  term: TimeManagementIcon,
  protection: CheckShieldIcon,
  analytics: DocumentAnalyticsIcon,
  control: ControlIcon,
  tender: TenderIcon,
  contract: ContractIcon,
  customs: CustomsIcon,
  'fast-issue': ClockIcon,
  automatic: AutomaticIcon,
  availability: AvailabilityIcon,
  payment: MoneyIcon,
  'limit-amount': MoneyIcon,
};

export default function UnifiedModal({ isOpen, onClose, modalKey, onAddToCart, isInCart = false, onOpenCart }: UnifiedModalProps) {

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const content = ALL_MODALS_DATA[modalKey];
  if (!content && isOpen) return null;

  const iconSrc = content?.iconKey ? MODAL_ICONS[content.iconKey] : undefined;
  const iconMask = content?.maskKey ? MODAL_MASKS[content.maskKey] : undefined;
  const iconPosition = content?.iconPosition || { left: '0', top: '0', width: '100%', height: '100%' };

  return (
    <AnimatePresence>
      {isOpen && content && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="absolute inset-0 bg-[rgba(19,19,19,0.5)]" 
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="relative w-[800px] max-h-[90vh] overflow-y-auto"
          >
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[24px] size-full bg-white" data-name="ModalV2">
          {/* Header */}
          <div className="bg-white content-stretch flex flex-col items-start justify-center min-h-[92px] min-w-[800px] pb-[16px] pl-[40px] pr-[28px] pt-[28px] relative shrink-0 w-[500px]" data-name="Header">
            <div className="relative shrink-0 w-full" data-name="Title">
              <div className="content-stretch flex flex-col items-start pr-[64px] pt-[12px] relative w-full">
                <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[36px] not-italic font-bold relative shrink-0 text-[30px] text-[rgba(3,3,6,0.88)] w-full">
                  {content.title}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute content-stretch flex items-start right-[28px] top-[28px] cursor-pointer"
              data-name="CrossButton"
            >
              <div className="relative shrink-0 size-[48px]" data-name="Cross">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[40px] left-1/2 rounded-[50px] size-[48px] top-1/2" data-name="BG" />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cross-medium">
                  <div className="absolute inset-[12.5%]" data-name="shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.0001">
                      <path d={svgPaths.p10274900} fill="var(--fill-0, #212124)" id="shape" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="bg-white relative shrink-0 w-full" data-name="[CustomContentBlock]">
            <div className="content-stretch flex flex-col items-start px-[40px] relative w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="!!!SwapMe">
                {/* Divider */}
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-0.5px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 720 1">
                      <path d="M0 0.5H720" id="Vector 5990" stroke="var(--stroke-0, #D5D6DC)" />
                    </svg>
                  </div>
                </div>

                {/* Spacer */}
                <div className="h-[24px] relative shrink-0 w-full" />

                {/* Subtitle and Icon */}
                <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                    <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
                      <p className="flex-[1_0_0] font-['SF_Pro_Display:Bold',sans-serif] leading-[26px] max-w-[751px] min-h-px min-w-px not-italic font-bold relative text-[22px] text-[rgba(3,3,6,0.88)]">
                        {content.subtitle}
                      </p>
                    </div>
                    <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
                      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,4,19,0.55)]">
                        {content.description}
                      </p>
                    </div>
                  </div>

                  {/* Product Icon */}
                  {iconSrc && iconMask && (
                    <div className="h-[96px] relative shrink-0 w-[224px]">
                      <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2 w-[80px]" data-name="PreloginProductsIcon">
                        <div className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[80px] min-h-[80px] min-w-[80px] relative shrink-0 size-[72px]" data-name="IconView">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img 
                              alt="" 
                              className="absolute w-full h-full object-contain" 
                              src={iconSrc} 
                            />
                          </div>
                          <div className="relative shrink-0 size-[80px]" data-name="Content">
                            <div 
                              className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[80px_80px] size-[80px] top-0" 
                              data-name="ShapeContent" 
                              style={{ maskImage: `url('${iconMask}')` }}
                            >
                              <div className="absolute left-0 overflow-clip size-[80px] top-0" data-name="BgImg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Spacer */}
                <div className="h-[40px] relative shrink-0 w-full" />

                {/* Benefits Title */}
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Headline.Typography">
                  <p className="flex-[1_0_0] font-['SF_Pro_Display:Bold',sans-serif] leading-[26px] max-w-[751px] min-h-px min-w-px not-italic font-bold relative text-[22px] text-[rgba(3,3,6,0.88)]">
                    {UI_TEXT.benefitsTitle}
                  </p>
                </div>

                {/* Spacer */}
                <div className="h-[24px] relative shrink-0 w-full" />

                {/* Benefits Grid */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  {content.benefits.reduce<Array<typeof content.benefits>>((rows, benefit, index) => {
                    if (index % 2 === 0) {
                      rows.push([benefit]);
                    } else {
                      rows[rows.length - 1].push(benefit);
                    }
                    return rows;
                  }, []).map((row, rowIndex) => (
                    <div key={rowIndex} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                      {row.map((benefit) => {
                        const IconComponent = BENEFIT_ICONS[benefit.key];
                        
                        return (
                          <div key={benefit.key} className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[558px] min-h-px min-w-[267px] relative" data-name="PureCard">
                            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
                              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
                                <div className="content-stretch flex flex-col items-start justify-center min-h-[56px] pr-[12px] relative self-stretch shrink-0" data-name="Graphic">
                                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Graphic">
                                    <BenefitIconBackground>
                                      {IconComponent && <IconComponent />}
                                    </BenefitIconBackground>
                                  </div>
                                  <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name="Filler" />
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-h-px min-w-px not-italic pt-[2px] relative" data-name="Text Content">
                                  <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[24px] not-italic font-medium relative shrink-0 text-[18px] text-[rgba(3,3,6,0.88)] w-full">
                                    {benefit.title}
                                  </p>
                                  <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-full">
                                    {benefit.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white relative shrink-0 w-full" data-name="Footer">
            <div className="content-stretch flex flex-col gap-[12px] items-start pb-[40px] pt-[24px] px-[40px] relative w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Buttons">
                {isInCart ? (
                  <DProductButton
                    variant="inCart"
                    onClick={() => {
                      if (onOpenCart) {
                        onOpenCart();
                      }
                      onClose();
                    }}
                  />
                ) : (
                  <DProductButton
                    variant="add"
                    onClick={() => {
                      if (onAddToCart) {
                        onAddToCart(modalKey);
                      }
                      onClose();
                    }}
                  />
                )}
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