import React from "react";
import styled, { css } from "styled-components";
import { ArrowBack } from "@mui/icons-material";
import {
    ArrowButtonProps,
    buttonSizes,
    buttonColors,
    buttonVariants,
    ButtonVariant,
    ButtonSize,
    iconSizes,
    defaultButtonSize
} from "@/assets/styles/constants/buttonConstants";
import { COLORS } from "@/assets/styles/constants/colors";
import { FONTS } from "@/assets/styles/constants/fonts";

const ArrowButtonStyled = styled.button<{
    $buttonColor?: string;
    size: ButtonSize;
    variant: ButtonVariant;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => buttonSizes[size]};
    height: ${({ size }) => buttonSizes[size]};
    background-color: ${({ variant, $buttonColor }) =>
            variant === buttonVariants.outline || variant === buttonVariants.glowing
                    ? "transparent"
                    : $buttonColor || buttonColors[variant as ButtonVariant]};
    color: ${({ variant, $buttonColor }) =>
            variant === buttonVariants.outline || variant === buttonVariants.glowing
                    ? $buttonColor || buttonColors[variant as ButtonVariant]
                    : COLORS.onPrimary};
    border: ${({ variant, $buttonColor }) =>
            variant === buttonVariants.outline || variant === buttonVariants.glowing
                    ? `2px solid ${$buttonColor || buttonColors.primary}`
                    : "none"};
    border-radius: 50%;
    font-weight: 500;
    cursor: ${({ variant }) => (variant === buttonVariants.disabled ? "not-allowed" : "pointer")};
    opacity: ${({ variant }) => (variant === buttonVariants.disabled ? 0.6 : 1)};
    transition: all 0.3s ease;
    font-family: ${FONTS.PUBLIC_SANS};

    &:hover {
        opacity: ${({ variant }) => (variant === buttonVariants.disabled ? 0.6 : 0.8)};
    }

    ${({ variant }) =>
            variant === buttonVariants.glowing &&
            css`
                outline: 3px solid ${buttonColors.glowingBorder};
                outline-offset: 0px;
            `}
`;

export const ArrowButton: React.FC<ArrowButtonProps> = ({
                                                            variant = buttonVariants.primary,
                                                            size = defaultButtonSize,
                                                            buttonColor,
                                                            onClick,
                                                        }) => (
    <ArrowButtonStyled
        $buttonColor={buttonColor}
        variant={variant as ButtonVariant}
        size={size as ButtonSize}
        onClick={onClick}
    >
        <ArrowBack
            style={{
                fontSize: iconSizes[size],
                color: variant === buttonVariants.outline || variant === buttonVariants.glowing
                    ? buttonColor || buttonColors[variant as ButtonVariant]
                    : COLORS.onPrimary,
            }}
        />
    </ArrowButtonStyled>
);
