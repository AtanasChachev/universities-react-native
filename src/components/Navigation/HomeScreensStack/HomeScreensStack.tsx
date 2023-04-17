import { useTheme } from '@src/styles/hooks/useTheme';
import { getScreenOptions } from '../utils';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Universities, UniversitiesDetailed } from '@src/pages';

const HomeStack = createStackNavigator();

const HomeScreensStack = (): JSX.Element => {
  const theme = useTheme();

  return (
    <HomeStack.Navigator screenOptions={getScreenOptions(theme)}>
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
};

export default HomeScreensStack;
