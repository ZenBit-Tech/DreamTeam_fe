import React from 'react';

import { PageContainer, LeftContainer, RightContainer } from './styles.ts';

import { SignInButton } from '@/components/Button/SignIn/SignInButton.tsx';
import { SignInInput } from '@/components/Inputs/SignIn';
import { LogoWithIcons } from '@/components/LogoWithIcons';
import { SignInTitle } from '@/components/Titles/SignIn';

export const SignInPage: React.FC = () => {
  return (
    <PageContainer>
      <LeftContainer>
        <LogoWithIcons />
      </LeftContainer>
      <RightContainer>
        <SignInTitle />
        <SignInInput />
        <SignInButton />
      </RightContainer>
    </PageContainer>
  );
};
