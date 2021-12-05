import React, { useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { Navigation, Loader } from '@src/components';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { updateFavoriteUniversities } from '@src/store/actions/universities';
import Toast from 'react-native-toast-message';
import { getData, showToastMessage } from '@src/utils/helpers';

const Startup = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const { showLoader, theme } = useSelector((store: Store) => store.app);

  const loadFavoriteUniversities = useCallback(async () => {
    try {
      const favoriteUniversities = await getData('universities');

      if (favoriteUniversities) {
        dispatch(updateFavoriteUniversities(JSON.parse(favoriteUniversities)));
      }
    } catch (e) {
      showToastMessage(
        'error',
        'Ooopsss...',
        'Unfortunately, we could not load your favorite universities :(',
      );
    }
  }, [dispatch]);

  useEffect(() => {
    loadFavoriteUniversities();
  }, [loadFavoriteUniversities]);

  return (
    <>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />

      <Navigation />
      <Loader showLoader={showLoader} />
      <Toast topOffset={insets.top ? insets.top + 10 : 10} />
    </>
  );
};

export default Startup;
