import MobileCartIconSvg from "./MobileCartIconSvg";

interface MobileCartIconProps {
  itemCount: number;
  onClick?: () => void;
}

export default function MobileCartIcon({ itemCount, onClick }: MobileCartIconProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer hover:opacity-90 transition-opacity active:scale-95"
      aria-label={`Корзина (${itemCount} ${itemCount === 1 ? 'товар' : itemCount > 1 && itemCount < 5 ? 'товара' : 'товаров'})`}
    >
      <MobileCartIconSvg itemCount={itemCount} />
    </button>
  );
}