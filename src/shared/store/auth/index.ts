import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { AuthStore, createAuthStore } from './slice/authSlice';

export const useAuthStore = create<AuthStore>()(
  persist(devtools(immer(createAuthStore), { name: 'AuthStore', enabled: __DEV__ }), {
    name: 'auth-storage',
    storage: createJSONStorage(() => AsyncStorage),
  })
);
