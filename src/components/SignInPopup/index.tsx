import React from 'react';

import { SignInPopupContainer } from './styles';

interface SignInPopupProps {
  type: 'error' | 'success';
  text: string;
}

export const SignInPopup: React.FC<SignInPopupProps> = ({ text, type }) => {
  return <SignInPopupContainer type={type}>{text}</SignInPopupContainer>;
};
