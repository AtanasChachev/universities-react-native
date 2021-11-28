import { ImageSourcePropType } from 'react-native';

export type Settings = {
  tabBar: {
    icons: {
      fontSize: number;
      home: {
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
};

export type Country = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};
