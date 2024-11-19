import {
  ContactInfo,
  IconWrapper,
  ListItemWrapper,
  ProfileContacts,
  StyledEmail,
  StyledIcons,
  StyledItemName,
} from './styles';

import { ProfilePictureType } from '@/assets/styles/constants/sizes';
import { IconType } from '@/assets/styles/types';
import { BodySmall, BodyStrong } from '@/assets/styles/typography';
import { IconSet } from '@/components/Button/Icons';
import { ProfilePicture } from '@/components/ProfilePicture';

interface ListItemProps {
  item: {
    organization_name: string;
    email: string;
  };
  setModal: () => void;
}

export const ListItem = ({
  item,
  setModal,
}: ListItemProps): React.ReactNode => {
  return (
    <ListItemWrapper>
      <ProfileContacts>
        <ProfilePicture
          name={item.organization_name}
          type={ProfilePictureType.Small}
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
        <IconWrapper>
          <IconSet iconType={IconType.Delete} />
        </IconWrapper>
      </StyledIcons>
    </ListItemWrapper>
  );
};
