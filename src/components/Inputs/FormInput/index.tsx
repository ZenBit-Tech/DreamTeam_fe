import { TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { useFormInput } from './useFormInput';

interface FormInputProps {
  label: string;
  control: Control<FieldValues>;
  type: 'email' | 'name';
}
export const FormInput = ({
  label,
  control,
  type,
}: FormInputProps): React.ReactNode => {
  const { name, rules } = useFormInput(label);
  return (
    <Controller
      name={name}
      control={control}
      rules={type === 'name' ? rules.nameRules : rules.emailRules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          id='outlined-required'
          sx={{ marginTop: '8px' }}
          helperText={error ? error.message : null}
          error={!!error}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
