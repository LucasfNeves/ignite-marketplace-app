import { Control, Controller, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { AppInput, AppInputProps } from '../AppInput';

export interface AppInputControllerProps<T extends FieldValues> extends Omit<
  AppInputProps,
  'value' | 'onChangeText' | 'error'
> {
  control: Control<T>;
  name: Path<T>;
  errors?: FieldErrors<T>;
}

export function AppInputController<T extends FieldValues>({
  control,
  name,
  ...rest
}: AppInputControllerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
        <AppInput
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
}
