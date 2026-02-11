import { Stack } from 'expo-router';
import '@/styles/global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/infrastructure/query/queryClient';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}
