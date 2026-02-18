import { useAuthStore } from '@/shared/store';
import { Redirect, Stack } from 'expo-router';

export default function PrivateLayout() {
  const { token, user } = useAuthStore();

  if (!token && !user) {
    return <Redirect href="/(public)/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
