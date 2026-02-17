import { useMutation } from '@tanstack/react-query';
import * as AuthService from '@/shared/api/services/authService';
import { Toast } from 'toastify-react-native';

export function useUploadAvatarMutation() {
  const { mutateAsync: uploadAvatarMutation } = useMutation({
    mutationFn: AuthService.uploadAvatar,

    onSuccess: (data) => {
      Toast.success('Avatar atualizado com sucesso');
      console.log('Avatar uploaded successfully:', data);
    },

    onError: (error) => {
      console.error('Error uploading avatar:', error);
      Toast.error('Erro ao fazer upload do avatar');
    },
  });

  return {
    uploadAvatarMutation,
  };
}
