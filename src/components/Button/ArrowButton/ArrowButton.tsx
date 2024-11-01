import React from "react";
import styled, { css } from "styled-components";
import { ArrowBack } from "@mui/icons-material";
import {ArrowButtonProps, buttonSizes, defaultButtonColors} from "@/assets/styles/constants/buttonConstants.ts";

const ArrowButtonStyled = styled.button<{
    $buttonColor?: string;
} & ArrowButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => buttonSizes[size || "medium"]};
    height: ${({ size }) => buttonSizes[size || "medium"]};
    background-color: ${({ variant, $buttonColor }) =>
            variant === "outline" || variant === "glowing"
                    ? "transparent"
                    : $buttonColor || defaultButtonColors[variant || "primary"]};
    color: ${({ variant, $buttonColor }) =>
            variant === "outline" || variant === "glowing"
                    ? $buttonColor || defaultButtonColors[variant || "primary"]
                    : "#fff"};
    border: ${({ variant, $buttonColor }) =>
            variant === "outline" || variant === "glowing"
                    ? `2px solid ${$buttonColor || defaultButtonColors.primary}`
                    : "none"};
    border-radius: 50%;
    font-weight: 500;
    cursor: ${({ variant }) => (variant === "disabled" ? "not-allowed" : "pointer")};
    opacity: ${({ variant }) => (variant === "disabled" ? 0.6 : 1)};
    transition: all 0.3s ease;

    &:hover {
        opacity: ${({ variant }) => (variant === "disabled" ? 0.6 : 0.8)};
    }

    ${({ variant }) =>
            variant === "glowing" &&
            css`
                outline: 3px solid ${defaultButtonColors.glowingBorder};
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
                color: variant === "outline" || variant === "glowing"
                    ? buttonColor || defaultButtonColors[variant]
                    : "#fff",
            }}
        />
    </ArrowButtonStyled>
);

