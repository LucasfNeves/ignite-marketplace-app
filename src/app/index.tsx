import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center p-8">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
        className="bg-purple-base h-button w-full p-2 rounded-xl items-center justify-center"
        onPress={() => router.push('/login')}
      >
        <Text className="text-white text-lg font-medium">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
