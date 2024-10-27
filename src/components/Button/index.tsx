import * as React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

export default function ButtonUsage(): React.ReactElement {
  const { t } = useTranslation();
  return <Button variant="contained">{t('buttonExample')}</Button>;
}
