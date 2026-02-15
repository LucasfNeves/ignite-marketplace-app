import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterMutation } from '@/shared/queries/auth/useRegisterMutation';
import { useAuthStore } from '@/shared/store';
import { RegisterFormData, registerSchema } from './registerSchema';
import { useImage } from '@/shared/hooks/useImage';
import { useState } from 'react';
import { CameraType } from 'expo-image-picker';

export function useRegisterViewModel() {
  const setSession = useAuthStore((state) => state.setSession);

  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const { registerMutation } = useRegisterMutation();
  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  });

  const handleSelectAvatar = async () => {
    await handleSelectImage();
  };

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
    handleSelectAvatar,
    avatarUri,
  };
}
