import { UniversitiesState, University } from '@src/models/store/universities';
import { storeData } from '@src/utils/helpers';
import { create } from 'zustand';

export const useUniversitiesStore = create<UniversitiesState>(set => ({
  favoriteUniversities: [],
  favoriteUniversitiesLength: 0,
  updateFavoriteUniversity: (university: University): void =>
    set(({ favoriteUniversities }: UniversitiesState) => {
      const updatedFavoriteUniversities = [...favoriteUniversities];
      const favoriteUniversityIndex = favoriteUniversities.findIndex(
        (uni: University) => uni.name === university.name,
      );

      if (favoriteUniversityIndex > -1) {
        updatedFavoriteUniversities.splice(favoriteUniversityIndex, 1);
      } else {
        updatedFavoriteUniversities.unshift(university);
      }

      storeData('universities', JSON.stringify(updatedFavoriteUniversities));

      return {
        favoriteUniversities: updatedFavoriteUniversities,
        favoriteUniversitiesLength: updatedFavoriteUniversities.length,
      };
    }),
  updateFavoriteUniversities: (favoriteUniversities: University[]): void =>
    set(() => ({
      favoriteUniversities,
      favoriteUniversitiesLength: favoriteUniversities.length,
    })),
}));
