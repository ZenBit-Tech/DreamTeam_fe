import styled from "styled-components";
import {SIZES} from "@/assets/styles/constants/sizes.ts";
import {COLORS} from "@/assets/styles/constants/colors.ts";
import {FONTS} from "@/assets/styles/constants/fonts.ts";

export const CreateRouteBtn = styled.div`
    width: 412px;
    height: 38px;
    padding: 7px 14px;
    border-radius: 6px;
    font-size: ${SIZES.paragraph};
    line-height: 17.63px;
    font-weight: 500;
    color: ${COLORS.outline};
    font-family: ${FONTS.PUBLIC_SANS};
    background-color: ${COLORS.accent500};
    margin-top: 14px;

    display: flex;
    justify-content: center;
    align-items: center;
`;