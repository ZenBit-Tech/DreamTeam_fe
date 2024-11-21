import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import {
  CompanyInterface,
  useGetCompaniesQuery,
} from '@/redux/company/companyApi.slice';
import { useDebounce } from '@/utils/useDebounce';

interface UseCompaniesProps {
  page: number;
  rowsPerPage: number;
}

interface UseCompaniesResult {
  startIndex: number;
  endIndex: number;
  addModalOpen: boolean;
  editModalOpen: boolean;
  data?: CompanyInterface;
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  totalCompanies: number;
  numberOfPages: number;
  setAddModalOpen: Dispatch<SetStateAction<boolean>>;
  setEditModalOpen: Dispatch<SetStateAction<boolean>>;
  handleSortToggle: () => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useCompanies = ({
  page,
  rowsPerPage,
}: UseCompaniesProps): UseCompaniesResult => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isAscending, setIsAscending] = useState(true);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const debouncedSearch = useDebounce({ searchValue, delay: 500 });

  const sortOrder = isAscending ? 'ASC' : 'DESC';
  const searchQuery = `?organization-name=${debouncedSearch}&page=${page}&limit=${rowsPerPage}&sort=${sortOrder}`;
  const { data, error, isLoading } = useGetCompaniesQuery(searchQuery);

  const totalCompanies = data?.total || 0;
  const numberOfPages = Math.ceil(totalCompanies / rowsPerPage);

  const handleSortToggle = useCallback(
    () => setIsAscending((prev: boolean) => !prev),
    []
  );
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  return {
    startIndex,
    endIndex,
    addModalOpen,
    editModalOpen,
    data,
    error,
    isLoading,
    totalCompanies,
    numberOfPages,
    setAddModalOpen,
    setEditModalOpen,
    handleSortToggle,
    handleSearchChange,
  };
};
