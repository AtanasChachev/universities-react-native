import { Colors } from '@src/models/colors';

type ThemeProps = {
  [key: string]: Colors;
};

/* The colors for the UI. Names can be changed, those are just an example */
export const ThemeColors: Colors = {
  background: '#FFF',
  text: '#000',
  iconActive: '#FF6A4F',
  iconInactive: '#9C9392',
  componentBackground: '#333',
};

/* The colors for the UI. Names can be changed, those are just an example */
export const light: Colors = {
  background: '#FFF',
  text: '#121212',
  iconActive: '#FF6A4F',
  iconInactive: '#9C9392',
  componentBackground: '#FFF',
};

export const dark: Colors = {
  background: '#121212',
  text: '#FFF',
  iconActive: '#FF6A4F',
  iconInactive: '#a6a6a6',
  componentBackground: '#383838',
};

export const colors: ThemeProps = {
  light: light,
  dark: dark,
};
