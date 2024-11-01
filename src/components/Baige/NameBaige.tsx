import React from "react";
import { Avatar, Box } from "@mui/material";
import { BodyStrong, BodySmall, BodyBase } from "@/assets/styles/typography";
import {COLORS} from "@/assets/styles/constants/colors.ts";

interface ProfileCardProps {
    companyName: string;
    email: string;
}

const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
};

export const NameBaige: React.FC<ProfileCardProps> = ({ companyName, email }) => {
    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase();
    };

    const rgbColor = hexToRgb(COLORS.buttonPurple);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "transparent",
            }}
        >
            <Avatar
                sx={{
                    bgcolor: `rgba(${rgbColor}, 0.16)`,
                    marginRight: "10px",
                    width: "38px",
                    height: "38px",
                }}
            >
                <BodyBase
                    sx={{
                        color: COLORS.buttonPurple,
                        fontWeight: 400,
                        fontSize: "16px",
                    }}
                >
                    {getInitials(companyName)}
                </BodyBase>
            </Avatar>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <BodyStrong color={COLORS.textMain}>
                    {companyName}
                </BodyStrong>
                <BodySmall color="text.secondary">
                    {email}
                </BodySmall>
            </Box>
        </Box>
    );
};


