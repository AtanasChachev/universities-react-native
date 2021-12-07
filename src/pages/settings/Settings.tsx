import React, { useCallback } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { SwitchToggle } from '@src/components';
import { useTheme } from '@src/styles/hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import { updateTheme } from '@src/store/actions/app';
import { storeData } from '@src/utils/helpers';
import { Store } from '@src/models/store/store';

const Settings = () => {
  const { theme } = useSelector((state: Store) => state.app);
  const _theme = useTheme();
  const dispatch = useDispatch();

  const getThemeString = useCallback(value => (value ? 'dark' : 'light'), []);

  return (
    <SafeAreaView
      style={{ ...styles.holder, backgroundColor: _theme.background }}>
      <View style={styles.switchOuterHolder}>
        <View
          style={{
            ...styles.switchHolder,
            borderBottomColor: _theme.iconInactive,
          }}>
          <Text style={{ ...styles.switchText, color: _theme.text }}>
            Dark Theme
          </Text>

          <SwitchToggle
            value={theme === 'dark'}
            onValueChange={(value: boolean) => {
              dispatch(updateTheme(getThemeString(value)));
              storeData('theme', getThemeString(value));
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  holder: {
    flex: 1,
  },
  switchHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  switchOuterHolder: {
    padding: 20,
  },
  switchText: {
    fontSize: 16,
  },
});

export { Settings };
