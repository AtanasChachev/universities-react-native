import { UPDATE_UNIVERSITIES } from '@src/store/constants/universities';
import { UniversitiesState } from '@src/models/store/universities';

const universitiesState: UniversitiesState = {
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

    default: {
      return { ...state };
    }
  }
};

export default UniversitiesReducer;
