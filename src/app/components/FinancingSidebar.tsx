import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-tubfnbhlci";
import { useState, useRef, useEffect } from "react";
import CustomSlider from "./CustomSlider";
import { useCart } from "../contexts/CartContext";
import { PRODUCTS } from "./ProductCard";
import DProductButton from "./DProductButton";
import StatusBadge from "./StatusBadge";
import {
  FINANCING_TYPES,
  FINANCING_CONFIG,
  type FinancingCardKey,
} from "../constants/financing";
import { formatAmount } from "../utils/formatAmount";

interface FinancingSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Cross({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 size-[48px] cursor-pointer"
      data-name="Cross"
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[40px] left-1/2 rounded-[50px] size-[48px] top-1/2"
        data-name="BG"
      />
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2"
        data-name="cross-medium"
      >
        <div
          className="absolute inset-[12.5%]"
          data-name="shape"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 18 18.0001"
          >
            <path
              d={svgPaths.p10274900}
              fill="var(--fill-0, #212124)"
              id="shape"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

function Border() {
  return (
    <div
      className="absolute bottom-0 h-px left-0 right-0"
      data-name="Border"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 500 1"
      >
        <g id="Border">
          <path
            clipRule="evenodd"
            d="M500 1H0V0H500V1Z"
            fill="var(--fill-0, #E7E8EB)"
            fillRule="evenodd"
            id="Border_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Border1() {
  return (
    <div
      className="absolute h-px left-0 right-0 top-0"
      data-name="Border"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 500 1"
      >
        <g id="Border">
          <path
            clipRule="evenodd"
            d="M500 1H0V0H500V1Z"
            fill="var(--fill-0, #E7E8EC)"
            fillRule="evenodd"
            id="Border_2"
          />
        </g>
      </svg>
    </div>
  );
}

export default function FinancingSidebar({
  isOpen,
  onClose,
}: FinancingSidebarProps) {
  const { addItem, updateItem, items } = useCart();
  const [selectedCard, setSelectedCard] = useState<
    "fastFin" | "longFin"
  >("fastFin");
  const [selectedType, setSelectedType] = useState<string>(
    "Кредитная линия",
  );
  const [loanAmount, setLoanAmount] =
    useState<string>(FINANCING_CONFIG.fastFin.defaultAmount.toString());
  const [loanTerm, setLoanTerm] = useState<string>(FINANCING_CONFIG.fastFin.defaultTerm.toString());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fastFinCardRef = useRef<HTMLButtonElement>(null);
  const longFinCardRef = useRef<HTMLButtonElement>(null);

  // Проверяем, есть ли финансирование в корзине (режим редактирования)
  const financingInCart = items.find(
    (item) => item.id === "financing",
  );
  const isEditMode = Boolean(financingInCart);

  // Блокировка скролла страницы когда сайдбар открыт
  useEffect(() => {
    if (isOpen) {
      // Вычисляем ширину скроллбара
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Блокируем скролл и компенсируем смещение
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // При открытии загружаем данные из корзины, если они есть
  useEffect(() => {
    if (isOpen && financingInCart) {
      if (financingInCart.selectedFinancingType) {
        setSelectedType(financingInCart.selectedFinancingType);
      }
      if (financingInCart.loanAmount) {
        setLoanAmount(financingInCart.loanAmount);
      }
      if (financingInCart.loanTerm) {
        setLoanTerm(financingInCart.loanTerm);
      }
      if (financingInCart.financingType) {
        setSelectedCard(
          financingInCart.financingType === "fastfin"
            ? "fastFin"
            : "longFin",
        );
      }
    }
  }, [isOpen, financingInCart]);

  // Скролл к выбранной карточке
  const scrollToCard = (cardType: "fastFin" | "longFin") => {
    if (!scrollContainerRef.current) return;

    const cardRef =
      cardType === "fastFin" ? fastFinCardRef : longFinCardRef;
    if (!cardRef.current) return;

    const container = scrollContainerRef.current;
    const card = cardRef.current;
    const cardLeft = card.offsetLeft;

    container.scrollTo({
      left: cardLeft,
      behavior: "smooth",
    });
  };

  const handleCardClick = (cardType: "fastFin" | "longFin") => {
    setSelectedCard(cardType);
    scrollToCard(cardType);
  };

  // Автоскролл при первом открытии
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => scrollToCard("fastFin"), 100);
    }
  }, [isOpen]);

  // Автокоррекция значений при переключении карточек
  useEffect(() => {
    const config = FINANCING_CONFIG[selectedCard];
    const currentMaxAmount = config.maxAmount;
    const currentMinAmount = config.minAmount;
    const currentMaxTerm = config.maxTerm;

    // Если текущая сумма превышает новый максимум, устанавливаем максимум
    if (parseInt(loanAmount) > currentMaxAmount) {
      setLoanAmount(currentMaxAmount.toString());
    }

    // Если текущая сумма меньше нового минимума, устанавливаем минимум
    if (parseInt(loanAmount) < currentMinAmount) {
      setLoanAmount(currentMinAmount.toString());
    }

    // Если текущий срок превышает новый максимум, устанавливаем максимум
    if (parseInt(loanTerm) > currentMaxTerm) {
      setLoanTerm(currentMaxTerm.toString());
    }
  }, [selectedCard]);

  const handleAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const numbers = e.target.value.replace(/\D/g, "");
    setLoanAmount(numbers);
  };

  const handleTermChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const numbers = e.target.value.replace(/\\D/g, "");
    setLoanTerm(numbers);
  };

  // Минимальные и максимальные значения в зависимости от выбранной карточки
  const config = FINANCING_CONFIG[selectedCard];
  const minAmount = config.minAmount;
  const maxAmount = config.maxAmount;
  const minTerm = config.minTerm;
  const maxTerm = config.maxTerm;
  const minAmountLabel = config.minAmountLabel;
  const maxAmountLabel = config.maxAmountLabel;
  const minTermLabel = config.minTermLabel;
  const maxTermLabel = config.maxTermLabel;

  const handleAddToCart = () => {
    const financingProduct = PRODUCTS.find(
      (p) => p.id === "financing",
    );
    if (financingProduct) {
      const itemToAdd = {
        ...financingProduct,
        loanAmount,
        loanTerm,
        financingType:
          selectedCard === "fastFin" ? "fastfin" : "longfin",
        selectedFinancingType: selectedType, // Добавляем выбранный тип финансирования
      };

      // Сохраняем выбранный тип финансирования в localStorage
      localStorage.setItem("lastFinancingType", selectedType);

      if (isEditMode) {
        updateItem(itemToAdd);
      } else {
        addItem(itemToAdd);
      }
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
            onClick={onClose}
            className="fixed inset-0 bg-[rgba(19,19,19,0.5)] z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="fixed right-0 top-0 h-full w-[500px] bg-white z-[101] flex flex-col"
            data-name="SidePanel"
          >
            {/* Header */}
            <div
              className="bg-white relative shrink-0 w-full"
              data-name="Header"
            >
              <div className="content-stretch flex gap-[16px] items-start pb-[16px] pl-[40px] pr-[28px] pt-[36px] relative w-full">
                <div
                  className="flex-[1_0_0] min-h-px min-w-px relative"
                  data-name="Title"
                >
                  <div className="content-stretch flex flex-col gap-[8px] items-start pr-[48px] relative w-full">
                    <p className="font-bold leading-[36px] min-w-full not-italic relative shrink-0 text-[30px] text-[rgba(3,3,6,0.88)] w-[min-content]">
                      {isEditMode
                        ? "Изменить финансирование"
                        : "Получите финансирование"}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex items-start left-[424px] top-[28px]"
                  data-name="Cross"
                >
                  <Cross onClick={onClose} />
                </div>
                <Border />
              </div>
            </div>

            {/* Content */}
            <div
              className="flex-[1_0_0] min-h-px min-w-px relative w-full overflow-y-auto ios-scrollbar"
              data-name="[Custom Content Part]"
            >
              <div className="content-stretch flex flex-col items-start px-[40px] relative size-full">
                <div
                  className="bg-white content-stretch flex flex-col items-start overflow-clip py-[16px] relative shrink-0 w-full"
                  data-name="SwapMe"
                >
                  <div
                    className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
                    data-name="!!!SwapMe"
                  >
                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content]">
                      Выберите необходимый вам продукт,
                      <br aria-hidden="true" />
                      подберите сумму и сроки
                    </p>

                    {/* Cards Swipe */}
                    <div
                      className="h-[168px] relative shrink-0 w-full"
                      data-name="swipe"
                    >
                      <div
                        ref={scrollContainerRef}
                        className="absolute content-stretch flex gap-[8px] items-start left-0 top-0 w-full overflow-x-auto scrollbar-hide"
                        data-name="SelectForm"
                        style={{
                          scrollSnapType: "x mandatory",
                        }}
                      >
                        {/* Карточка "Вам одобрен кредитный лимит" */}
                        <button
                          ref={fastFinCardRef}
                          onClick={() =>
                            handleCardClick("fastFin")
                          }
                          className="bg-white content-stretch cursor-pointer flex flex-col gap-[16px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[270px] h-[168px]"
                          style={{ scrollSnapAlign: "start" }}
                          data-name=".M_FormProductCard"
                        >
                          <div
                            aria-hidden="true"
                            className={`absolute inset-0 pointer-events-none rounded-[16px] transition-all`}
                            style={{
                              boxShadow: selectedCard === "fastFin" ? "inset 0 0 0 1px #212124" : "inset 0 0 0 1px #d5d6dc"
                            }}
                          />
                          <div
                            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                            data-name="Headline+parameters"
                          >
                            <div
                              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                              data-name=".M_Head"
                            >
                              <StatusBadge variant="fastFinMuted" />
                              <div
                                className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                                data-name="M_Main"
                              >
                                <div
                                  className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative"
                                  data-name="Headline.Typography"
                                >
                                  <div className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] tracking-[-0.32px]">
                                    <p className="mb-0 text-[16px] not-italic font-semibold leading-[20px] tracking-[-0.32px] text-left h-[40px]">
                                      {
                                        FINANCING_CONFIG.fastFin
                                          .title
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                              data-name=".M_ParameterSlot"
                            >
                              <div
                                className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
                                data-name="Parameters"
                              >
                                <div
                                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                                  data-name="Parameter 1"
                                >
                                  <div
                                    className="content-stretch flex gap-[4px] items-center relative shrink-0"
                                    data-name=".Parameter"
                                  >
                                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,4,19,0.55)] whitespace-nowrap">
                                      Сумма лимита
                                    </p>
                                  </div>
                                  <div
                                    className="content-stretch flex items-center relative shrink-0"
                                    data-name=".Value"
                                  >
                                    <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                                      до 200 млн ₽
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                                  data-name="Parameter 3"
                                >
                                  <div
                                    className="content-stretch flex gap-[4px] items-center relative shrink-0"
                                    data-name=".Parameter"
                                  >
                                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,4,19,0.55)] whitespace-nowrap">
                                      Срок
                                    </p>
                                  </div>
                                  <div
                                    className="content-stretch flex items-center justify-center relative shrink-0"
                                    data-name=".Value"
                                  >
                                    <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                                      до 36 мес
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>

                        {/* Карточка "На общих условиях" */}
                        <button
                          ref={longFinCardRef}
                          onClick={() =>
                            handleCardClick("longFin")
                          }
                          className="bg-white content-stretch cursor-pointer flex flex-col gap-[16px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[270px] h-[168px]"
                          style={{ scrollSnapAlign: "start" }}
                          data-name=".M_FormProductCard"
                        >
                          <div
                            aria-hidden="true"
                            className={`absolute inset-0 pointer-events-none rounded-[16px] transition-all`}
                            style={{
                              boxShadow: selectedCard === "longFin" ? "inset 0 0 0 1px #212124" : "inset 0 0 0 1px #d5d6dc"
                            }}
                          />
                          <div
                            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                            data-name="Headline+parameters"
                          >
                            <div
                              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                              data-name=".M_Head"
                            >
                              <StatusBadge variant="longFinMuted" />
                              <div
                                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                                data-name="M_Main"
                              >
                                <div
                                  className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative"
                                  data-name="Headline.Typography"
                                >
                                  <div className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] text-left tracking-[-0.32px]">
                                    <p className="mb-0 text-[16px] not-italic font-semibold leading-[20px] tracking-[-0.32px] text-left h-[40px]">
                                      На общих условиях
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                              data-name=".M_ParameterSlot"
                            >
                              <div
                                className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
                                data-name="Parameters"
                              >
                                <div
                                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                                  data-name="Parameter 1"
                                >
                                  <div
                                    className="content-stretch flex gap-[4px] items-center relative shrink-0"
                                    data-name=".Parameter"
                                  >
                                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,4,19,0.55)] text-left whitespace-nowrap">
                                      Сумма лимита
                                    </p>
                                  </div>
                                  <div
                                    className="content-stretch flex items-center relative shrink-0"
                                    data-name=".Value"
                                  >
                                    <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] text-left whitespace-nowrap">
                                      до 99 млрд ₽
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                                  data-name="Parameter 3"
                                >
                                  <div
                                    className="content-stretch flex gap-[4px] items-center relative shrink-0"
                                    data-name=".Parameter"
                                  >
                                    <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,4,19,0.55)] text-left whitespace-nowrap">
                                      Срок
                                    </p>
                                  </div>
                                  <div
                                    className="content-stretch flex items-center justify-center relative shrink-0"
                                    data-name=".Value"
                                  >
                                    <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] text-left whitespace-nowrap">
                                      до 120 мес
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Выбор типа финансирования */}
                    <div
                      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
                      data-name="Content"
                    >
                      <div
                        className="bg-white content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
                        data-name="SelectForm / 02-SelectOne"
                      >
                        <div
                          className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                          data-name="head"
                        >
                          <div
                            className="content-stretch flex items-center justify-center relative shrink-0"
                            data-name="Headline.Typography"
                          >
                            <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap font-bold">
                              Выберите тип финансирования
                            </p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                          data-name="TagGroupLight"
                        >
                          <div
                            className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full"
                            data-name="Group"
                          >
                            {FINANCING_TYPES[selectedCard].map(
                              (type) => {
                                const isSelected =
                                  selectedType === type;
                                return (
                                  <button
                                    key={type}
                                    onClick={() =>
                                      setSelectedType(type)
                                    }
                                    className={`content-stretch flex gap-[2px] items-center justify-center min-h-[40px] min-w-[64px] overflow-clip px-[12px] py-[4px] relative rounded-[999px] shrink-0 transition-all cursor-pointer ${
                                      isSelected
                                        ? "bg-[#212124]"
                                        : "backdrop-blur-[40px] bg-[rgba(15,25,55,0.1)] hover:bg-[rgba(15,25,55,0.15)]"
                                    }`}
                                  >
                                    <div
                                      className="content-stretch flex flex-col items-center px-[4px] relative shrink-0"
                                      data-name="Text"
                                    >
                                      <div
                                        className={`flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${
                                          isSelected
                                            ? "text-[rgba(255,255,255,0.94)]"
                                            : "text-[rgba(3,3,6,0.88)]"
                                        }`}
                                      >
                                        <p className="leading-[20px]">
                                          {type}
                                        </p>
                                      </div>
                                    </div>
                                  </button>
                                );
                              },
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Выбор условий */}
                      <div
                        className="bg-white content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                        data-name="SelectForm / 03-SelectTwo"
                      >
                        <div
                          className="content-stretch flex items-center justify-center relative shrink-0"
                          data-name="Headline.Typography"
                        >
                          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap"><span className="font-bold">Выберите условия</span></p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                          {/* Сумма кредита */}
                          <div
                            className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full"
                            data-name="SliderInput"
                          >
                            <div
                              className="bg-[rgba(38,55,88,0.06)] content-stretch flex items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full"
                              data-name="Field"
                            >
                              <div
                                aria-hidden="true"
                                className="absolute border-[#babbc2] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]"
                              />
                              <div
                                className="flex-[1_0_0] min-h-px min-w-px relative"
                                data-name="Content"
                              >
                                <div className="flex flex-col justify-center size-full">
                                  <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative w-full">
                                    <div
                                      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[240px]"
                                      data-name=".Label"
                                    >
                                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-ellipsis whitespace-nowrap">
                                        <p className="leading-[20px] overflow-hidden">
                                          Сумма кредита
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="content-stretch flex flex-col items-start overflow-visible relative shrink-0 w-[240px]"
                                      data-name=".Value"
                                    >
                                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(3,3,6,0.88)] whitespace-nowrap overflow-visible">
                                        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] text-[16px] overflow-visible">
                                          <input
                                            type="text"
                                            value={formatAmount(
                                              loanAmount,
                                              true
                                            )}
                                            onChange={
                                              handleAmountChange
                                            }
                                            className="bg-transparent border-none outline-none"
                                            style={{
                                              width: `${Math.max(60, formatAmount(loanAmount, true).length * 10)}px`,
                                              paddingRight: `0px`,
                                            }}
                                            placeholder="0"
                                          />
                                          <span className="ml-[-12px]">₽</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <CustomSlider
                              value={
                                parseInt(loanAmount) || 1000000
                              }
                              min={minAmount}
                              max={maxAmount}
                              onChange={(value) =>
                                setLoanAmount(value.toString())
                              }
                              minLabel={minAmountLabel}
                              maxLabel={maxAmountLabel}
                            />
                          </div>

                          {/* Срок кредита */}
                          <div
                            className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full"
                            data-name="SliderInput"
                          >
                            <div
                              className="bg-[rgba(38,55,88,0.06)] content-stretch flex items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full"
                              data-name="Field"
                            >
                              <div
                                aria-hidden="true"
                                className="absolute border-[#babbc2] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]"
                              />
                              <div
                                className="flex-[1_0_0] min-h-px min-w-px relative"
                                data-name="Content"
                              >
                                <div className="flex flex-col justify-center size-full">
                                  <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative w-full">
                                    <div
                                      className="content-stretch flex flex-col h-[20px] items-start relative shrink-0 w-[240px]"
                                      data-name=".Label"
                                    >
                                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-ellipsis whitespace-nowrap">
                                        <p className="leading-[20px] overflow-hidden">
                                          Срок кредита
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="content-stretch flex flex-col items-start overflow-visible relative shrink-0 w-[240px]"
                                      data-name=".Value"
                                    >
                                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(3,3,6,0.88)] whitespace-nowrap overflow-visible">
                                        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] text-[16px] flex items-baseline overflow-visible">
                                          <input
                                            type="text"
                                            value={loanTerm}
                                            onChange={
                                              handleTermChange
                                            }
                                            className="bg-transparent border-none outline-none"
                                            style={{
                                              width: `${Math.max(30, loanTerm.length * 10)}px`,
                                              paddingRight: `0px`,
                                            }}
                                            placeholder="0"
                                          />
                                          <span className="ml-[-8px]">мес</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <CustomSlider
                              value={parseInt(loanTerm) || 1}
                              min={minTerm}
                              max={maxTerm}
                              onChange={(value) =>
                                setLoanTerm(value.toString())
                              }
                              minLabel={minTermLabel}
                              maxLabel={maxTermLabel}
                            />
                          </div>

                          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,4,19,0.55)] w-full">
                            Расчёты являются предварительными.
                            Предложение не является публичной
                            офертой
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="bg-white content-stretch flex gap-[12px] items-end justify-end pb-[40px] pt-[24px] px-[40px] relative shrink-0 w-[500px]"
              data-name="Footer"
            >
              <button
                onClick={onClose}
                className="backdrop-blur-[40px] bg-[rgba(15,25,55,0.1)] flex-[1_0_0] min-h-[48px] min-w-[104px] relative rounded-[8px] cursor-pointer hover:bg-[rgba(15,25,55,0.15)] transition-colors"
                data-name="Button_1"
              >
                <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
                    <div
                      className="content-stretch flex flex-col items-center px-[4px] relative shrink-0"
                      data-name="Text"
                    >
                      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                        <p className="leading-[24px]">
                          Отменить
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <DProductButton
                variant={isEditMode ? "edit" : "add"}
                onClick={handleAddToCart}
                className="flex-[1_0_0]"
                hideIcon={true}
                overrideColors={isEditMode ? {
                  bg: 'bg-[#ef3124]',
                  hover: 'hover:bg-[#d82a1f]',
                  textColor: 'text-[rgba(255,255,255,0.94)]'
                } : undefined}
              />
              <Border1 />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}