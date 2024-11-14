import { t } from 'i18next';

import { Heading } from '@/assets/styles/typography';

export const CompanyListTitle = (): React.ReactNode => {
  return (
    <div>
      <Heading>{t('companyList')}</Heading>
    </div>
  );
};
