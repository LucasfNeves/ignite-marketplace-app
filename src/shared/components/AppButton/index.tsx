import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { buttonVariants, AppButtonVariants } from './buttonVariants';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/styles/configs';

interface AppButtonProps extends TouchableOpacityProps {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rigthIcon?: keyof typeof Ionicons.glyphMap;
  children?: string;
  variant?: AppButtonVariants | `${AppButtonVariants}`;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

export function AppButton({
  children,
  leftIcon,
  rigthIcon,
  variant = 'primary',
  isDisabled,
  isLoading,
  className,
  ...rest
}: AppButtonProps) {
  const contentColor = variant === 'primary' ? colors.white : colors['purple-base'];

  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rigthIcon,
    variant: variant as AppButtonVariants,
    isDisabled,
    isLoading,
  });

  if (isLoading) {
    return (
      <TouchableOpacity className={styles.base({ className })} {...rest}>
        {isLoading && <ActivityIndicator className={styles.icon()} color={contentColor} />}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity className={styles.base({ className })} {...rest}>
      {rigthIcon && (
        <Ionicons name={rigthIcon} size={20} className={styles.icon()} color={contentColor} />
      )}
      <Text className={styles.text()}>{children}</Text>
      {leftIcon && (
        <Ionicons name={leftIcon} size={20} className={styles.icon()} color={contentColor} />
      )}
    </TouchableOpacity>
  );
}
