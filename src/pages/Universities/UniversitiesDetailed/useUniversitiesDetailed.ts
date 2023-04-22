import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFavoriteUniversity } from '@src/store/actions/universities';
import { Return } from './types';

export const useUniversitiesDetailed = ({ route, navigation }: any): Return => {
  const dispatch = useDispatch();
  const { university } = route.params;
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
