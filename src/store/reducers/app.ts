import { UPDATE_LOADER, UPDATE_THEME } from '@src/store/constants/app';
import { AppState } from '@src/models/store/app';

const appState: AppState = {
  showLoader: false,
  theme: 'light',
};

const AppReducer = (state: AppState = appState, action: any): AppState => {
  switch (action.type) {
    case UPDATE_LOADER: {
      return { ...state, showLoader: action.payload };
    }

    case UPDATE_THEME: {
      return { ...state, theme: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default AppReducer;
