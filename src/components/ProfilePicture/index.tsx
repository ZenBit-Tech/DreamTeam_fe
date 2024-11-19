import { StyledProfilePicture } from './styles';

import { ProfilePictureType } from '@/assets/styles/constants/sizes';
import { BodyBase, BodyBaseLarge } from '@/assets/styles/typography';
import { getInitials } from '@/utils/stringUtils';

interface ProfilePictureProps {
  name: string;
  type?: ProfilePictureType;
}

export const ProfilePicture = ({
  name,
  type = ProfilePictureType.Medium,
}: ProfilePictureProps): React.ReactElement => {
  const initials = getInitials(name);
  return (
    <StyledProfilePicture $pictureType={type}>
      {type === ProfilePictureType.Small ? (
        <BodyBase>{initials}</BodyBase>
      ) : (
        <BodyBaseLarge>{initials}</BodyBaseLarge>
      )}
    </StyledProfilePicture>
  );
};
