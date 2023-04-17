import { UPDATE_LOADER, UPDATE_THEME } from '@src/store/constants/app';
import {
  ShowLoaderActionReturn,
  UpdateThemeActionReturn,
} from '@src/models/store/app';

/* Updating prop in the store. */
export const shShowLoader = (showLoader: boolean): ShowLoaderActionReturn => ({
  type: UPDATE_LOADER,
  payload: showLoader,
});

export const updateTheme = (theme: string): UpdateThemeActionReturn => ({
  type: UPDATE_THEME,
  payload: theme,
});
