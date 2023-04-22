import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Startup from '@src/Startup';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Startup />
        </SafeAreaProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
