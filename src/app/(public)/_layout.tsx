import { useAuthStore } from '@/shared/store';
import { Redirect, Stack } from 'expo-router';

export default function PublicLayout() {
  const { token, user } = useAuthStore();

  if (token && user) {
    return <Redirect href="/(private)/home" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
    </Stack>
  );
}
