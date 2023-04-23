import { useTheme } from '@src/hooks/useTheme';
import { UniversitiesState, University } from '@src/models/store/universities';
import { useGetUniversitiesByCountry } from '@src/services/universities/getUniversitiesByCountry';
import { addUniversityImageAndStat } from './utils';
import { Return, UseUniversitiesProps } from './types';
import { useUniversitiesStore } from '@src/store/useUniversitiesStore';
import { useEffect } from 'react';
import { useAppStore } from '@src/store/useAppStore';
import { AppState } from '@src/models/store/app';

export const useUniversities = ({
  navigation,
  id,
}: UseUniversitiesProps): Return => {
  const theme = useTheme();

  const { updateShowLoader } = useAppStore((state: AppState) => state);
  const { favoriteUniversities } = useUniversitiesStore(
    (state: UniversitiesState) => state,
  );

  const { universities: apiUniversities, isFetching } =
    useGetUniversitiesByCountry({
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

  const handleUpdateShowLoaderEffect = (): void => updateShowLoader(isFetching);
  useEffect(handleUpdateShowLoaderEffect, [isFetching, updateShowLoader]);

  return {
    theme,
    universities,
    handleCardPress,
  };
};
