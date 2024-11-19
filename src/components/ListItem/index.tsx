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

interface ListItemProps {
  item: {
    organization_name: string;
    email: string;
  };
  setModal: () => void;
  setDeleteModal: () => void;
}

export const ListItem = ({
  item,
  setModal,
  setDeleteModal,
}: ListItemProps): React.ReactNode => {
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
        <IconWrapper onClick={setModal}>
          <IconSet iconType={IconType.Edit} />
        </IconWrapper>
        <IconWrapper onClick={setDeleteModal}>
          <IconSet iconType={IconType.Delete} />
        </IconWrapper>
      </StyledIcons>
    </ListItemWrapper>
  );
};
