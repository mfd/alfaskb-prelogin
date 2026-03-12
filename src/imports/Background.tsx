function Container() {
  return (
    <div className="absolute h-[35.5px] left-0 overflow-auto right-0 top-[6.25px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Bold',sans-serif] h-[35.5px] justify-center leading-[0] left-[calc(50%+0.15px)] not-italic text-[30px] text-[rgba(3,3,6,0.88)] text-center top-[17.75px] w-[17.874px]">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(38,55,88,0.06)] h-[48px] left-[calc(50%-66px)] overflow-clip rounded-[4px] top-[154px] w-[36px]" data-name="Input">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[35.5px] left-0 overflow-auto right-0 top-[6.25px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Bold',sans-serif] h-[35.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[30px] text-[rgba(3,3,6,0.88)] text-center top-[17.75px] w-[20.289px]">
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(38,55,88,0.06)] h-[48px] left-[calc(50%-22px)] overflow-clip rounded-[4px] top-[154px] w-[36px]" data-name="Input">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[35.5px] left-0 overflow-auto right-0 top-[6.25px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Bold',sans-serif] h-[35.5px] justify-center leading-[0] left-[calc(50%+0.15px)] not-italic text-[30px] text-[rgba(3,3,6,0.88)] text-center top-[17.75px] w-[17.874px]">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(38,55,88,0.06)] h-[48px] left-[calc(50%+22px)] overflow-clip rounded-[4px] top-[154px] w-[36px]" data-name="Input">
      <Container2 />
    </div>
  );
}

function Input3() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(38,55,88,0.06)] h-[48px] left-[calc(50%+66px)] rounded-[4px] top-[154px] w-[36px]" data-name="Input" />;
}

function HorizontalBorder() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute border-[rgba(4,4,19,0.55)] border-b border-dashed h-[17.5px] left-1/2 top-[calc(50%+0.25px)] w-[177.13px]" data-name="HorizontalBorder">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+1.96px)] not-italic text-[14px] text-[rgba(4,4,19,0.55)] text-center top-[8.25px] w-[181.045px]">
        <p className="leading-[20px]">Не приходит сообщение?</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-[calc(50%-0.01px)] top-[294px] w-[177.13px]" data-name="Button">
      <HorizontalBorder />
    </div>
  );
}

function Link() {
  return (
    <div className="-translate-x-1/2 absolute border-[rgba(3,3,6,0.35)] border-b border-solid h-[20px] left-1/2 top-[330px] w-[143.23px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%+2.54px)] not-italic text-[16px] text-[rgba(3,3,6,0.88)] text-center top-[9.5px] w-[148.319px]">
        <p className="leading-[normal]">Изменить телефон</p>
      </div>
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-white relative rounded-[32px] size-full" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Bold',sans-serif] h-[26px] justify-center leading-[0] left-[calc(50%+10.28px)] not-italic text-[22px] text-[rgba(3,3,6,0.88)] text-center top-[61px] w-[311.205px]">
        <p className="leading-[26px]">Введите код из сообщения</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%+4.59px)] not-italic text-[16px] text-[rgba(3,3,6,0.88)] text-center top-[110px] w-[222.998px]">
        <p className="leading-[24px]">Отправили на +7 ··· ··· 55-46</p>
      </div>
      <Input />
      <Input1 />
      <Input2 />
      <Input3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-18.62px)] not-italic text-[16px] text-[rgba(4,4,19,0.55)] text-center top-[258px] w-[273.713px]">
        <p className="leading-[24px]">{`Запросить повторно можно через `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[488.48px] not-italic text-[16px] text-[rgba(4,4,19,0.55)] top-[258px] w-[44.63px]">
        <p className="leading-[24px]">00:32</p>
      </div>
      <Button />
      <Link />
    </div>
  );
}