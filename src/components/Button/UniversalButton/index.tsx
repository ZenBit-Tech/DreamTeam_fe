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
import { FONTS } from '@/assets/styles/constants/fonts.ts';
import { ButtonStyled } from '@/components/Button/UniversalButton/styles';

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
      {icon && (
        <span
          style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}
        >
          {icon}
        </span>
      )}
      <TypographyComponent
        style={{ lineHeight: 'normal', fontFamily: FONTS.PUBLIC_SANS }}
      >
        {children}
      </TypographyComponent>
      {iconRight && (
        <span
          style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}
        >
          {iconRight}
        </span>
      )}
    </ButtonStyled>
  );
};
