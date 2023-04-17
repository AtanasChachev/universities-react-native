import { Animated } from 'react-native';
import { AnimatedHolderProps } from './types';
import { useAnimatedHolder } from './useAnimatedHolder';

const AnimatedHolder = ({
  delay,
  duration,
  outputRangeFirst,
  outputRangeSecond,
  styles,
  children,
  translateHorizontal,
  shAnimateOnInit,
  animatePropState,
  pointerEvents,
}: AnimatedHolderProps): JSX.Element => {
  const { opacity, translateInterpolation } = useAnimatedHolder({
    outputRangeFirst,
    outputRangeSecond,
    duration,
    delay,
    shAnimateOnInit,
    animatePropState,
  });

  return (
    <Animated.View
      pointerEvents={pointerEvents ?? 'auto'}
      style={{
        ...styles,
        opacity: opacity,
        transform: [
          translateHorizontal
            ? { translateX: translateInterpolation }
            : { translateY: translateInterpolation },
        ],
      }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedHolder;
