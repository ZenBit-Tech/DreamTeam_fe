import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';
import {
  BodyBase,
  BodySmall,
  BodyStrong,
  Heading,
  Paragraph,
} from '@/assets/styles/typography.ts';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 312px;
  border-radius: 8px;
  border: 1px solid ${COLORS.primaryContainer};
  background-color: #ffffff;
`;

export const HeadingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-bottom: 1px solid ${COLORS.primaryContainer};
`;

export const Title = styled(Heading)`
  font-size: 18px;
  font-weight: bold;
  color: #1a1a1a;
`;

export const BackLink = styled(Paragraph)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${COLORS.scrim};
  text-decoration: none;
  cursor: pointer;
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  color: ${COLORS.secondary};
`;

export const DetailsHeading = styled(BodySmall)`
  text-transform: uppercase;
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DetailLabel = styled(BodyStrong)`
  font-size: 14px;
  color: ${COLORS.secondary};
  margin-right: 4px;
`;

export const DetailValue = styled(BodyBase)`
  font-size: 14px;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  width: 40px;
`;
