import React from "react";
import { PageContainer, LeftContainer, RightContainer } from "./styles.ts";
import {SignInTitle} from "@/components/Titles/SignIn";
import { SignInButton } from "@/components/Button/SignIn/SignInButton.tsx";
import {LogoWithIcons} from "@/components/LogoWithIcons";
import {SignInInput} from "@/components/Inputs/SignIn";

export const SignInPage: React.FC = () => {
    return (
        <PageContainer>
            <LeftContainer>
                <LogoWithIcons />
            </LeftContainer>
            <RightContainer>
                <SignInTitle/>
                <SignInInput />
                <SignInButton />
            </RightContainer>
        </PageContainer>
    );
};


