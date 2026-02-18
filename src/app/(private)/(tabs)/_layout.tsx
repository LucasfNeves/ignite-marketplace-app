import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TabBar } from '@/shared/components/TabBar';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} name="home-outline" size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} name="cart-outline" size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} name="list-outline" size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
