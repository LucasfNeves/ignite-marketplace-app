import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterMutation } from '@/shared/queries/auth/useRegisterMutation';
import { useAuthStore } from '@/shared/store';
import { RegisterFormData, registerSchema } from './registerSchema';

export function useRegisterViewModel() {
  const { registerMutation } = useRegisterMutation();

  const setSession = useAuthStore((state) => state.setSession);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: 'Lucas Farias',
      email: 'lucas@teste.com.br',
      phone: '11913302042',
      password: '1234567',
      confirmPassword: '1234567',
    },
  });

  const onSubmit = handleSubmit(async (data: RegisterFormData) => {
    const { confirmPassword: _, ...registerData } = data;
    const { user, token, refreshToken } = await registerMutation(registerData);
    setSession({ user, token, refreshToken });
  });

  return {
    onSubmit,
    control,
    errors,
  };
}
