export interface AppState {
  showLoader: boolean;
  theme: string;
  updateShowLoader: (showLoader?: boolean) => void;
  updateTheme: (theme: string) => void;
}
