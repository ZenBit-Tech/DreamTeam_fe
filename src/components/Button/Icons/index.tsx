import React from 'react';
import { Box } from '@mui/material';
import AddIcon from '@/assets/images/icons/AddIcon.png';
import EditIcon from '@/assets/images/icons/EditIcon.png';
import ForwardIcon from '@/assets/images/icons/ForwardIcon.png';
import DeleteIcon from '@/assets/images/icons/DeleteIcon.png';
import SwapIcon from '@/assets/images/icons/SwapIcon.png';
import CloseIcon from '@/assets/images/icons/CloseIcon.png';
import { IconType } from '@/assets/styles/types';
import { SIZES } from '@/assets/styles/constants/sizes';

interface IconSetProps {
    iconType: IconType;
    size?: number;
    color?: string;
}

const iconComponents = {
    [IconType.Add]: AddIcon,
    [IconType.Edit]: EditIcon,
    [IconType.Forward]: ForwardIcon,
    [IconType.Delete]: DeleteIcon,
    [IconType.Swap]: SwapIcon,
    [IconType.Close]: CloseIcon
};

export const IconSet: React.FC<IconSetProps> = ({ iconType, size = parseInt(SIZES.iconSize, 10) }) => {
    const iconPath = iconComponents[iconType];

    return (
        <Box>
            <img src={iconPath} width={size} height={size} alt={iconType} />
        </Box>
    );
};
