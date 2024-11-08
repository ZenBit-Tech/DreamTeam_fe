import styled from "styled-components";
import {FONTS} from "@/assets/styles/constants/fonts.ts";
import {COLORS} from "@/assets/styles/constants/colors.ts";


export const SignInBtn = styled.button`
    width: 400px;
    height: 38px;
    padding: 7px 14px; 
    border-radius: 6px;
    font-size: 15px;
    line-height: 22px;
    color: ${COLORS.onPrimary};
    font-family: ${FONTS.PUBLIC_SANS};
    background-color: ${COLORS.accent500};
    margin-top: 14px;
    border: none; 
    box-sizing: border-box; 
`;