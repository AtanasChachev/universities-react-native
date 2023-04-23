import { SafeAreaView, View } from 'react-native';
import AnimatedHolder from '@src/components/AnimatedHolder';
import Button from '@src/components/Button';
import { SETTINGS } from '@src/config/settings';
import { Country } from '@src/models/settings';
import { styles } from './styles';
import { useTheme } from '@src/hooks/useTheme';
import { HomeProps } from './types';

const Home = ({ navigation }: HomeProps): JSX.Element => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{ ...styles.holder, backgroundColor: theme.background }}>
      <View style={styles.buttonHolder}>
        {SETTINGS.countries.map(
          ({ id, name, image }: Country, index: number) => {
            const handleOnPress = (): void => {
              navigation.navigate('UniversitiesScreen', {
                id,
              });
            };

            return (
              <AnimatedHolder
                shAnimateOnInit={true}
                key={index}
                outputRangeFirst={20}
                duration={500}
                delay={index * 200}>
                <Button onPress={handleOnPress} text={name} icon={image} />
              </AnimatedHolder>
            );
          },
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
