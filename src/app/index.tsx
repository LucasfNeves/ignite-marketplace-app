import { useAuthStore } from '@/shared/store';
import { Redirect } from 'expo-router';

export default function App() {
  const { token, user } = useAuthStore();

  if (token && user) {
    return <Redirect href="/(private)/home" />;
  }

  return <Redirect href="(public)/login" />;
}
