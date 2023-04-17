import { ImageSourcePropType } from 'react-native';

export interface CardProps {
  title: string;
  numberOfLikes?: number;
  image?: ImageSourcePropType;
  onPress?: () => void;
}
