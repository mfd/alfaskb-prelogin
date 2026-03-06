import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import svgPaths from "../../imports/svg-pnraektoeb";
import imgIconView from "figma:asset/a46b19810327a8da419337ef2b3b3e6ec44f353f.png";
import imgIconView1 from "figma:asset/935b0b72eac0ff8af0d2988501f6bace8e9ca20d.png";
import imgIconView2 from "figma:asset/30d972c5fac439fc586d71b84ea26790ff5d48ee.png";
import imgIconView3 from "figma:asset/7e8511301674d39f8cd176578d253954d9e47842.png";
import imgIconView4 from "figma:asset/1f419c8ea7101b3f8b826ac9e399696f51a0e351.png";
import imgIconView5 from "figma:asset/0ea90dc395def68741ab5acac4eae35370fa3187.png";
import { imgShapeContent } from "../../imports/svg-3q426";

interface MobileProductBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string | null;
}

// Маппинг productId на название продукта
const PRODUCT_ID_TO_NAME: Record<string, string> = {
  "acquiring": "Торговый эквайринг",
  "salary": "Зарплатный проект",
  "ved": "ВЭД",
  "cards": "Бизнес-карты",
  "rko": "РКО для бизнеса",
  "deposits": "Депозиты для бизнеса",
};

// Данные для каждого продукта
const PRODUCTS_DATA: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  benefits: Array<{ icon: string; title: string; description: string }>;
}> = {
  "acquiring": {
    title: "Торговый эквайринг",
    subtitle: "Приём платежей онлайн и в торговых точках",
    description: "Принимайте оплату картами выгодно",
    icon: imgIconView,
    benefits: [
      { icon: "icon1", title: "Гибкие условия", description: "С учётом вашей сферы деятельности" },
      { icon: "icon2", title: "Терминалы на выбор", description: "Можно интегрировать с кассой" },
      { icon: "icon3", title: "Все способы оплаты", description: "Картами, через СБП и бесконтактно" },
      { icon: "icon4", title: "Поддержка 24/7 ", description: "Выделенная горячая линия для среднего и крупного бизнеса" },
    ]
  },
  "salary": {
    title: "Зарплатный проект",
    subtitle: "Управляйте корпоративным зарплатным проектом онлайн",
    description: "Экономьте ресурсы для развития предприятия",
    icon: imgIconView1,
    benefits: [
      { icon: "icon5", title: "От 1 минуты", description: "Зачисление зарплаты на счёт" },
      { icon: "icon6", title: "До 23:30", description: "Увеличенный операционный день" },
      { icon: "icon7", title: "Круглосуточная поддержка", description: "Персональный зарплатный менеджер" },
      { icon: "icon8", title: "Бесплатно", description: "Снятие наличных в любом банкомате России" },
    ]
  },
  "ved": {
    title: "ВЭД",
    subtitle: "Валютные переводы между юридическими лицами",
    description: "В иностранной валюте онлайн",
    icon: imgIconView2,
    benefits: [
      { icon: "icon9", title: "GPI-трекер", description: "Отслеживайте статус платежей в реальном времени бесплатно" },
      { icon: "icon10", title: "Всего 1 час", description: "Занимает отправка валютных платежей от подписания" },
      { icon: "icon11", title: "Интернет-банк", description: "Система сама заполнит часть полей и проведёт валидации" },
      { icon: "icon12", title: "Уведомления", description: "Бесплатно уведомим контрагента по e‑mail о совершении платежа" },
    ]
  },
  "cards": {
    title: "Бизнес-карты",
    subtitle: "Единая корпоративная карта",
    description: "Настраивается под ваши потребности, другие карты не нужны",
    icon: imgIconView3,
    benefits: [
      { icon: "icon13", title: "Неограниченное количество карт", description: "Заменяет подотчётные средства и командировочные" },
      { icon: "icon14", title: "Карта на выбор", description: "Пластиковая, металл, стикер, виртуальная с возможностью довыпуска в любое время" },
      { icon: "icon15", title: "Управление расходами онлайн", description: "Настраивайте лимиты по картам и ограничивайте круг трат" },
      { icon: "icon16", title: "Переводы с карты", description: "На другие карты до 1,5 млн ₽ в месяц с назначением платежа" },
    ]
  },
  "rko": {
    title: "РКО для бизнеса",
    subtitle: "Расчётно-кассовое обслуживание для вашего бизнеса",
    description: "Всё необходимое для ведения бизнеса в одном месте",
    icon: imgIconView4,
    benefits: [
      { icon: "icon17", title: "Технологично", description: "Инкассация в любое время без участия инкассаторов" },
      { icon: "icon18", title: "Индивидуально", description: "Персональный менеджер и валютный контролёр" },
      { icon: "icon19", title: "Круглосуточно", description: "Платежи клиентам Альфа‑Банка" },
      { icon: "icon20", title: "Удобно", description: "Платежи в другие банки\nс 00:00 до 20:00 мск" },
    ]
  },
  "deposits": {
    title: "Депозиты для бизнеса",
    subtitle: "Откройте депозит и получайте доход",
    description: "Даже если нет расчётного счёта в банке",
    icon: imgIconView5,
    benefits: [
      { icon: "icon21", title: "Онлайн", description: "Станьте клиентом дистанционно" },
      { icon: "icon22", title: "¼ ключевой ставки", description: "Начисляем на остаток по счёту" },
      { icon: "icon23", title: "От 1 дня", description: "Любой срок размещения\nот 1 дня до 3 лет" },
      { icon: "icon24", title: "От 50 000 ₽ или ¥", description: "Минимальная сумма" },
    ]
  },
};

function Cross({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[32px]" data-name="Cross">
      <div className="absolute backdrop-blur-[5px] bg-[rgba(38,55,88,0.06)] left-0 opacity-40 rounded-[50px] size-[32px] top-0" data-name="BG" />
      <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="cross">
        <div className="absolute inset-1/4" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p36d3fa00} fill="var(--fill-0, #898991)" id="icon" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default function MobileProductBottomSheet({ isOpen, onClose, productId }: MobileProductBottomSheetProps) {
  // Блокировка скролла при открытом BottomSheet
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Обработчик кликов для закрытия
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Закрытие по клику на overlay
      if (target.closest('[data-name=".Overlay"]')) {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }

      // Закрытие по клику на крестик
      if (target.closest('[data-name="Cross"]')) {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  if (!productId) return null;

  const productData = PRODUCTS_DATA[productId];
  if (!productData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110]">
          {/* Overlay */}
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".Overlay">
            <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
          </div>

          {/* MainBody */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="absolute bottom-0 left-0 right-0"
            data-name="MainBody"
          >
            <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full max-h-[80vh] overflow-y-auto" data-name="MainBody">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
                  {/* Swiper */}
                  <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Swiper">
                    <div className="bg-[#e7e8ec] h-[4px] rounded-[20px] shrink-0 w-[36px]" data-name="swiper" />
                  </div>

                  {/* Header */}
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".Title">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center pr-[8px] py-[12px] relative w-full">
                          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px]">
                            <p className="leading-[28px]">{productData.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start overflow-clip pl-[8px] py-[8px] relative shrink-0 w-[40px]" data-name=".Header / Right slot">
                      <Cross onClick={onClose} />
                    </div>
                  </div>

                  {/* Fixer */}
                  <div className="h-[8px] shrink-0 w-full" data-name="Fixer_8px" />

                  {/* Content */}
                  <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="Content">
                    <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="SwapMe">
                      {/* Product Info */}
                      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                          <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
                            <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">
                              {productData.subtitle}
                            </p>
                          </div>
                          <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
                            <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)]">
                              {productData.description}
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="PreloginProductsIcon">
                          <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="" className="absolute max-w-none size-full" src={productData.icon} />
                            </div>
                            <div className="relative shrink-0 size-[64px]" data-name="Content">
                              <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
                                <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="h-[24px] shrink-0 w-full" />

                      {/* Benefits Title */}
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Headline.Typography">
                        <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">
                          Преимущества
                        </p>
                      </div>

                      {/* Spacer */}
                      <div className="h-[16px] shrink-0 w-full" />

                      {/* Benefits List */}
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        {productData.benefits.map((benefit, index) => (
                          <div key={index} className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
                            <div className="content-stretch flex items-start min-h-px min-w-px relative w-full" data-name="TopSlot">
                              <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] pr-[8px] relative shrink-0" data-name="Graphic">
                                <div className="content-stretch flex gap-[10px] items-start px-[8px] relative shrink-0" data-name="Graphic">
                                  <div className="relative shrink-0 size-[24px]" data-name="Icon">
                                    <div className="absolute inset-[8.33%]">
                                      {/* Placeholder for icon */}
                                      <div className="w-full h-full bg-[#e7e8ec] rounded-full" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-[14px]" data-name="Text Content">
                                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[rgba(3,3,6,0.88)] w-full">
                                  {benefit.title}
                                </p>
                                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(4,4,19,0.55)] w-full whitespace-pre-line">
                                  {benefit.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
