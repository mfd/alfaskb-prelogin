import svgPaths from "./svg-8rxqz1wqhb";
import imgIconView from "figma:asset/7186d95bd7ca1e12cf93fa27d3d2e711c96d8bb5.png";
import imgBgColor from "figma:asset/ec52c19b2669c27ba77ce2d6f8355a19c63d202c.png";
import imgBgColor1 from "figma:asset/71b9c1e95247e5e9370f3c1ce50f01847964bd61.png";
import { imgShapeContent, imgShapeContent1, imgShapeContent3, imgVector, imgVector1 } from "./svg-xqvb8";
import { MobileProductCard } from "../app/components/MobileProductCard";
import { MOBILE_PRODUCTS } from "../app/constants/products";
import { MobileProductIcon } from "../app/components/MobileProductIcon";

function Spacer() {
  return <div className="h-[0.001px] shrink-0 w-[12px]" data-name="Spacer" />;
}


function TopAddon() {
  return (
    <div className="absolute bottom-[35px] left-[35px] size-[20px]" data-name="TopAddon">
      <div className="absolute bg-[#ef3124] content-stretch flex items-center left-0 px-[4px] py-[2px] rounded-[16px] top-0" data-name="TopAddon">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Content">
          <Spacer />
          <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">8</p>
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
        <div className="relative shrink-0 size-[32px]" data-name="Fixer">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[106.667px] top-1/2" data-name="basket-ico">
            <div className="absolute inset-[20.83%_12.49%_2.08%_6.26%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24.667">
                <path d={svgPaths.p2d02bd80} fill="var(--fill-0, white)" id="Union" />
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
        <div className="content-stretch flex flex-col items-start max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] pointer-events-auto sticky top-0" data-name="IconView">
        <div className="relative shrink-0 size-[48px]" data-name="Content">
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
    <div className="absolute h-[80px] left-0 top-[230px] w-[360px]" data-name="fixed_footer">
      <Frame3 />
    </div>
  );
}

function Head() {
  return (
    <div className="relative shrink-0 w-full" data-name="head">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[333px]" data-name="Headline.Typography">
          <p className="flex-[1_0_0] font-['SF_Pro_Display:Semibold',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[26px] text-[rgba(3,3,6,0.88)] tracking-[0.36px]">
            Подобрали для вас лучшие продукты и условия
          </p>
        </div>
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph.Typography">
          <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,4,19,0.55)]">Мы проанализировали деятельность вашей компании и предлагаем персональные спецпредложения по следующим продуктам:</p>
        </div>
      </div>
    </div>
  );
}

function ShapeContent1() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px] size-[64px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent1}')` }}>
      <div className="absolute left-0 overflow-clip size-[64px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Content">
      <ShapeContent1 />
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="head">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="PreloginProductsIcon">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[64px] max-w-[64px] min-h-[64px] min-w-[64px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[1.4%] max-w-none size-full top-0" src={imgIconView} />
          </div>
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[rgba(255,255,255,0.94)] w-full" data-name="body">
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[20px] tracking-[0.38px] w-full font-bold">Получите финансирование</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] w-full">
        Без залога, по 2 документам
        <br aria-hidden="true" />и всего за 3 дня
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-[187px]" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] tracking-[-0.32px] w-full">
        <p className="leading-[20px] font-bold">До 50 млн ₽</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] w-full">
        <p className="leading-[16px]">до 36 мес</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="row">
      <Text />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[187px]">
      <div className="bg-[#0cc44d] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Status">
        <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.94)] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Быстро и без проверок</p>
        </div>
      </div>
      <Row />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-[187px]" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] tracking-[-0.32px] w-full">
        <p className="leading-[20px] font-bold">До 2 млрд ₽</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] w-full">
        <p className="leading-[16px]">до 120 мес</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="row">
      <Text1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[187px]">
      <div className="bg-[#898991] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Status">
        <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.94)] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Потребуются проверки</p>
        </div>
      </div>
      <Row1 />
    </div>
  );
}

function SelectFlow() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="selectFlow">
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 2">
            <path d="M296 1L0 1" id="Vector 2" stroke="var(--stroke-0, #353539)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Fixer1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.pb73ca00} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Добавить</p>
      </div>
    </div>
  );
}

function CardMain() {
  return (
    <div className="bg-[#1c1c1e] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="CardMain">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Head1 />
          <Body1 />
          <SelectFlow />
          <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="wip6 / kredBtns-wip6">
            <div className="bg-[#ef3124] min-h-[40px] min-w-[88px] relative rounded-[12px] shrink-0 w-full" data-name="Button_1">
              <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                  <LeftAddon />
                  <Text2 />
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(238,238,251,0.55)] text-center w-full">
              <p className="leading-[16px]">Настройте сумму и условия финансирования</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapeContent2() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent2}')` }}>
      <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Content">
      <ShapeContent2 />
    </div>
  );
}

function Graphic() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Graphic">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Graphic">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[117.64%] left-[-4.87%] max-w-none top-[-10%] w-[110.72%]" src={imgIconView1} />
          </div>
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Fixer2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.p30d5f900} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
        <p className="leading-[20px]">Добавить</p>
      </div>
    </div>
  );
}

function TopSlot() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="TopSlot">
        <Graphic />
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 w-full" data-name="Text Content">
          <p className="[text-decoration-skip-ink:none] decoration-dotted font-['SF_Pro_Text:Bold',sans-serif] relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] underline w-full">Торговый эквайринг</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">Приём платежей онлайн и в торговых точках</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="DCCardButton">
          <div className="bg-white flex-[1_0_0] min-h-[40px] min-w-[88px] relative rounded-[12px]" data-name="[M] CustomButton">
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                <LeftAddon1 />
                <Text3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapeContent3() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent2}')` }}>
      <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Content">
      <ShapeContent3 />
    </div>
  );
}

function Graphic1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Graphic">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Graphic">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[7.17%] max-w-none size-full top-[-4.1%]" src={imgIconView2} />
          </div>
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Fixer3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.p11bef700} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
        <p className="leading-[20px]">Добавить</p>
      </div>
    </div>
  );
}

function TopSlot1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="TopSlot">
        <Graphic1 />
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 w-full" data-name="Text Content">
          <p className="[text-decoration-skip-ink:none] decoration-dotted font-['SF_Pro_Text:Bold',sans-serif] relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] underline w-full">Зарплатный проект</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">Подключение за 0 ₽ и управление онлайн</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="DCCardButton">
          <div className="bg-white flex-[1_0_0] min-h-[40px] min-w-[88px] relative rounded-[12px]" data-name="[M] CustomButton">
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                <LeftAddon2 />
                <Text4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function ShapeContent4() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent2}')` }}>
      <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Content">
      <ShapeContent4 />
    </div>
  );
}

function Graphic2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Graphic">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Graphic">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-22.22%] max-w-none size-[144.44%] top-[-19.44%]" src={imgIconView3} />
          </div>
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Fixer4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.p30d5f900} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
        <p className="leading-[20px]">Добавить</p>
      </div>
    </div>
  );
}

function TopSlot2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="TopSlot">
        <Graphic2 />
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 w-full" data-name="Text Content">
          <p className="[text-decoration-skip-ink:none] decoration-dotted font-['SF_Pro_Text:Bold',sans-serif] relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] underline w-full">Бизнес-карты</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">Карта настраивается под ваши потребности</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="DCCardButton">
          <div className="bg-white flex-[1_0_0] min-h-[40px] min-w-[88px] relative rounded-[12px]" data-name="[M] CustomButton">
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                <LeftAddon3 />
                <Text5 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapeContent5() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent2}')` }}>
      <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Content">
      <ShapeContent5 />
    </div>
  );
}

function Graphic3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Graphic">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Graphic">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-42.5%] max-w-none size-[180%] top-[-45%]" src={imgIconView4} />
          </div>
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Fixer5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.p11bef700} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
        <p className="leading-[20px]">Добавить</p>
      </div>
    </div>
  );
}

function TopSlot3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="TopSlot">
        <Graphic3 />
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 w-full" data-name="Text Content">
          <p className="[text-decoration-skip-ink:none] decoration-dotted font-['SF_Pro_Text:Bold',sans-serif] relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] underline w-full">ВЭД</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">Валютные переводы м/у юрлицами в валюте онлайн</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="DCCardButton">
          <div className="bg-white flex-[1_0_0] min-h-[40px] min-w-[88px] relative rounded-[12px]" data-name="[M] CustomButton">
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                <LeftAddon4 />
                <Text6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function ShapeContent6() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent2}')` }}>
      <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Content">
      <ShapeContent6 />
    </div>
  );
}

function Graphic4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Graphic">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Graphic">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-12.5%] max-w-none size-[135%] top-[-13.68%]" src={imgIconView5} />
          </div>
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function Fixer6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.p30d5f900} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
        <p className="leading-[20px]">Добавить</p>
      </div>
    </div>
  );
}

function TopSlot4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="TopSlot">
        <Graphic4 />
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 w-full" data-name="Text Content">
          <p className="[text-decoration-skip-ink:none] decoration-dotted font-['SF_Pro_Text:Bold',sans-serif] relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] underline w-full">РКО для бизнеса</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">Откроем за 1 день и онлайн</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="DCCardButton">
          <div className="bg-white flex-[1_0_0] min-h-[40px] min-w-[88px] relative rounded-[12px]" data-name="[M] CustomButton">
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                <LeftAddon5 />
                <Text7 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapeContent7() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent2}')` }}>
      <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Content">
      <ShapeContent7 />
    </div>
  );
}

function Graphic5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Graphic">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Graphic">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-4.77%] max-w-none size-[108.93%] top-[-8.33%]" src={imgIconView6} />
          </div>
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function Fixer7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.p30d5f900} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
        <p className="leading-[20px]">Добавить</p>
      </div>
    </div>
  );
}

function TopSlot5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="TopSlot">
        <Graphic5 />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[20px] min-h-px min-w-px not-italic relative w-full" data-name="Text Content">
          <p className="[text-decoration-skip-ink:none] decoration-dotted font-['SF_Pro_Text:Bold',sans-serif] relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] underline w-full">Депозиты для бизнеса</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">Онлайн на срок от 1 дня</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="DCCardButton">
          <div className="bg-white flex-[1_0_0] min-h-[40px] min-w-[88px] relative rounded-[12px]" data-name="[M] CustomButton">
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                <LeftAddon6 />
                <Text8 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function ShapeContent8() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent2}')` }}>
      <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content10() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Content">
      <ShapeContent8 />
    </div>
  );
}

function Graphic6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Graphic">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Graphic">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] relative shrink-0 size-[72px]" data-name="IconView">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[194.35%] left-[-36.3%] max-w-none top-[-42.36%] w-[179.01%]" src={imgIconView7} />
          </div>
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Fixer8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.p11bef700} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
        <p className="leading-[20px]">Добавить</p>
      </div>
    </div>
  );
}

function TopSlot6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="TopSlot">
        <Graphic6 />
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 w-full" data-name="Text Content">
          <p className="[text-decoration-skip-ink:none] decoration-dotted font-['SF_Pro_Text:Bold',sans-serif] relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] underline w-full">Овердрафт</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">Краткосрочный кредит для защиты от кассовых разрывов</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="DCCardButton">
          <div className="bg-white flex-[1_0_0] min-h-[40px] min-w-[88px] relative rounded-[12px]" data-name="[M] CustomButton">
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                <LeftAddon7 />
                <Text9 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div 
          className="grid gap-[12px] justify-start w-fit grid-auto-rows-auto mx-[16px]"
          style={{ gridTemplateColumns: 'repeat(2, auto)' }}
        >
          {MOBILE_PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={index === MOBILE_PRODUCTS.length - 1 && MOBILE_PRODUCTS.length % 2 !== 0 ? 'col-span-2' : ''}
            >
              <MobileProductCard
                icon={<MobileProductIcon data={product} />}
                title={product.title}
                description={product.description}
                isFullWidth={index === MOBILE_PRODUCTS.length - 1 && MOBILE_PRODUCTS.length % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[24px] relative shrink-0 w-full" data-name="content">
      <Head />
      <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-full" data-name="wip6 / M_CredCard">
        <CardMain />
      </div>
      <List />
    </div>
  );
}

function BreadCrumbs() {
  return (
    <div className="relative shrink-0 w-full" data-name="BreadCrumbs">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <div className="bg-[#121213] h-[24px] opacity-0 shrink-0 w-full" data-name="Spacer24px" />
      </div>
    </div>
  );
}

function Shape() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shape">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Shape">
          <path d={svgPaths.p3ed8eb00} fill="var(--fill-0, #F2F3F5)" id="Shape_2" />
        </g>
      </svg>
    </div>
  );
}

function City() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="City">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Москва</p>
    </div>
  );
}

function Geo() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Geo">
      <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name=".Geo">
        <Shape />
        <City />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[20.83%_0_20.83%_64.58%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 14">
            <path d={svgPaths.p32d70d00} fill="var(--fill-0, #E7E8EC)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Graphic7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Graphic">
      <Group />
      <div className="bg-[#4a4a51] col-1 ml-0 mt-0 row-1 size-[24px]" data-name="Color" />
    </div>
  );
}

function RightAddon() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0" data-name="RightAddon">
      <Graphic7 />
    </div>
  );
}

function TopSlot7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[20px] min-h-px min-w-px not-italic relative" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] w-full">+7 495 755 58 58</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">Бизнесу</p>
        </div>
        <RightAddon />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[20.83%_0_20.83%_64.58%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 14">
            <path d={svgPaths.p32d70d00} fill="var(--fill-0, #E7E8EC)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Graphic8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Graphic">
      <Group1 />
      <div className="bg-[#4a4a51] col-1 ml-0 mt-0 row-1 size-[24px]" data-name="Color" />
    </div>
  );
}

function RightAddon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0" data-name="RightAddon">
      <Graphic8 />
    </div>
  );
}

function TopSlot8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[20px] min-h-px min-w-px not-italic relative" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] w-full">Звонок в банк</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">Частным лицам</p>
        </div>
        <RightAddon1 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="Size=m">
        <div className="absolute inset-[20.83%_0_20.83%_64.58%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 14">
            <path d={svgPaths.p32d70d00} fill="var(--fill-0, #E7E8EC)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Graphic9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Graphic">
      <Group2 />
      <div className="bg-[#4a4a51] col-1 ml-0 mt-0 row-1 size-[24px]" data-name="Color" />
    </div>
  );
}

function RightAddon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0" data-name="RightAddon">
      <Graphic9 />
    </div>
  );
}

function TopSlot9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TopSlot">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="TopSlot">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[20px] min-h-px min-w-px not-italic relative" data-name="Text Content">
          <p className="font-['SF_Pro_Text:Medium',sans-serif] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] w-full">+7 495 788 88 78</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[14px] text-[rgba(238,238,251,0.55)] w-full">Звонок из-за границы</p>
        </div>
        <RightAddon2 />
      </div>
    </div>
  );
}

function Phones() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Phones">
      <div className="content-stretch flex flex-col items-start max-w-[328px] relative shrink-0 w-full" data-name="Business">
        <TopSlot7 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] relative shrink-0 w-full" data-name="Physics">
        <TopSlot8 />
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[328px] relative shrink-0 w-full" data-name="Abroad">
        <TopSlot9 />
      </div>
    </div>
  );
}

function LinkSlot() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Курсы валют</p>
    </div>
  );
}

function LinkSlot1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Курсы металлов</p>
    </div>
  );
}

function LinkSlot2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Офисы</p>
    </div>
  );
}

function LinkRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot />
      <LinkSlot1 />
      <LinkSlot2 />
    </div>
  );
}

function LinkSlot3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Банкоматы</p>
    </div>
  );
}

function LinkSlot4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Активация карты</p>
    </div>
  );
}

function LinkRow1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot3 />
      <LinkSlot4 />
    </div>
  );
}

function LinkSlot5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">О банке</p>
    </div>
  );
}

function LinkSlot6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Вакансии</p>
    </div>
  );
}

function LinkSlot7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Реквизиты</p>
    </div>
  );
}

function LinkRow2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot5 />
      <LinkSlot6 />
      <LinkSlot7 />
    </div>
  );
}

function LinkSlot8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Пресс-служба</p>
    </div>
  );
}

function LinkSlot9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Тарифы и документы</p>
    </div>
  );
}

function LinkRow3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot8 />
      <LinkSlot9 />
    </div>
  );
}

function LinkSlot10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Иностранным гражданам</p>
    </div>
  );
}

function LinkSlot11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Закупки</p>
    </div>
  );
}

function LinkRow4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot10 />
      <LinkSlot11 />
    </div>
  );
}

function LinkSlot12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Безопасность</p>
    </div>
  );
}

function LinkSlot13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Обратная связь</p>
    </div>
  );
}

function LinkRow5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot12 />
      <LinkSlot13 />
    </div>
  );
}

function LinkSlot14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Карта сайта</p>
    </div>
  );
}

function LinkSlot15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">А-Клуб</p>
    </div>
  );
}

function LinkRow6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot14 />
      <LinkSlot15 />
    </div>
  );
}

function LinkSlot16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Должникам и взыскателям</p>
    </div>
  );
}

function LinkRow7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot16 />
    </div>
  );
}

function LinkSlot17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Справочный центр</p>
    </div>
  );
}

function LinkSlot18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Отзывы клиентов</p>
    </div>
  );
}

function LinkRow8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot17 />
      <LinkSlot18 />
    </div>
  );
}

function LinkSlot19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Блог</p>
    </div>
  );
}

function LinkSlot20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LinkSlot">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Акции и предложения</p>
    </div>
  );
}

function LinkRow9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="LinkRow">
      <LinkSlot19 />
      <LinkSlot20 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="FooterLinks">
      <LinkRow />
      <LinkRow1 />
      <LinkRow2 />
      <LinkRow3 />
      <LinkRow4 />
      <LinkRow5 />
      <LinkRow6 />
      <LinkRow7 />
      <LinkRow8 />
      <LinkRow9 />
    </div>
  );
}

function ShapeContent9() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px] size-[24px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent3}')` }}>
      <div className="absolute left-0 size-[24px] top-0" data-name="BgColor">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#039be5] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBgColor} />
        </div>
      </div>
      <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Content">
      <ShapeContent9 />
    </div>
  );
}

function ShapeContent10() {
  return (
    <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px] size-[24px] top-0" data-name="ShapeContent" style={{ maskImage: `url('${imgShapeContent3}')` }}>
      <div className="absolute left-0 size-[24px] top-0" data-name="BgColor">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#07f] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBgColor1} />
        </div>
      </div>
      <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="BgImg" />
    </div>
  );
}

function Content14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Content">
      <ShapeContent10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex items-start max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="IconView">
        <Content13 />
      </div>
      <div className="content-stretch flex items-start max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0" data-name="IconView">
        <Content14 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Logo">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d="M0 0H24V24H0V0Z" fill="var(--fill-0, #EE1C25)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[10%_60%_63%_10%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[40px_40px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.2 6.48">
            <path d={svgPaths.pe062700} fill="var(--fill-0, #FFFF00)" id="Vector" />
          </svg>
        </div>
        <div className="absolute flex inset-[3.62%_43.94%_83.18%_43.21%] items-center justify-center">
          <div className="-rotate-121 flex-none h-[2.159px] w-[2.398px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-17.283px_-1.45px] mask-size-[40px_40px] relative size-full" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.39838 2.15854">
                <path d={svgPaths.p141cc080} fill="var(--fill-0, #FFFF00)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[14.5%_35.36%_74.33%_54.32%] items-center justify-center">
          <div className="flex-none h-[2.16px] rotate-[-98.1deg] w-[2.4px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-21.729px_-5.8px] mask-size-[40px_40px] relative size-full" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.4 2.16">
                <path d={svgPaths.p7c38a00} fill="var(--fill-0, #FFFF00)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[28.83%_34.83%_59.07%_53.75%] items-center justify-center">
          <div className="-rotate-74 flex-none h-[2.161px] w-[2.401px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-21.501px_-11.53px] mask-size-[40px_40px] relative size-full" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.40128 2.16116">
                <path d={svgPaths.p191b1e00} fill="var(--fill-0, #FFFF00)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[37.97%_43.75%_48.6%_42.98%] items-center justify-center">
          <div className="flex-none h-[2.159px] rotate-[-51.3deg] w-[2.399px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-17.19px_-15.19px] mask-size-[40px_40px] relative size-full" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.39883 2.15895">
                <path d={svgPaths.p2f125100} fill="var(--fill-0, #FFFF00)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['SF_Pro_Text:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.94)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        中文
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Logo">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Vector" style={{ maskImage: `url('${imgVector1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d="M0 0H24V24H0V0Z" fill="var(--fill-0, #012169)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Vector" style={{ maskImage: `url('${imgVector1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p272978b0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Vector" style={{ maskImage: `url('${imgVector1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p3ec4100} fill="var(--fill-0, #C8102E)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Vector" style={{ maskImage: `url('${imgVector1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p10379280} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Vector" style={{ maskImage: `url('${imgVector1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p1a153870} fill="var(--fill-0, #C8102E)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">Eng</p>
    </div>
  );
}

function Chinese() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] h-full items-center justify-end min-h-px min-w-px relative" data-name="Chinese">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Socials">
      <Frame />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Chinese />
      </div>
    </div>
  );
}

function InfoText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Info text">
      <p className="col-1 font-['SF_Pro_Text:Regular',sans-serif] ml-0 mt-0 not-italic relative row-1 text-[12px] text-[rgba(255,255,255,0.94)] w-[312px] whitespace-pre-wrap">
        <span className="leading-[16px]">{`© 2001-2026. АО «Альфа-Банк», официальный сайт. Генеральная лицензия Банка России № 1326 от 16 января 2015 г. `}</span>
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
            Информация профессионального участника рынка ценных бумаг.
          </span>
        </a>
        <span className="leading-[16px]">{` `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/shareholders/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/shareholders/">
            Информация о лицах, под контролем либо значительным влиянием которых находится Банк.
          </span>
        </a>
        <span className="leading-[16px]">
          {` Ул. Каланчевская, 27, Москва, 107078.`}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          {`АО «Альфа-Банк» является оператором по обработке персональных данных, информация об обработке персональных данных и сведения о реализуемых требованиях к защите персональных данных отражены в `}
        </span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.ru/about/pdn/">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.ru/about/pdn/">
            Политике в отношении обработки персональных данных.
          </span>
        </a>
        <span className="leading-[16px]">
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16px] underline" href="https://alfabank.servicecdn.ru/site-upload/61/7d/1677/privacy_policy_cookie_v3.pdf">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px]" href="https://alfabank.servicecdn.ru/site-upload/61/7d/1677/privacy_policy_cookie_v3.pdf">
            АО «Альфа-Банк» использует файлы «cookie» с целью персонализации сервисов и повышения удобства пользования веб-сайтом.
          </span>
        </a>
        <span className="leading-[16px]">{` Если вы не хотите, чтобы ваши пользовательские данные обрабатывались, пожалуйста, ограничьте их использование в своём браузере.`}</span>
      </p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <Geo />
      <Phones />
      <div className="bg-[rgba(231,231,248,0.18)] h-px shrink-0 w-full" data-name="Divider" />
      <FooterLinks />
      <Socials />
      <InfoText />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 w-full" data-name="Info">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] relative w-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[72px] relative shrink-0 w-full z-[1]" data-name="Content">
      <BreadCrumbs />
      <Info />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] items-center left-0 pt-[24px] top-[56px] w-[360px]" data-name="body">
      <Content2 />
      <div className="bg-[#121213] content-stretch flex flex-col isolate items-start overflow-clip relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-[360px]" data-name="Footer">
        <Content11 />
      </div>
    </div>
  );
}

function Fixer9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fixer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fixer">
          <path d={svgPaths.p176e4b00} fill="var(--fill-0, white)" fillOpacity="0.94" id="PaintMe" />
        </g>
      </svg>
    </div>
  );
}

function LeftAddon8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LeftAddon">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0" data-name="LeftAddon">
        <Fixer9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">Выход</p>
      </div>
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Btns">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[20px]">+7 (900) 999-000-22</p>
      </div>
      <div className="backdrop-blur-[40px] bg-[rgba(214,214,229,0.07)] content-stretch flex gap-[2px] items-center justify-center min-h-[32px] min-w-[80px] overflow-clip px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="[M] Button">
        <LeftAddon8 />
        <Text10 />
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] right-[16px] top-[12px]" data-name="Content">
      <div className="h-[32px] relative shrink-0 w-[22px]" data-name="a-logo">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 32">
          <path clipRule="evenodd" d={svgPaths.peb74480} fill="var(--fill-0, #EF3124)" fillRule="evenodd" id="a-logo" />
        </svg>
      </div>
      <Btns />
    </div>
  );
}

export default function MPrelogin() {
  return (
    <div className="bg-[#131315] relative size-full" data-name="[M]-Prelogin">
      <FixedFooter />
      <Body />
      <div className="absolute h-[94px] left-0 top-0 w-[360px]" data-name="MobileHeader">
        <div className="absolute h-[86px] left-0 right-0 top-0" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 86">
            <path clipRule="evenodd" d={svgPaths.p1e262e00} fill="var(--fill-0, #131315)" fillRule="evenodd" id="Subtract" />
          </svg>
        </div>
        <Content15 />
      </div>
    </div>
  );
}