// Централизованный файл для изображений финансирования
import imgCreditLine from "figma:asset/fba7823a1d9ed597ed66bef65724a783078389b5.png";
import imgBankGuarantee from "figma:asset/42c1815a218a3d04336231b42bf5ce9f92b014e5.png";
import imgOverdraft from "figma:asset/cdc94f594ce360f650b3258f60a9e696e28cfae9.png";
import imgFactoring from "figma:asset/d1d40253624769c706b16443669c207d450a0cce.png";

// Импорты масок SVG - все используют одинаковую маску скругленного квадрата
import { imgShapeContent as maskCreditLine } from "../../imports/svg-7vz8u";
import { imgWip6DCredCard1 as maskBankGuarantee } from "../../imports/svg-sbhrw";
import { imgShapeContent as maskOverdraft } from "../../imports/svg-d7vce";
import { imgWip6MCredCard1 as maskFactoring } from "../../imports/svg-otj69";

export const FINANCING_IMAGES: Record<string, string> = {
  'Кредитная линия': imgCreditLine,
  'Банковская гарантия': imgBankGuarantee,
  'Овердрафт': imgOverdraft,
  'Факторинг': imgFactoring,
};

export const FINANCING_MASKS: Record<string, string> = {
  'Кредитная линия': maskCreditLine,
  'Банковская гарантия': maskBankGuarantee,
  'Овердрафт': maskOverdraft,
  'Факторинг': maskFactoring,
};