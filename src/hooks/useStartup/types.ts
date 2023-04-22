import { StatusBarStyle } from 'react-native';

export interface Return {
  showLoader: boolean;
  getBarStyle: () => StatusBarStyle | null | undefined;
}
