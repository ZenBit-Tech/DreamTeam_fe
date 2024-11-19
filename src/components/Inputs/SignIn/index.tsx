import { useTranslation } from 'react-i18next';

import { LabelSM } from '@/assets/styles/typography.ts';
import { StyledLoginInput } from '@/components/Inputs/SignIn/styles.tsx';

export const SignInInput = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LabelSM>{t('emailLabel')}</LabelSM>
      <StyledLoginInput type='email' placeholder='john.doe' />
    </div>
  );
};
