import { BodyBase, BodyBaseLarge, BodySmall } from "@/assets/styles/typography.ts";

export type ButtonProps = {
    variant?: "primary" | "secondary" | "outline" | "disabled" | "dotted" | "glowing";
    size?: "small" | "medium" | "large" | "huge";
    icon?: React.ReactNode;
    iconRight?: React.ReactNode;
    buttonColor?: string;
    dotColor?: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export type ArrowButtonProps = {
    variant?: "primary" | "secondary" | "outline" | "disabled" | "glowing";
    size?: "small" | "medium" | "large";
    buttonColor?: string;
    onClick?: () => void;
};

export const defaultButtonColors = {
    primary: "#7367F0",
    secondary: "#5249AA",
    outline: "#7367F0",
    disabled: "#D0D5DD",
    glowing: "#7367F0",
    glowingBorder: "#BFB9F8",
};

export const buttonSizes = {
    small: "32px",
    medium: "48px",
    large: "56px",
    huge: "38px",
};

export const typographyStyles = {
    small: BodySmall,
    medium: BodyBase,
    large: BodyBaseLarge,
    huge:BodyBaseLarge
};
