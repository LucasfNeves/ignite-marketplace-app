import { Stack } from 'expo-router';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return <Stack screenOptions={{ headerShown: false }}>{children}</Stack>;
}
