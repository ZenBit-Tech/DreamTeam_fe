import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';
import { FONTS } from '@/assets/styles/constants/fonts.ts';
import { SIZES } from '@/assets/styles/constants/sizes.ts';

export const TableContainer = styled.div`
  overflow-x: auto;
  margin: ${SIZES.paragraph};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  color: ${COLORS.onSurfaceVariant};
  font-family: ${FONTS.PUBLIC_SANS};
  font-weight: 300;
  font-size: ${SIZES.label};
  line-height: calc(${SIZES.label} * 1.2);
  opacity: 0.9;
  th {
    padding: ${SIZES.paragraph};
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: ${COLORS.surfaceBright};
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${COLORS.surfaceContainerLow};
  }

  &:hover {
    background-color: ${COLORS.surfaceContainerHigh};
  }
`;

export const TableCell = styled.td`
  padding: ${SIZES.paragraph};
  text-align: left;
  border-bottom: 1px solid ${COLORS.outlineVariant};
`;
