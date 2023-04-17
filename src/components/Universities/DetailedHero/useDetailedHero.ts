import { useState } from 'react';
import { DetailedHeroProps } from './types';
import { openUrl, showToastMessage } from '@src/utils/helpers';

interface Return {
  likesState: number;
  isLiked?: boolean;
  handleButtonTap: () => void;
  handleUrlOpen: () => Promise<void>;
}

interface UseDetailedHeroProps
  extends Pick<
    DetailedHeroProps,
    'likes' | 'isUniversityLiked' | 'onPress' | 'url'
  > {}

export const useDetailedHero = ({
  likes,
  isUniversityLiked,
  url,
  onPress,
}: UseDetailedHeroProps): Return => {
  const [likesState, updateLikesState] = useState(likes ?? 0);
  const [isLiked, updateIsLiked] = useState(isUniversityLiked);

  const handleButtonTap = (): void => {
    updateLikesState(!isLiked ? likesState + 1 : likesState - 1);
    updateIsLiked(!isLiked);
    showToastMessage(
      !isLiked ? 'success' : 'error',
      !isLiked ? 'Congratulations!' : 'Oh no...',
      !isLiked
        ? 'You have liked that vendor!'
        : 'You have disliked the vendor :(',
    );

    onPress(!isLiked ? 'add' : 'remove');
  };

  const handleUrlOpen = (): Promise<void> => openUrl(url);

  return {
    likesState,
    isLiked,
    handleUrlOpen,
    handleButtonTap,
  };
};
