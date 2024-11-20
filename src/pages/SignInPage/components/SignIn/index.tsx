import React from 'react';
import { useTranslation } from 'react-i18next';

import { LoginTitleContainer } from './styles';

import { H3Heading, Paragraph } from '@/assets/styles/typography.ts';

export const SignInTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LoginTitleContainer>
      <H3Heading>{t('welcomeMessage')}</H3Heading>
      <Paragraph>{t('signInPrompt')}</Paragraph>
    </LoginTitleContainer>
  );
};
