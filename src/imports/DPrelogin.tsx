import { DesktopProductCard } from "../app/components/DesktopProductCard";
import { DESKTOP_PRODUCTS } from "../app/constants/products";
import { DesktopProductIcon } from "../app/components/DesktopProductIcon";
import DGetfin from "../app/components/DGetfin";
import { PRODUCTS } from "../app/components/ProductCard";
import DFooter from "../app/components/DFooter";

function IntroSection() {
  return (
      <div className="relative shrink-0 w-full content-stretch flex flex-col items-center px-[70px] relative w-full" data-name="introSection">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1140px]" data-name="headline">
          <div className="content-stretch flex items-center relative shrink-0 w-[751px]" data-name="Headline.Typography">
            <p className='flex-[1_0_0] font-bold leading-[48px] min-h-px min-w-px not-italic relative text-[40px] text-[rgba(3,3,6,0.88)]'>
              Подобрали для вас
              <br aria-hidden="true" />
              лучшие продукты и условия
            </p>
          </div>
          <div className="content-stretch flex items-center max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
            <p className="flex-[1_0_0] leading-[24px] max-w-[751px] min-h-px min-w-px not-italic relative text-[18px] text-[rgba(4,4,19,0.55)]">
              Мы проанализировали деятельность вашей компании
              <br aria-hidden="true" />
              и предлагаем персональные спецпредложения по следующим продуктам:
            </p>
          </div>
        </div>
      </div>
  );
}

function Cards({ toggleItem, isInCart }: { toggleItem?: (item: any) => void; isInCart?: (productId: string) => boolean }) {
  const handleAddClick = (productId: string) => {
    if (!toggleItem) return;
    
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      toggleItem({ ...product, productId });
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="cards">
      {DESKTOP_PRODUCTS.map((product) => (
        <DesktopProductCard
          key={product.id}
          icon={<DesktopProductIcon data={product} />}
          title={product.title}
          description={product.description}
          benefits={product.benefits}
          onAddClick={() => handleAddClick(product.id)}
          isInCart={isInCart ? isInCart(product.id) : false}
        />
      ))}
    </div>
  );
}

function ProductsSection({ onOpenFinancing, toggleItem, isInCart }: { onOpenFinancing?: () => void; toggleItem?: (item: any) => void; isInCart?: (productId: string) => boolean }) {
  const handleFinancingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onOpenFinancing) {
      onOpenFinancing();
    }
  };
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="content-stretch flex flex-col gap-[24px] items-center px-[70px] relative w-full">
        <DGetfin onAddClick={handleFinancingClick} />
        <Cards toggleItem={toggleItem} isInCart={isInCart} />
      </div>
    </div>
  );
}



function Desktop({ onOpenFinancing, toggleItem, isInCart }: { onOpenFinancing?: () => void; toggleItem?: (item: any) => void; isInCart?: (productId: string) => boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pt-[72px] top-0 w-[1280px]" data-name="Desktop">
      <div className="content-stretch flex flex-col gap-[40px] items-center pb-[128px] relative shrink-0 w-[1280px]" data-name="body">
        <IntroSection />
        <ProductsSection onOpenFinancing={onOpenFinancing} toggleItem={toggleItem} isInCart={isInCart} />
      </div>
    </div>
  );
}

interface DPreloginProps {
  onOpenFinancing?: () => void;
  toggleItem?: (item: any) => void;
  isInCart?: (productId: string) => boolean;
}

export default function DPrelogin({ onOpenFinancing, toggleItem, isInCart }: DPreloginProps = {}) {
  return (
    <div className="relative w-full min-h-screen flex flex-col" data-name="DPrelogin">
      <div className="flex flex-col items-center w-full">
        <Desktop onOpenFinancing={onOpenFinancing} toggleItem={toggleItem} isInCart={isInCart} />
      </div>
      <DFooter />
    </div>
  );
}