import { VirtualizedList } from 'react-native';
import { VirtualizedCardsListProps } from './types';
import { useVirtualizedCardsList } from './useVirtualizedCardsList';

const VirtualizedCardsList = ({
  universities,
  ListEmptyComponent,
  onPress,
}: VirtualizedCardsListProps): JSX.Element => {
  const { RenderItem, getItemsCount, getKeyExtractor, getUniversityItem } =
    useVirtualizedCardsList({ universities, onPress });

  return (
    <VirtualizedList
      ListEmptyComponent={ListEmptyComponent}
      data={universities}
      initialNumToRender={2}
      renderItem={RenderItem}
      keyExtractor={getKeyExtractor}
      getItemCount={getItemsCount}
      getItem={getUniversityItem}
    />
  );
};

export default VirtualizedCardsList;
