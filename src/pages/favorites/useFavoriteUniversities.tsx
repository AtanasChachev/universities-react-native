import { useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { University } from '@src/models/store/universities';
import { useTheme } from '@src/hooks/useTheme';
import { Return } from './types';

export const useFavoriteUniversities = ({ navigation }: any): Return => {
  const theme = useTheme();
  const { favoriteUniversities } = useSelector(
    (store: Store) => store.universities,
  );

  const handleOnPress = (university: University): void => {
    navigation.navigate('UniversitiesDetailed', {
      university,
    });
  };

  const ListEmptyComponent = (): JSX.Element => (
    <View style={styles.emptyHolder}>
      <Text style={{ ...styles.emptyHolderHeading, color: theme.iconActive }}>
        Oooppps...
      </Text>
      <Text style={{ color: theme.text }}>
        It seems you don't have any favorite universities yet!
      </Text>
    </View>
  );

  return {
    theme,
    favoriteUniversities,
    handleOnPress,
    ListEmptyComponent,
  };
};
