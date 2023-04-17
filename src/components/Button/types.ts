import { ImageSourcePropType } from 'react-native';

export interface ButtonProps {
  text: string;
  icon?: ImageSourcePropType;
  onPress: () => void;
}
