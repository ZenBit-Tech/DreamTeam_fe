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
import { DreamTeamLogo } from '@/components/DreamTeamLogo';
import { CompanyForm, CompanyFormTypes } from '@/components/Forms/CompanyForm';
import { SearchBar } from '@/components/Inputs/SearchBar';
import { ListItem } from '@/components/ListItem';
import { IconWrapper } from '@/components/ListItem/styles';
import { ProfilePicture } from '@/components/ProfilePicture';
import { SignInPopup } from '@/components/SignInPopup';
import { CompanyListTitle } from '@/components/Titles/CompanyList';
import { CompanyPagination } from '@/pages/SuperAdminPage/components/CompanyPagination';

export const SuperAdminPage = (): React.ReactElement => {
  const { selectedPage, selectedOption, handlePageChange, handleSelectChange } =
    usePagination();
  const {
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
  } = useCompanies({
    page: selectedPage,
    rowsPerPage: selectedOption,
  });

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
            <SearchBar onChange={handleSearchChange} />
            <UniversalButton
              onClick={() => setAddModalOpen(true)}
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
                <IconWrapper onClick={handleSortToggle}>
                  <IconSet iconType={IconType.Swap} />
                </IconWrapper>
              </CompanyName>

              <BodyBase>{t('actions')}</BodyBase>
            </CompanyListFilter>
            {isLoading ? (
              <h3>{t('loading')}</h3>
            ) : (
              data?.data.map((company) => (
                <ListItem
                  key={company.id}
                  item={company}
                  setModal={() => setEditModalOpen(true)}
                />
              ))
            )}
          </CompanyListBody>
          <CompanyListFooter>
            <CompanyPagination
              totalCompanies={totalCompanies}
              numberOfPages={numberOfPages}
              startIndex={startIndex}
              endIndex={endIndex}
              handlePageChange={handlePageChange}
              handleSelectChange={handleSelectChange}
            />
          </CompanyListFooter>
        </CompanyListContent>
      </SuperAdminBody>
      <CompanyForm
        modalOpen={addModalOpen}
        closeModal={() => setAddModalOpen(false)}
        type={CompanyFormTypes.Add}
      />
      <CompanyForm
        modalOpen={editModalOpen}
        closeModal={() => setEditModalOpen(false)}
        type={CompanyFormTypes.Edit}
      />
      {error && <SignInPopup type='error' text={t('faliedToLoad')} />}
    </SuperAdminContainer>
  );
};
