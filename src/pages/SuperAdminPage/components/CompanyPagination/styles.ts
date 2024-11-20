import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors';

export const PaginationWrapper = styled.div`
  display: flex;
  position: relative;

  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  width: 100%;
`;

export const StatusText = styled.div`
  color: ${COLORS.onSurfaceVariant};
`;
export const CenterPagination = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 67%;
  transform: translate(-50%, -50%);
`;
export const StyledSelect = styled.select`
  width: 100px;
  heught: 36px;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid ${COLORS.primaryContainer};
  color: ${COLORS.outline};

  &:focus {
    outline: none;
    border-color: ${COLORS.accent500};
  }
`;
