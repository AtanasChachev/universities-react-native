import { UPDATE_LOADER, UPDATE_THEME } from '@src/store/constants/app';

/* Updating prop in the store. */
export const shShowLoader = (showLoader: boolean) => ({
  type: UPDATE_LOADER,
  payload: showLoader,
});

export const updateTheme = (theme: string) => ({
  type: UPDATE_THEME,
  payload: theme,
});
