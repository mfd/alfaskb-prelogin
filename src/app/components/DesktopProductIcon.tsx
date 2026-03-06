import { DesktopProductData } from '../constants/products';

interface DesktopProductIconProps {
  data: DesktopProductData;
}

export function DesktopProductIcon({ data }: DesktopProductIconProps) {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]"
      data-name="IconView"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute max-w-none"
          src={data.icon.image}
          style={{
            left: data.icon.position.left,
            top: data.icon.position.top,
            width: data.icon.position.width,
            height: data.icon.position.height,
          }}
        />
      </div>
      <div className="relative shrink-0 size-[72px]" data-name="Content">
        <div
          className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0"
          data-name="ShapeContent"
        >
          <div
            className="absolute left-0 overflow-clip size-[72px] top-0"
            data-name="BgImg"
          />
        </div>
      </div>
    </div>
  );
}
