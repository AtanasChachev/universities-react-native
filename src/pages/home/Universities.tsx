import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { University } from '@src/models/store/universities';
import { AnimatedHolder, VirtualizedCardsList } from '@src/components';
import { useTheme } from '@src/styles/hooks/useTheme';
import { updateCurrentUniversity } from '@src/store/actions/universities';
import { checkIfIsLiked } from '@src/utils/helpers';

const Universities = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { universities, favoriteUniversities } = useSelector(
    (store: Store) => store.universities,
  );

  return (
    <SafeAreaView style={{ backgroundColor: theme.background }}>
      <AnimatedHolder
        shAnimateOnInit={true}
        outputRangeFirst={40}
        delay={400}
        duration={400}>
        <VirtualizedCardsList
          universities={universities}
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

export { Universities };
