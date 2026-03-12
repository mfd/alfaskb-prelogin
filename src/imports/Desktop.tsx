import svgPaths from "./svg-bcercjkidp";
import { imgPrimaryDarkColor, imgPrimaryDarkColor1 } from "./svg-fnv2d";

function LogoContainer() {
  return (
    <div className="h-[40px] relative shrink-0 w-[28px]" data-name="LogoContainer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 40">
        <g id="LogoContainer">
          <path clipRule="evenodd" d={svgPaths.p12878700} fill="var(--fill-0, #EF3124)" fillRule="evenodd" id="a-logo" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryDarkColor() {
  return <div className="absolute bg-[rgba(255,255,255,0.94)] inset-[0_4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.414px_6.188px] mask-size-[39.234px_11.977px]" data-name="PrimaryDarkColor" style={{ maskImage: `url('${imgPrimaryDarkColor}')` }} />;
}

function PrimaryLightColor() {
  return <div className="absolute bg-[rgba(3,3,6,0.88)] inset-[0_4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.414px_6.188px] mask-size-[39.234px_11.977px]" data-name="PrimaryLightColor" style={{ maskImage: `url('${imgPrimaryDarkColor}')` }} />;
}

function TabLabel() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="TabLabel">
      <PrimaryDarkColor />
      <PrimaryLightColor />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[80px] overflow-clip px-[16px] py-[12px] relative rounded-[99px] shrink-0" data-name="Tab_1">
      <div className="absolute bg-[rgba(255,255,255,0.94)] inset-0" data-name="Bg" />
      <TabLabel />
    </div>
  );
}

function PrimaryDarkColor1() {
  return <div className="absolute bg-[rgba(255,255,255,0.94)] inset-[0_4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.414px_6.188px] mask-size-[39.234px_11.977px]" data-name="PrimaryDarkColor" style={{ maskImage: `url('${imgPrimaryDarkColor1}')` }} />;
}

function TabLabel1() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="TabLabel">
      <PrimaryDarkColor1 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[80px] overflow-clip px-[16px] py-[12px] relative rounded-[99px] shrink-0" data-name="Tab_2">
      <TabLabel1 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-center min-h-px min-w-px relative" data-name="Links">
      <div className="content-stretch flex items-center relative shrink-0" data-name=".Logo">
        <LogoContainer />
      </div>
      <div className="bg-[rgba(225,225,248,0.09)] content-stretch flex items-start max-w-[1140px] opacity-0 overflow-x-auto overflow-y-clip p-[2px] relative rounded-[99px] shrink-0" data-name="TabsPanel">
        <Tab />
        <Tab1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Paragraph.Typography">
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">+7 (900) 999-000-22</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Text">
      <div className="content-stretch flex items-start max-w-[751px] relative shrink-0 w-[144px]" data-name="Paragraph.Typography">
        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.94)]">Вы вошли по номеру</p>
      </div>
      <Frame />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Выйти</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end opacity-0 relative shrink-0" data-name="111">
      <Text />
      <div className="backdrop-blur-[40px] bg-[rgba(222,222,238,0.13)] content-stretch flex gap-[2px] items-center justify-center min-h-[40px] min-w-[88px] overflow-clip px-[16px] py-[4px] relative rounded-[8px] shrink-0" data-name="[D] Button">
        <Text1 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <Links />
      <Component />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1140px] z-[1]" data-name="Content">
      <div className="h-[16px] shrink-0 w-[1140px]" data-name="PaddingTop" />
      <Content1 />
    </div>
  );
}

function MainHeaderV() {
  return (
    <div className="relative shrink-0 w-full" data-name=".MainHeaderV3">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col isolate items-center px-[150px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function MainBg() {
  return <div className="-translate-x-1/2 absolute bg-[#f2f3f5] bottom-0 left-1/2 rounded-[32px] top-0 w-[1140px]" data-name="MainBG" />;
}

function Bg() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 left-1/2 top-0 w-[1280px]" data-name="BG">
      <MainBg />
    </div>
  );
}

function Fixer() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function TitleZone() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[752px]" data-name="★ Title Zone">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔹 01. Title Slot">
        <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[40px] text-[rgba(3,3,6,0.88)] text-center w-full">Персональные предложения для вашего бизнеса</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔹 02. Title Slot">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↑Top Margin">
          <Fixer />
        </div>
        <div className="content-stretch flex items-center max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
          <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] max-w-[751px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] text-center">Узнайте, какие продукты и условия банк подготовил специально для вашей компании. Введите ИНН, чтобы увидеть подборку</p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Мобильный телефон</p>
      </div>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Value">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">+7 (</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative w-full">
          <Label />
          <Value />
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[rgba(38,55,88,0.06)] content-stretch flex items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#babbc2] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Content2 />
    </div>
  );
}

function Hint() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Hint">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">
        <p className="leading-[18px]">Введите номер телефона</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Input">
        <Field />
        <Hint />
      </div>
    </div>
  );
}

function Fixer1() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)] text-ellipsis w-full whitespace-nowrap">
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
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-[rgba(38,55,88,0.06)] content-stretch flex items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#babbc2] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Content3 />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Input">
        <Field1 />
      </div>
    </div>
  );
}

function Fixer2() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Продолжить</p>
      </div>
    </div>
  );
}

function Fixer3() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 01. Form Slot">
        <Input />
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↓Buttom Margin">
          <Fixer1 />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 02. Form Slot">
        <Input1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 03. Form Slot">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↑Top Margin">
          <Fixer2 />
        </div>
        <div className="bg-[#f2f3f5] relative rounded-[24px] shrink-0 w-full" data-name="SecurityWarrantyBlock">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
              <div className="content-stretch flex gap-[12px] items-center max-h-[54px] overflow-clip relative rounded-[4px] shrink-0 w-[262px]" data-name="Icon Type">
                <div className="overflow-clip relative shrink-0 size-[32px]" data-name="shield-alfa">
                  <div className="absolute inset-[8.56%_12.48%_8.33%_12.51%]" data-name="icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0031 26.5945">
                      <path d={svgPaths.p1a44ef0} fill="var(--fill-0, #B8B9C0)" id="icon" />
                    </svg>
                  </div>
                </div>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-[218px]">Мы гарантируем безопасность и сохранность ваших данных</p>
              </div>
              <div className="bg-[#ef3124] flex-[1_0_0] min-h-[48px] min-w-[104px] relative rounded-[8px]" data-name="Button_1">
                <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
                    <Text2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="🔸 04. Form Slot">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="⤷ ↑Top Margin">
          <Fixer3 />
        </div>
        <div className="content-stretch flex items-center max-w-[751px] relative shrink-0 w-full" data-name="Paragraph.Typography">
          <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[0] max-w-[751px] min-h-px min-w-px not-italic relative text-[0px] text-[14px] text-[rgba(4,4,19,0.55)] text-center">
            <span className="leading-[20px]">{`Нажимая кнопку «Продолжить», вы подтверждаете, что согласны на `}</span>
            <span className="decoration-[16%] decoration-dotted leading-[20px] underline">обработку персональных данных</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FormZone1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="★ Form Zone">
      <Frame1 />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[98px] py-[48px] relative rounded-[32px] shrink-0 w-[752px]" data-name="★ Form">
      <FormZone1 />
    </div>
  );
}

function FormZone() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-[1140px]" data-name="★ Form Zone">
      <Form />
    </div>
  );
}

function BgHeight1() {
  return <div className="bg-[#121213] h-[64px] rounded-tl-[64px] rounded-tr-[64px] shrink-0 w-[1280px]" data-name="BG_height_64" />;
}

function BgFill() {
  return <div className="bg-[#121213] flex-[1_0_0] min-h-px min-w-px w-[1280px]" data-name="BG_fill" />;
}

function Background() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end overflow-clip rounded-tl-[64px] rounded-tr-[64px]" data-name="Background">
      <BgHeight1 />
      <BgFill />
    </div>
  );
}

function BgHeight() {
  return <div className="h-[32px] rounded-tl-[64px] rounded-tr-[64px] shrink-0 w-full" data-name="BG_height_32" />;
}

function BreadCrumbs() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="BreadCrumbs">
      <BgHeight />
    </div>
  );
}

function SeoText() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[16px] items-start not-italic pb-[40px] relative shrink-0 text-[0px] text-[12px] text-[rgba(238,238,251,0.55)] w-[1140px]" data-name="SeoText">
      <p className="leading-[0] relative shrink-0 w-full whitespace-pre-wrap">
        <span className="leading-[16px]">{`© 2001-2025. АО «Альфа-Банк», официальный сайт. Генеральная лицензия Банка России № 1326 от 16 января 2015 г. `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/make-money/strahovanie_vkladov/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/make-money/strahovanie_vkladov/">
            АО «Альфа-Банк» является участником системы обязательного страхования вкладов.
          </span>
        </a>
        <span className="leading-[16px]">{` `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/annual_report/riskinfo/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/annual_report/riskinfo/">
            Информация о процентных ставках по договорам банковского вклада с физическими лицами.
          </span>
        </a>
        <span className="leading-[16px]">{` `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="http://www.e-disclosure.ru/portal/company.aspx?id=1389">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="http://www.e-disclosure.ru/portal/company.aspx?id=1389">
            Центр раскрытия корпоративной информации.
          </span>
        </a>
        <span className="leading-[16px]">{` `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/legal/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/legal/">
            Раскрытие информации профессионального участника рынка ценных бумаг.
          </span>
        </a>
        <span className="leading-[16px]">{`  `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/shareholders/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/shareholders/">
            Информация о лицах, под контролем либо значительным влиянием которых находится Банк.
          </span>
        </a>
        <span className="leading-[16px]">{` Ул. Каланчёвская, 27, Москва, 107078`}</span>
      </p>
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="leading-[16px]">{`АО «Альфа-Банк» является оператором по обработке персональных данных, информация об обработке персональных данных и сведения о реализуемых требованиях к защите персональных данных отражены в `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/pdn/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/pdn/">
            Политике в отношении обработки персональных данных
          </span>
        </a>
      </p>
      <p className="leading-[16px] relative shrink-0 underline w-full">
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid" href="https://alfabank.ru/about/cookies/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/cookies/">
            АО «Альфа-Банк» использует файлы «cookie» с целью персонализации сервисов и повышения удобства пользования веб-сайтом.
          </span>
        </a>
        <span className="[text-decoration-skip-ink:none] decoration-solid">{` Если вы не хотите, чтобы ваши пользовательские данные обрабатывались, пожалуйста, ограничьте их использование в своём браузере.`}</span>
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-center px-[70px] relative shrink-0 w-[1280px]" data-name="Content">
      <BreadCrumbs />
      <SeoText />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f2f3f5] content-stretch flex flex-col items-start relative size-full" data-name="Desktop">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1280px]" data-name="LocalHeader">
        <MainHeaderV />
      </div>
      <div className="content-stretch flex flex-col gap-[40px] items-center pt-[72px] px-[70px] relative shrink-0 w-[1280px]" data-name="FormMaster">
        <Bg />
        <TitleZone />
        <FormZone />
      </div>
      <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="SpacerVertical 2.0">
        <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-1/2 not-italic opacity-0 text-[#0cc44d] text-[10px] text-center top-[calc(50%-6px)] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
          L - 72px
        </p>
      </div>
      <div className="h-[128px] overflow-clip relative shrink-0 w-full" data-name="SpacerVertical 2.0">
        <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#fe5e48] text-[10px] text-center top-[calc(50%-6px)] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
          8xl - 128px
        </p>
      </div>
      <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[64px] rounded-tr-[64px] shrink-0 w-[1280px]" data-name="Footer">
        <Background />
        <Content4 />
      </div>
    </div>
  );
}