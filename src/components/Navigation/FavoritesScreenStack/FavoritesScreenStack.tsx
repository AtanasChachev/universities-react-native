import { useTheme } from '@src/hooks/useTheme';
import { getScreenOptions } from '../utils';
import { createStackNavigator } from '@react-navigation/stack';
import UniversitiesDetailed from '@src/pages/Universities/UniversitiesDetailed/UniversitiesDetailed';
import FavoriteUniversities from '@src/pages/Favorites';

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
