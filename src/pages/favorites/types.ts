import { Colors } from '@src/models/colors';
import { University } from '@src/models/store/universities';

export interface Return {
  theme: Colors;
  favoriteUniversities: University[];
  handleOnPress: (university: University) => void;
  ListEmptyComponent: () => JSX.Element;
}
