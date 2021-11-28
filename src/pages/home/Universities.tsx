import React from 'react';
import { SafeAreaView, VirtualizedList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { University } from '@src/models/store/universities';
import { Card } from '@src/components';
import { ThemeColors } from '@src/styles/colors';

type VirtualizedItem = {
  index: number;
  item: KeyExtractorType;
};

type KeyExtractorType = {
  university: University;
};

const Universities = () => {
  const { universities } = useSelector((store: Store) => store.universities);

  return (
    <SafeAreaView style={styles.holder}>
      <VirtualizedList
        data={universities}
        initialNumToRender={2}
        renderItem={({ item }: VirtualizedItem) => (
          <Card
            numberOfLikes={item.university.likes}
            title={item.university.name}
            image={item.university.image}
            onPress={() => {
              console.log(item.university);
            }}
          />
        )}
        keyExtractor={(item: KeyExtractorType, index: number) =>
          index.toString()
        }
        getItemCount={() => universities.length}
        getItem={(data: University[], index: number) => ({
          university: data[index],
        })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  holder: {
    backgroundColor: ThemeColors.colorWhite,
  },
});

export { Universities };
