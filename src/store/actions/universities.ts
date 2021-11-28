import { UPDATE_UNIVERSITIES } from '@src/store/constants/universities';
import { University } from '@src/models/store/universities';

/* Updating universities for selected country. */
export const updateUniversities = (universities: University[]) => ({
  type: UPDATE_UNIVERSITIES,
  payload: universities,
});
