import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Settings } from '@src/pages';
import { useTheme } from '@src/styles/hooks/useTheme';
import { SETTINGS } from '@src/config/settings';
import Icon from 'react-native-vector-icons/Ionicons';
import { Store } from '@src/models/store/store';
import HomeScreensStack from './HomeScreensStack';
import FavoritesScreenStack from './FavoritesScreenStack';

const Tab = createBottomTabNavigator();

const Navigation = (): JSX.Element => {
  const theme = useTheme();
  const { favoriteUniversitiesLength } = useSelector(
    (store: Store) => store.universities,
  );

  const renderTabBarIcon = (
    routeName: string,
    isFocused: boolean,
    color: string,
  ): JSX.Element => {
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
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }): BottomTabNavigationOptions => ({
          tabBarIcon: ({ focused, color }): ReactNode =>
            renderTabBarIcon(route.name, focused, color),
          tabBarActiveTintColor: theme.iconActive,
          tabBarInactiveTintColor: theme.iconInactive,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.background,
          },
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

export default Navigation;
