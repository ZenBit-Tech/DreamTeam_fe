import styled, { css, RuleSet } from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors';

interface PopupContainerProps {
  type: 'error' | 'success';
}

const signInPopupStyles = {
  error: css`
    background-color: ${COLORS.onError};
    border: 1px solid ${COLORS.error};
    color: ${COLORS.error};
  `,
  success: css`
    background-color: ${COLORS.onPrimary};
    border: 1px solid ${COLORS.success};
    color: ${COLORS.success};
  `,
};

export const SignInPopupContainer = styled.div<PopupContainerProps>`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;

  ${({ type }): RuleSet<PopupContainerProps> => signInPopupStyles[type]}
`;
