import { Pagination, PaginationItem } from '@mui/material';
import { t } from 'i18next';
import React from 'react';

import {
  CenterPagination,
  PaginationWrapper,
  StatusText,
  StyledSelect,
} from './styles';

import { BodySmall } from '@/assets/styles/typography';

interface CompanyPaginationProps {
  paginationProps: {
    totalCompanies: number;
    numberOfPages: number;
    startIndex: number;
    endIndex: number;
    handlePageChange: (
      event: React.ChangeEvent<unknown>,
      value: number
    ) => void;
    handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  };
}

export const CompanyPagination = ({
  paginationProps: {
    totalCompanies,
    numberOfPages,
    startIndex,
    endIndex,
    handlePageChange,
    handleSelectChange,
  },
}: CompanyPaginationProps): React.ReactNode => {
  return (
    <PaginationWrapper>
      <StatusText>
        <BodySmall>
          {t('companiesShown', { startIndex, endIndex, totalCompanies })}
        </BodySmall>
      </StatusText>
      <CenterPagination>
        <Pagination
          count={numberOfPages}
          color='primary'
          shape='rounded'
          onChange={handlePageChange}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </CenterPagination>
      <StyledSelect
        onChange={handleSelectChange}
        name='quantity'
        id='quantity-select'
      >
        <option value='5'>5</option>
        <option value='15'>15</option>
        <option value='25'>25</option>
      </StyledSelect>
    </PaginationWrapper>
  );
};
