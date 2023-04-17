import { AnimatedHolderProps } from '@src/components/AnimatedHolder/types';

export interface DetailedFixedHeaderProps
  extends Pick<AnimatedHolderProps, 'animatePropState' | 'pointerEvents'> {
  name?: string;
  onGoBack: () => void;
}
