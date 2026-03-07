export default function MFooter() {
  return (
    <div
      className="bg-[#121213] content-stretch flex flex-col w-full"
      data-name="Footer"
    >
      <div
        className="px-[32px] py-[32px] w-full relative shrink-0 text-[12px] text-[rgba(238,238,251,0.55)] content-stretch flex flex-col gap-[16px] box-border"
        data-name="Info text"
      >
        <p>
          © 2001-2025. АО «Альфа-Банк», официальный сайт.
          Генеральная лицензия Банка России № 1326 от 16 января
          2015 г.
        </p>
        <p>
          АО «Альфа-Банк» является оператором по обработке
          персональных данных, информация об обработке
          персональных данных и сведения о реализуемых
          требованиях к защите персональных данных отражены в
          <a
            className="underline"
            href="https://alfabank.ru/about/pdn/"
          >
            Политике в отношении обработки персональных данных
          </a>
        </p>
        <p>
          АО «Альфа-Банк» использует
          <a
            className="underline"
            href="https://alfabank.ru/about/cookies/"
          >
            файлы «cookie»
          </a>
          с целью персонализации сервисов и повышения удобства
          пользования веб-сайтом. Если вы не хотите, чтобы ваши
          пользовательские данные обрабатывались, пожалуйста,
          ограничьте их использование в своём браузере.
        </p>
      </div>
    </div>
  );
}