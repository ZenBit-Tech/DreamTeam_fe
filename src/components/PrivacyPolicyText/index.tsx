import { Trans } from 'react-i18next';

import { FooterText, PolicyLinks } from './styles';

import { BodySmall } from '@/assets/styles/typography';

export const PrivacyPolicyText: React.FC = () => {
  return (
    <FooterText>
      <BodySmall>
        <Trans
          i18nKey='termsAndPrivacy'
          components={{
            terms: <PolicyLinks href='/terms' />,
            privacy: <PolicyLinks href='/privacy' />,
          }}
        />
      </BodySmall>
    </FooterText>
  );
};
