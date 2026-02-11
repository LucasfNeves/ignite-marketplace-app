import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <TouchableOpacity className="bg-green-900" onPress={() => router.push('/login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
