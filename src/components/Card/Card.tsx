import { View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@src/hooks/useTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { CardProps } from './types';

const Card = ({
  title,
  image,
  numberOfLikes,
  isLiked,
  onPress,
}: CardProps): JSX.Element => {
  const theme = useTheme();

  return (
    <View style={styles.holder}>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: theme.componentBackground,
          shadowColor: theme.text,
        }}
        onPress={onPress}>
        {image && (
          <View style={styles.imageHolder}>
            <ImageBackground source={image} style={styles.backgroundImage} />
          </View>
        )}

        <View style={styles.contentHolder}>
          <Text style={{ ...styles.title, color: theme.text }}>{title}</Text>

          <View style={styles.statsHolder}>
            {numberOfLikes && (
              <View style={styles.stats}>
                <Icon
                  color={theme.iconActive}
                  name={isLiked ? 'heart' : 'heart-outline'}
                  size={30}
                />
                <Text style={{ ...styles.likes, color: theme.text }}>
                  {numberOfLikes}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
