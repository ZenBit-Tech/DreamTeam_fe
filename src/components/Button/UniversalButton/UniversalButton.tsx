import React from 'react';
import styled, { css } from 'styled-components';

import {
  buttonSizes,
  typographyStyles,
  buttonVariants,
  buttonColors,
  ButtonProps,
  ButtonVariant,
  ButtonSize,
} from '@/assets/styles/constants/buttonConstants';

const ButtonStyled = styled.button<{
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $buttonColor?: string;
  $dotColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: ${({ $size }) => buttonSizes[$size || 'medium']};
  background-color: ${({ $variant, $buttonColor }) =>
    $variant === buttonVariants.outline ||
    $variant === buttonVariants.dotted ||
    $variant === buttonVariants.glowing
      ? 'transparent'
      : $buttonColor || buttonColors[$variant || 'primary']};
  color: ${({ $variant, $buttonColor }) =>
    $variant === buttonVariants.outline ||
    $variant === buttonVariants.dotted ||
    $variant === buttonVariants.glowing
      ? $buttonColor || buttonColors.primary
      : '#fff'};
  border: ${({ $variant, $buttonColor }) =>
    $variant === buttonVariants.outline ||
    $variant === buttonVariants.dotted ||
    $variant === buttonVariants.glowing
      ? `2px solid ${$buttonColor || buttonColors.primary}`
      : 'none'};
  border-radius: 8px;
  font-weight: 500;
  cursor: ${({ $variant }) =>
    $variant === buttonVariants.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ $variant }) =>
    $variant === buttonVariants.disabled ? 0.6 : 1};
  transition: all 0.3s ease;

  &:hover {
    opacity: ${({ $variant }) =>
      $variant === buttonVariants.disabled ? 0.6 : 0.8};
  }

  ${({ $variant, $dotColor }) =>
    $variant === buttonVariants.dotted &&
    css`
      gap: 16px;
      &::before {
        content: '•';
        font-size: 20px;
        color: ${$dotColor || buttonColors.primary};
      }
    `}

  ${({ $variant }) =>
    $variant === buttonVariants.glowing &&
    css`
      outline: 3px solid ${buttonColors.glowingBorder};
      outline-offset: 0px;
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
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      <TypographyComponent>{children}</TypographyComponent>
      {iconRight && <span style={{ marginLeft: '8px' }}>{iconRight}</span>}
    </ButtonStyled>
  );
};
