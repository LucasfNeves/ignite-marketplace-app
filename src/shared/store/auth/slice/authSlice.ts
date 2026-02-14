import { UserInterface } from '@/shared/interfaces/user/user';
import { StoreCreator } from '../../types';

interface SetSessionParams {
  user: UserInterface;
  token: string;
  refreshToken: string;
}

interface UpdateTokenParams {
  token: string;
  refreshToken: string;
}

type AuthState = {
  user: UserInterface | null;
  token: string | null;
  refreshToken: string | null;
};

type AuthActions = {
  setSession: (params: SetSessionParams) => void;
  logout: () => void;
  updateTokens: (params: UpdateTokenParams) => void;
};

export type AuthStore = AuthState & AuthActions;

export const createAuthStore: StoreCreator<AuthStore> = (set) => ({
  user: null,
  token: null,
  refreshToken: null,

  setSession: (params) =>
    set((state) => {
      state.user = params.user;
      state.token = params.token;
      state.refreshToken = params.refreshToken;
    }),

  logout: () =>
    set((state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
    }),

  updateTokens: (params) =>
    set((state) => {
      state.token = params.token;
      state.refreshToken = params.refreshToken;
    }),
});
