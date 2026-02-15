import { SelectionOption, SelectionVariant } from '@/shared/hooks/useAppModal';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '@/shared/utils/cn';
import { colors } from '@/styles/configs';

export interface SelectionModalProps {
  title: string;
  message?: string;
  options: SelectionOption[];
}

export function SelectionModal({ options, message, title }: SelectionModalProps) {
  const getButtonClass = (variant: SelectionVariant) =>
    cn('w-full py-3 px-4 rounded-lg flex-row justify-center items-center mb-2', {
      'bg-purple-base': variant === 'primary',
      'bg-blue-dark': variant === 'secondary',
      'bg-danger': variant === 'danger',
    });

  return (
    <View className="bg-white rounded-2xl shadow-2xl w-[85%] max-w-sm p-6">
      <View className="gap-3">
        <View className="items-center">
          <Text className="text-lg font-bold text-gray-900">{title}</Text>
        </View>

        {message && (
          <View className="items-center">
            <Text className="text-base text-gray-600 text-center">{message}</Text>
          </View>
        )}
      </View>

      <View className="gap-3 mt-6">
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={option.onPress}
            className={getButtonClass(option.variant ?? 'primary')}
          >
            {option.icon && (
              <Ionicons name={option.icon} color={colors.white} size={20} className="mr-2" />
            )}
            <Text className="font-semibold text-white">{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
