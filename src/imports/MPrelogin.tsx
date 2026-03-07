import svgPaths from "./svg-8rxqz1wqhb";
import { imgShapeContent } from "./svg-xqvb8";
import { MobileProductCard } from "../app/components/MobileProductCard";
import { MOBILE_PRODUCTS } from "../app/constants/products";
import { MobileProductIcon } from "../app/components/MobileProductIcon";
import MHeader from "../app/components/MHeader";
import MFooter from "../app/components/MFooter";
import MGetFin from "../app/components/MGetFin";

function Spacer() {
  return (
    <div
      className="h-[0.001px] shrink-0 w-[12px]"
      data-name="Spacer"
    />
  );
}

function TopAddon() {
  return (
    <div
      className="absolute bottom-[35px] left-[35px] size-[20px]"
      data-name="TopAddon"
    >
      <div
        className="absolute bg-[#ef3124] content-stretch flex items-center left-0 px-[4px] py-[2px] rounded-[16px] top-0"
        data-name="TopAddon"
      >
        <div
          className="content-stretch flex flex-col items-center relative shrink-0"
          data-name="Content"
        >
          <Spacer />
          <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            8
          </p>
        </div>
      </div>
    </div>
  );
}

function ShapeContent() {
  return (
    <div
      className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0"
      data-name="ShapeContent"
      style={{ maskImage: `url('${imgShapeContent}')` }}
    >
      <div
        className="absolute bg-[#49494f] left-0 size-[48px] top-0"
        data-name="BgColor"
      />
      <div
        className="absolute left-0 overflow-clip size-[48px] top-0"
        data-name="BgImg"
      />
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[32px] top-1/2"
        data-name="Content"
      >
        <div
          className="relative shrink-0 size-[32px]"
          data-name="Fixer"
        >
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[106.667px] top-1/2"
            data-name="basket-ico"
          >
            <div
              className="absolute inset-[20.83%_12.49%_2.08%_6.26%]"
              data-name="Union"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 26 24.667"
              >
                <path
                  d={svgPaths.p2d02bd80}
                  fill="var(--fill-0, white)"
                  id="Union"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[296px] size-[48px] top-0">
      <div className="absolute bottom-0 h-[48px] left-0 pointer-events-none top-0">
        <div
          className="content-stretch flex flex-col items-start max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] pointer-events-auto sticky top-0"
          data-name="IconView"
        >
          <div
            className="relative shrink-0 size-[48px]"
            data-name="Content"
          >
            <TopAddon />
            <ShapeContent />
          </div>
        </div>
      </div>
    </div>
  );
}

function FixedFooter() {
  return (
    <div
      className="absolute h-[80px] left-0 top-[230px] w-[360px]"
      data-name="fixed_footer"
    >
      <Frame3 />
    </div>
  );
}

function IntroSection() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <div
          className="content-stretch flex items-center justify-center relative shrink-0"
          data-name="Headline.Typography"
        >
          <p className="flex-[1_0_0] font-['SF_Pro_Display:Semibold',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[26px] text-[rgba(3,3,6,0.88)] tracking-[0.36px]">
            Подобрали для вас лучшие продукты и условия
          </p>
        </div>
        <div
          className="content-stretch flex items-center relative shrink-0 w-full"
          data-name="Paragraph.Typography"
        >
          <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,4,19,0.55)]">
            Мы проанализировали деятельность вашей компании и
            предлагаем персональные спецпредложения по следующим
            продуктам:
          </p>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0" data-name="list">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div
          className="grid gap-[12px] justify-start w-full"
          style={{
            gridGap: "12px",
            display: "grid",
            gridAutoRows: "1fr",
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "start",
            width: "100%",
          }}
        >
          {MOBILE_PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={
                index === MOBILE_PRODUCTS.length - 1 &&
                MOBILE_PRODUCTS.length % 2 !== 0
                  ? "col-span-2 flex"
                  : "flex"
              }
            >
              <MobileProductCard
                icon={<MobileProductIcon data={product} />}
                title={product.title}
                description={product.description}
                isFullWidth={
                  index === MOBILE_PRODUCTS.length - 1 &&
                  MOBILE_PRODUCTS.length % 2 !== 0
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div
      className="max-w-[600px] w-full mx-auto content-stretch flex flex-col items-center mt-[56px]"
      data-name="body"
    >
      <div
        className="bg-white content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full px-[16px] py-[24px]"
        data-name="content"
      >
        <IntroSection />

        <MGetFin />

        <List />
      </div>
    </div>
  );
}

export default function MPrelogin() {
  return (
    <div
      className="bg-white relative min-h-screen w-full flex flex-col items-center"
      data-name="MPrelogin"
    >
      <MHeader />
      <FixedFooter />
      <Body />
      <MFooter />
    </div>
  );
}