import svgPaths from "./svg-o2ojre47qw";
import { imgShapeContent } from "./svg-gwsek";

function Spacer() {
  return <div className="h-[0.001px] shrink-0 w-[12px]" data-name="Spacer" />;
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Content">
      <Spacer />
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">8</p>
    </div>
  );
}

function TopAddon() {
  return (
    <div className="absolute bottom-[35px] left-[35px] size-[20px]" data-name="TopAddon">
      <div className="absolute bg-[#ef3124] content-stretch flex items-center left-0 px-[4px] py-[2px] rounded-[16px] top-0" data-name="TopAddon">
        <Content1 />
      </div>
    </div>
  );
}

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
      <TopAddon />
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