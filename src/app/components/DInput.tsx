import { useState, ChangeEvent } from 'react';
import svgPaths from "../../imports/svg-zufnff2hpx";

interface DInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  className?: string;
}

export default function DInput({
  value,
  onChange,
  label,
  type = 'text',
  error = false,
  errorMessage,
  success = false,
  className = '',
}: DInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  // Label должен быть вверху (маленький), если есть значение или фокус
  const isLabelUp = value.length > 0 || isFocused;

  return (
    <div className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${className}`} data-name="Input">
      {/* Field */}
      <div className="bg-[rgba(38,55,88,0.06)] content-stretch flex items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
        {/* Border */}
        <div 
          aria-hidden="true" 
          className={`absolute inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] ${
            error 
              ? 'border-[#ff4837] border-b-2 border-solid' 
              : success
                ? 'border-[#00c853] border-b-2 border-solid'
                : 'border-[#babbc2] border-b border-solid'
          }`} 
        />
        
        {/* Content */}
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
          <div className="flex flex-col justify-center size-full">
            <div 
              className={`content-stretch flex flex-col items-start justify-center px-[12px] relative w-full ${
                isLabelUp ? 'py-[8px]' : 'py-[18px]'
              }`}
            >
              {/* Label */}
              {isLabelUp ? (
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
                  <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-ellipsis w-full whitespace-nowrap">
                    <p className="leading-[20px] overflow-hidden">{label}</p>
                  </div>
                </div>
              ) : null}
              
              {/* Value / Input */}
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Value">
                <input
                  type={type}
                  value={value}
                  onChange={onChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={!isLabelUp ? label : ''}
                  className={`flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center not-italic overflow-hidden relative shrink-0 text-ellipsis w-full whitespace-nowrap bg-transparent border-none outline-none leading-[20px] ${
                    isLabelUp 
                      ? 'text-[16px] text-[rgba(3,3,6,0.88)]' 
                      : 'text-[16px] text-[rgba(4,4,19,0.55)] placeholder:text-[rgba(4,4,19,0.55)]'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* RightAddons - Success Icon */}
        {success && (
          <div className="relative self-stretch shrink-0" data-name="RightAddons">
            <div className="flex flex-row justify-end size-full">
              <div className="content-stretch flex gap-[4px] h-full items-start justify-end pr-[12px] py-[16px] relative">
                <div className="content-stretch flex items-start max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative rounded-[4px] shrink-0" data-name="RightAddon1">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="checkmark-circle">
                    <div className="absolute inset-[8.33%]" data-name="icon">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.p1db38880} fill="#0CC44D" fillRule="evenodd" id="icon" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Error Message */}
      {error && errorMessage && (
        <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="ErrorMessage">
          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ec2d20] text-[14px] w-full">
            <p className="leading-[18px]">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}