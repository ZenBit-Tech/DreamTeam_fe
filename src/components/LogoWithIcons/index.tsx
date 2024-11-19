import React from 'react';

import { LogoSvg } from './LogoSvg';
import { LogoTitle } from './LogoTitle';

import { Container } from '@/components/LogoWithIcons/styles.ts';

interface LogoWithIconsProps {
  logoSvgColor: string;
  logoTitleColor: string;
}

export const LogoWithIcons: React.FC<LogoWithIconsProps> = ({
  logoSvgColor,
  logoTitleColor,
}): JSX.Element => {
  return (
    <Container>
      <LogoSvg color={logoSvgColor} />
      <LogoTitle color={logoTitleColor} />
    </Container>
  );
};
