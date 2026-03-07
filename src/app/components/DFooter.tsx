export default function DFooter() {
  return (
      <div className="bg-[#000000] content-stretch flex flex-col items-center justify-end relative rounded-tl-[64px] rounded-tr-[64px] shrink-0 px-[0px] py-[40px]" data-name="Footer">
        <div className="content-stretch flex flex-col  items-start not-italic relative shrink-0 text-[0px] text-[12px] text-[rgba(238,238,251,0.55)] w-[1140px] p-[0px]" data-name="SeoText">
          <div className="w-[1280] mx-auto gap-[16px] flex flex-col">
            <p>© 2001-2025. АО «Альфа-Банк», официальный сайт. Генеральная лицензия Банка России № 1326 от 16 января 2015 г.</p>
            <p>АО «Альфа-Банк» является оператором по обработке персональных данных, информация об обработке персональных данных и сведения о реализуемых требованиях к защите персональных данных отражены в 
              <a className="text-underline"  href="https://alfabank.ru/about/pdn/">
                  Политике в отношении обработки персональных данных
              </a>
            </p>
            <p>АО «Альфа-Банк» использует <a href="https://alfabank.ru/about/cookies/">файлы «cookie»</a> с целью персонализации сервисов и повышения удобства пользования веб-сайтом. Если вы не хотите, чтобы ваши пользовательские данные обрабатывались, пожалуйста, ограничьте их использование в своём браузере.
            </p>
            </div>
        </div>
    </div>
  );
}
