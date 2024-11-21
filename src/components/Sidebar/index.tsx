import {
  Avatar,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import { LogoWithIcons } from '../LogoWithIcons';

import {
  AvatarContainer,
  Footer,
  FooterText,
  ListContainer,
  SidebarContainer,
} from './styles';

interface SidebarProps {
  menuItems: Array<{
    label: string;
    icon?: React.ReactNode;
    badgeCount?: number;
    onClick?: () => void;
  }>;
  footer: {
    avatarText: string;
    companyName: string;
    email: string;
  };
}

export const Sidebar = ({ menuItems, footer }: SidebarProps) => {
  return (
    <SidebarContainer>
      <LogoWithIcons logoSvgColor='#140616' logoTitleColor='#140616' />
      <ListContainer>
        <List>
          {menuItems.map((item, index) => (
            <ListItem component='button' key={index} onClick={item.onClick}>
              <ListItemText primary={item.label} />
              {item.badgeCount && (
                <Badge variant='body2'>{item.badgeCount}</Badge>
              )}
            </ListItem>
          ))}
        </List>
      </ListContainer>
      <Divider />
      <Footer>
        <AvatarContainer>
          <Avatar>{footer.avatarText}</Avatar>
        </AvatarContainer>
        <FooterText>
          <Typography variant='body2' fontWeight='bold'>
            {footer.companyName}
          </Typography>
          <Typography variant='body2'>{footer.email}</Typography>
        </FooterText>
      </Footer>
    </SidebarContainer>
  );
};
