import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import React from 'react';

import { SignInTitle } from './components/SignIn';
import {
  PageContainer,
  SignInCard,
  SignInLogo,
  SignInTitleWithLogo,
} from './styles';

import { COLORS } from '@/assets/styles/constants/colors';
import { SignInButton } from '@/components/Button/SignIn/SignInButton';
import { SignInInput } from '@/components/Inputs/SignIn';
import { LogoSvg } from '@/components/LogoWithIcons/LogoSvg';
import { PrivacyPolicyText } from '@/components/PrivacyPolicyText';
import { SignInPopup } from '@/components/SignInPopup';
import { useEmailValidation } from '@/hooks/useEmailValidation';
import { useSendLoginLink } from '@/hooks/useSendLoginLink';
import { useSignInPopup } from '@/hooks/useSignInPopup';
import { useTokenLogin } from '@/hooks/useTokenLogin';

export const SignInPage: React.FC = () => {
  const { email, emailError, handleEmailChange } = useEmailValidation();
  const { token, isLoginError } = useTokenLogin();
  const { isLoading, isSuccess, isError, handleSendLoginLink, error } =
    useSendLoginLink();

  const popup = useSignInPopup({
    isError,
    isLoginError,
    token,
    isSuccess,
    error: error as FetchBaseQueryError,
  });

  const handleLoginClick = (): void => {
    handleSendLoginLink(email);
  };

  return (
    <PageContainer>
      <SignInCard>
        <SignInTitleWithLogo>
          <SignInLogo>
            <LogoSvg color={COLORS.accent300} />
          </SignInLogo>
          <SignInTitle />
        </SignInTitleWithLogo>
        <SignInInput
          email={email}
          onEmailChange={handleEmailChange}
          error={emailError}
        />
        <SignInButton
          onClick={handleLoginClick}
          isLoading={isLoading}
          disabled={!!emailError || !email}
        />
        <PrivacyPolicyText />
      </SignInCard>
      {popup && <SignInPopup text={popup.text} type={popup.type} />}
    </PageContainer>
  );
};
