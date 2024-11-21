import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors';
import { SIZES } from '@/assets/styles/constants/sizes';

export const SearchWrapper = styled.div`
  position: relative;
`;

export const StyledSearchBar = styled.input`
  width: 290px;
  height: 38px;
  margin-right: 16px;
  padding: 0 10px;
  border: 1px solid ${COLORS.secondaryContainer};
  border-radius: 8px;
  font-size: ${SIZES.bodyBase};
  &:focus {
    outline: none;
    border-color: ${COLORS.accent500};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 55%;
  right: 8%;
  transform: translateY(-50%);
  cursor: pointer;
`;
