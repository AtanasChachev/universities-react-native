import { UPDATE_PROP } from '@src/store/constants/app';
import { AppState } from '@src/models/store/app';

const appState: AppState = {
  testProp: '',
};

const AppReducer = (state: AppState = appState, action: any) => {
  switch (action.type) {
    case UPDATE_PROP: {
      return { ...state, testProp: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default AppReducer;
