import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-bcercjkidp";
import DFooter from '../components/DFooter';
import LoginForm from '../components/LoginForm';
import SmsVerification from '../components/SmsVerification';
import { useUser } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1140px] z-[1]" data-name="Content">
      <div className="h-[16px] shrink-0 w-[1140px]" data-name="PaddingTop" />
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-center min-h-px min-w-px relative" data-name="Links">
          <Link to="/" className="content-stretch flex items-center relative shrink-0" data-name=".Logo">
            <div className="h-[40px] relative shrink-0 w-[28px]" data-name="LogoContainer">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 40">
                <g id="LogoContainer">
                  <path clipRule="evenodd" d={svgPaths.p12878700} fill="var(--fill-0, #EF3124)" fillRule="evenodd" id="a-logo" />
                </g>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MainHeaderV() {
  return (
    <div className="relative shrink-0 w-full" data-name=".MainHeaderV3">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col isolate items-center px-[150px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}



function Fixer() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function TitleZone() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[751px]" data-name="★ Title Zone">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔹 01. Title Slot">
        <p className="leading-[48px] not-italic relative shrink-0 text-[40px] font-bold text-[rgba(3,3,6,0.88)] text-center">Персональные предложения для вашего бизнеса</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔹 02. Title Slot">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Top Margin">
          <Fixer />
        </div>
        <div className="content-stretch flex items-center max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
          <p className="flex-[1_0_0] leading-[24px] max-w-[751px] text-[16px] text-[rgba(3,3,6,0.88)] text-center">Узнайте, какие продукты и условия банк подготовил специально для вашей компании. <br />Введите ИНН, чтобы увидеть подборку</p>
        </div>
      </div>
    </div>
  );
}

function FormZone({ onSubmit }: { onSubmit: (phone: string, inn: string) => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-[1140px]" data-name="★ Form Zone">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

function SmsZone({ phone, onVerify, onChangePhone }: { phone: string, onVerify: (code: string) => void, onChangePhone: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-[1140px]" data-name="★ Form Zone">
      <SmsVerification phone={phone} onVerify={onVerify} onChangePhone={onChangePhone} />
    </div>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUserData } = useUser();
  const { clearCart } = useCart();
  const [step, setStep] = useState<'login' | 'sms'>('login');
  const [phoneData, setPhoneData] = useState('');
  const [innData, setInnData] = useState('');

  const handleSubmit = (phone: string, inn: string) => {
    console.log('Login submitted:', { phone, inn });
    setPhoneData(phone);
    setInnData(inn);
    // Переход к экрану подтверждения СМС
    setStep('sms');
  };

  const handleVerify = (code: string) => {
    console.log('SMS code verified:', code);
    // Сохраняем данные пользователя в контекст
    setUserData({ phone: phoneData, inn: innData });
    // Очищаем корзину
    clearCart();
    // Переход на главную страницу после верификации
    navigate('/products');
  };

  const handleChangePhone = () => {
    // Возврат к форме логина
    setStep('login');
  };

  return (
      <div className="bg-[#f2f3f5] content-stretch flex flex-col items-start relative min-h-screen w-full overflow-x-hidden" data-name="Desktop">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1280px] mx-auto" data-name="LocalHeader">
          <MainHeaderV />
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center pt-[72px] px-[70px] mb-[128px] relative shrink-0 w-full max-w-[1280px] mx-auto" data-name="FormMaster">
          <div className="-translate-x-1/2 absolute bottom-0 left-1/2 top-0 w-[1280px]" data-name="BG">
            <div className="-translate-x-1/2 absolute bg-[#f2f3f5] bottom-0 left-1/2 rounded-[32px] top-0 w-[1140px]" data-name="MainBG" />
          </div>
          <TitleZone />
          {step === 'login' && <FormZone onSubmit={handleSubmit} />}
          {step === 'sms' && <SmsZone phone={phoneData} onVerify={handleVerify} onChangePhone={handleChangePhone} />}
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1280px] mx-auto" data-name="LocalHeader">
          <DFooter />
        </div>
      </div>
  );
}