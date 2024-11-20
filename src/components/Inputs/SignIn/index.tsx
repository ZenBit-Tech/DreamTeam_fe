import { useTranslation } from 'react-i18next';
import { StyledLoginInput } from '@/components/Inputs/SignIn/styles.tsx';

interface SignInInputProps {
  email: string;
  error: string;
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignInInput = ({
  email,
  error,
  onEmailChange,
}: SignInInputProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <StyledLoginInput
        variant='outlined'
        label={t('emailLabel')}
        type='email'
        placeholder='john.doe'
        helperText={error && t('emailHelperText')}
        value={email}
        onChange={onEmailChange}
      />
    </div>
  );
};
