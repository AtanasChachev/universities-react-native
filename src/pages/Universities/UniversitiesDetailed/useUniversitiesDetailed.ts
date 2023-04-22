import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Store } from '@src/models/store/store';
import { updateFavoriteUniversity } from '@src/store/actions/universities';
import { University } from '@src/models/store/universities';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

interface Return {
  university: University | null;
  isScrollingDown: boolean;
  handleDetailedHeroPress: (action: string) => void;
  detectScrollDirection: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => void;
  handleOnBack: () => void;
}

export const useUniversitiesDetailed = ({ route, navigation }: any): Return => {
  const dispatch = useDispatch();
  const { university } = route.params;
  // const { current } = useSelector((store: Store) => store.universities);
  const [isScrollingDown, updateIsScrollingDown] = useState(false);
  const [scrollingOffset, updateScrollingOffset] = useState(0);

  const detectScrollDirection = useCallback(
    event => {
      const currentOffset = event.nativeEvent.contentOffset.y;

      updateIsScrollingDown(
        currentOffset > scrollingOffset && scrollingOffset > 0,
      );
      updateScrollingOffset(currentOffset);
    },
    [scrollingOffset],
  );

  const handleDetailedHeroPress = (action: string): void => {
    if (!university) {
      return;
    }

    const mappedUniversity = { ...university, isLiked: true };
    dispatch(updateFavoriteUniversity(action, mappedUniversity));
  };

  const handleOnBack = (): void => {
    navigation.goBack();
  };

  return {
    university,
    isScrollingDown,
    handleDetailedHeroPress,
    detectScrollDirection,
    handleOnBack,
  };
};
