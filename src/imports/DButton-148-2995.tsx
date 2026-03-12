export default function DButton() {
  return (
    <div className="backdrop-blur-[40px] bg-[rgba(15,25,55,0.1)] content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[20px] py-[4px] relative rounded-[8px] size-full" data-name="[D] Button">
      <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
        <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
          <p className="leading-[24px]">Отменить</p>
        </div>
      </div>
    </div>
  );
}