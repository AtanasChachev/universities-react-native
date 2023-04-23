import { useCallback, useState } from 'react';
import { Return } from './types';
import { useUniversitiesStore } from '@src/store/useUniversitiesStore';
import { UniversitiesState } from '@src/models/store/universities';
import { UniversitiesDetailedProps } from './types';

export const useUniversitiesDetailed = ({
  route,
  navigation,
}: UniversitiesDetailedProps): Return => {
  const { university } = route.params;
  const [isScrollingDown, updateIsScrollingDown] = useState(false);
  const [scrollingOffset, updateScrollingOffset] = useState(0);
  const { updateFavoriteUniversity } = useUniversitiesStore(
    (state: UniversitiesState) => state,
  );

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

  const handleDetailedHeroPress = (): void => {
    if (!university) {
      return;
    }

    const mappedUniversity = { ...university, isLiked: true };
    updateFavoriteUniversity(mappedUniversity);
  };

  const handleOnBack = (): void => navigation.goBack();

  return {
    university,
    isScrollingDown,
    handleDetailedHeroPress,
    detectScrollDirection,
    handleOnBack,
  };
};
