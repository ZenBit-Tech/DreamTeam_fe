import { LabelSM } from '@/assets/styles/typography.ts';
import { StyledLoginInput } from '@/components/Inputs/login/styles.tsx';

const SignInInput = () => {
  return (
    <div>
      <LabelSM>Email</LabelSM>
      <StyledLoginInput type='email' placeholder='john.doe' />
    </div>
  );
};

export default SignInInput;
