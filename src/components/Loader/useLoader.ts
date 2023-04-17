import { useRef, useCallback, useEffect } from 'react';
import { Animated } from 'react-native';
import { LoaderProps } from './types';

interface Return {
  loadingInterpolation: Animated.AnimatedInterpolation;
  loadingInterpolationFade: Animated.AnimatedInterpolation;
}

export const useLoader = ({ showLoader }: LoaderProps): Return => {
  const loadingRef = useRef(new Animated.Value(showLoader ? 1 : 0)).current;

  const loadingInterpolation = loadingRef.interpolate({
    inputRange: [0, 1],
    outputRange: [1.2, 1],
  });

  const loadingInterpolationFade = loadingRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const startSlideAnimation = useCallback(
    (value: number) => {
      Animated.timing(loadingRef, {
        toValue: value,
        duration: 400,
        useNativeDriver: false,
      }).start();
    },
    [loadingRef],
  );

  const handleStartSlideAnimationEffect = (): void => {
    startSlideAnimation(showLoader ? 1 : 0);
  };

  useEffect(handleStartSlideAnimationEffect, [showLoader, startSlideAnimation]);

  return {
    loadingInterpolation,
    loadingInterpolationFade,
  };
};
