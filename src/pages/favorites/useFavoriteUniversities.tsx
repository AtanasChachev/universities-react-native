import { View, Text } from 'react-native';
import { styles } from './styles';
import { UniversitiesState, University } from '@src/models/store/universities';
import { useTheme } from '@src/hooks/useTheme';
import { Return } from './types';
import { useUniversitiesStore } from '@src/store/useUniversitiesStore';
import { FavoriteUniversitiesProps } from './types';

export const useFavoriteUniversities = ({
  navigation,
}: FavoriteUniversitiesProps): Return => {
  const theme = useTheme();
  const { favoriteUniversities } = useUniversitiesStore(
    (state: UniversitiesState) => state,
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
