import { DesktopProductData } from "../constants/products";
import svgPaths from "../../imports/svg-w578t1oyss";
import svgPathsPlus from "../../imports/svg-pnkyyxs7im";
import { imgShapeContent } from "../../imports/svg-xqvb8";

interface DesktopProductCardProps {
  product: DesktopProductData;
  isInCart: boolean;
  onToggle: () => void;
  onTitleClick: () => void;
}

export default function DesktopProductCard({
  product,
  isInCart,
  onToggle,
  onTitleClick,
}: DesktopProductCardProps) {
  return (
    <div
      className="bg-[#f2f3f5] content-stretch flex h-[172px] items-start justify-between overflow-clip p-[32px] relative rounded-[32px] shrink-0 w-[1140px]"
      data-name="wip6 / ProdCard"
    >
      {/* Content */}
      <div
        className="content-stretch flex flex-[1_0_0] gap-[48px] items-start min-h-px min-w-px relative"
        data-name="content"
      >
        {/* Title with Icon */}
        <div
          className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[332px]"
          data-name="title"
        >
          {/* Icon */}
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]"
            data-name="PreloginProductsIcon"
          >
            <div
              className="content-stretch flex flex-col items-center justify-center max-h-[80px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0 size-[72px]"
              data-name="IconView"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute max-w-none"
                  src={product.icon.image}
                  style={{
                    left: product.icon.position.left,
                    top: product.icon.position.top,
                    width: product.icon.position.width,
                    height: product.icon.position.height,
                  }}
                />
              </div>
              <div className="relative shrink-0 size-[72px]" data-name="Content">
                <div
                  className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[72px_72px] size-[72px] top-0"
                  data-name="ShapeContent"
                  style={{ maskImage: `url('${imgShapeContent}')` }}
                >
                  <div
                    className="absolute left-0 overflow-clip size-[72px] top-0"
                    data-name="BgImg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative"
            data-name="text"
          >
            <p
              className='font-["SF_Pro_Display",sans-serif] font-bold leading-[26px] relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] whitespace-nowrap underline-product-title cursor-pointer'
              onClick={onTitleClick}
            >
              {product.title}
            </p>
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] w-[min-content] whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="benefits">
          <div className="content-stretch flex flex-col items-start pr-[32px] relative w-full">
            {product.benefits.map((benefit, index) => (
              <div key={index}>
                <div
                  className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full"
                  data-name={`ListItem${index + 1}`}
                >
                  <div
                    className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full"
                    data-name={`ListItem${index + 1}`}
                  >
                    <p className="relative shrink-0 text-[#ef3124] w-[8px]">•</p>
                    <p className="flex-[1_0_0] min-h-px min-w-px relative text-[rgba(3,3,6,0.88)]">
                      {benefit}
                    </p>
                  </div>
                </div>
                {index < product.benefits.length - 1 && (
                  <div className="h-[12px] shrink-0 w-full" data-name="12px" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div
        className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0"
        data-name="wip5 / Btns-wip5"
      >
        <button
          onClick={onToggle}
          className={`content-stretch flex gap-[4px] items-center justify-center min-h-[48px] min-w-[104px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0 transition-colors ${
            isInCart
              ? "bg-[#0cc44d] hover:bg-[#0bb043]"
              : "bg-[#ef3124] hover:bg-[#d62a1f]"
          }`}
          data-name={isInCart ? "Button_1" : "[D] Button"}
        >
          {/* Icon */}
          <div
            className="content-stretch flex items-start relative shrink-0"
            data-name="LeftAddon"
          >
            <div
              className="content-stretch flex flex-col items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0"
              data-name="LeftAddon"
            >
              <div className="relative shrink-0 size-[24px]" data-name="Fixer">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={isInCart ? svgPaths.p28d167f0 : svgPathsPlus.p25f6ce40}
                    fill="var(--fill-0, white)"
                    fillOpacity="0.94"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className="content-stretch flex flex-col items-center px-[4px] relative shrink-0"
            data-name="Text"
          >
            <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
              <p className="leading-[24px]">{isInCart ? "В корзине" : "Добавить"}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
