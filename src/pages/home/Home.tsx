import React, { useCallback } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { AnimatedHolder, Button } from '@src/components';
import { ThemeColors } from '@src/styles/colors';
import { SETTINGS } from '@src/config/settings';
import { Country } from '@src/models/settings';
import { universitiesService } from '@src/services/universities';
import { useDispatch } from 'react-redux';
import { updateStoreProp } from '@src/store/actions/universities';

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const fetchUniversitiesByCountry = useCallback(
    async (country: string) => {
      try {
        const { data } = await universitiesService.fetchUniversitiesByCountry(
          country,
        );

        if (data.length) {
          console.log(data);
          dispatch(updateStoreProp(data));
        }
      } catch (e) {}
    },
    [dispatch],
  );

  return (
    <SafeAreaView style={styles.holder}>
      <View style={styles.buttonHolder}>
        {SETTINGS.countries.map((country: Country, index: number) => (
          <AnimatedHolder
            key={index}
            outputRangeFirst={20}
            duration={500}
            delay={index * 200}>
            <Button
              onPress={() => {
                /* TODO - Save current selected country in store */
                fetchUniversitiesByCountry(country.id);
              }}
              text={country.name}
              icon={country.image}
            />
          </AnimatedHolder>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  holder: {
    flex: 1,
    backgroundColor: ThemeColors.colorWhite,
  },
  buttonHolder: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
});

export { Home };
