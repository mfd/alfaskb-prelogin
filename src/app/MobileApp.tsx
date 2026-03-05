import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MPreloginWrapper from './components/MPreloginWrapper';
import MobileCartSidebar from './components/MobileCartSidebar';
import { MobileFinancingSidebar } from './components/MobileFinancingSidebar';
import MobileProductBottomSheet from './components/MobileProductBottomSheet';
import svgPaths from '../imports/svg-8rxqz1wqhb';
import MobileFinBottomSheet from './components/MobileFinBottomSheet';
import { CartProvider, useCart } from './contexts/CartContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PRODUCTS } from './components/ProductCard';

// Маппинг названий продуктов из модалок на productId
const MODAL_TO_PRODUCT_ID: Record<string, string> = {
  "Торговый эквайринг": "acquiring",
  "Зарплатный проект": "salary",
  "Бизнес-карты": "cards",
  "ВЭД": "ved",
  "РКО для бизнеса": "rko",
  "Депозиты для бизнеса": "deposits",
};

// Типы финансирования для BottomSheet
const FINANCING_TYPES = [
  "Кредитная линия",
  "Банковская гарантия",
  "Овердрафт",
  "Факторинг"
];

function MobileAppContent() {
  const [isFinancingSidebarOpen, setIsFinancingSidebarOpen] = useState(false);
  const [openFinancingType, setOpenFinancingType] = useState<string | null>(null);
  const [openProductId, setOpenProductId] = useState<string | null>(null);
  const { items, isOpen: isCartOpen, openCart, addItem, updateItem } = useCart();

  const handleAddFinancingToCart = (productName: string, financingType: 'fastfin' | 'longfin', amount: number, term: number) => {
    const financingInCart = items.find((item) => item.id === "financing");
    const isEditMode = Boolean(financingInCart);
    
    const financingProduct = PRODUCTS.find((p) => p.id === "financing");
    if (!financingProduct) return;

    const itemToAdd = {
      id: "financing",
      title: financingProduct.title,
      icon: financingProduct.icon,
      productId: "financing",
      loanAmount: String(amount),
      loanTerm: String(term),
      financingType: financingType,
      selectedFinancingType: productName,
    };

    if (isEditMode) {
      updateItem(itemToAdd);
    } else {
      addItem(itemToAdd);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white relative md:hidden pb-20">
      {/* Основной контент */}
      <MPreloginWrapper 
        onOpenFinancing={() => setIsFinancingSidebarOpen(true)}
        onOpenProductModal={(productId) => {
          // Открываем BottomSheet для продуктов
          setOpenProductId(productId);
        }}
        onOpenFinancingModal={(financingType) => {
          // Открываем BottomSheet для типов финансирования
          if (FINANCING_TYPES.includes(financingType)) {
            setOpenFinancingType(financingType);
          }
        }}
        onOpenCart={openCart}
      />

      {/* Фиксированная кнопка корзины внизу */}
      <AnimatePresence>
        {!isCartOpen && !isFinancingSidebarOpen && !openFinancingType && !openProductId && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-6 right-4 z-[60]"
          >
            <button
              onClick={openCart}
              className="relative bg-[#49494f] rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-[#5a5a60] transition-colors active:scale-95"
              aria-label="Корзина"
            >
          {/* Счетчик товаров (сверху) */}
          {items.length > 0 && (
            <div className="absolute -top-1 -right-1 bg-[#ef3124] rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center z-10">
              <span className="text-white text-xs font-bold leading-none">{items.length}</span>
            </div>
          )}

          {/* Иконка корзины */}
          <div className="relative overflow-hidden w-8 h-8">
            <div className="absolute inset-[20.83%_12.49%_2.08%_6.26%]">
              <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24.667">
                <path 
                  d={svgPaths.p2d02bd80}
                  fill="white" 
                />
              </svg>
            </div>
          </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Сайдпанель корзины */}
      <MobileCartSidebar 
        onOpenFinancing={() => setIsFinancingSidebarOpen(true)} 
        onOpenProductModal={(productId) => {
          // Открываем BottomSheet для продуктов из корзины
          setOpenProductId(productId);
        }}
      />

      {/* Сайдпанель финансирования */}
      <MobileFinancingSidebar 
        isOpen={isFinancingSidebarOpen} 
        onClose={() => setIsFinancingSidebarOpen(false)}
        onAddToCart={handleAddFinancingToCart}
      />

      {/* BottomSheet для типов финансирования */}
      <MobileFinBottomSheet
        isOpen={openFinancingType !== null}
        onClose={() => setOpenFinancingType(null)}
        financingType={openFinancingType}
      />

      {/* BottomSheet для продуктов */}
      <MobileProductBottomSheet
        isOpen={openProductId !== null}
        onClose={() => setOpenProductId(null)}
        productId={openProductId}
      />
    </div>
  );
}

export default function MobileApp() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <MobileAppContent />
      </CartProvider>
    </ErrorBoundary>
  );
}
