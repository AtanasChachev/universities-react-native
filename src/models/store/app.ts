export type AppState = {
  showLoader: boolean;
  theme: string;
};

export interface ShowLoaderActionReturn {
  type: Symbol;
  payload: boolean;
}

export interface UpdateThemeActionReturn {
  type: Symbol;
  payload: string;
}
