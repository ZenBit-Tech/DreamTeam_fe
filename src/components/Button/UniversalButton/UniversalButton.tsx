import React from "react";
import styled, { css } from "styled-components";
import { buttonSizes, defaultButtonColors, typographyStyles } from "@/assets/styles/constants/buttonConstants.ts";

type ButtonProps = {
    variant?: "primary" | "secondary" | "outline" | "disabled" | "dotted" | "glowing";
    size?: "small" | "medium" | "large";
    icon?: React.ReactNode;
    iconRight?: React.ReactNode;
    buttonColor?: string;
    dotColor?: string;
    onClick?: () => void;
    children: React.ReactNode;
};

const ButtonStyled = styled.button<{
    $variant?: "primary" | "secondary" | "outline" | "disabled" | "dotted" | "glowing";
    $size?: "small" | "medium" | "large";
    $buttonColor?: string;
    $dotColor?: string;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    height: ${({ $size }) => buttonSizes[$size || "medium"]};
    background-color: ${({ $variant, $buttonColor }) =>
            $variant === "outline" || $variant === "dotted" || $variant === "glowing"
                    ? "transparent"
                    : $buttonColor || defaultButtonColors[$variant || "primary"]};
    color: ${({ $variant, $buttonColor }) =>
            $variant === "outline" || $variant === "dotted" || $variant === "glowing"
                    ? $buttonColor || defaultButtonColors.primary
                    : "#fff"};
    border: ${({ $variant, $buttonColor }) =>
            $variant === "outline" || $variant === "dotted" || $variant === "glowing"
                    ? `2px solid ${$buttonColor || defaultButtonColors.primary}`
                    : "none"};
    border-radius: 8px;
    font-weight: 500;
    cursor: ${({ $variant }) => ($variant === "disabled" ? "not-allowed" : "pointer")};
    opacity: ${({ $variant }) => ($variant === "disabled" ? 0.6 : 1)};
    transition: all 0.3s ease;

    &:hover {
        opacity: ${({ $variant }) => ($variant === "disabled" ? 0.6 : 0.8)};
    }

    ${({ $variant, $dotColor }) =>
            $variant === "dotted" &&
            css`
                display: flex;
                align-items: center;
                gap: 16px;

                &::before {
                    content: "•";
                    font-size: 20px;
                    color: ${$dotColor || defaultButtonColors.primary};
                }
            `}

    ${({ $variant }) =>
            $variant === "glowing" &&
            css`
                outline: 3px solid ${defaultButtonColors.glowingBorder};
                outline-offset: 0px;
            `}
`;

export const UniversalButton: React.FC<ButtonProps> = ({
                                                           variant = "primary",
                                                           size = "medium",
                                                           icon,
                                                           iconRight,
                                                           buttonColor,
                                                           dotColor,
                                                           onClick,
                                                           children,
                                                       }) => {
    const TypographyComponent = typographyStyles[size || "medium"];

    return (
        <ButtonStyled
            $variant={variant}
            $size={size}
            $buttonColor={buttonColor}
            $dotColor={dotColor}
            onClick={onClick}
        >
            {icon && <span style={{ display: "flex", alignItems: "center", marginRight: "8px" }}>{icon}</span>}
            <TypographyComponent style={{ lineHeight: "normal" }}>{children}</TypographyComponent>
            {iconRight && <span style={{ display: "flex", alignItems: "center", marginLeft: "8px" }}>{iconRight}</span>}
        </ButtonStyled>
    );
};
