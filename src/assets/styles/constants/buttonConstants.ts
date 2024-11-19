import { ReactNode } from 'react';

import { COLORS } from '@/assets/styles/constants/colors';
import { BodyBase, BodyBaseLarge, BodySmall } from '@/assets/styles/typography';

export const buttonVariants = {
  primary: 'primary',
  secondary: 'secondary',
  secondaryOutline: 'secondaryOutline',
  outline: 'outline',
  disabled: 'disabled',
  glowing: 'glowing',
  dotted: 'dotted',
};

export type ButtonVariant = keyof typeof buttonVariants;

export const buttonSizes = {
  small: '32px',
  mediumSmall: '40px',
  medium: '48px',
  large: '56px',
  huge: '38px',
};

export type ButtonSize = keyof typeof buttonSizes;

export const iconSizes = {
  small: '16px',
  medium: '20px',
  large: '24px',
  huge: '28px',
};

export const defaultButtonSize: ButtonSize = 'medium';

export const buttonColors = {
  primary: COLORS.accent500,
  secondary: COLORS.accent700,
  outline: COLORS.accent500,
  disabled: COLORS.disabled,
  glowing: COLORS.accent500,
  glowingBorder: COLORS.accent700,
  dotted: COLORS.accent500,
};

export type ButtonColors = keyof typeof buttonColors;

export const typographyStyles = {
  small: BodySmall,
  medium: BodyBase,
  large: BodyBaseLarge,
  huge: BodyBaseLarge,
  mediumSmall: BodyBase,
};

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconRight?: ReactNode;
  buttonColor?: ButtonColors;
  dotColor?: string;
  onClick?: () => void;
  children: ReactNode;
};

export type ArrowButtonProps = {
  variant?: Exclude<ButtonVariant, 'dotted'>;
  size?: Exclude<ButtonSize, 'huge'>;
  buttonColor?: ButtonColors;
  onClick?: () => void;
};
