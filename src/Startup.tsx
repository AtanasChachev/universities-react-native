import React from 'react';
import { StatusBar } from 'react-native';
import { Navigation } from '@src/components';

const Startup = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <Navigation />
    </>
  );
};

export default Startup;
