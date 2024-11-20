import { t } from 'i18next';
import React from 'react';

import { IconSet } from '@/components/Button/Icons';
import { UniversalButton } from '@/components/Button/UniversalButton';
import {
  BackLink,
  ButtonWrapper,
  DetailInfo,
  DetailLabel,
  DetailRow,
  DetailsHeading,
  DetailsSection,
  DetailValue,
  HeadingSection,
  SidebarContainer,
  Title,
} from '@/components/Sidebars/CompanySidebar/styles.ts';
import { IconType } from '@/types.ts';

export const CompanySidebar = (): React.ReactElement => {
  const companyDetails = {
    clientName: 'John Doe',
    email: 'vafgot@vultukir.org',
  };

  return (
    <SidebarContainer>
      <HeadingSection>
        <BackLink>
          <IconSet iconType={IconType.Back} />
          {t('back')}
        </BackLink>
        <Title>{t('companyName')} LTD</Title>
      </HeadingSection>
      <DetailsSection>
        <DetailsHeading>{t('details')}</DetailsHeading>
        <DetailInfo>
          <DetailRow>
            <DetailLabel>{t('clientName')}:</DetailLabel>
            <DetailValue>{companyDetails.clientName}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>{t('emailLabel')}:</DetailLabel>
            <DetailValue>{companyDetails.email}</DetailValue>
          </DetailRow>
        </DetailInfo>
        <ButtonWrapper>
          <UniversalButton size='mediumSmall' buttonColor='primary'>
            {t('edit')}
          </UniversalButton>
        </ButtonWrapper>
      </DetailsSection>
    </SidebarContainer>
  );
};
