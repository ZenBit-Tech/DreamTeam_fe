import React from "react";
import { ArrowBack } from "@mui/icons-material";
import {
    buttonVariants,
    ButtonSize,
    defaultButtonSize,
    ArrowButtonProps,
    iconSizes,
    buttonColors, ButtonVariant,
} from "@/assets/styles/constants/buttonConstants";
import { COLORS } from "@/assets/styles/constants/colors";
import { ArrowButtonStyled } from "@/components/Button/ArrowButton/styles";

export const ArrowButton: React.FC<ArrowButtonProps> = ({
                                                            variant = buttonVariants.primary,
                                                            size = defaultButtonSize,
                                                            buttonColor,
                                                            onClick,
                                                        }) => {
    const buttonColorKey = buttonColor as keyof typeof buttonColors;

    return (
        <ArrowButtonStyled
            $variant={variant as ButtonVariant}
            $size={size as ButtonSize}
            $buttonColor={buttonColorKey}
            onClick={onClick}
        >
            <ArrowBack
                style={{
                    fontSize: iconSizes[size],
                    color:
                        variant === buttonVariants.outline || variant === buttonVariants.glowing
                            ? buttonColors[buttonColorKey] || COLORS.accent500
                            : COLORS.onPrimary,
                }}
            />
        </ArrowButtonStyled>
    );
};
