import { useTheme } from '@src/styles/hooks/useTheme';
import { useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
// import { checkIfIsLiked } from '@src/utils/helpers';
// import { updateCurrentUniversity } from '@src/store/actions/universities';
import { University } from '@src/models/store/universities';
import { Colors } from '@src/models/colors';
import { useGetUniversitiesByCountry } from '@src/services/universities/getUniversitiesByCountry';
import { addUniversityImageAndStat } from './utils';

interface Return {
  theme: Colors;
  universities: University[];
  handleCardPress: (university: University) => void;
}

interface UseUniversitiesProps {
  navigation: any;
  id: string;
}

export const useUniversities = ({
  navigation,
  id,
}: UseUniversitiesProps): Return => {
  // const dispatch = useDispatch();
  const theme = useTheme();

  const { favoriteUniversities } = useSelector(
    (store: Store) => store.universities,
  );

  const { universities: apiUniversities } = useGetUniversitiesByCountry({
    id,
  });
  const universities = addUniversityImageAndStat(
    apiUniversities,
    favoriteUniversities,
  );

  const handleCardPress = (university: University): void => {
    // dispatch(updateCurrentUniversity(university));
    navigation.navigate('UniversitiesDetailed', {
      university,
    });
  };

  return {
    theme,
    universities,
    handleCardPress,
  };
};
