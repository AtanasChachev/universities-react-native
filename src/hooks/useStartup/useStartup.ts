import { getData, showToastMessage } from '@src/utils/helpers';
import { useCallback, useEffect } from 'react';
import { useUniversitiesStore } from '@src/store/useUniversitiesStore';
import { StatusBarStyle } from 'react-native';
import { Return } from './types';
import { useAppStore } from '@src/store/useAppStore';
import { AppState } from '@src/models/store/app';
import { UniversitiesState } from '@src/models/store/universities';

export const useStartup = (): Return => {
  const { updateFavoriteUniversities } = useUniversitiesStore(
    (state: UniversitiesState) => state,
  );
  const { theme, showLoader, updateTheme } = useAppStore(
    (state: AppState) => state,
  );

  const loadFavoriteUniversities = useCallback(async () => {
    try {
      const favoriteUniversities = await getData('universities');

      if (!favoriteUniversities) {
        return;
      }

      updateFavoriteUniversities(JSON.parse(favoriteUniversities));
    } catch (e) {
      showToastMessage(
        'error',
        'Ooopsss...',
        'Unfortunately, we could not load your favorite universities :(',
      );
    }
  }, [updateFavoriteUniversities]);

  const loadUITheme = useCallback(async () => {
    try {
      const uiTheme = await getData('theme');

      if (!uiTheme) {
        return;
      }

      updateTheme(uiTheme);
    } catch (e) {
      showToastMessage('error', 'Error', 'We could not load the theme');
    }
  }, [updateTheme]);

  const handleLoadCallbacksEffect = (): void => {
    loadFavoriteUniversities();
    loadUITheme();
  };

  useEffect(handleLoadCallbacksEffect, [loadFavoriteUniversities, loadUITheme]);

  const getBarStyle = (): StatusBarStyle | null | undefined =>
    theme === 'light' ? 'dark-content' : 'light-content';

  return {
    showLoader,
    getBarStyle,
  };
};
