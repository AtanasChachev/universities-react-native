import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { University } from '@src/models/store/universities';
import { AnimatedHolder, VirtualizedCardsList } from '@src/components';
import { useColor } from '@src/styles/colors';
import { updateCurrentUniversity } from '@src/store/actions/universities';
import { checkIfIsLiked } from '@src/utils/helpers';

const FavoriteUniversities = ({ navigation }: any) => {
  const theme = useColor();
  const dispatch = useDispatch();

  const { favoriteUniversities } = useSelector(
    (store: Store) => store.universities,
  );

  useEffect(() => {
    console.log(favoriteUniversities);
  }, [favoriteUniversities]);

  const RenderEmptyListMessage = () => (
    <View style={styles.emptyHolder}>
      <Text style={{ ...styles.emptyHolderHeading, color: theme.iconActive }}>
        Oooppps...
      </Text>
      <Text style={{ color: theme.text }}>
        It seems you don't have any favorite universities yet!
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{ ...styles.holder, backgroundColor: theme.background }}>
      <AnimatedHolder
        shAnimateOnInit={true}
        outputRangeFirst={40}
        delay={400}
        duration={400}>
        <VirtualizedCardsList
          ListEmptyComponent={<RenderEmptyListMessage />}
          universities={favoriteUniversities}
          onPress={(university: University) => {
            checkIfIsLiked(favoriteUniversities, university);
            dispatch(updateCurrentUniversity(university));
            navigation.navigate('UniversitiesDetailed');
          }}
        />
      </AnimatedHolder>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  holder: {
    flex: 1,
  },
  emptyHolder: {
    padding: 20,
  },
  emptyHolderHeading: {
    fontSize: 18,
    paddingBottom: 10,
  },
});

export { FavoriteUniversities };
