import * as ImagePicker from 'expo-image-picker';
import { useCallback, useState } from 'react';
import { Alert, Linking } from 'react-native';
import { Toast } from 'toastify-react-native';

interface UseCameraOptions {
  aspect?: [number, number];
  quality?: number;
  allowsEditing?: boolean;
  exif?: boolean;
}

export function useCamera({ allowsEditing, aspect, exif, quality }: UseCameraOptions) {
  const [isLoading, setIsLoading] = useState(false);

  const requestCameraPermissions = useCallback(async (): Promise<boolean> => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      const currentStatus = status === 'granted';

      if (!currentStatus) {
        Alert.alert('Permissão negada!', 'Precisamos de permissão para acessar a câmera.', [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Abrir Configurações',
            onPress: () => Linking.openSettings(),
          },
        ]);
      }

      return currentStatus;
    } catch {
      Toast.error('Erro ao solicitar permissão para acessar a câmera', 'top');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const openCamera = useCallback(async (): Promise<string | null> => {
    setIsLoading(true);
    try {
      const hasPermission = await requestCameraPermissions();

      if (!hasPermission) {
        return null;
      }

      const { assets, canceled } = await ImagePicker.launchCameraAsync({
        allowsEditing,
        aspect,
        exif,
        quality,
      });

      if (!canceled && assets && assets.length > 0) {
        Toast.success('Foto capturada com sucesso!', 'top');
        return assets[0].uri;
      }

      return null;
    } catch {
      Toast.error('Erro ao abrir a câmera', 'top');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [allowsEditing, aspect, exif, quality]);

  return { isLoading, requestCameraPermissions, openCamera };
}
