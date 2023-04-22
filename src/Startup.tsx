import { StatusBar } from 'react-native';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { useStartup } from './hooks/useStartup';

const Startup = (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const { showLoader, getBarStyle } = useStartup();

  return (
    <>
      <StatusBar barStyle={getBarStyle()} />

      <Navigation />
      <Loader showLoader={showLoader} />
      <Toast topOffset={insets.top ? insets.top + 10 : 10} />
    </>
  );
};

export default Startup;
