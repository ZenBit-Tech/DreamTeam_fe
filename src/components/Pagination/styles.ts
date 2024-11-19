import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';
import { FONTS } from '@/assets/styles/constants/fonts.ts';
import { SIZES } from '@/assets/styles/constants/sizes.ts';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SIZES.bodyStrong};
  font-family: ${FONTS.PUBLIC_SANS};
  font-size: ${SIZES.label};
  color: ${COLORS.onSurfaceVariant};
`;

export const PaginationButton = styled.button<{ active?: string }>`
  background-color: ${(props) =>
    props.active === 'true' ? COLORS.accent500 : COLORS.surfaceContainerLow};
  color: ${(props) =>
    props.active === 'true' ? COLORS.onPrimary : COLORS.onSurface};
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0 4px;
  cursor: ${(props) => (props.active === 'true' ? 'default' : 'pointer')};
  opacity: ${(props) => (props.active === 'true' ? 1 : 0.8)};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    background-color: ${(props) =>
      props.active === 'true' ? COLORS.accent600 : COLORS.surfaceContainerHigh};
  }
`;
