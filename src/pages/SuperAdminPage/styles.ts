import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';

export const SuperAdminContainer = styled.div`
  padding: 24px;
`;
export const SuperAdminHeader = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SuperAdminBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CompanyListContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  padding: 16px 0px;
  border: 2px solid ${COLORS.primaryContainer};
  border-radius: 8px;
`;
export const CompanyListHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding: 0px 16px;
`;
export const CompanyListBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CompanyListFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.secondary};
  padding: 16px 16px;
`;

export const CompanyName = styled.div`
  display: flex;
  gap: 8px;
`;

export const CompanyListFooter = styled.div`
  padding: 0px 16px;
  display: flex;
`;
