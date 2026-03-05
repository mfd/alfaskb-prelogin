/**
 * Форматирует сумму для отображения
 * @param value - сумма для форматирования
 * @param forInput - если true, всегда показывает цифры с пробелами (для инпутов)
 * 
 * Если forInput = false:
 * - Сумма кратна 1 000 000 000 → "X МЛРД"
 * - Сумма кратна 1 000 000 → "X МЛН"
 * - Иначе форматирует с пробелами через каждые 3 цифры
 * 
 * Если forInput = true:
 * - Всегда форматирует только с пробелами (для полей ввода)
 */
export function formatAmount(value: string | number, forInput: boolean = false): string {
  const numbers = typeof value === 'string' ? value.replace(/\D/g, '') : value.toString();
  const num = parseInt(numbers);
  
  if (isNaN(num)) {
    return '0';
  }
  
  // Для инпутов всегда показываем полное число с пробелами
  if (forInput) {
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  
  // Если число кратно 1 000 000 000 (оканчивается на 9 нулей)
  if (num >= 1000000000 && num % 1000000000 === 0) {
    const billions = num / 1000000000;
    return `${billions} млрд`;
  }
  
  // Если число кратно 1 000 000 (оканчивается на 6 нулей)
  if (num >= 1000000 && num % 1000000 === 0) {
    const millions = num / 1000000;
    return `${millions} млн`;
  }
  
  // Иначе форматируем с пробелами
  return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
