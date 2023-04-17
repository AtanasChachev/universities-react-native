import { Animated, ActivityIndicator, View, Text } from 'react-native';
import { styles } from './styles';
import { LoaderProps } from './types';
import { useLoader } from './useLoader';

const Loader = ({ showLoader }: LoaderProps): JSX.Element => {
  const { loadingInterpolation, loadingInterpolationFade } = useLoader({
    showLoader,
  });

  return (
    <Animated.View
      pointerEvents={showLoader ? 'auto' : 'none'}
      style={{
        ...styles.holder,
        opacity: loadingInterpolationFade,
        transform: [
          {
            scale: loadingInterpolation,
          },
        ],
      }}>
      <View style={styles.loaderHolder}>
        <Text style={styles.text}>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    </Animated.View>
  );
};

export default Loader;
