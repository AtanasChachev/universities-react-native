import { SETTINGS } from '@src/config/settings';
import { University } from '@src/services/universities/types';

/**
 * Since the API is very limited and does not support additional properties,
 * I have added few to improve the UI and functionality.
 */
export const addUniversityImageAndStat = (
  universities: University[],
  favorites: University[],
): University[] =>
  universities.map((university: University) => {
    const { universityImages } = SETTINGS;
    const { name: universityName } = university;
    const isLiked = favorites.some(({ name }: any) => name === universityName);

    return {
      ...university,
      isLiked,
      likes: Math.round(Math.random() * 100) + 1,
      image:
        universityImages[
          Math.floor(Math.random() * SETTINGS.universityImages.length)
        ],
    };
  });
