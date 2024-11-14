import { StyledProfilePicture } from './styles';

import { BodyBase } from '@/assets/styles/typography';

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
  const initials = name
    .split(' ')
    .map((arr) => arr[0].toLocaleUpperCase())
    .join('');
  return (
    <StyledProfilePicture $pictureType={type}>
      {type === ProfilePicureType.Small ? (
        <BodyBase>{initials}</BodyBase>
      ) : (
        initials
      )}
    </StyledProfilePicture>
  );
};

ProfilePicture.defaultProps = {
  type: ProfilePicureType.Medium,
};
