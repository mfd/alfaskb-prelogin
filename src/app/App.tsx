import { useState, useMemo, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CartProvider, useCart } from './contexts/CartContext';
import MobileApp from './MobileApp';
import Header from './components/Header';
import { PRODUCTS } from './components/ProductCard';
import DPreloginWrapper from './components/DPreloginWrapper';
import CartSidebar from './components/CartSidebar';
import FinancingSidebar from './components/FinancingSidebar';
import UnifiedModal from './components/UnifiedModal';

// Маппинг названий продуктов из модалок на productId
const MODAL_TO_PRODUCT_ID: Record<string, string> = {
  "Торговый эквайринг": "acquiring",
  "Зарплатный проект": "salary",
  "Бизнес-карты": "cards",
  "ВЭД": "ved",
  "РКО для бизнеса": "rko",
  "Депозиты для бизнеса": "deposits",
};

function AppContent() {
  const [isFinancingSidebarOpen, setIsFinancingSidebarOpen] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);
  const { addItem, openCart, isInCart } = useCart();

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
    const productId = MODAL_TO_PRODUCT_ID[openModal];
    return productId ? isInCart(productId) : false;
  }, [openModal, isInCart]);

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <Header />
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

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileApp />;
  }

  return (
    <ErrorBoundary>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ErrorBoundary>
  );
}
