import svgPaths from "./svg-ejf9naee6j";

function LeftAddon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LeftAddon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LeftAddon">
          <g id="icon">
            <path d={svgPaths.pd855200} fill="var(--fill-0, #898991)" />
            <path clipRule="evenodd" d={svgPaths.p5e3de00} fill="var(--fill-0, #898991)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function DButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center relative size-full" data-name="[D] Button">
      <LeftAddon />
    </div>
  );
}