import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Settings } from '@src/pages';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const renderIcon = useCallback(
    (routeName: string, isFocused: boolean, color: string) => {
      let iconName = '';

      if (routeName === 'Home') {
        iconName = isFocused ? 'home' : 'home-outline';
      } else if (routeName === 'Settings') {
        iconName = isFocused ? 'settings' : 'settings-outline';
      }

      return <Icon name={iconName} size={24} color={color} />;
    },
    [],
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) =>
            renderIcon(route.name, focused, color),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
