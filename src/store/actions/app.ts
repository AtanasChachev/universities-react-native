import { UPDATE_PROP } from '@src/store/constants/app';

/* Updating prop in the store. */
export const updateStoreProp = (testProp: string) => ({
  type: UPDATE_PROP,
  payload: testProp,
});
