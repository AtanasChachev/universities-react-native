import { Colors } from '@src/models/colors';

export interface Return {
  storeTheme: string;
  theme: Colors;
  handleOnValueChange: (value: boolean) => void;
}
