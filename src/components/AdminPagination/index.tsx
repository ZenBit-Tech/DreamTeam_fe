import {
  FormControl,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { t } from 'i18next';
import React from 'react';

import { COLORS } from '@/assets/styles/constants/colors';
import { BodySmall } from '@/assets/styles/typography';
import {
  CenterPagination,
  PaginationWrapper,
  StatusText,
} from '@/pages/SuperAdminPage/components/CompanyPagination/styles.ts';

interface AdminPaginationProps {
  paginationProps: {
    totalAdmins: number;
    numberOfPages: number;
    startIndex: number;
    endIndex: number;
    handlePageChange: (
      event: React.ChangeEvent<unknown>,
      value: number
    ) => void;
    handleSelectChange: (event: SelectChangeEvent<string>) => void;
  };
}

export const AdminPagination = ({
  paginationProps: {
    totalAdmins,
    numberOfPages,
    startIndex,
    endIndex,
    handlePageChange,
    handleSelectChange,
  },
}: AdminPaginationProps): React.ReactElement => {
  return (
    <PaginationWrapper>
      <StatusText>
        <BodySmall>
          {t('adminShow', { startIndex, endIndex, totalAdmins })}
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

      <FormControl>
        <Select
          id='items-per-page-select'
          name='itemsPerPage'
          onChange={handleSelectChange}
          defaultValue='5'
          sx={{
            width: '100px',
            height: '36px',
            padding: '6px 0px',
            borderRadius: '6px',
            border: '1px solid COLORS.primaryContainer',
            color: COLORS.outline,

            '&:focus': {
              outline: 'none',
              borderColor: COLORS.accent500,
            },
          }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </PaginationWrapper>
  );
};
