import { ImageSourcePropType } from 'react-native';

export type UniversitiesState = {
  current: University | null;
  universities: University[];
  favoriteUniversities: University[];
  favoriteUniversitiesLength: number;
};

export type University = {
  'state-province'?: string | null;
  image?: ImageSourcePropType;
  likes?: number;
  isLiked?: boolean;
  web_pages: string[];
  alpha_two_code: string;
  country: string;
  name: string;
  domains: string[];
};

export interface UpdateUniversitiesActionReturn {
  type: Symbol;
  payload: University[];
}
export interface UpdateCurrentUniversityActionReturn {
  type: Symbol;
  payload: University;
}
export interface UpdateFavoriteUniversitiesActionReturn {
  type: Symbol;
  payload: University[];
}
export interface UpdateFavoriteUniversityActionReturn {
  type: Symbol;
  payload: {
    actionCallback: string;
    university: University;
  };
}
