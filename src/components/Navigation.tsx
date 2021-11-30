import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Universities, Settings, UniversitiesDetailed } from '@src/pages';
import { ThemeColors } from '@src/styles/colors';
import { SETTINGS } from '@src/config/settings';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const HomeScreensStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: 'Home' }}
        name="HomeScreen"
        component={Home}
      />

      <Stack.Screen
        options={{ title: 'Universities', headerBackTitle: '' }}
        name="UniversitiesScreen"
        component={Universities}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="UniversitiesDetailed"
        component={UniversitiesDetailed}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const renderTabBarIcon = useCallback(
    (routeName: string, isFocused: boolean, color: string) => {
      let iconName = '';

      if (routeName === 'Home') {
        iconName = isFocused
          ? SETTINGS.tabBar.icons.home.filled
          : SETTINGS.tabBar.icons.home.outline;
      } else if (routeName === 'Settings') {
        iconName = isFocused
          ? SETTINGS.tabBar.icons.settings.filled
          : SETTINGS.tabBar.icons.settings.outline;
      }

      return (
        <Icon
          name={iconName}
          size={SETTINGS.tabBar.icons.fontSize}
          color={color}
        />
      );
    },
    [],
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) =>
            renderTabBarIcon(route.name, focused, color),
          tabBarActiveTintColor: ThemeColors.persimmon,
          tabBarInactiveTintColor: ThemeColors.dustyGray,
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreensStack} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
