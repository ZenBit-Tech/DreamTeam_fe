import {
  CreateRouteBtn,
  IconWrapper,
} from '@/components/Button/CreateRouteButton/styles.ts';

export const CreateRouteButton = (): JSX.Element => {
  return (
    <CreateRouteBtn>
      <IconWrapper>+</IconWrapper>
      Create route
    </CreateRouteBtn>
  );
};
