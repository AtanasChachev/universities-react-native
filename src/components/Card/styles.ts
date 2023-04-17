import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  holder: {
    padding: 20,
  },
  imageHolder: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  backgroundImage: {
    height: 200,
  },
  button: {
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.22,
    elevation: 3,
  },
  contentHolder: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    paddingBottom: 10,
  },
  anchor: {
    fontSize: 16,
  },
  statsHolder: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  stats: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    paddingLeft: 4,
  },
});
