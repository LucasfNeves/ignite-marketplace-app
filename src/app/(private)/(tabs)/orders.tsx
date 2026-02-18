import { Text, View } from 'react-native';

export default function OrdersPage() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Your Orders</Text>
      <Text className="text-gray-500 mt-2">You have no orders yet.</Text>
    </View>
  );
}
