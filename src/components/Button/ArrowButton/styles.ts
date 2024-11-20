import styled, { css, RuleSet } from 'styled-components';

import {
  buttonSizes,
  buttonVariants,
  buttonColors,
  defaultButtonSize,
  ButtonSize,
} from '@/assets/styles/constants/buttonConstants';
import { COLORS } from '@/assets/styles/constants/colors';
import { FONTS } from '@/assets/styles/constants/fonts';
import { STYLES } from '@/assets/styles/constants/stylesConstants';

type ButtonVariantType = keyof typeof buttonVariants;
type ButtonColorType = keyof typeof buttonColors;

export const ArrowButtonStyled = styled.button<{
  $variant?: ButtonVariantType;
  $size?: ButtonSize;
  $buttonColor?: ButtonColorType;
  fontSize: string;
  color: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }): string => buttonSizes[$size || defaultButtonSize]};
  height: ${({ $size }): string => buttonSizes[$size || defaultButtonSize]};
  background-color: ${({ $variant, $buttonColor }): string =>
    $variant === buttonVariants.outline || $variant === buttonVariants.glowing
      ? 'transparent'
      : buttonColors[$buttonColor as ButtonColorType] ||
        buttonColors[$variant as ButtonColorType] ||
        buttonColors.primary};
  color: ${({ $variant, $buttonColor }): string =>
    $variant === buttonVariants.outline || $variant === buttonVariants.glowing
      ? buttonColors[$buttonColor as ButtonColorType] || COLORS.accent500
      : COLORS.onPrimary};
  border: ${({ $variant, $buttonColor }): string =>
    $variant === buttonVariants.outline || $variant === buttonVariants.glowing
      ? `2px solid ${buttonColors[$buttonColor as ButtonColorType] || COLORS.accent500}`
      : 'none'};
  border-radius: 50%;
  font-weight: 500;
  font-family: ${FONTS.PUBLIC_SANS};
  cursor: ${({ $variant }): string =>
    $variant === buttonVariants.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ $variant }): number =>
    $variant === buttonVariants.disabled ? STYLES.opacityDisabled : 1};
  transition: all ${STYLES.transitionDuration} ease;

  &:hover {
    opacity: ${({ $variant }): number =>
      $variant === buttonVariants.disabled
        ? STYLES.opacityDisabled
        : STYLES.opacityHover};
  }

  ${({ $variant }): false | RuleSet =>
    $variant === buttonVariants.glowing &&
    css`
      outline: 3px solid ${COLORS.accent700};
      outline-offset: 0px;
    `}

  svg {
    font-size: ${({ fontSize }): string => fontSize};
    color: ${({ color }): string => color};
  }
`;
