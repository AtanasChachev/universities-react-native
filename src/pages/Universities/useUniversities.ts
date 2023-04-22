import { useTheme } from '@src/hooks/useTheme';
import { useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { University } from '@src/models/store/universities';
import { useGetUniversitiesByCountry } from '@src/services/universities/getUniversitiesByCountry';
import { addUniversityImageAndStat } from './utils';
import { Return, UseUniversitiesProps } from './types';

export const useUniversities = ({
  navigation,
  id,
}: UseUniversitiesProps): Return => {
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
