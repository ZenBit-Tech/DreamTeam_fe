import React from 'react';

import {
  typographyStyles,
  buttonVariants,
  ButtonProps,
  defaultButtonSize,
  ButtonVariant,
  ButtonColors,
  ButtonSize,
} from '@/assets/styles/constants/buttonConstants';
import {
  ButtonStyled,
  IconWrapper,
} from '@/components/Button/UniversalButton/styles';

export const UniversalButton: React.FC<ButtonProps> = ({
  variant = buttonVariants.primary,
  size = defaultButtonSize,
  icon,
  iconRight,
  buttonColor,
  dotColor,
  onClick,
  children,
}) => {
  const buttonColorKey = buttonColor as ButtonColors;
  const TypographyComponent = typographyStyles[size || defaultButtonSize];

  return (
    <ButtonStyled
      $variant={variant as ButtonVariant}
      $size={size as ButtonSize}
      $buttonColor={buttonColorKey}
      $dotColor={dotColor}
      onClick={onClick}
    >
      {icon && <IconWrapper position='left'>{icon}</IconWrapper>}
      <TypographyComponent>{children}</TypographyComponent>
      {iconRight && <IconWrapper position='right'>{iconRight}</IconWrapper>}
    </ButtonStyled>
  );
};
