import { ImageSourcePropType } from 'react-native';

export interface DetailedHeroProps {
  image: ImageSourcePropType;
  likes?: number;
  isUniversityLiked?: boolean;
  url: string;
  onPress: (action: string) => void;
}

export interface ButtonProps {
  text: string | number;
  icon: string;
  onPressCallback: () => void;
}
