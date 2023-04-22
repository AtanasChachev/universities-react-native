import { GenericQueryResponse } from '../types';
import { University } from '@src/models/store/universities';

export interface GetUniversitiesQueriesReturn extends GenericQueryResponse {
  universities: University[];
}
