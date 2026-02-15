import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'poc-native-ota',
  slug: 'poc-native-ota',
  version: '1.0.0',
  orientation: 'portrait',
  scheme: 'pocnativeota',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  newArchEnabled: true,
  splash: {
    image: './assets/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.anonymous.pocnativeota',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    package: 'com.anonymous.pocnativeota',
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins: [
    'expo-router',
    'expo-font',
    [
      'expo-image-picker',
      {
        photosPermission:
          'Este app precisa de acesso a sua galeria de fotos para selecionar uma foto.',
        cameraPermission: 'Este app precisa de acesso a sua câmera para tirar uma foto.',
      },
    ],
  ],
  extra: {
    router: {},
    eas: {
      projectId: '95451d5d-f189-4be1-8ac9-6b7f4a5efb92',
    },
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  updates: {
    url: 'https://u.expo.dev/95451d5d-f189-4be1-8ac9-6b7f4a5efb92',
  },
});
