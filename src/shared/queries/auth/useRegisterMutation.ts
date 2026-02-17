import * as AuthService from '@/shared/api/services/authService';
import { RegisterHttpParams } from '@/shared/interfaces/http/register';
import { useAuthStore } from '@/shared/store';
import { useMutation } from '@tanstack/react-query';

interface useRegisterMutationParams {
  onSucess?: () => void;
}

export const useRegisterMutation = ({ onSucess }: useRegisterMutationParams = {}) => {
  const { setSession } = useAuthStore();

  const { mutateAsync: registerMutation } = useMutation({
    mutationFn: (userData: RegisterHttpParams) => AuthService.register(userData),
    onSuccess: (response) => {
      setSession({
        refreshToken: response.refreshToken,
        token: response.token,
        user: response.user,
      });
      onSucess?.();
    },
    onError: (error) => {
      console.error('Registration failed:', error);
    },
  });

  return {
    registerMutation,
  };
};
