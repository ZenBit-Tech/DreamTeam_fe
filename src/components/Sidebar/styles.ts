import { Typography } from '@mui/material';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  width: 250px;
  height: 95vh;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
`;

export const LogoContainer = styled.div`
  padding: 20px;
`;

export const ListContainer = styled.div`
  flex-grow: 1;
  padding: 0 20px;
`;

export const Badge = styled(Typography)`
  color: #9c27b0;
  font-weight: bold;
`;

export const Footer = styled.div`
  padding: 20px 20px 20px 5px;
  display: flex;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  margin-right: 10px;
`;

export const FooterText = styled.div`
  font-size: 12px;
  color: #666;
`;
