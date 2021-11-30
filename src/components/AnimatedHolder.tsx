import React, { useEffect, useRef, useCallback, ReactNode } from 'react';
import { Animated, Easing } from 'react-native';

type AnimatedHolderProps = {
  delay: number;
  duration: number;
  outputRangeFirst: number;
  outputRangeSecond?: number;
  styles?: any;
  children: ReactNode | ReactNode[];
  translateHorizontal?: boolean;
  shAnimateOnInit?: boolean;
  animatePropState?: any;
  pointerEvents?:
    | Animated.Value
    | Animated.AnimatedInterpolation
    | 'box-none'
    | 'none'
    | 'box-only'
    | 'auto'
    | undefined;
};

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
}: AnimatedHolderProps) => {
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

  useEffect(() => {
    if (shAnimateOnInit) {
      startSlideAnimation(1, translate);
      startSlideAnimation(1, opacity);
    } else {
      startSlideAnimation(animatePropState, translate);
      startSlideAnimation(animatePropState, opacity);
    }
  }, [
    opacity,
    translate,
    animatePropState,
    shAnimateOnInit,
    startSlideAnimation,
  ]);

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

export { AnimatedHolder };
