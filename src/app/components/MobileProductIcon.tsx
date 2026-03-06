import { MobileProductData } from "../constants/products";
import { imgShapeContent2 } from "../../imports/svg-xqvb8";

interface MobileProductIconProps {
  data: MobileProductData;
}

export function MobileProductIcon({ data }: MobileProductIconProps) {
  const { image, position } = data.icon;
  const useObjectFit = data.useObjectFit || false;
  
  // Обработка размеров
  let sizeClass = '';
  let sizeStyle: { width?: string; height?: string } = {};
  
  if (position.size === "full") {
    sizeClass = "size-full";
  } else if (position.size) {
    // Убираем квадратные скобки и применяем как inline стили
    const sizeValue = position.size.replace(/[\[\]]/g, '');
    sizeStyle = { width: sizeValue, height: sizeValue };
  }

  return (
    <div className="content-stretch flex flex-col items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] relative shrink-0 size-[72px]" data-name="IconView">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {useObjectFit ? (
          <img
            alt=""
            className="w-full h-full"
            src={image}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <img 
            alt="" 
            className={`absolute max-w-none ${sizeClass}`}
            src={image} 
            style={{
              left: position.left,
              top: position.top,
              ...(position.width && { width: position.width }),
              ...(position.height && { height: position.height }),
              ...sizeStyle,
            }}
          />
        )}
      </div>
      <div className="relative shrink-0 size-[48px]" data-name="Content">
        <div 
          className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" 
          data-name="ShapeContent" 
          style={{ maskImage: `url('${imgShapeContent2}')` }}
        >
          <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="BgImg" />
        </div>
      </div>
    </div>
  );
}