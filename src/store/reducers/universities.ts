import {
  UPDATE_UNIVERSITIES,
  UPDATE_CURRENT_UNIVERSITY,
} from '@src/store/constants/universities';
import { UniversitiesState } from '@src/models/store/universities';

const universitiesState: UniversitiesState = {
  current: null,
  universities: [],
};

const UniversitiesReducer = (
  state: UniversitiesState = universitiesState,
  action: any,
) => {
  switch (action.type) {
    case UPDATE_UNIVERSITIES: {
      return { ...state, universities: action.payload };
    }

    case UPDATE_CURRENT_UNIVERSITY: {
      return { ...state, current: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default UniversitiesReducer;
