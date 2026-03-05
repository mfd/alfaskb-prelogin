// Импорты изображений для иконок финансирования
import imgCreditLine from "figma:asset/7186d95bd7ca1e12cf93fa27d3d2e711c96d8bb5.png";
import imgBankGuarantee from "figma:asset/42c1815a218a3d04336231b42bf5ce9f92b014e5.png";
import imgOverdraft from "figma:asset/44690177e6c33f3932ceda7be51d1886a99a6432.png";
import imgFactoring from "figma:asset/4469f5679ca3f6c22feca14fe50ece4db25237d6.png";

// Импорты масок SVG
import { imgShapeContent as maskCreditLine } from "../../imports/svg-7vz8u";
import { imgShapeContent as maskBankGuarantee } from "../../imports/svg-13p9s";
import { imgShapeContent as maskOverdraft } from "../../imports/svg-ck6p2";
import { imgShapeContent as maskFactoring } from "../../imports/svg-ispzh";

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
