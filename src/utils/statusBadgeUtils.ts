import styled from "styled-components";
import {OrderStatus, statusColors} from "@/types.ts";
import {COLORS} from "@/assets/styles/constants/colors.ts";

export const StatusBadge = styled.span<{ status: OrderStatus }>`
    padding: 5px 10px;
    border-radius: 12px;
    background-color: ${(props) => statusColors[props.status] || COLORS.surfaceContainerLowest};
    color: ${(props) => {
    switch (props.status) {
        case OrderStatus.COMPLETED:
            return COLORS.completed;
        case OrderStatus.FAILED:
            return COLORS.error;
        case OrderStatus.AT_RISK:
            return COLORS.tertiaryFixed;
        case OrderStatus.UPCOMING:
            return COLORS.primary;
        default:
            return COLORS.onSurface;
    }
}};
`;