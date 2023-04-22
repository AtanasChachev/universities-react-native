import { SafeAreaView } from 'react-native';
import AnimatedHolder from '@src/components/AnimatedHolder';
import VirtualizedCardsList from '@src/components/Universities/VirtualizedCardList';
import { styles } from './styles';
import { useFavoriteUniversities } from './useFavoriteUniversities';

const FavoriteUniversities = ({ navigation }: any): JSX.Element => {
  const { theme, favoriteUniversities, handleOnPress, ListEmptyComponent } =
    useFavoriteUniversities({ navigation });

  return (
    <SafeAreaView
      style={{ ...styles.holder, backgroundColor: theme.background }}>
      <AnimatedHolder
        shAnimateOnInit={true}
        outputRangeFirst={40}
        delay={400}
        duration={400}>
        <VirtualizedCardsList
          ListEmptyComponent={<ListEmptyComponent />}
          universities={favoriteUniversities}
          onPress={handleOnPress}
        />
      </AnimatedHolder>
    </SafeAreaView>
  );
};

export default FavoriteUniversities;
