import { RegisterHttpParams } from '@/shared/interfaces/http/register';
import { apiClient, baseURL } from '../api-client';
import { AuthResponse } from '@/shared/interfaces/http/authResponse';
import { LoginHttpParams } from '@/shared/interfaces/http/login';
import { UploadAvatarHttpResponse } from '@/shared/interfaces/http/uploadAvatar';

export async function register(userData: RegisterHttpParams) {
  const { data } = await apiClient.post<AuthResponse>('/auth/register', userData);
  return data;
}

export async function login({ email, password }: LoginHttpParams) {
  const { data } = await apiClient.post<AuthResponse>('/auth/login', { email, password });
  return data;
}

export async function uploadAvatar(uri: string) {
  const formData = new FormData();

  formData.append('avatar', {
    uri,
    name: 'avatar.jpg',
    type: 'image/jpeg',
  } as unknown as Blob);

  const { data } = await apiClient.post<UploadAvatarHttpResponse>('/user/avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  data.url = `${baseURL}${data.url}`;

  return data;
}
