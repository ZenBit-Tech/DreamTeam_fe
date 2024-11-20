import React from 'react';
import styled, { css, RuleSet } from 'styled-components';

import { IconWrapper } from './styles';

import {
  buttonSizes,
  typographyStyles,
  buttonVariants,
  buttonColors,
  ButtonProps,
  ButtonVariant,
  ButtonSize,
} from '@/assets/styles/constants/buttonConstants';
import { COLORS } from '@/assets/styles/constants/colors';
import { SIZES } from '@/assets/styles/constants/sizes';
import { STYLES } from '@/assets/styles/constants/stylesConstants';

const ButtonStyled = styled.button<{
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $buttonColor?: string;
  $dotColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${STYLES.paddingHorizontal};
  height: ${({ $size }): string => buttonSizes[$size || 'medium']};
  background-color: ${({ $variant, $buttonColor }): string =>
    $variant === buttonVariants.outline ||
    $variant === buttonVariants.dotted ||
    $variant === buttonVariants.glowing
      ? 'transparent'
      : $buttonColor || buttonColors[$variant || 'primary']};
  color: ${({ $variant, $buttonColor }): string =>
    $variant === buttonVariants.outline ||
    $variant === buttonVariants.dotted ||
    $variant === buttonVariants.glowing
      ? $buttonColor || buttonColors.primary
      : COLORS.onPrimary};
  border: ${({ $variant, $buttonColor }): string =>
    $variant === buttonVariants.outline ||
    $variant === buttonVariants.dotted ||
    $variant === buttonVariants.glowing
      ? `2px solid ${$buttonColor || buttonColors.primary}`
      : 'none'};
  border-radius: ${STYLES.borderRadius};
  font-weight: 500;
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
      gap: ${STYLES.paddingHorizontal};
      &::before {
        content: '•';
        font-size: ${SIZES.fontSizeDot};
        color: ${$dotColor || buttonColors.primary};
      }
    `}

  ${({ $variant }): false | RuleSet =>
    $variant === buttonVariants.glowing &&
    css`
      outline: ${STYLES.glowingOutlineWidth} solid ${buttonColors.glowingBorder};
      outline-offset: 0;
    `}
`;

export const UniversalButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  iconRight,
  buttonColor,
  dotColor,
  onClick,
  children,
}) => {
  const TypographyComponent = typographyStyles[size || 'medium'];

  return (
    <ButtonStyled
      $variant={variant}
      $size={size}
      $buttonColor={buttonColor}
      $dotColor={dotColor}
      onClick={onClick}
    >
      {icon && <IconWrapper position='left'>{icon}</IconWrapper>}
      <TypographyComponent>{children}</TypographyComponent>
      {iconRight && <IconWrapper position='right'>{iconRight}</IconWrapper>}
    </ButtonStyled>
  );
};
