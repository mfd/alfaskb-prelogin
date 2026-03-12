import { useState } from 'react';
import svgPaths from "../../imports/svg-bcercjkidp";
import DProductButton from './DProductButton';
import DInput from './DInput';

interface LoginFormProps {
  onSubmit: (phone: string, inn: string) => void;
}

function Fixer() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [phone, setPhone] = useState('+7 (');
  const [inn, setInn] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const formatPhone = (value: string) => {
    // Удаляем все символы кроме цифр
    const digits = value.replace(/\D/g, '');
    
    // Удаляем первую 7, если она есть
    const phoneDigits = digits.startsWith('7') ? digits.slice(1) : digits;
    
    // Форматируем номер
    let formatted = '+7 (';
    if (phoneDigits.length > 0) {
      formatted += phoneDigits.slice(0, 3);
    }
    if (phoneDigits.length > 3) {
      formatted += ') ' + phoneDigits.slice(3, 6);
    }
    if (phoneDigits.length > 6) {
      formatted += '-' + phoneDigits.slice(6, 8);
    }
    if (phoneDigits.length > 8) {
      formatted += '-' + phoneDigits.slice(8, 10);
    }
    
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Если пользователь пытается удалить "+7 (", не позволяем
    if (value.length < 4) {
      setPhone('+7 (');
      return;
    }
    
    const formatted = formatPhone(value);
    setPhone(formatted);
    setPhoneError(false);
  };

  const handleInnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 12);
    setInn(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneDigits = phone.replace(/\D/g, '').slice(1);
    
    if (phoneDigits.length !== 10) {
      setPhoneError(true);
      return;
    }
    
    if (inn.length === 0) {
      return;
    }
    
    onSubmit(phone, inn);
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[98px] py-[48px] relative rounded-[32px] shrink-0 w-[752px]" data-name="★ Form">
      <form onSubmit={handleSubmit} className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        {/* Поле телефона */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 01. Form Slot">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Input">
            <DInput
              value={phone}
              onChange={handlePhoneChange}
              label="Мобильный телефон"
              type="text"
              error={phoneError}
              errorMessage="Введите номер телефона"
            />
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↓Buttom Margin">
            <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />
          </div>
        </div>

        {/* Поле ИНН */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 02. Form Slot">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Input">
            <DInput
              value={inn}
              onChange={handleInnChange}
              label="ИНН"
              type="text"
            />
          </div>
        </div>

        {/* Кнопка и предупреждение */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 03. Form Slot">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↑Top Margin">
            <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />
          </div>
          <div className="bg-[#f2f3f5] relative rounded-[24px] shrink-0 w-full" data-name="SecurityWarrantyBlock">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
                <div className="content-stretch flex gap-[12px] items-center max-h-[54px] overflow-clip relative rounded-[4px] shrink-0 w-[262px]" data-name="Icon Type">
                  <div className="overflow-clip relative shrink-0 size-[32px]" data-name="shield-alfa">
                    <div className="absolute inset-[8.56%_12.48%_8.33%_12.51%]" data-name="icon">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0031 26.5945">
                        <path d={svgPaths.p1a44ef0} fill="var(--fill-0, #B8B9C0)" id="icon" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-[218px]">Мы гарантируем безопасность и сохранность ваших данных</p>
                </div>
                <DProductButton
                  text="Продолжить"
                  color="red"
                  icon={null}
                  type="submit"
                  className="w-[246px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Согласие на обработку данных */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 04. Form Slot">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↑Top Margin">
            <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />
          </div>
          <div className="content-stretch flex items-center max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
            <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[0] max-w-[751px] min-h-px min-w-px not-italic relative text-[0px] text-[14px] text-[rgba(4,4,19,0.55)] text-center">
              <span className="leading-[20px]">{`Нажимая кнопку «Продолжить», вы подтверждаете, что согласны на `}</span>
              <a href="#" className="decoration-[16%] decoration-dotted leading-[20px] underline text-[rgba(4,4,19,0.55)]">обработку персональных данных</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
