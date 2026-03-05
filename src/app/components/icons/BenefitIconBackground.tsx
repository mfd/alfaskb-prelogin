import svgPathsAcquiring from "../../../imports/svg-dn91k2wxf7";

interface BenefitIconBackgroundProps {
  children: React.ReactNode;
}

export default function BenefitIconBackground({ children }: BenefitIconBackgroundProps) {
  return (
    <div className="flex flex-col items-start justify-center min-h-[56px] pr-[12px] self-stretch">
      <div className="flex gap-[10px] items-start relative">
        <div className="relative shrink-0 size-[56px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <path d={svgPathsAcquiring.p36df9f00} fill="#F2F3F5" />
          </svg>
        </div>
        {children}
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px w-full" />
    </div>
  );
}
