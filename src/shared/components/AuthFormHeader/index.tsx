import { Image, Text, View } from 'react-native';
import logo from '@/assets/Logo.png';

interface AuthFormHeaderProps {
  title: string;
  subTitle: string;
}

export function AuthFormHeader({ title, subTitle }: AuthFormHeaderProps) {
  return (
    <View className="items-center justify-center mb-8">
      <Image resizeMode="contain" className="w-[80px] h-[60px]" source={logo} mb-8 />

      <Text className="text-3xl font-bold mb-3 text-gray-500">{title}</Text>
      <Text className="text-gray-300 text-base text-center">{subTitle}</Text>
    </View>
  );
}
