import { Colors } from '@src/models/colors';
import { University } from '@src/models/store/universities';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface Return {
  theme: Colors;
  favoriteUniversities: University[];
  handleOnPress: (university: University) => void;
  ListEmptyComponent: () => JSX.Element;
}

export interface FavoriteUniversitiesProps {
  navigation: NavigationProp<ParamListBase>;
}
