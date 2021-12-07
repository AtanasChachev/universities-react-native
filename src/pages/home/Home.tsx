import React, { useCallback } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { AnimatedHolder, Button } from '@src/components';
import { useTheme } from '@src/styles/hooks/useTheme';
import { SETTINGS } from '@src/config/settings';
import { Country } from '@src/models/settings';
import { universitiesService } from '@src/services/universities';
import { useDispatch } from 'react-redux';
import { updateUniversities } from '@src/store/actions/universities';
import { shShowLoader } from '@src/store/actions/app';
import { University } from '@src/models/store/universities';

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const addUniversityImageAndStat = useCallback(
    (universities: University[]) => {
      universities.map((university: University) => {
        university.image =
          SETTINGS.universityImages[
            Math.floor(Math.random() * SETTINGS.universityImages.length)
          ];
        university.likes = Math.round(Math.random() * 100) + 1;
      });
    },
    [],
  );

  const fetchUniversitiesByCountry = useCallback(
    async (country: string) => {
      dispatch(shShowLoader(true));

      try {
        const { data } = await universitiesService.fetchUniversitiesByCountry(
          country,
        );

        if (data.length) {
          addUniversityImageAndStat(data);
          dispatch(updateUniversities(data));
          navigation.navigate('UniversitiesScreen');
        }

        dispatch(shShowLoader(false));
      } catch (e) {
        dispatch(shShowLoader(false));
      }
    },
    [addUniversityImageAndStat, dispatch, navigation],
  );

  return (
    <SafeAreaView
      style={{ ...styles.holder, backgroundColor: theme.background }}>
      <View style={styles.buttonHolder}>
        {SETTINGS.countries.map((country: Country, index: number) => (
          <AnimatedHolder
            shAnimateOnInit={true}
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
  },
  buttonHolder: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
});

export { Home };
