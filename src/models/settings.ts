import { ImageSourcePropType } from 'react-native';

export interface Settings {
  tabBar: {
    icons: {
      fontSize: number;
      home: {
        outline: string;
        filled: string;
      };
      favorites: {
        outline: string;
        filled: string;
      };
      settings: {
        outline: string;
        filled: string;
      };
    };
  };
  countries: Country[];
  universityImages: ImageSourcePropType[];
}

export interface Country {
  id: string;
  name: string;
  image: ImageSourcePropType;
}
