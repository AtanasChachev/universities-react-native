import { createStore, combineReducers } from 'redux';
import AppReducer from './reducers/app';
import UniversitiesReducer from './reducers/universities';

const reducers = combineReducers({
  app: AppReducer,
  universities: UniversitiesReducer,
});

export const store = createStore(reducers);
