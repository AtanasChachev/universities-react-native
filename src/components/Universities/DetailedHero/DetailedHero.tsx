import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { ThemeColors } from '@src/styles/colors';
import { DetailedHeroProps, ButtonProps } from './types';
import { useDetailedHero } from './useDetailedHero';

const DetailedHero = ({
  likes,
  url,
  image,
  isUniversityLiked,
  onPress,
}: DetailedHeroProps): JSX.Element => {
  const { likesState, isLiked, handleButtonTap, handleUrlOpen } =
    useDetailedHero({
      likes,
      url,
      isUniversityLiked,
      onPress,
    });

  const RenderButton = ({
    text,
    icon,
    onPressCallback,
  }: ButtonProps): JSX.Element => (
    <TouchableOpacity style={styles.button} onPress={onPressCallback}>
      <Text style={styles.stat}>{text}</Text>
      <Icon name={icon} size={26} color={ThemeColors.background} />
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.buttonsHolder}>
        <RenderButton
          text={likesState}
          icon={isLiked ? 'heart' : 'heart-outline'}
          onPressCallback={handleButtonTap}
        />

        <RenderButton
          text={url}
          icon="globe-outline"
          onPressCallback={handleUrlOpen}
        />
      </View>

      <ImageBackground source={image} style={styles.image} />
      <LinearGradient
        style={styles.backdrop}
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .8)']}
      />
    </View>
  );
};

export default DetailedHero;
