import styled, { css, RuleSet } from 'styled-components';

import {
  buttonSizes,
  buttonVariants,
  buttonColors,
  defaultButtonSize,
  ButtonSize,
} from '@/assets/styles/constants/buttonConstants';
import { COLORS } from '@/assets/styles/constants/colors.ts';
import { FONTS } from '@/assets/styles/constants/fonts.ts';
import { SIZES } from '@/assets/styles/constants/sizes.ts';
import { STYLES } from '@/assets/styles/constants/stylesConstants';

type ButtonVariantType = keyof typeof buttonVariants;
type ButtonColorType = keyof typeof buttonColors;

export const ButtonStyled = styled.button<{
  $variant?: ButtonVariantType;
  $size?: ButtonSize;
  $buttonColor?: ButtonColorType;
  $dotColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${STYLES.paddingHorizontal};
  height: ${({ $size }): string => buttonSizes[$size || defaultButtonSize]};

  background-color: ${({ $variant, $buttonColor }): string =>
    $variant === buttonVariants.outline ||
    $variant === buttonVariants.secondaryOutline ||
    $variant === buttonVariants.dotted ||
    $variant === buttonVariants.glowing
      ? 'transparent'
      : buttonColors[$buttonColor as ButtonColorType] ||
        buttonColors[$variant as ButtonColorType] ||
        buttonColors.primary};

  color: ${({ $variant, $buttonColor }): string =>
    $variant === buttonVariants.outline ||
    $variant === buttonVariants.secondaryOutline ||
    $variant === buttonVariants.dotted ||
    $variant === buttonVariants.glowing
      ? buttonColors[$buttonColor as ButtonColorType] || COLORS.accent500
      : COLORS.onPrimary};

  border: ${({ $variant, $buttonColor }): string =>
    $variant === buttonVariants.outline ||
    $variant === buttonVariants.dotted ||
    $variant === buttonVariants.glowing
      ? `2px solid ${buttonColors[$buttonColor as ButtonColorType] || COLORS.accent500}`
      : 'none'};

  border-radius: ${STYLES.borderRadius};
  font-weight: 500;
  font-size: ${SIZES.bodyBase};
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

  ${({ $variant, $dotColor }): false | RuleSet =>
    $variant === buttonVariants.dotted &&
    css`
      display: flex;
      align-items: center;
      gap: ${STYLES.paddingHorizontal};

      &::before {
        content: '•';
        font-size: ${SIZES.label};
        color: ${$dotColor || COLORS.accent500};
      }
    `}

  ${({ $variant }): false | RuleSet =>
    $variant === buttonVariants.glowing &&
    css`
      outline: ${STYLES.outlineWidth} solid ${COLORS.accent700};
      outline-offset: 0;
    `}
`;

export const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  margin-right: ${({ position }): string =>
    position === 'left' ? '8px' : '0'};
  margin-left: ${({ position }): string =>
    position === 'right' ? '8px' : '0'};
`;
