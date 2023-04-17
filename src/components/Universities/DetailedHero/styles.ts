import { ThemeColors } from '@src/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    height: 260,
  },
  buttonsHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    zIndex: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    color: ThemeColors.background,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  backdrop: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 1,
  },
});
