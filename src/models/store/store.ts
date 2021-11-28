import { AppState } from './app';
import { UniversitiesState } from './universities';

export type Store = {
  app: AppState;
  universities: UniversitiesState;
};
