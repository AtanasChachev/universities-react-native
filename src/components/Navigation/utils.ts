import { Colors } from '@src/models/colors';
import { GetScreenOptions } from './types';

export const getScreenOptions = (theme: Colors): GetScreenOptions => {
  return {
    headerStyle: {
      backgroundColor: theme.background,
    },
    headerTintColor: theme.text,
  };
};
