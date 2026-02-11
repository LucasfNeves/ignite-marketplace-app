import { UserInterface } from '../user/user';

export interface RegisterHttpParams {
  name: string;
  email: string;
  avatarUrl?: string;
  phone: string;
  password: string;
}

export interface RegisterHttpResponse {
  user: UserInterface;
  token: string;
  refreshToken: string;
}
