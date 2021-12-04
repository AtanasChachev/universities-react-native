import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';

const FavoriteUniversities = () => {
  const { favoriteUniversities } = useSelector(
    (store: Store) => store.universities,
  );

  useEffect(() => {
    console.log(favoriteUniversities);
  }, [favoriteUniversities]);

  return <></>;
};

export { FavoriteUniversities };
