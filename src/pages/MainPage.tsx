import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '@/redux/hooks.ts';
import { increment } from '@/redux/features/example/exampleSlice.ts';
import ButtonUsage from '@/components/Button/ButtonUsage.tsx';
import Form from '@/components/FormExample/Form.tsx';

export default function MainPage(): ReactElement {
  const count = useAppSelector((state) => state.example.value);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <div>
      {t('example')} {count}
      <button type="submit" onClick={() => dispatch(increment())}>
        click
      </button>
      <ButtonUsage />
      <Form />
    </div>
  );
}
