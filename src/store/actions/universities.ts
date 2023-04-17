import {
  UPDATE_UNIVERSITIES,
  UPDATE_CURRENT_UNIVERSITY,
  UPDATE_FAVORITE_UNIVERSITIES,
  UPDATE_FAVORITE_UNIVERSITY,
} from '@src/store/constants/universities';
import { University } from '@src/models/store/universities';
import {
  UpdateCurrentUniversityActionReturn,
  UpdateFavoriteUniversitiesActionReturn,
  UpdateFavoriteUniversityActionReturn,
  UpdateUniversitiesActionReturn,
} from '@src/models/store/universities';

/* Updating universities for selected country. */
export const updateUniversities = (
  universities: University[],
): UpdateUniversitiesActionReturn => ({
  type: UPDATE_UNIVERSITIES,
  payload: universities,
});

/* Updating pressed univesity for detailed info view. */
export const updateCurrentUniversity = (
  university: University,
): UpdateCurrentUniversityActionReturn => ({
  type: UPDATE_CURRENT_UNIVERSITY,
  payload: university,
});

/* Updating favorite universities. */
export const updateFavoriteUniversities = (
  universities: University[],
): UpdateFavoriteUniversitiesActionReturn => ({
  type: UPDATE_FAVORITE_UNIVERSITIES,
  payload: universities,
});

/* Adding / removing favorite university. */
export const updateFavoriteUniversity = (
  actionCallback: string,
  university: University,
): UpdateFavoriteUniversityActionReturn => ({
  type: UPDATE_FAVORITE_UNIVERSITY,
  payload: {
    actionCallback,
    university,
  },
});
