interface StatusBadgeProps {
  // Старый API для мобильных версий (deprecated, используйте variant)
  type?: 'fast' | 'verified';
  // Новый API для десктопных версий
  variant?: 'fastFinMuted' | 'fastFinContrast' | 'longFinMuted' | 'longFinContrast';
}

export default function StatusBadge({ type, variant }: StatusBadgeProps) {
  // Определяем стили на основе варианта
  let bgColor: string;
  let textColor: string;
  let text: string;
  
  if (type) {
    // Старый API (мобильный) - маппинг на новые варианты
    // type="fast" → fastFinContrast
    // type="verified" → longFinContrast
    if (type === 'fast') {
      variant = 'fastFinContrast';
    } else if (type === 'verified') {
      variant = 'longFinContrast';
    }
  }
  
  if (variant === 'fastFinContrast') {
    bgColor = 'bg-[#0cc44d]';
    textColor = 'text-[rgba(255,255,255,0.94)]';
    text = 'Быстро и без проверок';
  } else if (variant === 'fastFinMuted') {
    bgColor = 'bg-[#dff8e5]';
    textColor = 'text-[#0d9336]';
    text = 'Быстро и без проверок';
  } else if (variant === 'longFinContrast') {
    bgColor = 'bg-[#898991]';
    textColor = 'text-[rgba(255,255,255,0.94)]';
    text = 'Потребуются проверки';
  } else {
    // longFinMuted (default)
    bgColor = 'bg-[rgba(30,43,68,0.08)]';
    textColor = 'text-[rgba(4,4,19,0.55)]';
    text = 'Потребуются проверки';
  }
  
  return (
    <div 
      className={`content-stretch flex items-center px-[8px] py-[2px] rounded-[6px] ${bgColor}`}
      data-name="Status"
    >
      <div className={`flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] ${textColor} uppercase whitespace-nowrap`}>
        <p className="leading-[16px]">{text}</p>
      </div>
    </div>
  );
}

// Именованный экспорт для обратной совместимости
export { StatusBadge };
