import { colors } from '@src/styles/colors';
import { Colors } from '@src/models/colors';
import { useAppStore } from '@src/store/useAppStore';
import { AppState } from '@src/models/store/app';

export const useTheme = (): Colors => {
  const { theme } = useAppStore((state: AppState) => state);
  return colors[theme];
};
