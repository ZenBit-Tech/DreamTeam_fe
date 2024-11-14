import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors';

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 16px;
  border-bottom: 1px solid ${COLORS.primaryContainer};
  &:last-child {
    border-bottom: none;
  }
`;

export const ProfileContacts = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;
export const StyledItemName = styled.div`
  color: ${COLORS.onSurfaceVariant};
`;
export const StyledEmail = styled.div`
  color: ${COLORS.outline};
`;
export const StyledIcons = styled.div`
  display: flex;
  gap: 8px;
`;
