import { University } from '@src/models/store/universities';
import { SETTINGS } from '@src/config/settings';

export const addUniversityImageAndStat = (
  universities: University[],
): University[] =>
  universities.map((university: University) => ({
    ...university,
    image:
      SETTINGS.universityImages[
        Math.floor(Math.random() * SETTINGS.universityImages.length)
      ],
    likes: Math.round(Math.random() * 100) + 1,
  }));
