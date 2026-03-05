import { useRef, useEffect, useState } from 'react';
import svgPaths from "../../imports/svg-pacvrxnhv9";

interface CustomSliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  minLabel: string;
  maxLabel: string;
}

export default function CustomSlider({ value, min, max, onChange, minLabel, maxLabel }: CustomSliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Расчет ширины слайдера на основе значения
  const calculateSliderWidth = () => {
    const percentage = (value - min) / (max - min);
    const width = 16 + percentage * (420 - 16); // от 16px до 420px
    return Math.max(16, Math.min(420, width));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateValue(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateValue(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateValue = (clientX: number) => {
    if (!trackRef.current) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, 420));
    const percentage = x / 420; // 420px - максимальная ширина
    const newValue = min + percentage * (max - min);
    onChange(Math.round(newValue));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, min, max]);

  const sliderWidth = calculateSliderWidth();

  return (
    <>
      {/* Невидимая область для кликов на всю ширину */}
      <div 
        ref={trackRef}
        className="absolute left-0 bottom-[21px] w-[420px] h-[16px] cursor-pointer z-10"
        onMouseDown={handleMouseDown}
        data-name="click-area"
      />
      
      {/* Видимый слайдер с динамической шириной */}
      <div 
        className="absolute content-stretch flex flex-col h-[16px] items-start left-0 bottom-[21px] pointer-events-none" 
        style={{ width: `${sliderWidth}px` }}
        data-name=".Slider"
      >
        {/* Base slider bar */}
        <div className="absolute h-[2px] left-0 right-0 top-[7px]" data-name="slider-bar-base">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={`0 0 ${sliderWidth} 2`}>
            <path d={svgPaths.p1255d880} fill="var(--fill-0, #BABBC2)" id="slider-bar-base" />
          </svg>
        </div>
        
        {/* Progress container */}
        <div 
          className="h-[27px] relative shrink-0 w-full" 
          data-name="Container"
        >
          <div className="absolute bg-[#ef3124] h-[2px] left-0 right-0 rounded-[999px] top-[7px]" data-name="progress-bar" />
          <div 
            className="-translate-y-1/2 absolute right-0 size-[16px] top-[calc(50%-5.5px)]" 
            data-name="knob"
          >
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path clipRule="evenodd" d={svgPaths.p30769300} fill="var(--fill-0, #EF3124)" fillRule="evenodd" id="knob" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] items-center justify-between leading-[18px] not-italic pt-[6px] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-[420px] whitespace-nowrap pointer-events-none" data-name=".Pips">
        <p className="relative shrink-0">{minLabel}</p>
        <p className="relative shrink-0 text-right">{maxLabel}</p>
      </div>
    </>
  );
}