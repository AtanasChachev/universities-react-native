import { SETTINGS } from '@src/config/settings';
import { University } from '@src/models/store/universities';

/**
 * Since the API is very limited and does not support additional properties,
 * I have added few to improve the UI and functionality.
 */
export const addUniversityImageAndStat = (
  universities: University[],
  favorites: University[],
): University[] =>
  universities.map((university: University) => {
    const { name: universityName } = university;
    const isLiked = favorites.some(
      ({ name }: University) => name === universityName,
    );

    return {
      ...university,
      isLiked,
      likes: Math.round(Math.random() * 100) + 1,
      image:
        SETTINGS.universityImages[
          Math.floor(Math.random() * SETTINGS.universityImages.length)
        ],
    };
  });
