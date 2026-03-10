import { isMobile as isMobileDevice } from 'react-device-detect';
import { useCart } from '../contexts/CartContext';
import DHeader from '../components/DHeader';
import { PRODUCTS } from '../components/ProductCard';
import DPreloginWrapper from '../components/DPreloginWrapper';
import CartSidebar from '../components/CartSidebar';
import FinancingSidebar from '../components/FinancingSidebar';
import UnifiedModal from '../components/UnifiedModal';
import MPreloginWrapper from '../components/MPreloginWrapper';
import MobileCartSidebar from '../components/MobileCartSidebar';
import { MobileFinancingSidebar } from '../components/MobileFinancingSidebar';
import MobileProductBottomSheet from '../components/MobileProductBottomSheet';
import MobileFinBottomSheet from '../components/MobileFinBottomSheet';
import MobileCartIcon from '../components/MobileCartIcon';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo, useEffect } from 'react';

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

// Desktop версия страницы продуктов
function DesktopProductsPage() {
  const [isFinancingSidebarOpen, setIsFinancingSidebarOpen] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);
  const { addItem, openCart, isInCart, items } = useCart();

  const handleAddToCart = (modalKey: string) => {
    const productId = MODAL_TO_PRODUCT_ID[modalKey];
    if (productId) {
      const product = PRODUCTS.find((p) => p.id === productId);
      if (product) {
        addItem({ ...product, productId });
        setTimeout(() => openCart(), 300);
      }
    }
  };

  const isModalProductInCart = useMemo(() => {
    if (!openModal) return false;
    
    // Проверяем, это модалка финансирования или продукта
    if (FINANCING_TYPES.includes(openModal)) {
      // Это модалка финансирования - проверяем наличие элемента с id === "financing"
      return items.some(item => item.id === "financing");
    }
    
    // Это модалка продукта - проверяем по productId
    const productId = MODAL_TO_PRODUCT_ID[openModal];
    return productId ? isInCart(productId) : false;
  }, [openModal, isInCart, items]);

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <DHeader />
      <DPreloginWrapper 
        onOpenFinancing={() => setIsFinancingSidebarOpen(true)}
        onOpenProductModal={(productId) => setOpenModal(productId)}
        onOpenFinancingModal={(financingType) => setOpenModal(financingType)}
      />
      <CartSidebar 
        onOpenFinancing={() => setIsFinancingSidebarOpen(true)} 
        onOpenProductModal={(productId) => setOpenModal(productId)}
      />
      <FinancingSidebar 
        isOpen={isFinancingSidebarOpen} 
        onClose={() => setIsFinancingSidebarOpen(false)} 
      />
      <UnifiedModal
        isOpen={openModal !== null}
        onClose={() => setOpenModal(null)}
        modalKey={openModal || ''}
        onAddToCart={handleAddToCart}
        isInCart={isModalProductInCart}
        onOpenCart={openCart}
      />
    </div>
  );
}

// Mobile версия страницы продуктов
function MobileProductsPage() {
  const [isFinancingSidebarOpen, setIsFinancingSidebarOpen] = useState(false);
  const [openFinancingType, setOpenFinancingType] = useState<string | null>(null);
  const [openProductId, setOpenProductId] = useState<string | null>(null);
  const { items, isOpen: isCartOpen, openCart, addItem, updateItem } = useCart();

  // Получаем данные финансирования из корзины для редактирования
  const financingInCart = items.find((item) => item.id === "financing");
  const financingEditData = financingInCart ? {
    financingType: financingInCart.financingType as 'fastfin' | 'longfin',
    productId: financingInCart.selectedFinancingType || "Овердрафт",
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
    <div className="min-h-screen w-full bg-white relative md:hidden">
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

// Главный компонент страницы, определяющий какую версию показывать
export default function ProductsPage() {
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    const checkMobileWidth = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobileWidthNow = width < 768;
      setIsMobileWidth(isMobileWidthNow);
      
      // Логирование информации об устройстве
      const deviceInfo = {
        'Мобильное устройство (detect)': isMobileDevice ? 'Да' : 'Нет',
        'Ширина окна': width + 'px',
        'Высота окна': height + 'px',
        'Мобильная ширина (<768px)': isMobileWidthNow ? 'Да' : 'Нет',
        'Итоговый режим': (isMobileDevice || isMobileWidthNow) ? 'МОБИЛЬНЫЙ' : 'ДЕСКТОПНЫЙ',
        'User Agent': navigator.userAgent,
        'Device Pixel Ratio': window.devicePixelRatio,
        'Разрешение экрана': `${window.screen.width}x${window.screen.height}`,
        'Ориентация': window.innerWidth > window.innerHeight ? 'Landscape (Горизонтальная)' : 'Portrait (Вертикальная)',
        'Платформа': navigator.platform,
      };
      
      console.groupCollapsed('🖥️ Информация об устройстве');
      console.table(deviceInfo);
      console.groupEnd();
    };
    
    checkMobileWidth();
    window.addEventListener('resize', checkMobileWidth);
    
    return () => window.removeEventListener('resize', checkMobileWidth);
  }, []);

  // Показываем мобильную версию если устройство мобильное ИЛИ ширина экрана меньше 768px
  const isMobile = isMobileDevice || isMobileWidth;

  return isMobile ? <MobileProductsPage /> : <DesktopProductsPage />;
}