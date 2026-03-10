import { useCart } from "../contexts/CartContext";
import DPrelogin from "../../imports/DPrelogin";
import DCredCardFast from "../../imports/DCredCardFast";
import DCredCardLong from "../../imports/DCredCardLong";
import { PRODUCTS } from "./ProductCard";
import { useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import svgPaths from "../../imports/svg-w578t1oyss";
import svgPathsPlus from "../../imports/svg-pnkyyxs7im";
import { FINANCING_ICON_POSITIONS } from "../constants/financing";
import { FINANCING_IMAGES, FINANCING_MASKS } from "../constants/financingImages";
import { ALL_MODALS_DATA } from "../constants/modals";
import { formatAmount } from "../utils/formatAmount";
import "../../styles/button-hovers.css";

interface DPreloginWrapperProps {
  onOpenFinancing: () => void;
  onOpenProductModal: (productId: string) => void;
  onOpenFinancingModal: (financingType: string) => void;
}

export default function DPreloginWrapper({
  onOpenFinancing,
  onOpenProductModal,
  onOpenFinancingModal,
}: DPreloginWrapperProps) {
  const { toggleItem, isInCart, openCart, items } = useCart();
  const [isReady, setIsReady] = useState(false);

  // Используем refs для хранения актуальных версий функций
  const openCartRef = useRef(openCart);
  const onOpenFinancingRef = useRef(onOpenFinancing);

  // Обновляем refs при изменении функций
  useEffect(() => {
    openCartRef.current = openCart;
  }, [openCart]);

  useEffect(() => {
    onOpenFinancingRef.current = onOpenFinancing;
  }, [onOpenFinancing]);

  // Создаем стабильные обертки для функций
  const stableOpenCart = useRef(() => {
    openCartRef.current();
  }).current;

  const stableOnOpenFinancing = useRef(() => {
    onOpenFinancingRef.current();
  }).current;

  // Проверяем, есть ли финансирование в корзине
  const financingItem = items.find((item) => item.id === "financing");
  const showCredCard = Boolean(financingItem);

  useEffect(() => {
    // Ждем пока DPrelogin отрендерится
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    try {
      // Управляем видимостью черной и новой карточек
      const blackCard = document.querySelector('[data-name="DesktopCredCard"]');
      const replacedCard = document.querySelector('[data-name="DesktopCredCard-replaced"]');

      if (showCredCard && financingItem) {
        // Скрываем черную карточку
        if (blackCard) {
          (blackCard as HTMLElement).style.display = "none";
        }

        // Если замененная карточка уже существует, удаляем её для пересоздания
        if (replacedCard) {
          replacedCard.remove();
        }

        if (blackCard) {
          // Создаем контейнер для новой карточки
          const container = document.createElement("div");
          container.setAttribute("data-name", "DesktopCredCard-replaced");
          container.classList.add("size-full");
          blackCard.after(container);

          // Показываем скелетон
          const skeleton = document.createElement("div");
          skeleton.className = "w-full animate-pulse";
          skeleton.style.height = "172px";
          skeleton.style.background = "var(--neutral-100, #F2F3F5)";
          skeleton.style.borderRadius = "32px";
          container.appendChild(skeleton);

          // Рендерим карточку финансирования скрыто
          const cardWrapper = document.createElement("div");
          cardWrapper.style.opacity = "0";
          cardWrapper.style.transition = "opacity 0.2s ease-in-out";

          const root = createRoot(cardWrapper);
          root.render(
            financingItem.financingType === "longfin" 
              ? <DCredCardLong 
                  onOpenCart={stableOpenCart}
                  onOpenFinancing={stableOnOpenFinancing}
                /> 
              : <DCredCardFast 
                  onOpenCart={stableOpenCart}
                  onOpenFinancing={stableOnOpenFinancing}
                />
          );

          // Ждем пока карточка отрендерится в DOM
          setTimeout(() => {
            // Обновляем заголовок и подзаголовок
            updateTitleAndSubtitle(
              cardWrapper,
              financingItem.selectedFinancingType || "Кредитная линия"
            );

            // Обновляем иконку
            updateFinancingIcon(
              cardWrapper,
              financingItem.selectedFinancingType || "Кредитная линия"
            );

            // Обновляем суммы и сроки
            updateFinancingData(
              cardWrapper,
              financingItem.loanAmount || "75000000",
              financingItem.loanTerm || "30"
            );

            // Делаем заголовок кликабельным
            makeFinancingTitleClickable(
              cardWrapper,
              financingItem.selectedFinancingType || "Кредитная линия"
            );

            // Убираем скелетон и показываем готовую карточку
            container.innerHTML = "";
            container.appendChild(cardWrapper);
            
            // Небольшая задержка для плавного появления
            requestAnimationFrame(() => {
              cardWrapper.style.opacity = "1";
            });
          }, 50);
        }
      } else {
        // Показываем черную карочку, скрываем замененную
        if (blackCard) {
          (blackCard as HTMLElement).style.display = "";
        }
        if (replacedCard) {
          replacedCard.remove();
        }
      }
    } catch (error) {
      console.error("Error in card replacement:", error);
    }
  }, [showCredCard, financingItem, isReady]); // Убрали openCart и onOpenFinancing из зависимостей

  // Обновляем заголовок и подзаголовок в замененной карточке
  const updateTitleAndSubtitle = (container: Element, financingType: string) => {
    const subtitle = ALL_MODALS_DATA[financingType]?.subtitle;
    if (!subtitle) return;

    // Находим wrap компонент
    const wrapDiv = container.querySelector('[data-name="wrap"]');
    if (!wrapDiv) return;

    const paragraphs = wrapDiv.querySelectorAll("p");
    if (paragraphs.length >= 2) {
      // Обновляем заголовок (первый параграф)
      paragraphs[0].textContent = financingType;
      // Обновляем подзаголовок (второй параграф)
      paragraphs[1].textContent = subtitle;
    }
  };

  // Обновляем иконку в замененной карточке
  const updateFinancingIcon = (container: Element, financingType: string) => {
    const posData = FINANCING_ICON_POSITIONS[financingType];
    const imgSrc = FINANCING_IMAGES[financingType];
    const maskSrc = FINANCING_MASKS[financingType];
    
    if (!posData || !imgSrc || !maskSrc) return;

    // Находим IconView компонент
    const iconView = container.querySelector('[data-name="IconView"]');
    if (!iconView) return;

    // Находим img элемент
    const img = iconView.querySelector('img');
    if (!img) return;

    // Обновляем src изображения
    img.src = imgSrc;

    // Обновляем позицию и размеры изображения
    img.style.left = posData.left;
    img.style.top = posData.top;
    
    if (posData.width) img.style.width = posData.width;
    if (posData.height) img.style.height = posData.height;
    
    if (posData.maxWidth) {
      img.style.maxWidth = posData.maxWidth;
    }
    
    // Добавляем object-fit для правильного отображения картинки
    img.style.objectFit = 'contain';

    // Обновляем маску
    const shapeContent = iconView.querySelector('[data-name="ShapeContent"]') as HTMLElement;
    if (shapeContent) {
      shapeContent.style.maskImage = `url('${maskSrc}')`;
    }
  };

  // Обновляем суммы и сроки в замененной карточке
  const updateFinancingData = (
    container: Element,
    loanAmount: string,
    loanTerm: string
  ) => {
    const allParagraphs = container.querySelectorAll("p");
    allParagraphs.forEach((el) => {
      const text = el.textContent?.trim();

      // Обновляем сумму кредита - ищем параграф с ₽
      if (text && text.includes("₽") && text.match(/^\d+\s.*₽$/)) {
        el.textContent = `${formatAmount(loanAmount)} ₽`;
      }

      // Обновляем срок кредита - ищем параграф с "ме"
      if (text && text.match(/^\d+\s*мес\.?$/)) {
        el.textContent = `${loanTerm} мес`;
      }
    });
  };

  // Делаем заголовок кликабельным с пунктирным подчеркиванием
  const makeFinancingTitleClickable = (
    container: Element,
    financingType: string
  ) => {
    const wrapDiv = container.querySelector('[data-name="wrap"]');
    if (!wrapDiv) return;

    const paragraphs = wrapDiv.querySelectorAll("p");
    if (paragraphs.length >= 1) {
      const titleElement = paragraphs[0] as HTMLElement;
      titleElement.classList.add("underline-financing-title");
      titleElement.style.cursor = "pointer";
      titleElement.addEventListener("click", () => {
        onOpenFinancingModal(financingType);
      });
    }
  };

  useEffect(() => {
    // Обработчики кликов на заголовки карточек продуктов
    const handleTitleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const titleElement = target.closest('.underline-product-title');

      if (titleElement) {
        // Нормализуем текст: заменяем неразрывные пробелы (код 160) на обычные пробелы (код 32)
        const titleText = titleElement.textContent?.trim().replace(/\u00A0/g, ' ');

        const titleToProductName: Record<string, string> = {
          "Торговый эквайринг": "Торговый эквайринг",
          "Зарплатный проект": "Зарплатный проект",
          "Бизнес-карты": "Бизнес-карты",
          "ВЭД": "ВЭД",
          "РКО для бизнеса": "РКО для бизнеса",
          "Депозиты для бизнеса": "Депозиты для бизнеса",
        };

        if (titleText && titleToProductName[titleText]) {
          event.preventDefault();
          event.stopPropagation();
          onOpenProductModal(titleToProductName[titleText]);
        }
      }
    };

    document.addEventListener("click", handleTitleClick);
    return () => document.removeEventListener("click", handleTitleClick);
  }, [onOpenProductModal]);

  return (
    <DPrelogin 
      onOpenFinancing={onOpenFinancing} 
      toggleItem={toggleItem}
      isInCart={isInCart}
      openCart={openCart}
    />
  );
}

function updateButtonState(button: HTMLElement, inCart: boolean) {
  if (inCart) {
    // Зеленая кнопка "В корзине"
    button.className =
      "bg-[#0cc44d] content-stretch flex gap-[4px] items-center justify-center min-h-[48px] w-[158px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#0bb043] transition-colors";
    button.setAttribute("data-name", "Button_1");

    const svg = button.querySelector("svg");
    if (svg) {
      // Находим все path элементы в SVG
      const paths = svg.querySelectorAll("path");
      paths.forEach((path) => {
        path.setAttribute("d", svgPaths.p28d167f0);
        path.setAttribute("fill", "var(--fill-0, white)");
        path.setAttribute("fill-opacity", "0.94");
      });
    }

    const textElement = button.querySelector("p");
    if (textElement) {
      textElement.textContent = "В корзине";
    }
  } else {
    // Красная кнопка "Добавить"
    button.className =
      "bg-[#ef3124] content-stretch flex gap-[4px] items-center justify-center min-h-[48px] w-[158px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#d62a1f] transition-colors";
    button.setAttribute("data-name", "[D] Button");

    const svg = button.querySelector("svg");
    if (svg) {
      // Находим все path элементы в SVG
      const paths = svg.querySelectorAll("path");
      paths.forEach((path) => {
        path.setAttribute("d", svgPathsPlus.p25f6ce40);
        path.setAttribute("fill", "var(--fill-0, white)");
        path.setAttribute("fill-opacity", "0.94");
      });
    }

    const textElement = button.querySelector("p");
    if (textElement) {
      textElement.textContent = "Добавить";
    }
  }
}