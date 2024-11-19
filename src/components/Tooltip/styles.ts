import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';
import { SIZES } from '@/assets/styles/constants/sizes.ts';

export const Tooltip = styled.div`
  position: absolute;
  background-color: ${COLORS.onPrimary};
  color: ${COLORS.onSurface};
  padding: 10px;
  border-radius: 8px;
  font-size: ${SIZES.label};
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  white-space: nowrap;
  z-index: 100;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  border: 1px solid ${COLORS.outline};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: ${COLORS.onPrimary} transparent transparent transparent;
  }

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 7px;
    border-style: solid;
    border-color: ${COLORS.outline} transparent transparent transparent;
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;
