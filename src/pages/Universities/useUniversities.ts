import { useTheme } from '@src/styles/hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { checkIfIsLiked } from '@src/utils/helpers';
import { updateCurrentUniversity } from '@src/store/actions/universities';
import { University } from '@src/models/store/universities';
import { Colors } from '@src/models/colors';

interface Return {
  theme: Colors;
  universities: University[];
  handleCardPress: (university: University) => void;
}

export const useUniversities = ({ navigation }: any): Return => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { universities, favoriteUniversities } = useSelector(
    (store: Store) => store.universities,
  );

  const handleCardPress = (university: University): void => {
    checkIfIsLiked(favoriteUniversities, university);
    dispatch(updateCurrentUniversity(university));
    navigation.navigate('UniversitiesDetailed');
  };

  return {
    theme,
    universities,
    handleCardPress,
  };
};
