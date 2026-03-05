import { useCart } from "../contexts/CartContext";
import DPrelogin from "../../imports/DPrelogin";
import Wip6DCredCardFast from "../../imports/Wip6DCredCard-16-10914";
import Wip6DCredCardVerified from "../../imports/Wip6DCredCard-16-11527";
import { PRODUCTS } from "./ProductCard";
import { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-w578t1oyss";
import svgPathsPlus from "../../imports/svg-pnkyyxs7im";
import { FINANCING_TITLES, FINANCING_SUBTITLES, FINANCING_ICON_POSITIONS } from "../constants/financing";
import { FINANCING_IMAGES, FINANCING_MASKS } from "../constants/financingImages";
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
      const blackCard = document.querySelector('[data-name="wip6 / D_CredCard"]');
      const replacedCard = document.querySelector('[data-name="wip6 / D_CredCard-replaced"]');

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
          container.setAttribute("data-name", "wip6 / D_CredCard-replaced");
          container.classList.add("size-full");
          blackCard.after(container);

          // Показываем скелетон
          const skeleton = document.createElement("div");
          skeleton.className = "w-full animate-pulse";
          skeleton.style.height = "172px";
          skeleton.style.background = "var(--neutral-100, #F2F3F5)";
          skeleton.style.borderRadius = "32px";
          container.appendChild(skeleton);

          // Рендерим карточку финансирования
          import("react-dom/client")
            .then(({ createRoot }) => {
              // Удаляем скелетон
              container.innerHTML = "";

              const root = createRoot(container);
              root.render(
                financingItem.financingType === "longfin" 
                  ? <Wip6DCredCardVerified /> 
                  : <Wip6DCredCardFast />
              );

              // Ждем пока карточка отрендерится в DOM
              setTimeout(() => {
                // Обновляем заголовок и подзаголовок
                updateTitleAndSubtitle(
                  container,
                  financingItem.selectedFinancingType || "Кредитная линия"
                );

                // Обновляем иконку
                updateFinancingIcon(
                  container,
                  financingItem.selectedFinancingType || "Кредитная линия"
                );

                // Обновляем суммы и сроки
                updateFinancingData(
                  container,
                  financingItem.loanAmount || "75000000",
                  financingItem.loanTerm || "30"
                );

                // Делаем заголовок кликабельным
                makeFinancingTitleClickable(
                  container,
                  financingItem.selectedFinancingType || "Кредитная линия"
                );
              }, 0);
            })
            .catch((err) => {
              console.error("Failed to render financing card:", err);
            });
        }
      } else {
        // Показываем черную карточку, скрываем замененную
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
  }, [showCredCard, financingItem, isReady]);

  // Обновляем заголовок и подзаголовок в замененной карточке
  const updateTitleAndSubtitle = (container: Element, financingType: string) => {
    const subtitle = FINANCING_SUBTITLES[financingType];
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

      // Обновляем срок кредита - ищем параграф с "мес"
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
    // Обновляем кнопки в карточках продуктов
    const updateButtons = () => {
      const cardsContainer = document.querySelector('[data-name="cards"]');

      if (cardsContainer) {
        const allCards = cardsContainer.querySelectorAll('[data-name="wip6 / ProdCard"]');
        const productMapping = ["acquiring", "salary", "cards", "ved", "rko", "deposits"];

        allCards.forEach((card, index) => {
          const productId = productMapping[index];
          const button =
            card.querySelector('[data-name="[D] Button"]') ||
            card.querySelector('[data-name="Button_1"]');

          if (button && productId) {
            const inCart = isInCart(productId);
            updateButtonState(button as HTMLElement, inCart);
          }
        });
      }

      // Добавляем CSS классы для кнопок в замененной карточке финансирования
      const replacedCard = document.querySelector('[data-name="wip6 / D_CredCard-replaced"]');

      if (replacedCard) {
        const buttons = replacedCard.querySelectorAll('[data-name="[D] CustomButton"]');
        buttons.forEach((button) => {
          const buttonEl = button as HTMLElement;
          const buttonText = buttonEl.textContent?.trim();

          if (buttonText === "Изменить") {
            buttonEl.classList.add("btn-edit");
          } else if (buttonText === "В корзине") {
            buttonEl.classList.add("btn-in-cart");
          }
        });
      }
    };

    updateButtons();
    
    // Дополнительный вызов с задержкой для обновления после рендеринга
    const timeoutId = setTimeout(updateButtons, 100);
    
    return () => clearTimeout(timeoutId);
  }, [items, isInCart]);

  useEffect(() => {
    // Обработчики кликов на кнопки
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const buttonAdd = target.closest('[data-name="[D] Button"]');
      const buttonInCart = target.closest('[data-name="Button_1"]');
      const buttonCustom = target.closest('[data-name="[D] CustomButton"]');

      // Обработка кастомных кнопок в замененной карточке финансирования
      if (buttonCustom) {
        const buttonText = buttonCustom.textContent?.trim();

        if (buttonCustom.closest('[data-name="wip6 / D_CredCard-replaced"]')) {
          if (buttonText === "В корзине") {
            event.preventDefault();
            event.stopPropagation();
            openCart();
            return;
          }

          if (buttonText === "Изменить") {
            event.preventDefault();
            event.stopPropagation();
            onOpenFinancing();
            return;
          }
        }
      }

      // Обработка кнопок в черной карточке и карточках продуктов
      if (buttonInCart) {
        const buttonText = buttonInCart.textContent?.trim();

        // Кнопка "Добавить" в черной карточке финансирования
        if (
          buttonText === "Добавить" &&
          buttonInCart.closest('[data-name="wip6 / D_CredCard"]')
        ) {
          event.preventDefault();
          event.stopPropagation();
          onOpenFinancing();
          return;
        }

        // Кнопка "В корзине" - открываем корзину
        if (buttonText === "В корзине") {
          openCart();
          return;
        }

        // Кнопка "Изменить"
        if (buttonText === "Изменить") {
          event.preventDefault();
          event.stopPropagation();
          onOpenFinancing();
          return;
        }
      }

      // Обработка красной кнопки "Добавить" в карточках продуктов
      if (buttonAdd) {
        const buttonText = buttonAdd.textContent?.trim();

        if (buttonText === "Добавить") {
          const card = buttonAdd.closest('[data-name="wip6 / ProdCard"]');

          if (card) {
            const cardsContainer = document.querySelector('[data-name="cards"]');
            if (cardsContainer) {
              const allCards = cardsContainer.querySelectorAll('[data-name="wip6 / ProdCard"]');
              const cardIndex = Array.from(allCards).indexOf(card);

              const productMapping = ["acquiring", "salary", "cards", "ved", "rko", "deposits"];
              const productId = productMapping[cardIndex];

              if (productId) {
                const product = PRODUCTS.find((p) => p.id === productId);
                if (product) {
                  toggleItem({ ...product, productId });
                }
              }
            }
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [toggleItem, openCart, onOpenFinancing]);

  useEffect(() => {
    // Обработчики кликов на заголовки карточек продуктов
    const handleTitleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const titleElement = target.closest('p[class*="underline"]');

      if (titleElement) {
        const titleText = titleElement.textContent?.trim();

        const titleToProductId: Record<string, string> = {
          "Торговый эквайринг": "Торговый эквайринг",
          "Зарплатный проект": "Зарплатный проект",
          "Бизнес-карты": "Бизнес-карты",
          "ВЭД": "ВЭД",
          "РКО для бизнеса": "РКО для бизнеса",
          "Депозиты для бизнеса": "Депозиты для бизнеса",
        };

        if (titleText && titleToProductId[titleText]) {
          event.preventDefault();
          event.stopPropagation();
          onOpenProductModal(titleToProductId[titleText]);
        }
      }
    };

    document.addEventListener("click", handleTitleClick);
    return () => document.removeEventListener("click", handleTitleClick);
  }, [onOpenProductModal]);

  return <DPrelogin />;
}

function updateButtonState(button: HTMLElement, inCart: boolean) {
  if (inCart) {
    // Зеленая кнопка "В корзине"
    button.className =
      "bg-[#0cc44d] content-stretch flex gap-[4px] items-center justify-center min-h-[48px] w-[158px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#0bb043] transition-colors";
    button.setAttribute("data-name", "Button_1");

    const svg = button.querySelector("svg");
    if (svg) {
      const path = svg.querySelector("path");
      if (path) {
        path.setAttribute("d", svgPaths.p28d167f0);
        path.setAttribute("fill", "var(--fill-0, white)");
        path.setAttribute("fill-opacity", "0.94");
      }
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
      const path = svg.querySelector("path");
      if (path) {
        path.setAttribute("d", svgPathsPlus.p25f6ce40);
        path.setAttribute("fill", "var(--fill-0, white)");
        path.setAttribute("fill-opacity", "0.94");
      }
    }

    const textElement = button.querySelector("p");
    if (textElement) {
      textElement.textContent = "Добавить";
    }
  }
}