import React, { useCallback, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { showToastMessage, openUrl } from '@src/utils/helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  image: ImageSourcePropType;
  likes: number | undefined;
  isUniversityLiked?: boolean;
  url: string;
  onPress: (action: string) => void;
};

type ButtonProps = {
  text: string | number;
  icon: string;
  onPressCallback: () => void;
};

const DetailedHero = ({
  likes,
  url,
  image,
  isUniversityLiked,
  onPress,
}: Props) => {
  const [likesState, updateLikesState] = useState(likes ?? 0);
  const [isLiked, updateIsLiked] = useState(isUniversityLiked);

  const RenderButton = useCallback(
    ({ text, icon, onPressCallback }: ButtonProps) => (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPressCallback && onPressCallback();
        }}>
        <Text style={styles.stat}>{text}</Text>
        <Icon name={icon} size={26} color={'#FFF'} />
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <View>
      <View style={styles.buttonsHolder}>
        <RenderButton
          text={likesState}
          icon={isLiked ? 'heart' : 'heart-outline'}
          onPressCallback={() => {
            updateLikesState(!isLiked ? likesState + 1 : likesState - 1);
            updateIsLiked(!isLiked);
            showToastMessage(
              !isLiked ? 'success' : 'error',
              !isLiked ? 'Congratulations!' : 'Oh no...',
              !isLiked
                ? 'You have liked that vendor!'
                : 'You have disliked the vendor :(',
            );
            onPress(!isLiked ? 'add' : 'remove');
          }}
        />

        <RenderButton
          text={url}
          icon="globe-outline"
          onPressCallback={() => openUrl(url)}
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

const styles = StyleSheet.create({
  image: {
    height: 260,
  },
  buttonsHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    zIndex: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    color: '#FFF',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  backdrop: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 1,
  },
});

export { DetailedHero };
