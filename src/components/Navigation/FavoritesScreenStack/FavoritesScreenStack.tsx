import { useTheme } from '@src/styles/hooks/useTheme';
import { getScreenOptions } from '../utils';
import { createStackNavigator } from '@react-navigation/stack';
import { UniversitiesDetailed, FavoriteUniversities } from '@src/pages';

const FavoritesStack = createStackNavigator();

const FavoritesScreenStack = (): JSX.Element => {
  const theme = useTheme();

  return (
    <FavoritesStack.Navigator screenOptions={getScreenOptions(theme)}>
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
};

export default FavoritesScreenStack;
