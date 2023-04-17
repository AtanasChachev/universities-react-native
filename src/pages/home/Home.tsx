import { SafeAreaView, View } from 'react-native';
import AnimatedHolder from '@src/components/AnimatedHolder';
import Button from '@src/components/Button';
import { SETTINGS } from '@src/config/settings';
import { Country } from '@src/models/settings';
import { styles } from './styles';
import { useHome } from './useHome';

const Home = ({ navigation }: any): JSX.Element => {
  const { theme, fetchUniversitiesByCountry } = useHome({ navigation });

  return (
    <SafeAreaView
      style={{ ...styles.holder, backgroundColor: theme.background }}>
      <View style={styles.buttonHolder}>
        {SETTINGS.countries.map((country: Country, index: number) => {
          const handleOnPress = (): void => {
            fetchUniversitiesByCountry(country.id);
          };

          return (
            <AnimatedHolder
              shAnimateOnInit={true}
              key={index}
              outputRangeFirst={20}
              duration={500}
              delay={index * 200}>
              <Button
                onPress={handleOnPress}
                text={country.name}
                icon={country.image}
              />
            </AnimatedHolder>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Home;
