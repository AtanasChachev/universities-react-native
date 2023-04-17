import { ReactNode } from 'react';
import { Animated, ViewStyle } from 'react-native';

export interface AnimatedHolderProps {
  delay: number;
  duration: number;
  outputRangeFirst: number;
  outputRangeSecond?: number;
  styles?: ViewStyle;
  children: ReactNode | ReactNode[];
  translateHorizontal?: boolean;
  shAnimateOnInit?: boolean;
  animatePropState?: any;
  pointerEvents?: AnimatedPointerEvents;
}

type AnimatedPointerEvents =
  | Animated.Value
  | Animated.AnimatedInterpolation
  | 'box-none'
  | 'none'
  | 'box-only'
  | 'auto'
  | undefined;
