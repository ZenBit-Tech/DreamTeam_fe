import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Logo = styled.img`
  width: 327px;
  height: 315px;
`;

export const Icon = styled.img`
  width: 58px;
  height: 58px;
`;

export const IconWrapperTopLeft = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 90px;
  height: 90px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 2px solid ${COLORS.accent500};
`;

export const IconWrapperBottomRight = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 90px;
  height: 90px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 2px solid ${COLORS.accent500};
`;
