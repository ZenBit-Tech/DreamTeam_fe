import React from 'react';

import { StyledImage } from './styles';

import dreamteamLogo from '@/assets/images/dreamteam-logo.png';

export const DreamTeamLogo = (): React.ReactNode => {
  return (
    <div>
      <StyledImage src={dreamteamLogo} alt='' />
    </div>
  );
};
