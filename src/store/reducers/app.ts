import { UPDATE_LOADER } from '@src/store/constants/app';
import { AppState } from '@src/models/store/app';

const appState: AppState = {
  showLoader: false,
};

const AppReducer = (state: AppState = appState, action: any) => {
  switch (action.type) {
    case UPDATE_LOADER: {
      return { ...state, showLoader: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default AppReducer;
