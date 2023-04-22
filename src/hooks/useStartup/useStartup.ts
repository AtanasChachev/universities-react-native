import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { getData, showToastMessage } from '@src/utils/helpers';
import { useCallback, useEffect } from 'react';
import { updateTheme } from '@src/store/actions/app';
import { updateFavoriteUniversities } from '@src/store/actions/universities';
import { StatusBarStyle } from 'react-native';
import { Return } from './types';

export const useStartup = (): Return => {
  const dispatch = useDispatch();
  const { showLoader, theme } = useSelector((store: Store) => store.app);

  const loadFavoriteUniversities = useCallback(async () => {
    try {
      const favoriteUniversities = await getData('universities');

      if (!favoriteUniversities) {
        return;
      }

      dispatch(updateFavoriteUniversities(JSON.parse(favoriteUniversities)));
    } catch (e) {
      showToastMessage(
        'error',
        'Ooopsss...',
        'Unfortunately, we could not load your favorite universities :(',
      );
    }
  }, [dispatch]);

  const loadUITheme = useCallback(async () => {
    try {
      const uiTheme = await getData('theme');

      if (!uiTheme) {
        return;
      }

      dispatch(updateTheme(uiTheme));
    } catch (e) {
      showToastMessage('error', 'Error', 'We could not load the theme');
    }
  }, [dispatch]);

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
