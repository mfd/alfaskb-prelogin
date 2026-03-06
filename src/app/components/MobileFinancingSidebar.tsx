import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-dnpvkijhrb";
import svgPaths2 from "../../imports/svg-s15f722lfk";
import { FINANCING_CONFIG, FINANCING_TYPES } from "../constants/financing";
import { useCart } from "../contexts/CartContext";
import { MobileFinancingButtons } from "./MobileFinancingButtons";

interface MobileFinancingSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (productName: string, financingType: 'fastfin' | 'longfin', amount: number, term: number) => void;
  editData?: {
    financingType: 'fastfin' | 'longfin';
    productName: string;
    amount: number;
    term: number;
  };
}

export function MobileFinancingSidebar({ 
  isOpen, 
  onClose, 
  onAddToCart,
  editData
}: MobileFinancingSidebarProps) {
  const { items } = useCart();
  const financingInCart = items.find((item) => item.id === "financing");
  const isEditMode = Boolean(financingInCart);
  const [step, setStep] = useState(1);
  
  // Инициализируем с учетом переданных значений из корзины
  const getInitialFinancingType = () => {
    if (editData?.financingType === 'fastfin') return 'fast';
    if (editData?.financingType === 'longfin') return 'standard';
    return 'fast';
  };
  
  const [selectedFinancing, setSelectedFinancing] = useState<"fast" | "standard">(getInitialFinancingType());
  const [selectedProduct, setSelectedProduct] = useState(editData?.productName || "Кредитная линия");
  
  // Получаем конфигурацию в зависимости от выбранного типа
  const config = selectedFinancing === "fast" ? FINANCING_CONFIG.fastFin : FINANCING_CONFIG.longFin;
  const [amount, setAmount] = useState(editData?.amount || config.minAmount);
  const [term, setTerm] = useState(editData?.term || config.minTerm);
  
  // Получаем доступные продукты в зависимости от типа финансирования
  const availableProducts = selectedFinancing === "fast" ? FINANCING_TYPES.fastFin : FINANCING_TYPES.longFin;

  // Обработчик изменения суммы
  const handleAmountChange = (value: string) => {
    // Удаляем все нечисловые символы
    const numericValue = value.replace(/\D/g, '');
    const newAmount = numericValue === '' ? config.minAmount : parseInt(numericValue, 10);
    
    // Ограничиваем значение минимумом и максимумом
    const clampedAmount = Math.max(config.minAmount, Math.min(config.maxAmount, newAmount));
    setAmount(clampedAmount);
  };

  // Обработчик изменения срока
  const handleTermChange = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const newTerm = numericValue === '' ? config.minTerm : parseInt(numericValue, 10);
    
    // Ограничиваем значение минимумом и максимумом
    const clampedTerm = Math.max(config.minTerm, Math.min(config.maxTerm, newTerm));
    setTerm(clampedTerm);
  };

  // Обновляем состояние при открытии сайдбара с переданными значениями
  useEffect(() => {
    if (isOpen) {
      // Сбрасываем на первый шаг при каждом открытии
      setStep(1);
      
      if (editData?.financingType) {
        const financingType = editData?.financingType === 'fastfin' ? 'fast' : 'standard';
        setSelectedFinancing(financingType);
      }
      if (editData?.productName) {
        setSelectedProduct(editData?.productName);
      }
      if (editData?.amount !== undefined) {
        setAmount(editData?.amount);
      }
      if (editData?.term !== undefined) {
        setTerm(editData?.term);
      }
    }
  }, [isOpen, editData]);

  // Блокировка скролла страницы при открытом сайдбаре
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

  const handleContinue = () => {
    // Если выбранный продукт недоступен для типа финансирования, выбираем первый доступный
    const products = selectedFinancing === "fast" ? FINANCING_TYPES.fastFin : FINANCING_TYPES.longFin;
    if (!products.includes(selectedProduct as any)) {
      setSelectedProduct(products[0]);
    }
    
    // Обновляем лимиты только если это не режим редактирования
    if (!editData) {
      const newConfig = selectedFinancing === "fast" ? FINANCING_CONFIG.fastFin : FINANCING_CONFIG.longFin;
      setAmount(newConfig.minAmount);
      setTerm(newConfig.minTerm);
    }
    
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleAddToCart = () => {
    const financingType = selectedFinancing === "fast" ? "fastfin" : "longfin";
    onAddToCart?.(selectedProduct, financingType, amount, term);
    onClose();
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
      
      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full bg-white shadow-xl animate-slide-in-right">
        <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="SidePanel">
          {/* Header */}
          <div className="bg-white content-stretch flex gap-[16px] items-center min-h-[64px] px-[8px] py-[16px] relative shrink-0 w-full" data-name="Header">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[8px] pr-[56px] relative shrink-0 w-[344px]" data-name="Title">
              {step === 2 && (
                <button 
                  onClick={handleBack}
                  className="content-stretch flex gap-[8px] items-center overflow-clip pb-[8px] pr-[8px] relative shrink-0 cursor-pointer"
                  data-name="Back"
                >
                  <div className="relative shrink-0 size-[32px]" data-name="Back">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[5px] bg-[rgba(38,55,88,0.06)] left-1/2 rounded-[50px] size-[32px] top-1/2" data-name="BG" />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="arrow-left">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[20.83%] top-1/4" data-name="icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
                          <path d={svgPaths2.p13de1700} fill="var(--fill-0, #898991)" id="icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                    <p className="leading-[20px]">Назад</p>
                  </div>
                </button>
              )}
              <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px] w-[min-content]">
                Получите финансирование
              </p>
            </div>
            <button 
              onClick={handleClose}
              className="absolute content-stretch cursor-pointer flex items-start overflow-clip p-[8px] right-[8px] top-[8px]" 
              data-name="Cross"
            >
              <div className="relative shrink-0 size-[32px]" data-name="Cross">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[5px] bg-[rgba(38,55,88,0.06)] left-1/2 rounded-[50px] size-[32px] top-1/2" data-name="BG" />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cross">
                  <div className="absolute inset-1/4" data-name="icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <path d={svgPaths.p36d3fa00} fill="var(--fill-0, #898991)" id="icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full overflow-y-auto" data-name="[Custom Content Part]">
            <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative w-full" data-name="SwapMe">
                
                {/* Progress Bar */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".SwapCustomSlot">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="ProgressBarV2">
                    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TextBlock">
                      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text Block">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative" data-name="Left Text">
                          <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Title">
                            <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(3,3,6,0.88)]">
                              Шаг {step} из 2
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Progress Style">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="BG">
                        <div className={`${step >= 1 ? 'bg-[#d1f1d7]' : 'bg-[#e7e8eb]'} content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[99px]`} data-name="step">
                          <div className="absolute h-[4px] left-0 rounded-[99px] top-0 w-[62.4px]" data-name="Filler" />
                        </div>
                        <div className={`${step >= 2 ? 'bg-[#d1f1d7]' : 'bg-[#e7e8eb]'} content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[99px]`} data-name="step">
                          <div className="absolute h-[4px] left-0 rounded-[99px] top-0 w-[62.4px]" data-name="Filler" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex gap-[4px] inset-0 items-start" data-name="StepFillerMain">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[99px]" data-name="step">
                          <div className="bg-[#0cc44d] h-[4px] rounded-[99px] shrink-0 w-full" data-name="Filler" />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip rounded-[99px]" data-name="step">
                          {step === 2 && <div className="bg-[#0cc44d] h-[4px] rounded-[99px] shrink-0 w-full" data-name="Filler" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 1: Choose financing type */}
                {step === 1 && (
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".SwapCustomSlot">
                    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↑Top Margin">
                      <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />
                    </div>
                    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative rounded-[24px] shrink-0 w-full">
                      {/* Fast financing card */}
                      <button
                        onClick={() => setSelectedFinancing("fast")}
                        className="relative rounded-[16px] shrink-0 w-full cursor-pointer"
                        data-name=".M_FormProductCard"
                      >
                        <div aria-hidden="true" className={`absolute border-2 ${selectedFinancing === "fast" ? 'border-[#212124]' : 'border-[#d2d3d9]'} border-solid inset-0 pointer-events-none rounded-[16px]`} />
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Headline+parameters">
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name=".M_Head">
                              <div className="bg-[#dff8e5] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Status">
                                <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d9336] text-[12px] text-left whitespace-nowrap">
                                  <p className="leading-[16px]">Быстро и без проверок</p>
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="M_Main">
                                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Headline.Typography">
                                  <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] text-left tracking-[-0.32px]">
                                    Вам одобрен кредитный лимит
                                  </p>
                                </div>
                              </div>
                              <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] text-left w-[min-content]">
                                Когда нужны деньги на развитие своего дела
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".M_ParameterSlot">
                              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Parameters">
                                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Parameter 1">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Parameter">
                                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-left whitespace-nowrap">
                                      Сумма
                                    </p>
                                  </div>
                                  <div className="content-stretch flex items-center relative shrink-0" data-name=".Value">
                                    <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-left whitespace-nowrap">
                                      до 200 млн ₽
                                    </p>
                                  </div>
                                </div>
                                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Parameter 3">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Parameter">
                                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-left whitespace-nowrap">
                                      Срок
                                    </p>
                                  </div>
                                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Value">
                                    <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-left whitespace-nowrap">
                                      до 36 мес.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* Standard financing card */}
                      <button
                        onClick={() => setSelectedFinancing("standard")}
                        className="relative rounded-[16px] shrink-0 w-full cursor-pointer"
                        data-name=".M_FormProductCard"
                      >
                        <div aria-hidden="true" className={`absolute border-2 ${selectedFinancing === "standard" ? 'border-[#212124]' : 'border-[#d2d3d9]'} border-solid inset-0 pointer-events-none rounded-[16px]`} />
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Headline+parameters">
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name=".M_Head">
                              <div className="bg-[rgba(30,43,68,0.08)] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Status">
                                <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(4,4,19,0.55)] text-left whitespace-nowrap">
                                  <p className="leading-[16px]">Потребуются проверки</p>
                                </div>
                              </div>
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="M_Main">
                                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Headline.Typography">
                                  <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] text-left tracking-[-0.32px]">
                                    На общих условиях
                                  </p>
                                </div>
                              </div>
                              <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] text-left w-[min-content]">
                                Когда нужны деньги на развитие своего дела
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".M_ParameterSlot">
                              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Parameters">
                                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Parameter 1">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Parameter">
                                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-left whitespace-nowrap">
                                      Сумма лимита
                                    </p>
                                  </div>
                                  <div className="content-stretch flex items-center relative shrink-0" data-name=".Value">
                                    <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right whitespace-nowrap">
                                      до 99 млрд ₽
                                    </p>
                                  </div>
                                </div>
                                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Parameter 2">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Parameter">
                                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-left whitespace-nowrap">
                                      Срок
                                    </p>
                                  </div>
                                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Value">
                                    <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-left whitespace-nowrap">
                                      до 120 мес.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="h-[24px] rounded-[32px] shrink-0 w-[8px]" />
                  </div>
                )}

                {/* Step 2: Configure financing */}
                {step === 2 && (
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Body">
                    {/* Product selection */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 03. Form Slot">
                      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↑Top Margin">
                        <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px" data-name="Fixer" />
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Headline.Typography">
                          <p className="flex-[1_0_0] font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px]"><span className="font-bold">Выберите тип финансирования</span></p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="TagGroup">
                          <div className="content-start flex flex-wrap gap-[12px_8px] items-start relative shrink-0 w-full" data-name="Group">
                            {availableProducts.map((product) => (
                              <button
                                key={product}
                                onClick={() => setSelectedProduct(product)}
                                className={`${
                                  selectedProduct === product
                                    ? 'bg-[#212124]'
                                    : 'backdrop-blur-[40px] bg-[rgba(38,55,88,0.06)]'
                                } content-stretch flex gap-[2px] items-center justify-center min-h-[32px] min-w-[52px] overflow-clip px-[8px] py-[4px] relative rounded-[999px] shrink-0 cursor-pointer`}
                              >
                                <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                                  <div className={`flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${
                                    selectedProduct === product
                                      ? 'text-[rgba(255,255,255,0.94)]'
                                      : 'text-[rgba(3,3,6,0.88)]'
                                  } whitespace-nowrap`}>
                                    <p className="leading-[20px]">{product}</p>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Amount and term configuration */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 04. Form Slot">
                      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↑Top Margin">
                        <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />
                      </div>
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Headline.Typography">
                          <p className="flex-[1_0_0] font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-[rgba(3,3,6,0.88)] tracking-[0.38px] font-bold">
                            Выберите условия
                          </p>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Spacer">
                          <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px" data-name="Fixer" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                          {/* Amount field */}
                          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="IncreaseDecreaseField">
                            <div className="h-[56px] relative shrink-0 w-full" data-name="Input">
                              <div className="absolute h-[56px] left-0 right-0 rounded-[8px] top-0" data-name="LightMode">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 56">
                                  <path d={svgPaths2.p25460000} data-figma-bg-blur-radius="20" fill="var(--fill-0, #0B1F35)" fillOpacity="0.07" id="Background" />
                                </svg>
                                <div className="absolute bg-[#b8b9c0] bottom-0 h-px left-0 right-0" data-name="Line" />
                              </div>
                              <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[12px] right-[12px] top-[8px]" data-name="Filling">
                                <button 
                                  onClick={() => setAmount(Math.max(config.minAmount, amount - (selectedFinancing === "fast" ? 10000000 : 50000000)))}
                                  className="overflow-clip relative shrink-0 size-[24px] cursor-pointer"
                                  data-name="minus_m"
                                >
                                  <div className="absolute left-px size-[22px] top-px" data-name="Union">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                                      <path d={svgPaths2.p3f2fd000} fill="var(--fill-0, #0E0E0E)" id="Union" />
                                    </svg>
                                  </div>
                                </button>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic relative" data-name="LabelText">
                                  <label className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">
                                    Сумма кредита
                                  </label>
                                  <input
                                    type="text"
                                    inputMode="numeric"
                                    value={amount.toLocaleString('ru-RU')}
                                    onChange={(e) => handleAmountChange(e.target.value)}
                                    className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] text-[#0e0e0e] text-[16px] w-full bg-transparent border-none outline-none p-0"
                                  />
                                </div>
                                <button 
                                  onClick={() => setAmount(Math.min(config.maxAmount, amount + (selectedFinancing === "fast" ? 10000000 : 50000000)))}
                                  className="overflow-clip relative shrink-0 size-[24px] cursor-pointer"
                                  data-name="Plus_m"
                                >
                                  <div className="absolute left-px size-[22px] top-px" data-name="Union">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                                      <path d={svgPaths2.p23279680} fill="var(--fill-0, #0E0E0E)" id="Union" />
                                    </svg>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[24px] items-start leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full" data-name=".Captoin/Light">
                              <p className="flex-[1_0_0] min-h-px min-w-px relative">{config.minAmountLabel}</p>
                              <p className="flex-[1_0_0] min-h-px min-w-px relative text-right">{config.maxAmountLabel}</p>
                            </div>
                          </div>

                          {/* Term field */}
                          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="IncreaseDecreaseField">
                            <div className="h-[56px] relative shrink-0 w-full" data-name="Input">
                              <div className="absolute h-[56px] left-0 right-0 rounded-[8px] top-0" data-name="LightMode">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 56">
                                  <path d={svgPaths2.p25460000} data-figma-bg-blur-radius="20" fill="var(--fill-0, #0B1F35)" fillOpacity="0.07" id="Background" />
                                </svg>
                                <div className="absolute bg-[#b8b9c0] bottom-0 h-px left-0 right-0" data-name="Line" />
                              </div>
                              <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[12px] right-[12px] top-[8px]" data-name="Filling">
                                <button 
                                  onClick={() => setTerm(Math.max(config.minTerm, term - 6))}
                                  className="overflow-clip relative shrink-0 size-[24px] cursor-pointer"
                                  data-name="minus_m"
                                >
                                  <div className="absolute left-px size-[22px] top-px" data-name="Union">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                                      <path d={svgPaths2.p3f2fd000} fill="var(--fill-0, #0E0E0E)" id="Union" />
                                    </svg>
                                  </div>
                                </button>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic relative" data-name="LabelText">
                                  <label className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">
                                    Срок кредита
                                  </label>
                                  <input
                                    type="text"
                                    inputMode="numeric"
                                    value={term.toString()}
                                    onChange={(e) => handleTermChange(e.target.value)}
                                    className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] text-[#0e0e0e] text-[16px] w-full bg-transparent border-none outline-none p-0"
                                  />
                                </div>
                                <button 
                                  onClick={() => setTerm(Math.min(config.maxTerm, term + 6))}
                                  className="overflow-clip relative shrink-0 size-[24px] cursor-pointer"
                                  data-name="Plus_m"
                                >
                                  <div className="absolute left-px size-[22px] top-px" data-name="Union">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                                      <path d={svgPaths2.p23279680} fill="var(--fill-0, #0E0E0E)" id="Union" />
                                    </svg>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[24px] items-start leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full" data-name=".Captoin/Light">
                              <p className="flex-[1_0_0] min-h-px min-w-px relative">{config.minTermLabel}</p>
                              <p className="flex-[1_0_0] min-h-px min-w-px relative text-right">{config.maxTermLabel}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info block */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 06. Form Slot">
                      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↑Top Margin">
                        <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />
                      </div>
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="bg-[#f2f3f5] relative rounded-[12px] shrink-0 w-full" data-name="Plate">
                          
                        </div>
                      </div>
                    </div>
                    <div className="h-[24px] rounded-[32px] shrink-0 w-[8px]" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white relative shrink-0 w-full" data-name="⥂ Footer">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
              {step === 1 ? (
                <button 
                  onClick={handleContinue}
                  className="bg-[#ef3124] cursor-pointer min-h-[48px] min-w-[104px] relative rounded-[12px] shrink-0 w-full" 
                  data-name="Button_1"
                >
                  <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
                      <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                        <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
                          <p className="leading-[24px]">Продолжить</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ) : isEditMode ? (
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="DCCardButton">
                  {/* Кнопка "Отменить" */}
                  <button
                    onClick={onClose}
                    className="bg-[#f2f3f5] flex-[1_0_0] min-h-[48px] min-w-[88px] relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity"
                    data-name="[M] CustomButton"
                  >
                    <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                        <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                          <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                            <p className="leading-[20px]">Отменить</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Кнопка "Сохранить" */}
                  <button
                    onClick={handleAddToCart}
                    className="bg-[#ef3124] flex-[1_0_0] min-h-[48px] min-w-[88px] relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity"
                    data-name="[M] CustomButton"
                  >
                    <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                        <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                          <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
                            <p className="leading-[20px]">Сохранить</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handleAddToCart}
                  className="bg-[#ef3124] cursor-pointer min-h-[48px] min-w-[104px] relative rounded-[12px] shrink-0 w-full" 
                  data-name="Button_1"
                >
                  <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
                      <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
                        <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] text-left whitespace-nowrap">
                          <p className="leading-[24px]">Добавить в корзину</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              )}
              <div className="absolute h-px left-0 right-0 top-0" data-name="Border">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
                  <g id="Border">
                    <path clipRule="evenodd" d="M360 1H0V0H360V1Z" fill="var(--fill-0, #E7E8EB)" fillRule="evenodd" id="Border_2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}