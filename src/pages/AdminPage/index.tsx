import { t } from 'i18next';
import React from 'react';

import { useAdmin } from './useAdmin';

import SwapIcon from '@/assets/images/icons/SwapIcon.png';
import { IconType } from '@/assets/styles/types.ts';
import { BodyBase } from '@/assets/styles/typography.ts';
import { AdminPagination } from '@/components/AdminPagination';
import { BreadcrumbsNav } from '@/components/BreadcrumbsNav/BreadcrumbsNav';
import { IconSet } from '@/components/Button/Icons';
import { UniversalButton } from '@/components/Button/UniversalButton';
import { DreamTeamLogo } from '@/components/DreamTeamLogo';
import { AdminForm, AdminFormTypes } from '@/components/Forms/AdminForm';
import { SearchBar } from '@/components/Inputs/SearchBar';
import { ListItem } from '@/components/ListItem';
import { ProfilePicture } from '@/components/ProfilePicture';
import { CompanySidebar } from '@/components/Sidebars/CompanySidebar';
import {
  AdminContainer,
  AdminListBody,
  AdminListContent,
  AdminListFilter,
  AdminListFooter,
  AdminListHeader,
  AdminPageBody,
  AdminPageContainer,
  AdminPageHeader,
  AdminPageListContainer,
  SortButton,
} from '@/pages/AdminPage/styles.ts';
import { usePagination } from '@/pages/SuperAdminPage/usePagination';

export const AdminPage = (): React.ReactElement => {
  const { selectedPage, selectedOption, handlePageChange, handleSelectChange } =
    usePagination();
  const pageData = { page: selectedPage, rowsPerPage: selectedOption };
  const {
    adminsData,
    totalAdmins,
    numberOfPages,
    startIndex,
    endIndex,
    handleSort,
    sortOrder,
  } = useAdmin(pageData);
  const paginationProps = {
    totalAdmins,
    numberOfPages,
    startIndex,
    endIndex,
    handlePageChange,
    handleSelectChange,
  };

  const [addModalOpen, setAddModal] = React.useState(false);
  const [editModalOpen, setEditModal] = React.useState(false);

  return (
    <AdminContainer>
      <AdminPageHeader>
        <DreamTeamLogo />
        <ProfilePicture name='Super Admin' />
      </AdminPageHeader>
      <BreadcrumbsNav />
      <AdminPageContainer>
        <CompanySidebar />
        <AdminPageListContainer>
          <AdminPageBody>
            <AdminListContent>
              <AdminListHeader>
                <SearchBar />
                <UniversalButton
                  onClick={() => setAddModal(true)}
                  size='mediumSmall'
                  icon={<IconSet iconType={IconType.AddWhite} />}
                >
                  {t('addNewAdmin')}
                </UniversalButton>
              </AdminListHeader>
              <AdminListBody>
                <AdminListFilter>
                  <SortButton sortOrder={sortOrder} onClick={handleSort}>
                    <span>{t('adminName')}</span>
                    <img src={SwapIcon} alt='Sort Icon' />
                  </SortButton>
                  <BodyBase>{t('actions')}</BodyBase>
                </AdminListFilter>
                {adminsData.map((admin) => (
                  <ListItem
                    key={admin.id}
                    item={admin}
                    setModal={() => setEditModal(true)}
                  />
                ))}
              </AdminListBody>
              <AdminListFooter>
                <AdminPagination paginationProps={paginationProps} />
              </AdminListFooter>
            </AdminListContent>
          </AdminPageBody>

          <AdminForm
            modalOpen={addModalOpen}
            closeModal={() => setAddModal(false)}
            type={AdminFormTypes.Add}
          />
          <AdminForm
            modalOpen={editModalOpen}
            closeModal={() => setEditModal(false)}
            type={AdminFormTypes.Edit}
          />
        </AdminPageListContainer>
      </AdminPageContainer>
    </AdminContainer>
  );
};
