import { UPDATE_LOADER } from '@src/store/constants/app';

/* Updating prop in the store. */
export const shShowLoader = (showLoader: boolean) => ({
  type: UPDATE_LOADER,
  payload: showLoader,
});
