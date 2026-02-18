import { useAuthStore } from '@/shared/store';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const { logout } = useAuthStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Welcome to the Home Screen!</Text>
      <TouchableOpacity className="bg-red-500 px-4 py-2 rounded-md mt-4" onPress={logout}>
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
