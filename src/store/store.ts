import { createStore, combineReducers } from 'redux';
import AppReducer from './reducers/app';

const reducers = combineReducers({
  app: AppReducer,
});

export const store = createStore(reducers);
