import { useAuthStore } from '@/shared/store';
import { Redirect, Stack } from 'expo-router';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { token, user } = useAuthStore();

  if (!token && !user) {
    return <Redirect href="/(public)/login" />;
  }

  return <Stack screenOptions={{ headerShown: false }}>{children}</Stack>;
}
