import { ImageSourcePropType } from 'react-native';

export type Settings = {
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
};

export type Country = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};
