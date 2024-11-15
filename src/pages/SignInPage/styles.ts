import styled from "styled-components";
import {COLORS} from "@/assets/styles/constants/colors.ts";

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: ${COLORS.signInContainer};
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const RightContainer = styled.div`
    flex: 1;
    max-width: 700px;
    height: 100vh;
    padding: 40px;
    background-color: ${COLORS.surfaceContainerLowest};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
