import styled from 'styled-components';

import { FONTS } from '@/assets/styles/constants/fonts';
import { SIZES } from '@/assets/styles/constants/sizes';

interface TitleProps {
  color: string;
}

export const Title = styled.div<TitleProps>`
  font-family: ${FONTS.AKSHAR};
  font-size: ${SIZES.logoTitle};
  font-weight: 500;
  line-height: 36px;
  padding-left: 8px;
  color: ${(props): string => props.color};
`;
