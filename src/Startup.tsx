import React from 'react';
import { StatusBar } from 'react-native';
import { Navigation, Loader } from '@src/components';
import { useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';

const Startup = () => {
  const { showLoader } = useSelector((store: Store) => store.app);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <Navigation />
      <Loader showLoader={showLoader} />
    </>
  );
};

export default Startup;
