import { t } from 'i18next';
import React from 'react';

import {
  CompanyListBody,
  CompanyListContent,
  CompanyListFilter,
  CompanyListFooter,
  CompanyListHeader,
  CompanyName,
  SuperAdminBody,
  SuperAdminContainer,
  SuperAdminHeader,
} from './styles';
import { useCompanies } from './useCompanies';
import { usePagination } from './usePagination';

import { IconType } from '@/assets/styles/types';
import { BodyBase } from '@/assets/styles/typography';
import { IconSet } from '@/components/Button/Icons';
import { UniversalButton } from '@/components/Button/UniversalButton';
import { CompanyPagination } from '@/components/CompanyPagination';
import { DreamTeamLogo } from '@/components/DreamTeamLogo';
import { CompanyForm, CompanyFormTypes } from '@/components/Forms/CompanyForm';
import { SearchBar } from '@/components/Inputs/SearchBar';
import { ListItem } from '@/components/ListItem';
import { ProfilePicture } from '@/components/ProfilePicture';
import { CompanyListTitle } from '@/components/Titles/CompanyList';

export const SuperAdminPage = (): React.ReactElement => {
  const { selectedPage, selectedOption, handlePageChange, handleSelectChange } =
    usePagination();

  const pageData = { page: selectedPage, rowsPerPage: selectedOption };
  const { companiesData, totalCompanies, numberOfPages, startIndex, endIndex } =
    useCompanies(pageData);
  const paginationProps = {
    totalCompanies,
    numberOfPages,
    startIndex,
    endIndex,
    handlePageChange,
    handleSelectChange,
  };

  const [addModalOpen, setAddModal] = React.useState(false);
  const [editModalOpen, setEditModal] = React.useState(false);
  return (
    <SuperAdminContainer>
      <SuperAdminHeader>
        <DreamTeamLogo />
        <ProfilePicture name='Super Admin' />
      </SuperAdminHeader>
      <SuperAdminBody>
        <CompanyListTitle />
        <CompanyListContent>
          <CompanyListHeader>
            <SearchBar />
            <UniversalButton
              onClick={() => setAddModal(true)}
              size='mediumSmall'
              icon={<IconSet iconType={IconType.AddWhite} />}
            >
              {t('addNewCompany')}
            </UniversalButton>
          </CompanyListHeader>
          <CompanyListBody>
            <CompanyListFilter>
              <CompanyName>
                <BodyBase>{t('companyName')}</BodyBase>
                <IconSet iconType={IconType.Swap} />
              </CompanyName>

              <BodyBase>{t('actions')}</BodyBase>
            </CompanyListFilter>
            {companiesData.map((company) => (
              <ListItem
                key={company.id}
                item={company}
                setModal={() => setEditModal(true)}
              />
            ))}
          </CompanyListBody>
          <CompanyListFooter>
            <CompanyPagination paginationProps={paginationProps} />
          </CompanyListFooter>
        </CompanyListContent>
      </SuperAdminBody>
      <CompanyForm
        modalOpen={addModalOpen}
        closeModal={() => setAddModal(false)}
        type={CompanyFormTypes.Add}
      />
      <CompanyForm
        modalOpen={editModalOpen}
        closeModal={() => setEditModal(false)}
        type={CompanyFormTypes.Edit}
      />
    </SuperAdminContainer>
  );
};
