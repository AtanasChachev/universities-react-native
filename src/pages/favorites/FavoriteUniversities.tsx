import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { SafeAreaView, View, Text } from 'react-native';
import { University } from '@src/models/store/universities';
import AnimatedHolder from '@src/components/AnimatedHolder';
import VirtualizedCardsList from '@src/components/Universities/VirtualizedCardList';
import { useTheme } from '@src/styles/hooks/useTheme';
import { updateCurrentUniversity } from '@src/store/actions/universities';
import { checkIfIsLiked } from '@src/utils/helpers';
import { styles } from './styles';

const FavoriteUniversities = ({ navigation }: any): JSX.Element => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { favoriteUniversities } = useSelector(
    (store: Store) => store.universities,
  );

  const RenderEmptyListMessage = (): JSX.Element => (
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
          onPress={(university: University): void => {
            checkIfIsLiked(favoriteUniversities, university);
            dispatch(updateCurrentUniversity(university));
            navigation.navigate('UniversitiesDetailed');
          }}
        />
      </AnimatedHolder>
    </SafeAreaView>
  );
};

export default FavoriteUniversities;
