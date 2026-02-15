import { ImagePickerOptions } from 'expo-image-picker';
import { useAppModal } from './useAppModal';
import { useCamera } from './useCamera';
import { useGallery } from './useGallery';
import { useModalStore } from '../store/modal';

interface UseImageParams extends ImagePickerOptions {
  callback: (uri: string | null) => void;
}

export function useImage({ callback, ...options }: UseImageParams) {
  const { close } = useModalStore();
  const { showSelectionModal } = useAppModal();
  const { openCamera, isLoading: isCameraLoading } = useCamera(options);
  const { openGallery, isLoading: isGalleryLoading } = useGallery(options);

  const isLoading = Boolean(isCameraLoading || isGalleryLoading);

  const handleCallback = (uri: string | null) => {
    close();
    callback(uri);
  };

  const handleSelectImage = () => {
    showSelectionModal({
      transparent: true,
      title: 'Selecione uma foto',
      message: 'Escolha uma opção:',
      options: [
        {
          text: 'Galeria',
          icon: 'image',
          variant: 'primary',
          onPress: async () => {
            const uri = await openGallery();
            console.log('Galeria:', uri);
            handleCallback(uri);
          },
        },
        {
          text: 'Câmera',
          icon: 'camera',
          variant: 'primary',
          onPress: async () => {
            const uri = await openCamera();
            console.log('Câmera:', uri);
            handleCallback(uri);
          },
        },
      ],
    });
  };
  return {
    handleSelectImage,
    isLoading,
  };
}
