import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';

import Startup from '@src/Startup';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Startup />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
