import { ImageSourcePropType } from 'react-native';

export interface CardProps {
  title: string;
  numberOfLikes?: number;
  isLiked?: boolean;
  image?: ImageSourcePropType;
  onPress?: () => void;
}
