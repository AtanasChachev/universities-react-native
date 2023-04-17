import { StyleSheet } from 'react-native';
import { ThemeColors } from '@src/styles/colors';

export const styles = StyleSheet.create({
  animatedHolder: {
    zIndex: 10,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 14,
    zIndex: 20,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 24,
    color: ThemeColors.background,
    maxWidth: 240,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    zIndex: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
