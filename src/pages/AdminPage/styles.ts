import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';
import { sortOrders } from '@/assets/styles/constants/sortConstants.ts';
import { BodyBase } from '@/assets/styles/typography.ts';

export const AdminContainer = styled.div`
  padding: 24px;
`;

export const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
`;

export const AdminPageListContainer = styled.div`
  width: 1016px;
  display: flex;
  flex-direction: column;
  padding: 16px 0px;
  border: 2px solid ${COLORS.primaryContainer};
  border-radius: 8px;
`;

export const AdminPageHeader = styled.header`
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdminPageBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminListContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminListHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 20px 0;
`;

export const AdminListBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminListFooter = styled.footer`
  padding: 16px;
`;

export const AdminListFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

interface SortButtonProps {
  sortOrder: keyof typeof sortOrders;
}

export const SortButton = styled(BodyBase)<SortButtonProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #807c8c;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: #5b5566;
  }

  img {
    width: 22px;
    transform: ${(props): string =>
      props.sortOrder === sortOrders.asc ? 'rotate(0deg)' : 'rotate(180deg)'};
    transition: transform 0.2s ease;
  }
`;
