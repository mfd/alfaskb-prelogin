import { useState, useEffect } from 'react';
import MPreloginBase from '../../imports/MPrelogin';
import MCredCardFast from '../../imports/MCredCardFast';
import MCredCardLong from '../../imports/MCredCardLong';
import { useCart } from '../contexts/CartContext';
import { PRODUCTS } from './ProductCard';
import { FINANCING_ICON_POSITIONS } from '../constants/financing';
import { FINANCING_IMAGES, FINANCING_MASKS } from '../constants/financingImages';
import { ALL_MODALS_DATA } from '../constants/modals';
import { formatAmount } from '../utils/formatAmount';
import { createRoot } from 'react-dom/client';

interface MPreloginWrapperProps {
  onOpenFinancing: () => void;
  onOpenProductModal: (productId: string) => void;
  onOpenFinancingModal: (financingType: string) => void;
  onOpenCart?: () => void;
}

export default function MPreloginWrapper({
  onOpenFinancing,
  onOpenProductModal,
  onOpenFinancingModal,
  onOpenCart,
}: MPreloginWrapperProps) {
  const { toggleItem, isInCart, items } = useCart();
  const [mounted, setMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Проверяем, есть ли финансирование в корзине
  const financingItem = items.find((item) => item.id === "financing");
  const showCredCard = Boolean(financingItem);

  useEffect(() => {
    setMounted(true);

    // Скрываем оригинальную иконку корзины из Figma
    const hideOriginalBasket = () => {
      const fixedFooter = document.querySelector('[data-name="fixed_footer"]') as HTMLElement;
      if (fixedFooter) {
        fixedFooter.style.display = 'none';
      }
    };

    // Добавляем подчеркивание к заголовкам продуктов
    const addUnderlineToTitles = () => {
      const cards = Array.from(document.querySelectorAll('[data-name="CardPure"]'));
      cards.forEach(card => {
        const titleElement = card.querySelector('[data-name="Text Content"] p:first-child');
        if (titleElement) {
          titleElement.classList.add('underline', 'cursor-pointer');
        }
      });
    };

    // Убираем ограничение ширины 360px из импортированных компонентов
    const removeWidthConstraints = () => {
      // Находим все элементы с фиксированной шириной 360px (кроме body - обрабатываем отдельно)
      const elements = document.querySelectorAll('[data-name="MobileHeader"], [data-name="Footer"], [data-name="wip6 / M_CredCard"]');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        element.style.width = '100%';
        element.style.maxWidth = '600px';
      });
      
      // Отдельно обрабатываем body - только если это мобильный элемент (с w-[360px])
      const bodyElements = document.querySelectorAll('[data-name="body"]');
      bodyElements.forEach((el) => {
        const element = el as HTMLElement;
        // Проверяем, что это элемент из мобильной версии (имеет w-[360px] в classList)
        if (element.classList.contains('w-[360px]')) {
          element.style.width = '100%';
          element.style.maxWidth = '600px';
        }
      });
    };

    // Даем время на рендер
    setTimeout(() => {
      hideOriginalBasket();
      addUnderlineToTitles();
      removeWidthConstraints();
      setIsReady(true);
    }, 100);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Обработчик кликов для кнопок "Добавить" на карточках продуктов
    const handleProductClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('[data-name="[M] CustomButton"]');
      
      if (!button) return;

      // Определяем, какой продукт был кликнут
      const productCard = button.closest('[data-name="CardPure"]');
      if (!productCard) return;

      // Ищем заголовок продукта
      const titleElement = productCard.querySelector('[data-name="Text Content"] p:first-child');
      if (!titleElement?.textContent) return;

      // Нормализуем текст: заменяем все пробельные символы (включая переносы строк) на один пробел
      const title = titleElement.textContent.trim().replace(/\s+/g, ' ');
      
      // Находим продукт по заголовку с нормализацией обеих строк для сравнения
      const product = PRODUCTS.find(p => {
        const normalizedProductTitle = p.title.trim().replace(/\s+/g, ' ');
        const normalizedTitle = title.trim().replace(/\s+/g, ' ');
        return normalizedProductTitle === normalizedTitle;
      });
      if (!product) {
        console.warn('Product not found:', JSON.stringify(title), 'Available products:', PRODUCTS.map(p => JSON.stringify(p.title)));
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      // Если продукт уже в корзине, открываем корзину
      if (isInCart(product.id)) {
        onOpenCart?.();
      } else {
        // Иначе добавляем продукт в корзину
        toggleItem({
          id: product.id,
          title: product.title,
          icon: product.icon,
          productId: product.id,
        });
      }
    };

    // Обработчик для кнопки "Добавить" в карточке финансирования
    const handleFinancingClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('[data-name="Button_1"]');
      
      if (!button) return;

      // Проверяем, что это кнопка из черной карточки финансирования
      const cardMain = button.closest('[data-name="CardMain"]');
      if (!cardMain) return;

      e.preventDefault();
      e.stopPropagation();

      // Открываем сайдбар финансирования через пропс
      onOpenFinancing();
    };

    // Обработчик для кликов на плашки с финансированием (для открытия BottomSheet)
    const handleFinancingCardClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Проверяем, кликнули ли мы на плашку финансирования
      const financingCard = target.closest('[data-name="selectFlow"]');
      if (!financingCard) return;

      // Определяем, на какую плашку кликнули по тексту статуса
      const statusElement = target.closest('[data-name="Status"]');
      if (!statusElement) return;

      const statusText = statusElement.textContent?.toLowerCase().replace(/\s+/g, ' ').trim();

      if (statusText?.includes('быстро и без проверок')) {
        e.preventDefault();
        e.stopPropagation();
        // Открываем BottomSheet для быстрого финансирования (Кредитная линия)
        onOpenFinancingModal('Кредитная линия');
      } else if (statusText?.includes('потребуются проверки')) {
        e.preventDefault();
        e.stopPropagation();
        // Открываем BottomSheet для финансирования с проверками (Банковская гарантия)
        onOpenFinancingModal('Банковская гарантия');
      }
    };

    // Обработчик кликов на заголовки продуктов (для открытия модалок)
    const handleTitleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Проверяем, кликнули ли мы на заголовок продукта
      if (target.classList.contains('underline') && target.tagName === 'P') {
        const title = target.textContent?.trim().replace(/\s+/g, ' ');
        if (title) {
          e.preventDefault();
          e.stopPropagation();
          
          // Находим productId по названию с нормализацией
          const product = PRODUCTS.find(p => {
            const normalizedProductTitle = p.title.trim().replace(/\s+/g, ' ');
            return normalizedProductTitle === title;
          });
          if (product) {
            onOpenProductModal(product.id);
          }
        }
      }
    };

    document.addEventListener('click', handleProductClick);
    document.addEventListener('click', handleFinancingClick);
    document.addEventListener('click', handleTitleClick);
    document.addEventListener('click', handleFinancingCardClick);

    return () => {
      document.removeEventListener('click', handleProductClick);
      document.removeEventListener('click', handleFinancingClick);
      document.removeEventListener('click', handleTitleClick);
      document.removeEventListener('click', handleFinancingCardClick);
    };
  }, [mounted, toggleItem, onOpenFinancing, onOpenProductModal, onOpenFinancingModal, onOpenCart, isInCart]);

  // Обновляем текст кнопок в зависимости от состояния корзины
  useEffect(() => {
    if (!mounted) return;

    const updateButtons = () => {
      PRODUCTS.forEach(product => {
        const inCart = isInCart(product.id);
        
        // Находим все карточки продуктов
        const cards = Array.from(document.querySelectorAll('[data-name="CardPure"]'));
        
        cards.forEach(card => {
          const titleElement = card.querySelector('[data-name="Text Content"] p:first-child');
          // Нормализуем текст для сравнения
          const normalizedTitle = titleElement?.textContent?.trim().replace(/\s+/g, ' ');
          const normalizedProductTitle = product.title.trim().replace(/\s+/g, ' ');
          if (normalizedTitle === normalizedProductTitle) {
            // Находим кнопку и текст внутри
            const button = card.querySelector('[data-name="[M] CustomButton"]') as HTMLElement;
            const textElement = button?.querySelector('[data-name="Text"] p') as HTMLElement;
            
            if (button && textElement) {
              if (inCart) {
                // Состояние "В корзине"
                textElement.textContent = 'В корзине';
                // Зеленый фон
                button.style.backgroundColor = '#0cc44d';
                // Блый текст
                textElement.style.color = 'rgba(255, 255, 255, 0.94)';
              } else {
                // Состояние "Добавить"
                textElement.textContent = 'Добавить';
                // Белый фон
                button.style.backgroundColor = 'white';
                // Темный текст
                textElement.style.color = 'rgba(3, 3, 6, 0.88)';
              }
            }

            // Меняем иконку и её цвет
            const iconContainer = button?.querySelector('[data-name="LeftAddon"]');
            if (iconContainer) {
              const svg = iconContainer.querySelector('svg');
              if (svg) {
                // Находим все path элементы в SVG
                const paths = svg.querySelectorAll('path');
                paths.forEach((path) => {
                  if (inCart) {
                    // Иконка галочки (из Figma)
                    path.setAttribute('d', 'M13.3331 5.01281L6.60166 11.3331L3.3331 8.21789L4.29892 7.21594L6.6124 9.42102L12.379 4.00012L13.3331 5.01281Z');
                    // Белый цвет иконки
                    path.setAttribute('fill', 'white');
                    path.setAttribute('fill-opacity', '0.94');
                  } else {
                    // Иконка плюса (из Figma)
                    path.setAttribute('d', 'M8.66708 3.33313V7.33313H12.6671V8.66711H8.66708V12.6671H7.3331V8.66711H3.3331V7.33313H7.3331V3.33313H8.66708Z');
                    // Темный цвет иконки
                    path.setAttribute('fill', '#030306');
                    path.setAttribute('fill-opacity', '0.88');
                  }
                });
              }
            }
          }
        });
      });
    };

    updateButtons();
  }, [mounted, isInCart]);

  // Эффект для подмены черной карточки финансирования
  useEffect(() => {
    if (!isReady) return;

    try {
      const blackCard = document.querySelector('[data-name="wip6 / M_CredCard"]');
      const replacedCard = document.querySelector('[data-name="M_CredCard-replaced"]');

      if (showCredCard && financingItem) {
        // Скрываем оригинальную черную карточку
        if (blackCard) {
          (blackCard as HTMLElement).style.display = "none";
        }

        // Проверяем, нужно ли пересоздать карточку
        const needsRecreation = replacedCard && 
          replacedCard.getAttribute('data-financing-type') !== financingItem.financingType;

        // Если замененная карточка существует и тип финансирования изменился - удаляем её
        if (needsRecreation && replacedCard) {
          replacedCard.remove();
        }

        // Если замененная карточка уже существует И тип не изменился, обновляем её данные
        if (replacedCard && !needsRecreation) {
          // Просто обновляем данные в существующей карточке
          setTimeout(() => {
            updateTitleAndSubtitle(replacedCard, financingItem.selectedFinancingType || "Кредитная линия");
            updateFinancingIcon(replacedCard, financingItem.selectedFinancingType || "Кредитная линия");
            updateFinancingData(replacedCard, financingItem.loanAmount || "1000000", financingItem.loanTerm || "1");
          }, 0);
          return;
        }

        // Создаем новую карточку если её нет или если тип изменился
        if (blackCard && (!replacedCard || needsRecreation)) {
          const container = document.createElement("div");
          container.setAttribute("data-name", "M_CredCard-replaced");
          container.setAttribute("data-financing-type", financingItem.financingType);
          container.classList.add("w-full", "max-w-[600px]");
          blackCard.after(container);

          const skeleton = document.createElement("div");
          skeleton.className = "w-full animate-pulse";
          skeleton.style.height = "212px";
          skeleton.style.background = "var(--neutral-100, #F2F3F5)";
          skeleton.style.borderRadius = "24px";
          container.appendChild(skeleton);

          // Удаляем скелетон и рендерим карточку
          container.innerHTML = "";
          const root = createRoot(container);
          root.render(
            financingItem.financingType === "longfin" 
              ? <div className="mx-4"><MCredCardLong 
                  onOpenFinancing={onOpenFinancing} 
                  onOpenCart={onOpenCart}
                  loanAmount={financingItem.loanAmount}
                  loanTerm={financingItem.loanTerm}
                  financingType={financingItem.financingType}
                /></div> 
              : <div className="mx-4"><MCredCardFast 
                  onOpenFinancing={onOpenFinancing} 
                  onOpenCart={onOpenCart}
                  loanAmount={financingItem.loanAmount}
                  loanTerm={financingItem.loanTerm}
                  financingType={financingItem.financingType}
                /></div>
          );

          setTimeout(() => {
            updateTitleAndSubtitle(container, financingItem.selectedFinancingType || "Кредитная линия");
            updateFinancingIcon(container, financingItem.selectedFinancingType || "Кредитная линия");
            updateFinancingData(container, financingItem.loanAmount || "1000000", financingItem.loanTerm || "1");
            makeFinancingTitleClickable(container, financingItem.selectedFinancingType || "Кредитная линия");
          }, 0);
        }
      } else {
        // Если финансирования нет в корзине - показываем оригинальную карточку
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
  }, [showCredCard, financingItem?.id, financingItem?.financingType, financingItem?.selectedFinancingType, financingItem?.loanAmount, financingItem?.loanTerm, isReady, onOpenFinancing, onOpenFinancingModal]);

  const updateTitleAndSubtitle = (container: Element, financingType: string) => {
    const subtitle = ALL_MODALS_DATA[financingType]?.subtitle;
    if (!subtitle) return;
    const wrapDiv = container.querySelector('[data-name="wrap"]');
    if (!wrapDiv) return;
    const paragraphs = wrapDiv.querySelectorAll("p");
    if (paragraphs.length >= 2) {
      paragraphs[0].textContent = financingType;
      paragraphs[1].textContent = subtitle;
    }
  };

  const updateFinancingIcon = (container: Element, financingType: string) => {
    const posData = FINANCING_ICON_POSITIONS[financingType];
    const imgSrc = FINANCING_IMAGES[financingType];
    const maskSrc = FINANCING_MASKS[financingType];
    if (!posData || !imgSrc || !maskSrc) return;
    const iconView = container.querySelector('[data-name="IconView"]');
    if (!iconView) return;
    const img = iconView.querySelector('img');
    if (!img) return;
    img.src = imgSrc;
    img.style.left = posData.left;
    img.style.top = posData.top;
    if (posData.width) img.style.width = posData.width;
    if (posData.height) img.style.height = posData.height;
    if (posData.maxWidth) img.style.maxWidth = posData.maxWidth;
    const shapeContent = iconView.querySelector('[data-name="ShapeContent"]') as HTMLElement;
    if (shapeContent) {
      shapeContent.style.maskImage = `url('${maskSrc}')`;
    }
  };

  const updateFinancingData = (container: Element, loanAmount: string, loanTerm: string) => {
    const allParagraphs = container.querySelectorAll("p");
    allParagraphs.forEach((el) => {
      const text = el.textContent?.trim();
      if (text && text.includes("₽") && text.match(/^\d+\s.*₽$/)) {
        el.textContent = `${formatAmount(loanAmount)} ₽`;
      }
      if (text && text.includes("мес") && text.match(/^\d+\s*мес\.?$/)) {
        el.textContent = `${loanTerm} мес.`;
      }
    });
  };

  const makeFinancingTitleClickable = (container: Element, financingType: string) => {
    const wrapDiv = container.querySelector('[data-name="wrap"]');
    if (!wrapDiv) return;
    const titleParagraph = wrapDiv.querySelector("p");
    if (!titleParagraph) return;
    titleParagraph.classList.add("underline-financing-title-mobile");
    titleParagraph.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      onOpenFinancingModal(financingType);
    });
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <MPreloginBase />
    </div>
  );
}