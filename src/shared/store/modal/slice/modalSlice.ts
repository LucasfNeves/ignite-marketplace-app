import { ReactNode } from 'react';
import { StoreCreator } from '../../types';

interface ModalConfig {
  animationType?: 'fade' | 'slide' | 'none';
  transparent?: boolean;
  statusBarTranslucent?: boolean;
}

interface ModalState {
  isOpen: boolean;
  content: ReactNode | null;
  config: ModalConfig;
}

interface ModalActions {
  openModal: (content: ReactNode, config: ModalConfig) => void;
  close: () => void;
}

export type ModalStore = ModalState & ModalActions;

export const createModalStore: StoreCreator<ModalStore> = (set, get) => ({
  isOpen: false,
  content: null,
  config: {
    animationType: 'fade',
    transparent: true,
    statusBarTranslucent: false,
  },

  openModal: (content, config) =>
    set(() => ({
      isOpen: true,
      content,
      config: {
        ...get().config,
        ...config,
      },
    })),

  close: () =>
    set(() => ({
      isOpen: false,
      content: null,
      config: {},
    })),
});
