import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';
import { FONTS } from '@/assets/styles/constants/fonts.ts';
import { SIZES } from '@/assets/styles/constants/sizes';
import { STYLES } from '@/assets/styles/constants/stylesConstants';

export const SignInBtn = styled.button`
  width: 100%;
  height: 38px;
  padding: 7px 14px;
  border-radius: 6px;
  font-size: ${SIZES.paragraph};
  line-height: 22px;
  color: ${COLORS.onPrimary};
  font-family: ${FONTS.PUBLIC_SANS};
  background-color: ${COLORS.accent500};
  margin-top: 14px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: ${COLORS.accent600};
    box-shadow: 0 6px 8px rgba(${STYLES.boxShadow}, 0.15);
  }

  &:active {
    background-color: ${COLORS.accent700};
    box-shadow: 0 2px 4px rgba(${STYLES.boxShadow}, 0.2);
  }

  &:focus {
    outline: 2px solid ${COLORS.accent200};
  }

  &:disabled {
    background-color: ${COLORS.disabled};
    color: ${COLORS.onSurface};
    cursor: not-allowed;
    box-shadow: none;
  }
`;
