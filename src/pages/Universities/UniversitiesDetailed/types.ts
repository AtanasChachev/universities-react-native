import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { University } from '@src/models/store/universities';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

export interface Return {
  university?: University;
  isScrollingDown: boolean;
  handleDetailedHeroPress: (action: string) => void;
  detectScrollDirection: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => void;
  handleOnBack: () => void;
}

export interface UniversitiesDetailedProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { university: University } }>;
}
