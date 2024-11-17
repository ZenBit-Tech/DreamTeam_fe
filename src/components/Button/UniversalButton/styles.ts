import styled, { css } from "styled-components";
import { buttonSizes, buttonVariants, buttonColors, defaultButtonSize } from "@/assets/styles/constants/buttonConstants";
import { ButtonSize } from "@/assets/styles/constants/buttonConstants";
import {COLORS} from "@/assets/styles/constants/colors.ts";
import {SIZES} from "@/assets/styles/constants/sizes.ts";
import {FONTS} from "@/assets/styles/constants/fonts.ts";

type ButtonVariantType = keyof typeof buttonVariants;
type ButtonColorType = keyof typeof buttonColors;

export const ButtonStyled = styled.button<{
    $variant?: ButtonVariantType;
    $size?: ButtonSize;
    $buttonColor?: ButtonColorType;
    $dotColor?: string;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    height: ${({ $size }) => buttonSizes[$size || defaultButtonSize]};

    background-color: ${({ $variant, $buttonColor }) =>
            $variant === buttonVariants.outline ||
            $variant === buttonVariants.secondaryOutline ||
            $variant === buttonVariants.dotted ||
            $variant === buttonVariants.glowing
                    ? "transparent"
                    : buttonColors[$buttonColor as ButtonColorType] || buttonColors[$variant as ButtonColorType] || buttonColors.primary};

    color: ${({ $variant, $buttonColor }) =>
            $variant === buttonVariants.outline ||
            $variant === buttonVariants.secondaryOutline ||
            $variant === buttonVariants.dotted ||
            $variant === buttonVariants.glowing
                    ? buttonColors[$buttonColor as ButtonColorType] || COLORS.accent500
                    : COLORS.onPrimary};

    border: ${({ $variant, $buttonColor }) =>
            $variant === buttonVariants.outline ||
            $variant === buttonVariants.dotted ||
            $variant === buttonVariants.glowing
                    ? `2px solid ${buttonColors[$buttonColor as ButtonColorType] || COLORS.accent500}`
                    : "none"};

    border-radius: 8px;
    font-weight: 500;
    font-size: ${SIZES.bodyBase};
    font-family: ${FONTS.PUBLIC_SANS};
    cursor: ${({ $variant }) => ($variant === buttonVariants.disabled ? "not-allowed" : "pointer")};
    opacity: ${({ $variant }) => ($variant === buttonVariants.disabled ? 0.6 : 1)};
    transition: all 0.3s ease;

    &:hover {
        opacity: ${({ $variant }) => ($variant === buttonVariants.disabled ? 0.6 : 0.8)};
    }

    ${({ $variant, $dotColor }) =>
            $variant === buttonVariants.dotted &&
            css`
            display: flex;
            align-items: center;
            gap: 16px;

            &::before {
                content: "•";
                font-size: ${SIZES.label};
                color: ${$dotColor || COLORS.accent500};
            }
        `}

    ${({ $variant }) =>
            $variant === buttonVariants.glowing &&
            css`
            outline: 3px solid ${COLORS.accent700};
            outline-offset: 0px;
        `}
`;
