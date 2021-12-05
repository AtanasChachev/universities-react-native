import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { SwitchToggle } from '@src/components';
import { useColor } from '@src/styles/colors';
import { useDispatch } from 'react-redux';
import { updateTheme } from '@src/store/actions/app';

const Settings = () => {
  const dispatch = useDispatch();
  const theme = useColor();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <SafeAreaView
      style={{ ...styles.holder, backgroundColor: theme.background }}>
      <View style={styles.switchOuterHolder}>
        <View
          style={{
            ...styles.switchHolder,
            borderBottomColor: theme.iconInactive,
          }}>
          <Text style={{ ...styles.switchText, color: theme.text }}>
            Dark Theme
          </Text>

          <SwitchToggle
            onValueChange={(value: boolean) =>
              dispatch(updateTheme(value ? 'dark' : 'light'))
            }
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
