import { RegisterHttpParams, RegisterHttpResponse } from '@/shared/interfaces/http/register';
import { apiClient } from '../api-client';

export async function register(userData: RegisterHttpParams) {
  const { data } = await apiClient.post<RegisterHttpResponse>('/auth/register', userData);
  return data;
}
