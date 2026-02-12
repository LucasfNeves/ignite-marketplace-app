import { Text, TouchableOpacity, View } from 'react-native';
import { RegisterViewProps } from './useRegisterModel';

export function RegisterView(props: RegisterViewProps) {
  const { onSubmit } = props;
  return (
    <View className="flex items-center justify-center h-screen">
      <TouchableOpacity
        className="flex items-center justify-center bg-blue-500 px-4 py-2 rounded"
        onPress={onSubmit}
      >
        <Text className="text-white text-lg">Register Editado ci</Text>
      </TouchableOpacity>
    </View>
  );
}
