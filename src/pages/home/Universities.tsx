import React, { useCallback } from 'react';
import { SafeAreaView, VirtualizedList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { University } from '@src/models/store/universities';
import { AnimatedHolder, Card } from '@src/components';
import { ThemeColors } from '@src/styles/colors';
import { updateCurrentUniversity } from '@src/store/actions/universities';

type VirtualizedItem = {
  index: number;
  item: KeyExtractorType;
};

type KeyExtractorType = {
  university: University;
};

const Universities = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { universities, favoriteUniversities } = useSelector(
    (store: Store) => store.universities,
  );

  const checkIfIsLiked = useCallback(
    (university: University) => {
      const activeUniversityIndex = favoriteUniversities.findIndex(
        (_university: University) => _university.name === university.name,
      );

      if (activeUniversityIndex > -1) {
        university.isLiked = true;
      }
    },
    [favoriteUniversities],
  );

  return (
    <SafeAreaView style={styles.holder}>
      <AnimatedHolder
        shAnimateOnInit={true}
        outputRangeFirst={40}
        delay={400}
        duration={400}>
        <VirtualizedList
          data={universities}
          initialNumToRender={2}
          renderItem={({ item }: VirtualizedItem) => (
            <Card
              numberOfLikes={item.university.likes}
              title={item.university.name}
              image={item.university.image}
              onPress={() => {
                checkIfIsLiked(item.university);
                dispatch(updateCurrentUniversity(item.university));
                navigation.navigate('UniversitiesDetailed');
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
      </AnimatedHolder>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  holder: {
    backgroundColor: ThemeColors.colorWhite,
  },
});

export { Universities };
