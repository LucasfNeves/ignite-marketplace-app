import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterMutation } from '@/shared/queries/auth/useRegisterMutation';
import { useAuthStore } from '@/shared/store';
import { RegisterFormData, registerSchema } from './registerSchema';
import { useAppModal } from '@/shared/hooks/useAppModal';

export function useRegisterViewModel() {
  const { registerMutation } = useRegisterMutation();
  const { showSelectionModal } = useAppModal();

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

  const handleSelectAvatar = () => {
    showSelectionModal({
      transparent: true,
      title: 'Selecione uma foto',
      message: 'Escolha uma opção:',
      options: [
        {
          text: 'Galeria',
          icon: 'image',
          variant: 'primary',
          onPress: () => {
            console.log('Galeria');
          },
        },
        {
          text: 'Câmera',
          icon: 'camera',
          variant: 'primary',
          onPress: () => {
            console.log('Câmera');
          },
        },
      ],
    });
  };

  return {
    onSubmit,
    control,
    errors,
    handleSelectAvatar,
  };
}
