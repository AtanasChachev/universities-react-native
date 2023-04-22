import { University } from '@src/models/store/universities';
import {
  KeyExtractorType,
  VirtualizedCardsListProps,
  VirtualizedItem,
} from './types';
import Card from '@src/components/Card';

interface Return {
  RenderItem: ({ item }: VirtualizedItem) => JSX.Element;
  getItemsCount: () => number;
  getKeyExtractor: (_: KeyExtractorType, index: number) => string;
  getUniversityItem: (data: University[], index: number) => KeyExtractorType;
}

interface UseVirtualizedCardsListProps
  extends Pick<VirtualizedCardsListProps, 'onPress' | 'universities'> {}

export const useVirtualizedCardsList = ({
  onPress,
  universities,
}: UseVirtualizedCardsListProps): Return => {
  const RenderItem = ({ item }: VirtualizedItem): JSX.Element => {
    const handleOnPress = (): void => onPress(item.university);
    const { university } = item;
    const { isLiked, likes, name, image } = university;

    return (
      <Card
        isLiked={isLiked}
        numberOfLikes={likes}
        title={name}
        image={image}
        onPress={handleOnPress}
      />
    );
  };

  const getItemsCount = (): number => universities.length;
  const getKeyExtractor = (_: KeyExtractorType, index: number): string =>
    index.toString();
  const getUniversityItem = (
    data: University[],
    index: number,
  ): { university: University } => ({
    university: data[index],
  });

  return {
    RenderItem,
    getItemsCount,
    getKeyExtractor,
    getUniversityItem,
  };
};
