import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import ExampleStyledForm from './styles';

export default function Form(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // alert call is used as an example (delete after development starts). dont use alerts.
  const onSubmit = (data: FieldValues): void => alert(JSON.stringify(data));
  const { t } = useTranslation();

  return (
    <ExampleStyledForm onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('example')} />

      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span>{t('inputErrorExample')}</span>}

      <input type="submit" />
    </ExampleStyledForm>
  );
}
