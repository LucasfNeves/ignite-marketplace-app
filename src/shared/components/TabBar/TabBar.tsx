import { View, Pressable, Text } from 'react-native';
import { BottomTabBarProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { colors } from '@/styles/configs';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimatedView = Animated.createAnimatedComponent(View);

interface TabBarProps extends BottomTabBarProps {
  activeColor?: string;
  inactiveColor?: string;
}

export function TabBar({
  state,
  descriptors,
  navigation,
  activeColor = colors['purple-base'],
  inactiveColor = colors.gray[400],
}: TabBarProps) {
  const totalTabs = state.routes.length;
  const centerIndex = Math.floor(totalTabs / 2);

  return (
    <View className="flex-row items-end bg-white pb-6">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const isCenter = totalTabs % 2 !== 0 && index === centerIndex;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarItem
            key={route.key}
            options={options}
            isFocused={isFocused}
            isCenter={isCenter}
            onPress={onPress}
            onLongPress={onLongPress}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
          />
        );
      })}
    </View>
  );
}

interface TabBarItemProps {
  options: BottomTabNavigationOptions;
  isFocused: boolean;
  isCenter: boolean;
  onPress: () => void;
  onLongPress: () => void;
  activeColor: string;
  inactiveColor: string;
}

function TabBarItem({
  options,
  isFocused,
  isCenter,
  onPress,
  onLongPress,
  activeColor,
  inactiveColor,
}: TabBarItemProps) {
  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isFocused ? 1 : 0, { duration: 200 }),
    transform: [{ scaleX: withTiming(isFocused ? 1 : 0, { duration: 200 }) }],
  }));

  const icon = options.tabBarIcon?.({
    focused: isFocused,
    color: isCenter ? colors.white : isFocused ? activeColor : inactiveColor,
    size: isCenter ? 26 : 22,
  });

  const label =
    typeof options.tabBarLabel === 'string'
      ? options.tabBarLabel
      : typeof options.title === 'string'
        ? options.title
        : '';

  // Item central estilo Mercado Pago - redondo com glow
  if (isCenter) {
    return (
      <View className="flex-1 items-center">
        <Pressable
          onPress={onPress}
          onLongPress={onLongPress}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          className="items-center -mt-4"
        >
          {/* Outer glow - sutil */}
          <View
            className="absolute w-14 h-14 rounded-full"
            style={{
              backgroundColor: activeColor,
              opacity: isFocused ? 0.08 : 0.03,
              transform: [{ scale: isFocused ? 1.25 : 1.1 }],
            }}
          />
          {/* Inner glow - mais sólido */}
          <View
            className="absolute w-14 h-14 rounded-full"
            style={{
              backgroundColor: activeColor,
              opacity: isFocused ? 0.18 : 0.08,
              transform: [{ scale: isFocused ? 1.12 : 1.04 }],
            }}
          />
          {/* Main button */}
          <View
            className="w-14 h-14 rounded-full items-center justify-center mb-1"
            style={{ backgroundColor: activeColor }}
          >
            {icon}
          </View>

          <Text
            className="text-[10px] font-medium"
            style={{ color: isFocused ? activeColor : inactiveColor }}
          >
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  // Items laterais com barrinha
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 items-center pt-4"
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
    >
      {/* Barrinha no topo */}
      <AnimatedView
        className="absolute top-0 w-10 h-[3px] rounded-full"
        style={[{ backgroundColor: activeColor }, animatedIndicatorStyle]}
      />

      <View className="items-center justify-center gap-1">
        {icon}
        <Text
          className="text-[10px] font-medium"
          style={{ color: isFocused ? activeColor : inactiveColor }}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
