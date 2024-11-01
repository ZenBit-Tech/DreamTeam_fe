import React from "react";
import { PageContainer, LeftContainer, RightContainer } from "./styles.ts";
import { LogoWithIcons } from "@/components/LogoWithIcons/LogoWithIcons";
import SignInInput from "@/components/Inputs/login/SignInInput.tsx";
import { SignInTitle } from "@/components/Titles/login/SignInTitle.tsx";
import { SignInButton } from "@/components/Button/SignIn/SignInButton.tsx";

const SignInPage: React.FC = () => {
    return (
        <PageContainer>
            <LeftContainer>
                <LogoWithIcons />
            </LeftContainer>
            <RightContainer>
                <SignInTitle />
                <SignInInput />
                <SignInButton />
            </RightContainer>
        </PageContainer>
    );
};

export default SignInPage;
