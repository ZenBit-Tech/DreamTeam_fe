import React from 'react';

import {
  ContactInfo,
  IconWrapper,
  ListItemWrapper,
  ProfileContacts,
  StyledEmail,
  StyledIcons,
  StyledItemName,
} from './styles';

import { IconType } from '@/assets/styles/types';
import { BodySmall, BodyStrong } from '@/assets/styles/typography';
import { IconSet } from '@/components/Button/Icons';
import { ProfilePicture, ProfilePicureType } from '@/components/ProfilePicture';

// Фейковые данные
export const fakeAdmins = [
  {
    id: 1,
    organization_name: 'AirBaltic',
    email: 'airbaltic@gmail.com',
  },
  {
    id: 2,
    organization_name: 'British Airways',
    email: 'britishairways@gmail.com',
  },
  {
    id: 3,
    organization_name: 'Turkish Airlines',
    email: 'turkishairlines@gmail.com',
  },
  {
    id: 4,
    organization_name: 'Emirates',
    email: 'emirates@gmail.com',
  },
  {
    id: 5,
    organization_name: 'Cathay Pacific',
    email: 'cathaypacific@gmail.com',
  },
  {
    id: 6,
    organization_name: 'Lady Pacific',
    email: 'ladypacific@gmail.com',
  },
  {
    id: 7,
    organization_name: 'Bay Pacific',
    email: 'baypacific@gmail.com',
  },
];

interface AdminItemProps {
  item: {
    id: number;
    organization_name: string;
    email: string;
  };
}

const AdminItem: React.FC<AdminItemProps> = ({ item }) => {
  return (
    <ListItemWrapper>
      <ProfileContacts>
        <ProfilePicture
          name={item.organization_name}
          type={ProfilePicureType.Small}
        />
        <ContactInfo>
          <StyledItemName>
            <BodyStrong>{item.organization_name}</BodyStrong>
          </StyledItemName>
          <StyledEmail>
            <BodySmall>{item.email}</BodySmall>
          </StyledEmail>
        </ContactInfo>
      </ProfileContacts>
      <StyledIcons>
        <IconWrapper>
          <IconSet iconType={IconType.Edit} />
        </IconWrapper>
        <IconWrapper>
          <IconSet iconType={IconType.Delete} />
        </IconWrapper>
      </StyledIcons>
    </ListItemWrapper>
  );
};

interface AdminListProps {
  admins: Array<{ id: number; organization_name: string; email: string }>;
}
// Компонент для отображения списка администраторов
const AdminList: React.FC<AdminListProps> = ({ admins }) => {
  return (
    <div>
      {admins.map((admin) => (
        <AdminItem key={admin.id} item={admin} />
      ))}
    </div>
  );
};

export default AdminList;
