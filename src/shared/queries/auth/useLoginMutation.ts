import * as AuthService from '@/shared/api/services/authService';
import { LoginHttpParams } from '@/shared/interfaces/http/login';
import { useAuthStore } from '@/shared/store';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => {
  const { setSession } = useAuthStore();

  const { mutateAsync: loginMutation } = useMutation({
    mutationFn: (userData: LoginHttpParams) => AuthService.login(userData),
    onSuccess: (response) => {
      setSession(response);
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  return {
    loginMutation,
  };
};
