import { StyleSheet } from 'react-native';
import { ThemeColors } from '@src/styles/colors';

export const styles = StyleSheet.create({
  holder: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderHolder: {
    width: 200,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    color: ThemeColors.background,
  },
});
