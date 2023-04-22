import { ImageSourcePropType } from 'react-native';
import { GenericQueryResponse } from '../types';

export interface University {
  'state-province'?: string;
  image?: ImageSourcePropType;
  likes?: number;
  isLiked?: boolean;
  web_pages: string[];
  alpha_two_code: string;
  country: string;
  name: string;
  domains: string[];
}

export interface GetUniversitiesQueriesReturn extends GenericQueryResponse {
  universities: University[];
}
