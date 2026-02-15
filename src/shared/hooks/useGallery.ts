import * as ImagePicker from 'expo-image-picker';
import { Toast } from 'toastify-react-native';
import { ImagePickerOptions } from 'expo-image-picker';
import { useCallback, useState } from 'react';
import { Alert, Linking } from 'react-native';

export function useGallery({ aspect, quality, allowsEditing, exif }: ImagePickerOptions) {
  const [isLoading, setIsLoading] = useState(false);

  const requestGalleryPermissions = useCallback(async (): Promise<boolean> => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      const currentStatus = status === 'granted';

      if (!currentStatus) {
        Alert.alert(
          'Permissão negada!',
          'Precisamos de permissão para acessar a galeria de fotos.',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Abrir Configurações',
              onPress: () => Linking.openSettings(),
            },
          ]
        );
      }

      return currentStatus;
    } catch {
      Toast.error('Erro ao solicitar permissão para acessar a galeria', 'top');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const openGallery = useCallback(async (): Promise<string | null> => {
    setIsLoading(true);
    try {
      const hasPermission = await requestGalleryPermissions();

      if (!hasPermission) {
        return null;
      }

      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing,
        aspect,
        exif,
        quality,
      });

      if (!canceled && assets && assets.length > 0) {
        Toast.success('Foto selecionada com sucesso!', 'top');
        return assets[0].uri;
      }

      return null;
    } catch {
      Toast.error('Erro ao abrir a galeria', 'top');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [allowsEditing, aspect, exif, quality, requestGalleryPermissions]);

  return {
    isLoading,
    requestGalleryPermissions,
    openGallery,
  };
}
