import { Colors } from '@src/models/colors';
import { University } from '@src/models/store/universities';

export interface Return {
  theme: Colors;
  universities: University[];
  handleCardPress: (university: University) => void;
}

export interface UseUniversitiesProps {
  navigation: any;
  id: string;
}
