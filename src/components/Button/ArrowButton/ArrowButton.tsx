import React from "react";
import styled, { css } from "styled-components";
import { ArrowBack } from "@mui/icons-material";
import { ArrowButtonProps, buttonSizes, buttonColors } from "@/assets/styles/constants/buttonConstants";
import { COLORS } from "@/assets/styles/constants/colors";
import { FONTS } from "@/assets/styles/constants/fonts";
import { buttonVariants } from "@/assets/styles/constants/buttonConstants";

const ArrowButtonStyled = styled.button<{
    $buttonColor?: string;
} & ArrowButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => buttonSizes[size || "medium"]};
    height: ${({ size }) => buttonSizes[size || "medium"]};
    background-color: ${({ variant, $buttonColor }) =>
            variant === buttonVariants.outline || variant === buttonVariants.glowing
                    ? "transparent"
                    : $buttonColor || buttonColors[variant || "primary"]};
    color: ${({ variant, $buttonColor }) =>
            variant === buttonVariants.outline || variant === buttonVariants.glowing
                    ? $buttonColor || buttonColors[variant || "primary"]
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
                                                            variant = "primary",
                                                            size = "medium",
                                                            buttonColor,
                                                            onClick,
                                                        }) => (
    <ArrowButtonStyled
        $buttonColor={buttonColor}
        variant={variant}
        size={size}
        onClick={onClick}
    >
        <ArrowBack
            style={{
                fontSize: size === "large" ? 24 : 20,
                color: variant === buttonVariants.outline || variant === buttonVariants.glowing
                    ? buttonColor || buttonColors[variant]
                    : COLORS.onPrimary,
            }}
        />
    </ArrowButtonStyled>
);
