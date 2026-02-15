import { createElement } from 'react';
import { useModalStore } from '../store/modal';
import { Ionicons } from '@expo/vector-icons';
import { SelectionModal, SelectionModalProps } from '../components/Modals/SelectionModal';

export type SelectionVariant = 'primary' | 'secondary' | 'danger';

export interface SelectionOption {
  text: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant: SelectionVariant;
}

export function useAppModal() {
  const { openModal } = useModalStore();

  const showSelectionModal = (config: {
    title: string;
    message?: string;
    options: SelectionOption[];
    transparent?: boolean;
    animationType?: 'fade' | 'slide' | 'none';
    statusBarTranslucent?: boolean;
  }) => {
    openModal(
      createElement(SelectionModal, {
        options: config.options,
        title: config.title,
        message: config.message,
      } as SelectionModalProps),
      {
        transparent: config.transparent,
        animationType: config.animationType,
        statusBarTranslucent: config.statusBarTranslucent,
      }
    );
  };

  return { showSelectionModal };
}
