import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/assets/styles/constants/colors.ts';

export const StyledProfilePicture = styled(Avatar)<{ $pictureType: string }>`
  width: ${(props): string => props.$pictureType || '50px'};
  height: ${(props): string => props.$pictureType || '50px'};
  background-color: ${COLORS.primaryContainer};
  color: ${COLORS.accent500};
`;
