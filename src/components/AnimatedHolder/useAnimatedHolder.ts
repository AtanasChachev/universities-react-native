import { useCallback, useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { AnimatedHolderProps } from './types';

interface UseAnimatedHolderProps
  extends Omit<
    AnimatedHolderProps,
    'pointerEvents' | 'styles' | 'children' | 'translateHorizontal'
  > {}

interface Return {
  opacity: Animated.AnimatedInterpolation;
  translateInterpolation: Animated.AnimatedInterpolation;
}

export const useAnimatedHolder = ({
  outputRangeFirst,
  outputRangeSecond,
  duration,
  delay,
  shAnimateOnInit,
  animatePropState,
}: UseAnimatedHolderProps): Return => {
  const translate = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const translateInterpolation = translate.interpolate({
    inputRange: [0, 1],
    outputRange: [outputRangeFirst, outputRangeSecond ? outputRangeSecond : 0],
  });

  const startSlideAnimation = useCallback(
    (value: number, target: any) => {
      Animated.timing(target, {
        toValue: value,
        duration: duration,
        delay: delay,
        useNativeDriver: false,
        easing: Easing.elastic(1),
      }).start();
    },
    [delay, duration],
  );

  const handleAnimationsEffect = (): void => {
    if (shAnimateOnInit) {
      startSlideAnimation(1, translate);
      startSlideAnimation(1, opacity);
    } else {
      startSlideAnimation(animatePropState, translate);
      startSlideAnimation(animatePropState, opacity);
    }
  };

  useEffect(handleAnimationsEffect, [
    opacity,
    translate,
    animatePropState,
    shAnimateOnInit,
    startSlideAnimation,
  ]);

  return {
    opacity,
    translateInterpolation,
  };
};
