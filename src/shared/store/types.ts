import { StateCreator } from 'zustand';

/**
 * Tipo para criar stores com persist + devtools + immer.
 * @template TStore - Tipo da store (estado + ações)
 */
export type StoreCreator<TStore> = StateCreator<
  TStore,
  [['zustand/devtools', never], ['zustand/immer', never]],
  [],
  TStore
>;
