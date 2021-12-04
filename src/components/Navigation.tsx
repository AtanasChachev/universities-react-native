import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
  Universities,
  Settings,
  UniversitiesDetailed,
  FavoriteUniversities,
} from '@src/pages';
import { ThemeColors } from '@src/styles/colors';
import { SETTINGS } from '@src/config/settings';
import Icon from 'react-native-vector-icons/Ionicons';
import { Store } from '@src/models/store/store';

const HomeStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const HomeScreensStack = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{ title: 'Home' }}
      name="HomeScreen"
      component={Home}
    />

    <HomeStack.Screen
      options={{ title: 'Universities', headerBackTitle: '' }}
      name="UniversitiesScreen"
      component={Universities}
    />

    <HomeStack.Screen
      options={{ headerShown: false }}
      name="UniversitiesDetailed"
      component={UniversitiesDetailed}
    />
  </HomeStack.Navigator>
);

const FavoritesScreenStack = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen
      options={{ title: 'Favorites' }}
      name="FavoriteUniversities"
      component={FavoriteUniversities}
    />

    <FavoritesStack.Screen
      options={{ headerShown: false }}
      name="UniversitiesDetailed"
      component={UniversitiesDetailed}
    />
  </FavoritesStack.Navigator>
);

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { favoriteUniversitiesLength } = useSelector(
    (store: Store) => store.universities,
  );

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
      } else {
        iconName = isFocused
          ? SETTINGS.tabBar.icons.favorites.filled
          : SETTINGS.tabBar.icons.favorites.outline;
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
          headerShown: route.name === 'Settings',
        })}>
        <Tab.Screen name="Home" component={HomeScreensStack} />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreenStack}
          options={{ tabBarBadge: favoriteUniversitiesLength }}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
