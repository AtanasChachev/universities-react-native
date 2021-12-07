import { Store } from '@src/models/store/store';
import { useSelector } from 'react-redux';
import { colors } from '@src/styles/colors';

export const useTheme = () => {
  const { theme } = useSelector((store: Store) => store.app);
  return colors[theme];
};
