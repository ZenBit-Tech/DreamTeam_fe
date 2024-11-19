import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';
import { FONTS } from '@/assets/styles/constants/fonts.ts';

export const StyledLoginInput = styled.input`
  width: 400px;
  height: 38px;
  padding: 7px 14px;
  border-radius: 6px;
  font-size: 15px;
  line-height: 22px;
  color: ${COLORS.onSurfaceVariant};
  font-family: ${FONTS.PUBLIC_SANS};
  border: 1px solid ${COLORS.secondaryContainer};
  box-sizing: border-box;
  gap: 12px;
  opacity: 1;
  ::placeholder {
    color: ${COLORS.onSurfaceVariant};
    opacity: 1;
  }
`;
