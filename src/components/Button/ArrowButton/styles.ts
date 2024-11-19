import styled, { css } from 'styled-components';

import {
  buttonSizes,
  buttonVariants,
  buttonColors,
  defaultButtonSize,
  ButtonSize,
} from '@/assets/styles/constants/buttonConstants';
import { COLORS } from '@/assets/styles/constants/colors';
import { FONTS } from '@/assets/styles/constants/fonts';

type ButtonVariantType = keyof typeof buttonVariants;
type ButtonColorType = keyof typeof buttonColors;

export const ArrowButtonStyled = styled.button<{
  $variant?: ButtonVariantType;
  $size?: ButtonSize;
  $buttonColor?: ButtonColorType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => buttonSizes[$size || defaultButtonSize]};
  height: ${({ $size }) => buttonSizes[$size || defaultButtonSize]};
  background-color: ${({ $variant, $buttonColor }) =>
    $variant === buttonVariants.outline || $variant === buttonVariants.glowing
      ? 'transparent'
      : buttonColors[$buttonColor as ButtonColorType] ||
        buttonColors[$variant as ButtonColorType] ||
        buttonColors.primary};
  color: ${({ $variant, $buttonColor }) =>
    $variant === buttonVariants.outline || $variant === buttonVariants.glowing
      ? buttonColors[$buttonColor as ButtonColorType] || COLORS.accent500
      : COLORS.onPrimary};
  border: ${({ $variant, $buttonColor }) =>
    $variant === buttonVariants.outline || $variant === buttonVariants.glowing
      ? `2px solid ${buttonColors[$buttonColor as ButtonColorType] || COLORS.accent500}`
      : 'none'};
  border-radius: 50%;
  font-weight: 500;
  font-family: ${FONTS.PUBLIC_SANS};
  cursor: ${({ $variant }) =>
    $variant === buttonVariants.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ $variant }) =>
    $variant === buttonVariants.disabled ? 0.6 : 1};
  transition: all 0.3s ease;

  &:hover {
    opacity: ${({ $variant }) =>
      $variant === buttonVariants.disabled ? 0.6 : 0.8};
  }

  ${({ $variant }) =>
    $variant === buttonVariants.glowing &&
    css`
      outline: 3px solid ${COLORS.accent700};
      outline-offset: 0px;
    `}
`;
