import { COLORS } from '@/assets/styles/constants/colors.ts';

export enum IconType {
  Add = 'Add',
  Edit = 'Edit',
  Forward = 'Forward',
  Delete = 'Delete',
  Swap = 'Swap',
  Close = 'Close',
  Back = 'Back',
}

export interface Order {
  id: number;
  collection_date: string;
  collection_address: string;
  status: OrderStatus;
  customer: {
    full_name: string;
    email: string;
    phone_number: string;
  };
  route: {
    id: string;
  };
  luggage: {
    luggage_size: LuggageSize;
    luggage_weight: number;
  }[];
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  selectedOrdersCount: number;
  totalOrders: number;
  setPage: (page: number) => void;
}

export enum LuggageSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum OrderStatus {
  COMPLETED = 'Completed',
  FAILED = 'Failed',
  NOT_ARRIVED = 'Not arrived',
  AT_RISK = 'At Risk',
  UPCOMING = 'Upcoming',
}

export const statusColors = {
  [OrderStatus.COMPLETED]: COLORS.completedBack,
  [OrderStatus.FAILED]: COLORS.errorContainer,
  [OrderStatus.NOT_ARRIVED]: COLORS.surfaceContainerLow,
  [OrderStatus.AT_RISK]: COLORS.tertiaryContainer,
  [OrderStatus.UPCOMING]: COLORS.secondaryContainer,
};
