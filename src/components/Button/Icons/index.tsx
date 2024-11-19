import { Box } from '@mui/material';
import React from 'react';

import AddIcon from '@/assets/images/icons/AddIcon.png';
import AddWhiteIcon from '@/assets/images/icons/AddWhiteIcon.png';
import CloseBlackIcon from '@/assets/images/icons/CloseBlackIcon.png';
import CloseIcon from '@/assets/images/icons/CloseIcon.png';
import DeleteIcon from '@/assets/images/icons/DeleteIcon.png';
import EditIcon from '@/assets/images/icons/EditIcon.png';
import ForwardIcon from '@/assets/images/icons/ForwardIcon.png';
import SearchIcon from '@/assets/images/icons/SearchIcon.png';
import SwapIcon from '@/assets/images/icons/SwapIcon.png';
import { SIZES } from '@/assets/styles/constants/sizes';
import { IconType } from '@/assets/styles/types';

interface IconSetProps {
  iconType: IconType;
  size?: number;
}

const iconComponents = {
  [IconType.Add]: AddIcon,
  [IconType.AddWhite]: AddWhiteIcon,
  [IconType.Edit]: EditIcon,
  [IconType.Forward]: ForwardIcon,
  [IconType.Delete]: DeleteIcon,
  [IconType.Search]: SearchIcon,
  [IconType.Swap]: SwapIcon,
  [IconType.Close]: CloseIcon,
  [IconType.CloseBlack]: CloseBlackIcon,
};

export const IconSet: React.FC<IconSetProps> = ({
  iconType,
  size = parseInt(SIZES.iconSize, 10),
}) => {
  const iconPath = iconComponents[iconType];

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <img src={iconPath} width={size} height={size} alt={iconType} />
    </Box>
  );
};
