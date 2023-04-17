import { useTheme } from '@src/styles/hooks/useTheme';
import { useDispatch } from 'react-redux';
import { shShowLoader } from '@src/store/actions/app';
import { universitiesService } from '@src/services/universities';
import { updateUniversities } from '@src/store/actions/universities';
import { addUniversityImageAndStat } from './utils';
import { Colors } from '@src/models/colors';

interface Return {
  theme: Colors;
  fetchUniversitiesByCountry: (country: string) => Promise<void>;
}

export const useHome = ({ navigation }: any): Return => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const fetchUniversitiesByCountry = async (country: string): Promise<void> => {
    dispatch(shShowLoader(true));

    try {
      const { data } = await universitiesService.fetchUniversitiesByCountry(
        country,
      );

      if (data.length) {
        const universities = addUniversityImageAndStat(data);
        dispatch(updateUniversities(universities));
        navigation.navigate('UniversitiesScreen');
      }

      dispatch(shShowLoader(false));
    } catch (e) {
      dispatch(shShowLoader(false));
    }
  };

  return {
    theme,
    fetchUniversitiesByCountry,
  };
};
