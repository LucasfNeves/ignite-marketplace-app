import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormValues, RegisterSchema } from './RegisterSchema';
import { useRegisterMutation } from '@/shared/queries/auth/useRegisterMutation';

export type RegisterViewProps = ReturnType<typeof useRegisterViewModel>;

export function useRegisterViewModel() {
  const { registerMutation } = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      name: 'Lucas Farias',
      email: 'lucas@teste.com.br',
      phone: '11913302042',
      password: '1234567',
      confirmPassword: '1234567',
    },
  });

  const onSubmit = handleSubmit(async (data: RegisterFormValues) => {
    const { confirmPassword: _, ...registerData } = data;
    await registerMutation(registerData);
  });

  return {
    onSubmit,
    control,
    errors,
  };
}
