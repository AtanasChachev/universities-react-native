import { storeData } from '@src/utils/helpers';
import { useTheme } from '@src/hooks/useTheme';
import { useAppStore } from '@src/store/useAppStore';
import { AppState } from '@src/models/store/app';
import { Return } from './types';

export const useSettings = (): Return => {
  const theme = useTheme();
  const { theme: storeTheme, updateTheme } = useAppStore(
    (state: AppState) => state,
  );

  const getThemeString = (value: boolean): string => (value ? 'dark' : 'light');
  const handleOnValueChange = (value: boolean): void => {
    updateTheme(getThemeString(value));
    storeData('theme', getThemeString(value));
  };

  return {
    storeTheme,
    theme,
    handleOnValueChange,
  };
};
