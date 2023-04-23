import { AppState } from '@src/models/store/app';
import { create } from 'zustand';

export const useAppStore = create<AppState>(set => ({
  showLoader: false,
  theme: 'light',
  updateShowLoader: (showLoader: boolean): void => set(() => ({ showLoader })),
  updateTheme: (theme: string): void => set(() => ({ theme })),
}));
