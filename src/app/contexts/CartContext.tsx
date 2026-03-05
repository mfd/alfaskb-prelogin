import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  title: string;
  icon: string;
  loanAmount?: string;
  loanTerm?: string;
  financingType?: 'fastfin' | 'longfin';
  selectedFinancingType?: string; // Кредитная линия, Банковская гарантия и т.д.
  productId?: string; // acquiring, cards, ved, salary, rko, deposits
}

interface CartContextType {
  isOpen: boolean;
  items: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: CartItem) => void;
  isInCart: (id: string) => boolean;
  updateItem: (item: CartItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      if (prev.find(i => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleItem = (item: CartItem) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.filter(i => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isInCart = (id: string) => {
    return items.some(item => item.id === id);
  };

  const updateItem = (item: CartItem) => {
    setItems(prev => {
      const index = prev.findIndex(i => i.id === item.id);
      if (index !== -1) {
        const newItems = [...prev];
        newItems[index] = item;
        return newItems;
      }
      return prev;
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ isOpen, items, openCart, closeCart, addItem, removeItem, toggleItem, isInCart, updateItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  
  // Если контекста нет, возвращаем безопасные значения по умолчанию
  // вместо выброса ошибки (для совместимости с HMR)
  if (context === undefined) {
    console.warn('[CartContext] useCart hook called outside CartProvider - returning fallback values');
    
    const fallbackContext: CartContextType = {
      isOpen: false,
      items: [],
      openCart: () => console.warn('[CartContext] openCart called on fallback'),
      closeCart: () => console.warn('[CartContext] closeCart called on fallback'),
      addItem: () => console.warn('[CartContext] addItem called on fallback'),
      removeItem: () => console.warn('[CartContext] removeItem called on fallback'),
      toggleItem: () => console.warn('[CartContext] toggleItem called on fallback'),
      isInCart: () => { 
        console.warn('[CartContext] isInCart called on fallback'); 
        return false; 
      },
      updateItem: () => console.warn('[CartContext] updateItem called on fallback'),
      clearCart: () => console.warn('[CartContext] clearCart called on fallback'),
    };
    
    return fallbackContext;
  }
  
  return context;
}