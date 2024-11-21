import React, { useCallback, useMemo, useState } from 'react';

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
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

  const [sortOrder, setSortOrder] = useState<keyof typeof sortOrders>(
    sortOrders.asc
  );
  const [searchValue, setSearchValue] = useState('');

  const handleSort = useCallback(() => {
    setSortOrder((prevOrder) => getNextSortOrder(prevOrder));
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value.toLowerCase());
    },
    []
  );

  const filteredAdmins = useMemo(() => {
    return fakeAdmins.filter((admin) =>
      admin.organization_name.toLowerCase().includes(searchValue)
    );
  }, [searchValue]);

  const sortedAdmins = useMemo(() => {
    return [...filteredAdmins].sort((a, b) =>
      sortOrder === sortOrders.asc
        ? a.organization_name.localeCompare(b.organization_name)
        : b.organization_name.localeCompare(a.organization_name)
    );
  }, [filteredAdmins, sortOrder]);

  const totalAdmins = sortedAdmins.length;
  const numberOfPages = Math.ceil(totalAdmins / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const adminsData = sortedAdmins.slice(startIndex, endIndex);

  return {
    adminsData,
    sortOrder,
    handleSort,
    totalAdmins,
    numberOfPages,
    startIndex,
    endIndex,
    handleSearchChange,
  };
};
