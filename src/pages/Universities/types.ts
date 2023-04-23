import { Colors } from '@src/models/colors';
import { University } from '@src/models/store/universities';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export interface Return {
  theme: Colors;
  universities: University[];
  handleCardPress: (university: University) => void;
}

export interface UseUniversitiesProps {
  navigation: NavigationProp<ParamListBase>;
  id: string;
}

export interface UniversitiesProps
  extends Pick<UseUniversitiesProps, 'navigation'> {
  route: RouteProp<{ params: { id: string } }>;
}
