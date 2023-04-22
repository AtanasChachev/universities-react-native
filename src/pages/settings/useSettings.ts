import { storeData } from '@src/utils/helpers';
import { updateTheme } from '@src/store/actions/app';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@src/hooks/useTheme';
import { Store } from '@src/models/store/store';
import { Colors } from '@src/models/colors';

interface Return {
  storeTheme: string;
  theme: Colors;
  handleOnValueChange: (value: boolean) => void;
}

export const useSettings = (): Return => {
  const { theme: storeTheme } = useSelector((state: Store) => state.app);
  const theme = useTheme();
  const dispatch = useDispatch();

  const getThemeString = (value: boolean): string => (value ? 'dark' : 'light');

  const handleOnValueChange = (value: boolean): void => {
    dispatch(updateTheme(getThemeString(value)));
    storeData('theme', getThemeString(value));
  };

  return {
    storeTheme,
    theme,
    handleOnValueChange,
  };
};
