import styled from "styled-components";
import {FONTS} from "@/assets/styles/constants/fonts.ts";
import {COLORS} from "@/assets/styles/constants/colors.ts";

export const StyledLoginInput = styled.input`
    width: 400px;
    height: 38px;
    padding: 7px 14px;
    border-radius: 6px;
    font-size: 15px;
    line-height: 22px;
    color: ${COLORS.textMain};
    font-family: ${FONTS.PUBLIC_SANS};
    border: 1px solid #dcdcdc;
    box-sizing: border-box; 
    gap: 12px;
    opacity: 1;
    ::placeholder {
        color: #c4c4c4;
        opacity: 1;
    }
`;