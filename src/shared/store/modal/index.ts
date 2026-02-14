import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ModalStore, createModalStore } from './slice/modalSlice';

export const useModalStore = create<ModalStore>()(
  devtools(immer(createModalStore), { name: 'ModalStore', enabled: __DEV__ })
);
