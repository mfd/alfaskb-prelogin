import { useState, useEffect, useRef } from 'react';

interface SmsVerificationProps {
  phone: string;
  onVerify: (code: string) => void;
  onChangePhone: () => void;
}

export default function SmsVerification({ phone, onVerify, onChangePhone }: SmsVerificationProps) {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(32);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Таймер обратного отсчета
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Автофокус на первом поле при монтировании
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Форматирование телефона для отображения
  const formatPhoneForDisplay = (phoneStr: string) => {
    const digits = phoneStr.replace(/\D/g, '');
    const last4 = digits.slice(-4);
    return `+7 ··· ··· ${last4.slice(0, 2)}-${last4.slice(2)}`;
  };

  const handleChange = (index: number, value: string) => {
    // Только цифры
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError(false); // Сбрасываем ошибку при вводе

    // Автоматический переход к следующему полю
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Если все 4 цифры введены, отправляем на проверку
    if (newCode.every(digit => digit !== '') && index === 3) {
      const enteredCode = newCode.join('');
      if (enteredCode === '7777') {
        onVerify(enteredCode);
      } else {
        // Показываем ошибку и очищаем поля
        setError(true);
        setTimeout(() => {
          setCode(['', '', '', '']);
          setError(false);
          inputRefs.current[0]?.focus();
        }, 1000);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Backspace - переход к предыдущему полю
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    if (pastedData.length === 4) {
      const newCode = pastedData.split('');
      setCode(newCode);
      inputRefs.current[3]?.focus();
      
      if (pastedData === '7777') {
        onVerify(pastedData);
      } else {
        setError(true);
        setTimeout(() => {
          setCode(['', '', '', '']);
          setError(false);
          inputRefs.current[0]?.focus();
        }, 1000);
      }
    }
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(32);
      setCanResend(false);
      setCode(['', '', '', '']);
      inputRefs.current[0]?.focus();
      // Здесь можно добавить логику повторной отправки СМС
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[98px] py-[48px] relative rounded-[32px] shrink-0 w-[752px]" data-name="Background">
      {/* Заголовок */}
      <div className="content-stretch flex flex-col justify-center leading-[0] relative shrink-0 w-full text-center">
        <p className="font-bold leading-[26px] not-italic text-[22px] text-[rgba(3,3,6,0.88)]">
          Введите код из сообщения
        </p>
      </div>

      {/* Подзаголовок с номером телефона */}
      <div className="content-stretch flex flex-col justify-center leading-[0] mt-[23px] relative shrink-0 w-full text-center">
        <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(3,3,6,0.88)]">
          Отправили на {formatPhoneForDisplay(phone)}
        </p>
      </div>

      {/* Поля ввода кода */}
      <div className="flex gap-[8px] items-center justify-center mt-[44px] relative">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            className={`bg-[rgba(38,55,88,0.06)] h-[48px] w-[36px] rounded-[4px] text-center font-['SF_Pro_Text:Bold',sans-serif] text-[30px] text-[rgba(3,3,6,0.88)] outline-none transition-all ${
              error 
                ? 'ring-2 ring-[#ef3124] bg-[rgba(239,49,36,0.1)]' 
                : 'focus:ring-2 focus:ring-[#ef3124]'
            }`}
          />
        ))}
      </div>

      {/* Сообщение об ошибке */}
      {error && (
        <div className="mt-[16px] text-center">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic text-[14px] text-[#ef3124]">
            Неверный код. Попробуйте еще раз
          </p>
        </div>
      )}

      {/* Таймер */}
      <div className="content-stretch flex justify-center mt-[56px] relative shrink-0 w-full text-center">
        <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(4,4,19,0.55)]">
          Запросить повторно можно через <span className="ml-[4px]">{formatTime(timer)}</span>
        </p>
      </div>

      {/* Кнопка "Не приходит сообщение?" */}
      <div className="mt-[36px] relative">
        <button
          onClick={handleResend}
          disabled={!canResend}
          className={`border-b border-dashed h-[20px] text-center ${
            canResend 
              ? 'border-[rgba(3,3,6,0.88)] text-[rgba(3,3,6,0.88)] cursor-pointer hover:border-[rgba(3,3,6,1)] hover:text-[rgba(3,3,6,1)]' 
              : 'border-[rgba(4,4,19,0.55)] text-[rgba(4,4,19,0.55)] cursor-not-allowed'
          } transition-colors`}
        >
          <span className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic text-[14px]">
            Не приходит сообщение?
          </span>
        </button>
      </div>

      {/* Ссылка "Изменить телефон" */}
      <div className="mt-[16px] relative">
        <button
          onClick={onChangePhone}
          className="border-b border-solid border-[rgba(3,3,6,0.35)] h-[20px] text-center hover:border-[rgba(3,3,6,0.88)] transition-colors"
        >
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] not-italic text-[16px] text-[rgba(3,3,6,0.88)]">
            Изменить телефон
          </span>
        </button>
      </div>
    </div>
  );
}