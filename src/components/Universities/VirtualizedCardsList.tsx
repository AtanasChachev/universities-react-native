import React from 'react';
import { VirtualizedList } from 'react-native';
import { University } from '@src/models/store/universities';
import { Card } from '@src/components';

type VirtualizedItem = {
  index: number;
  item: KeyExtractorType;
};

type KeyExtractorType = {
  university: University;
};

type Props = {
  universities: University[];
  ListEmptyComponent?: JSX.Element;
  onPress: (university: University) => void;
};

const VirtualizedCardsList = ({
  universities,
  ListEmptyComponent,
  onPress,
}: Props) => {
  return (
    <VirtualizedList
      ListEmptyComponent={ListEmptyComponent}
      data={universities}
      initialNumToRender={2}
      renderItem={({ item }: VirtualizedItem) => (
        <Card
          numberOfLikes={item.university.likes}
          title={item.university.name}
          image={item.university.image}
          onPress={() => {
            onPress && onPress(item.university);
          }}
        />
      )}
      keyExtractor={(item: KeyExtractorType, index: number) => index.toString()}
      getItemCount={() => universities.length}
      getItem={(data: University[], index: number) => ({
        university: data[index],
      })}
    />
  );
};

export { VirtualizedCardsList };
