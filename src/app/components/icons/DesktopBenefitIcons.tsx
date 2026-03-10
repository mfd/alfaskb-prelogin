import StarIcon from './StarIcon';
import TerminalIcon from './TerminalIcon';
import CardPaymentIcon from './CardPaymentIcon';
import HeadsetIcon from './HeadsetIcon';
import CardTransferIcon from './CardTransferIcon';
import TimeManagementIcon from './TimeManagementIcon';
import LightningIcon from './LightningIcon';
import PercentIcon from './PercentIcon';
import GpiTrackerIcon from './GpiTrackerIcon';
import InternetBankIcon from './InternetBankIcon';
import NotificationIcon from './NotificationIcon';
import CardsStackIcon from './CardsStackIcon';
import ExpenseManagementIcon from './ExpenseManagementIcon';
import BankIcon from './BankIcon';
import UserManagerIcon from './UserManagerIcon';
import OnlineIcon from './OnlineIcon';
import MoneyIcon from './MoneyIcon';
import CheckShieldIcon from './CheckShieldIcon';
import DocumentAnalyticsIcon from './DocumentAnalyticsIcon';
import ControlIcon from './ControlIcon';
import TenderIcon from './TenderIcon';
import ContractIcon from './ContractIcon';
import CustomsIcon from './CustomsIcon';
import ClockIcon from './ClockIcon';
import AutomaticIcon from './AutomaticIcon';
import AvailabilityIcon from './AvailabilityIcon';

export const DESKTOP_BENEFIT_ICONS: Record<string, () => JSX.Element> = {
  // Торговый эквайринг
  flexible: StarIcon,
  'all-methods': CardPaymentIcon,
  terminals: TerminalIcon,
  'payment-methods': CardPaymentIcon,
  support: HeadsetIcon,
  // Зарплатный проект
  fast: CardTransferIcon,
  minute: TimeManagementIcon,
  time: TimeManagementIcon,
  'support-24': HeadsetIcon,
  'extended-day': TimeManagementIcon,
  'round-the-clock': HeadsetIcon,
  free: LightningIcon,
  // ВЭД
  gpi: GpiTrackerIcon,
  'one-hour': TimeManagementIcon,
  'internet-bank': InternetBankIcon,
  notifications: NotificationIcon,
  // Бизнес-карты
  unlimited: CardsStackIcon,
  choice: CardPaymentIcon,
  management: ExpenseManagementIcon,
  transfers: CardTransferIcon,
  // РКО
  tech: BankIcon,
  personal: UserManagerIcon,
  individual: UserManagerIcon,
  '24-7': TimeManagementIcon,
  convenient: LightningIcon,
  // Депозиты
  online: OnlineIcon,
  rate: PercentIcon,
  'from-day': TimeManagementIcon,
  amount: MoneyIcon,
  // Финансирование
  limit: StarIcon,
  term: TimeManagementIcon,
  protection: CheckShieldIcon,
  analytics: DocumentAnalyticsIcon,
  control: ControlIcon,
  tender: TenderIcon,
  contract: ContractIcon,
  customs: CustomsIcon,
  'fast-issue': ClockIcon,
  automatic: AutomaticIcon,
  availability: AvailabilityIcon,
  payment: MoneyIcon,
  'limit-amount': MoneyIcon,
  // Кредитная линия - новые ключи
  'documents': ContractIcon,
  'fast-decision': ClockIcon,
  'no-collateral': CheckShieldIcon,
  'flexibility': StarIcon,
};