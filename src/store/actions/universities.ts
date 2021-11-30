import {
  UPDATE_UNIVERSITIES,
  UPDATE_CURRENT_UNIVERSITY,
} from '@src/store/constants/universities';
import { University } from '@src/models/store/universities';

/* Updating universities for selected country. */
export const updateUniversities = (universities: University[]) => ({
  type: UPDATE_UNIVERSITIES,
  payload: universities,
});

/* Updating pressed univesity for detailed info view. */
export const updateCurrentUniversity = (university: University) => ({
  type: UPDATE_CURRENT_UNIVERSITY,
  payload: university,
});
