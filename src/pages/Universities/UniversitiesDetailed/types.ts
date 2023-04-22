import { University } from '@src/models/store/universities';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

export interface Return {
  university?: University;
  isScrollingDown: boolean;
  handleDetailedHeroPress: (action: string) => void;
  detectScrollDirection: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => void;
  handleOnBack: () => void;
}
