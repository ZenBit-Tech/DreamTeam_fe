import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AdminListWrapper,
  Header,
  HeaderActions,
  PageInfo,
  PaginationWrapper,
  SortButton,
  StyledSelect,
  StyledSelectWrapper,
  TableHeader,
} from './styles';
import { useAdmin } from './useAdmin';

import SwapIcon from '@/assets/images/icons/SwapIcon.png';
import { IconType } from '@/assets/styles/types';
import { BodyBase, Heading } from '@/assets/styles/typography';
import { IconSet } from '@/components/Button/Icons';
import { UniversalButton } from '@/components/Button/UniversalButton';
import { SearchBar } from '@/components/Inputs/SearchBar';
import AdminList from '@/components/Lists/AdminList';
import { PaginationButton } from '@/components/Pagination/styles';
import { Popup } from '@/components/Popup';
import { usePagination } from '@/pages/SuperAdminPage/usePagination.ts';

const AdminPage: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const { selectedPage, selectedOption, handlePageChange, handleSelectChange } =
    usePagination();
  const {
    sortOrder,
    handleSort,
    sortedAndPaginatedAdmins,
    totalItems,
    totalPages,
    startIndex,
    endIndex,
  } = useAdmin(selectedPage, selectedOption);

  const handleOpenModal = (): void => setModalOpen(true);
  const handleCloseModal = (): void => setModalOpen(false);

  const handleSubmit = async (): Promise<void> => {
    console.log('Form submitted');
  };

  return (
    <AdminListWrapper>
      <Header>
        <Heading>{t('adminList')}</Heading>
        <HeaderActions>
          <SearchBar />
          <UniversalButton
            size='mediumSmall'
            icon={<IconSet iconType={IconType.AddWhite} />}
            onClick={handleOpenModal}
          >
            {t('addNewAdmin')}
          </UniversalButton>
        </HeaderActions>
      </Header>

      <div>
        <TableHeader>
          <SortButton sortOrder={sortOrder} onClick={handleSort}>
            <span>{t('adminName')}</span>
            <img src={SwapIcon} alt='Sort Icon' />
          </SortButton>
          <BodyBase>{t('actions')}</BodyBase>
        </TableHeader>
        <AdminList admins={sortedAndPaginatedAdmins} />
      </div>

      <PaginationWrapper>
        <PageInfo>
          Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{' '}
          {totalItems} admins
        </PageInfo>
        <div>
          <PaginationButton
            onClick={(e) => handlePageChange(e, selectedPage - 1)}
            disabled={selectedPage === 1}
          >
            Previous
          </PaginationButton>
          {[...Array(totalPages)].map((_, page) => (
            <PaginationButton
              key={`page-${page + 1}`}
              active={selectedPage === page + 1 ? 'true' : 'false'}
              onClick={(e) => handlePageChange(e, page + 1)}
            >
              {page + 1}
            </PaginationButton>
          ))}
          <PaginationButton
            onClick={(e) => handlePageChange(e, selectedPage + 1)}
            disabled={selectedPage === totalPages}
          >
            Next
          </PaginationButton>
        </div>

        <StyledSelectWrapper>
          <StyledSelect
            id='itemsPerPage'
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {[5, 10, 15].map((option) => (
              <option key={`option-${option}`} value={option}>
                {option}
              </option>
            ))}
          </StyledSelect>
        </StyledSelectWrapper>
      </PaginationWrapper>

      <Popup
        popupName={t('addNewAdmin')}
        modalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
      >
        {[
          <div key='adminName'>
            <label>
              {t('adminName')}
              <input type='text' placeholder={t('enterAdminName')} />
            </label>
          </div>,
        ]}
      </Popup>
    </AdminListWrapper>
  );
};

export default AdminPage;
