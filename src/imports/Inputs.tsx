function Label() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">ИНН</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[18px] relative w-full">
          <Label />
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[rgba(38,55,88,0.06)] content-stretch flex items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#babbc2] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Content />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Input">
      <Field />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">ИНН</p>
      </div>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Value">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">1234567</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative w-full">
          <Label1 />
          <Value />
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-[rgba(38,55,88,0.06)] content-stretch flex items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#babbc2] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Content1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Input">
      <Field1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">ИНН</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[18px] relative w-full">
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-[rgba(38,55,88,0.06)] content-stretch flex items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#ff4837] border-b-2 border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Content2 />
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="ErrorMessage">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ec2d20] text-[14px] w-full">
        <p className="leading-[18px]">Необходимо выбрать вариант из предложенного списка</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Input">
      <Field2 />
      <ErrorMessage />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">ИНН</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[18px] relative w-full">
          <Label3 />
        </div>
      </div>
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-[rgba(38,55,88,0.06)] content-stretch flex items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#ff4837] border-b-2 border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Content3 />
    </div>
  );
}

function ErrorMessage1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="ErrorMessage">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ec2d20] text-[14px] w-full">
        <p className="leading-[18px]">Необходимо выбрать вариант из предложенного списка</p>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute h-[40px] left-0 right-0 top-0" data-name="Option">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[30px] not-italic text-[16px] text-black top-[19.5px] w-[171.649px]">
        <p className="leading-[normal]">Компания не найдена</p>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute bg-[#f2f3f5] font-['SF_Pro_Text:Regular',sans-serif] h-[61px] leading-[0] left-0 not-italic right-0 top-[40px]" data-name="Option">
      <div className="-translate-y-1/2 absolute flex flex-col h-[19px] justify-center left-[30px] text-[16px] text-black top-[19.5px] w-[107.951px]">
        <p className="leading-[normal]">{`АО "УФАНЕТ"`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[30px] text-[#898991] text-[14px] top-[40px] w-[415.966px]">
        <p className="leading-[22px] whitespace-pre-wrap">{`ИНН: 0278109628   ОГРН: 1050204596914   КПП: 027801001`}</p>
      </div>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute font-['SF_Pro_Text:Regular',sans-serif] h-[61px] leading-[0] left-0 not-italic right-0 top-[101px]" data-name="Option">
      <div className="-translate-y-1/2 absolute flex flex-col h-[19px] justify-center left-[30px] text-[16px] text-black top-[19.5px] w-[188.292px]">
        <p className="leading-[normal]">{`ООО "УФАНЕТИНВЕСТ"`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[30px] text-[#898991] text-[14px] top-[40px] w-[412.259px]">
        <p className="leading-[22px] whitespace-pre-wrap">{`ИНН: 0278917255   ОГРН: 1160280081059   КПП: 027801001`}</p>
      </div>
    </div>
  );
}

function Listbox() {
  return (
    <div className="absolute bg-white h-[162px] left-0 overflow-auto rounded-[4px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.04),0px_0px_1px_0px_rgba(0,0,0,0.04)] top-[56px] w-[556px]" data-name="Listbox">
      <Option />
      <Option1 />
      <Option2 />
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Input">
      <Field3 />
      <ErrorMessage1 />
      <Listbox />
    </div>
  );
}

export default function Inputs() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start px-[46px] py-[52px] relative size-full" data-name="inputs">
      <Input />
      <Input1 />
      <Input2 />
      <Input3 />
    </div>
  );
}