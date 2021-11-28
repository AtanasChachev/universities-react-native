import { UPDATE_UNIVERSITIES } from '@src/store/constants/universities';
import { University } from '@src/models/store/universities';

/* Updating universities for selected country. */
export const updateStoreProp = (universities: University[]) => ({
  type: UPDATE_UNIVERSITIES,
  payload: universities,
});
