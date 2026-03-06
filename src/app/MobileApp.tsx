import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MPreloginWrapper from './components/MPreloginWrapper';
import MobileCartSidebar from './components/MobileCartSidebar';
import { MobileFinancingSidebar } from './components/MobileFinancingSidebar';
import MobileProductBottomSheet from './components/MobileProductBottomSheet';
import MobileFinBottomSheet from './components/MobileFinBottomSheet';
import MobileCartIcon from './components/MobileCartIcon';
import { useCart } from './contexts/CartContext';
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

  // Получаем данные финансирования из корзины для редактирования
  const financingInCart = items.find((item) => item.id === "financing");
  const financingEditData = financingInCart ? {
    financingType: financingInCart.financingType as 'fastfin' | 'longfin',
    productName: financingInCart.selectedFinancingType || "Овердрафт",
    amount: Number(financingInCart.loanAmount) || 20000000,
    term: Number(financingInCart.loanTerm) || 12,
  } : undefined;

  const handleAddFinancingToCart = (productName: string, financingType: 'fastfin' | 'longfin', amount: number, term: number) => {
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

    if (financingInCart) {
      updateItem(itemToAdd);
      // После редактирования финансирования просто закрываем сайдбар, не открываем корзину
      setIsFinancingSidebarOpen(false);
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
            className="fixed bottom-6 right-4 z-[60] cursor-pointer"
          >
            <MobileCartIcon
              onClick={openCart}
              itemCount={items.length}
            />
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
        editData={financingEditData}
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
    <MobileAppContent />
  );
}