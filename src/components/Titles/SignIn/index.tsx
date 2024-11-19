import React from 'react';
import { useTranslation } from 'react-i18next';

import { H3Heading, Paragraph } from '@/assets/styles/typography.ts';
import { LoginTitleContainer } from '@/components/Titles/SignIn/styles.tsx';

export const SignInTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LoginTitleContainer>
      <H3Heading>{t('welcomeMessage')}</H3Heading>
      <Paragraph>{t('signInPrompt')}</Paragraph>
    </LoginTitleContainer>
  );
};
