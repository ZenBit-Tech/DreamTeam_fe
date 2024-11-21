import { Dialog } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors';

export const StyledDialog = styled(Dialog)`
  width: 375px;
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  position: absolute;
  top: -35px;
  right: -35px;
  border: none;
  cursor: pointer;
  background-color: ${COLORS.onTertiary};
`;
