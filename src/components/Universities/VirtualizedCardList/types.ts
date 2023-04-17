import { University } from '@src/models/store/universities';

export interface VirtualizedItem {
  index: number;
  item: KeyExtractorType;
}

export interface KeyExtractorType {
  university: University;
}

export interface VirtualizedCardsListProps {
  universities: University[];
  ListEmptyComponent?: JSX.Element;
  onPress: (university: University) => void;
}
