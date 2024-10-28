import Button from '@mui/material/Button';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function ButtonUsage(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <Button variant="contained" color="secondary">
      {t('buttonExample')}
    </Button>
  );
}
