import { ImageSourcePropType } from 'react-native';

export interface UniversitiesState {
  favoriteUniversities: University[];
  favoriteUniversitiesLength: number;
  updateFavoriteUniversity: (university: University) => void;
  updateFavoriteUniversities: (favoriteUniversities: University[]) => void;
}

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
