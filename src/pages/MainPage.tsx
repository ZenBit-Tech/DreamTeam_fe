import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '@/redux/hooks.ts';
import { increment } from '@/redux/exampleSlice';
import Button from '@/components/Button';
import FormExample from '@/components/FormExample';

export default function MainPage(): ReactElement {
  const count = useAppSelector((state) => state.example.value);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <div>
      {t('example')} {count}
      <button type="submit" onClick={() => dispatch(increment())}>
        {t('buttonExample')}
      </button>
      <Button />
      <FormExample />
    </div>
  );
}
