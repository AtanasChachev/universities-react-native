import { Store } from '@src/models/store/store';
import { useSelector } from 'react-redux';
import { colors } from '@src/styles/colors';
import { Colors } from '@src/models/colors';

export const useTheme = (): Colors => {
  const { theme } = useSelector((store: Store) => store.app);
  return colors[theme];
};
