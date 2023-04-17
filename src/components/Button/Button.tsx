import { Image, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@src/styles/hooks/useTheme';
import { styles } from './styles';
import { ButtonProps } from './types';

const Button = ({ text, icon, onPress }: ButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        backgroundColor: theme.componentBackground,
        shadowColor: theme.text,
      }}>
      {icon && <Image style={styles.icon} source={icon} />}

      <Text style={{ ...styles.text, color: theme.text }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
