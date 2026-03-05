import { motion, AnimatePresence } from 'motion/react';
import MobileFinancingBottomSheet from './MobileFinancingBottomSheet';
import { useEffect } from 'react';

interface MobileFinBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  financingType: string | null;
}

export default function MobileFinBottomSheet({ isOpen, onClose, financingType }: MobileFinBottomSheetProps) {
  // Блокировка скролла при открытом BottomSheet
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

  // Обработчик кликов для закрытия и навигации
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Закрытие по клику на overlay
      if (target.closest('[data-name="Overlay"]') || target.closest('[data-name=".Overlay"]')) {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }

      // Закрытие по клику на крестик
      if (target.closest('[data-name="Cross"]')) {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }
    };

    // Небольшая задержка перед добавлением обработчика
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  if (!financingType) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110]">
          {/* Overlay */}
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".Overlay">
            <div className="absolute bg-[rgba(0,0,0,0.65)] inset-0" data-name="Overlay" />
          </div>

          {/* MainBody */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="absolute bottom-0 left-0 right-0"
            data-name="MainBody"
          >
            <MobileFinancingBottomSheet financingType={financingType} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
