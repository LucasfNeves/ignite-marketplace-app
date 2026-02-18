import { Text, View } from 'react-native';

export default function CartPage() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Your Cart</Text>
      <Text className="text-gray-500 mt-2">Your cart is empty.</Text>
    </View>
  );
}
