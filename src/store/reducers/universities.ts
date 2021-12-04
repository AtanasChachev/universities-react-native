import {
  UPDATE_UNIVERSITIES,
  UPDATE_CURRENT_UNIVERSITY,
  UPDATE_FAVORITE_UNIVERSITIES,
  UPDATE_FAVORITE_UNIVERSITY,
} from '@src/store/constants/universities';
import { UniversitiesState } from '@src/models/store/universities';
import { storeData } from '@src/utils/helpers';

const universitiesState: UniversitiesState = {
  current: null,
  universities: [],
  favoriteUniversities: [],
  favoriteUniversitiesLength: 0,
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

    case UPDATE_FAVORITE_UNIVERSITIES: {
      return {
        ...state,
        favoriteUniversities: action.payload,
        favoriteUniversitiesLength: action.payload.length,
      };
    }

    case UPDATE_FAVORITE_UNIVERSITY: {
      const { university, actionCallback } = action.payload,
        favoriteUniversities = [...state.favoriteUniversities];

      if (actionCallback === 'add') {
        favoriteUniversities.push(university);
        storeData('universities', JSON.stringify(favoriteUniversities));
      } else {
        const currentUniversityIndex = favoriteUniversities.findIndex(
          _university => _university.name === university.name,
        );

        if (currentUniversityIndex > -1) {
          favoriteUniversities.splice(currentUniversityIndex, 1);
          storeData('universities', JSON.stringify(favoriteUniversities));
        }
      }

      return {
        ...state,
        favoriteUniversities: favoriteUniversities,
        favoriteUniversitiesLength: favoriteUniversities.length,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default UniversitiesReducer;
