import React from 'react';

import {
  sortOrders,
  getNextSortOrder,
} from '@/assets/styles/constants/sortConstants.ts';

interface Admin {
  id: number;
  organization_name: string;
  email: string;
}

interface UseAdminResult {
  adminsData: Admin[];
  sortOrder: keyof typeof sortOrders;
  handleSort: () => void;
  totalAdmins: number;
  numberOfPages: number;
  startIndex: number;
  endIndex: number;
}

const fakeAdmins: Admin[] = [
  { id: 1, organization_name: 'AirBaltic', email: 'airbaltic@gmail.com' },
  {
    id: 2,
    organization_name: 'British Airways',
    email: 'britishairways@gmail.com',
  },
  { id: 3, organization_name: 'Lufthansa', email: 'lufthansa@gmail.com' },
  { id: 4, organization_name: 'Emirates', email: 'emirates@gmail.com' },
  {
    id: 5,
    organization_name: 'Delta Airlines',
    email: 'deltaairlines@gmail.com',
  },
  {
    id: 6,
    organization_name: 'American Airlines',
    email: 'americanairlines@gmail.com',
  },
  {
    id: 7,
    organization_name: 'Qatar Airways',
    email: 'qatarairways@gmail.com',
  },
  {
    id: 8,
    organization_name: 'Singapore Airlines',
    email: 'singaporeairlines@gmail.com',
  },
  { id: 9, organization_name: 'Air France', email: 'airfrance@gmail.com' },
  { id: 10, organization_name: 'KLM', email: 'klm@gmail.com' },
];

export const useAdmin = (pageData: {
  page: number;
  rowsPerPage: number;
}): UseAdminResult => {
  const { page, rowsPerPage } = pageData;
  const [sortOrder, setSortOrder] = React.useState<keyof typeof sortOrders>(
    sortOrders.asc
  );

  const handleSort = (): void => {
    setSortOrder((prevOrder) => getNextSortOrder(prevOrder));
  };

  const sortedAdmins = React.useMemo(() => {
    return [...fakeAdmins].sort((a, b) =>
      sortOrder === sortOrders.asc
        ? a.organization_name.localeCompare(b.organization_name)
        : b.organization_name.localeCompare(a.organization_name)
    );
  }, [sortOrder]);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const totalAdmins = fakeAdmins.length;
  const numberOfPages = Math.ceil(totalAdmins / rowsPerPage);

  const adminsData = sortedAdmins.slice(startIndex, endIndex);

  return {
    adminsData,
    sortOrder,
    handleSort,
    totalAdmins,
    numberOfPages,
    startIndex,
    endIndex,
  };
};
