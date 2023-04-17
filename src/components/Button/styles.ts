import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 20,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.22,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});
