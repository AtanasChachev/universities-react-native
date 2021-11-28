import React, { useCallback } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { AnimatedHolder, Button } from '@src/components';
import { ThemeColors } from '@src/styles/colors';
import { SETTINGS } from '@src/config/settings';
import { Country } from '@src/models/settings';
import { universitiesService } from '@src/services/universities';
import { useDispatch } from 'react-redux';
import { updateUniversities } from '@src/store/actions/universities';
import { shShowLoader } from '@src/store/actions/app';

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const fetchUniversitiesByCountry = useCallback(
    async (country: string) => {
      dispatch(shShowLoader(true));

      try {
        const { data } = await universitiesService.fetchUniversitiesByCountry(
          country,
        );

        if (data.length) {
          dispatch(updateUniversities(data));
        }

        dispatch(shShowLoader(false));
      } catch (e) {
        dispatch(shShowLoader(false));
      }
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
