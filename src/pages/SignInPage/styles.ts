import { Box } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';
import { STYLES } from '@/assets/styles/constants/stylesConstants';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.signInContainer};
  background: linear-gradient(
    119.36deg,
    ${COLORS.onPrimary} 0%,
    ${COLORS.accent50} 50%,
    ${COLORS.accent100} 100%
  );
`;

export const SignInCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 653px;
  min-height: 381px;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 10px 30px rgba(${STYLES.boxShadow}, 0.1);
  background-color: ${COLORS.onPrimary};
  text-align: center;
`;

export const SignInTitleWithLogo = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 67px;
  margin-bottom: 20px;
`;

export const SignInLogo = styled(Box)`
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
`;
