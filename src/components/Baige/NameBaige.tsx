import React from "react";
import { Avatar, Box } from "@mui/material";
import { BodyStrong, BodySmall, BodyBase } from "@/assets/styles/typography";
import { COLORS } from "@/assets/styles/constants/colors";
import { hexToRgb } from "@/utils/colorUtils";
import { getInitials } from "@/utils/stringUtils.ts";

interface ProfileCardProps {
    companyName: string;
    email: string;
}

export const NameBaige: React.FC<ProfileCardProps> = ({ companyName, email }) => {
    const rgbColor: string = hexToRgb(COLORS.accent500);

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
                        color: COLORS.accent500,
                        fontWeight: 400,
                        fontSize: "16px",
                    }}
                >
                    {getInitials(companyName)}
                </BodyBase>
            </Avatar>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <BodyStrong color={COLORS.onSurfaceVariant}>
                    {companyName}
                </BodyStrong>
                <BodySmall color="text.secondary">
                    {email}
                </BodySmall>
            </Box>
        </Box>
    );
};
