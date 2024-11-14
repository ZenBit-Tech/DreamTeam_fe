import { StyledProfilePicture } from './styles';

import { BodyBase, BodyBaseLarge } from '@/assets/styles/typography';
import { getInitials } from '@/utils/stringUtils';

export enum ProfilePicureType {
  Small = '38px',
  Medium = '50px',
  Large = '64px',
}

interface ProfilePictureProps {
  name: string;
  type?: ProfilePicureType;
}

export const ProfilePicture = ({
  name,
  type = ProfilePicureType.Medium,
}: ProfilePictureProps): React.ReactElement => {
  const initials = getInitials(name);
  return (
    <StyledProfilePicture $pictureType={type}>
      {type === ProfilePicureType.Small ? (
        <BodyBase>{initials}</BodyBase>
      ) : (
        <BodyBaseLarge>{initials}</BodyBaseLarge>
      )}
    </StyledProfilePicture>
  );
};

ProfilePicture.defaultProps = {
  type: ProfilePicureType.Medium,
};
