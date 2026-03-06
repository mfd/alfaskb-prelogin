import { MButton } from "./MButton";

interface MobileFinancingButtonsProps {
  onEdit: () => void;
  onCart?: () => void;
  showInCart?: boolean;
}

export function MobileFinancingButtons({ onEdit, onCart, showInCart = true }: MobileFinancingButtonsProps) {
  console.log('MobileFinancingButtons rendered', { showInCart });
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="wip6 / kredBtns-wip6">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="DCCardButton">
        {/* Кнопка "Изменить" */}
        <MButton variant="edit" onClick={onEdit} />

        {/* Кнопка "В корзине" */}
        {showInCart && (
          <MButton variant="inCart" onClick={onCart} />
        )}
      </div>
    </div>
  );
}