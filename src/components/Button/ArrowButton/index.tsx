import { ArrowBack } from '@mui/icons-material';
import React from 'react';

import {
  buttonVariants,
  ButtonSize,
  defaultButtonSize,
  ArrowButtonProps,
  iconSizes,
  buttonColors,
  ButtonVariant,
} from '@/assets/styles/constants/buttonConstants';
import { COLORS } from '@/assets/styles/constants/colors';
import { ArrowButtonStyled } from '@/components/Button/ArrowButton/styles';

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  variant = buttonVariants.primary,
  size = defaultButtonSize,
  buttonColor,
  onClick,
}) => {
  const buttonColorKey = buttonColor as keyof typeof buttonColors;

  const isOutlineOrGlowing =
    variant === buttonVariants.outline || variant === buttonVariants.glowing;

  const iconColor = isOutlineOrGlowing
    ? buttonColors[buttonColorKey] || COLORS.accent500
    : COLORS.onPrimary;

  const fontSize = iconSizes[size as keyof typeof iconSizes];

  return (
    <ArrowButtonStyled
      $variant={variant as ButtonVariant}
      $size={size as ButtonSize}
      $buttonColor={buttonColorKey}
      fontSize={fontSize}
      color={iconColor}
      onClick={onClick}
    >
      <ArrowBack />
    </ArrowButtonStyled>
  );
};
