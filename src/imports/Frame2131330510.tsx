import svgPaths from "./svg-4z0oyijeos";
import { imgShapeContent } from "./svg-sxqr1";

function Fixer() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Fixer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[106.667px] top-1/2" data-name="basket-ico">
        <div className="absolute inset-[20.83%_12.49%_2.08%_6.26%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24.667">
            <path d={svgPaths.p2d02bd80} fill="var(--fill-0, white)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ShapeContent() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent}')` }}>
      <div className="absolute bg-[#49494f] left-0 size-[48px] top-0" data-name="BgColor" />
      <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="BgImg" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[32px] top-1/2" data-name="Content">
        <Fixer />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Content">
      <ShapeContent />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bottom-0 h-[48px] left-0 pointer-events-none top-0">
        <div className="content-stretch flex flex-col items-start max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] pointer-events-auto sticky top-0" data-name="IconView">
          <Content />
        </div>
      </div>
    </div>
  );
}