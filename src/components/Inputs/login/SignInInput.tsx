import { LabelSM } from '@/assets/styles/typography.ts';
import { StyledLoginInput } from '@/components/Inputs/SignIn/styles';

const SignInInput = (): JSX.Element => {
  return (
    <div>
      <LabelSM>Email</LabelSM>
      <StyledLoginInput type='email' placeholder='john.doe' />
    </div>
  );
};

export default SignInInput;
