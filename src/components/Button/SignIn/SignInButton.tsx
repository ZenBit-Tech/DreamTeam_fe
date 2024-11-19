import { useTranslation } from 'react-i18next';

import { SignInBtn } from '@/components/Button/SignIn/styles.ts';

interface SignInButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export const SignInButton = ({
  onClick,
  isLoading,
  disabled,
}: SignInButtonProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <SignInBtn type='button' onClick={onClick} disabled={isLoading || disabled}>
      {isLoading ? t('buttonLoading') : t('signInButton')}
    </SignInBtn>
  );
};
