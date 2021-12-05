import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { showToastMessage } from '@src/utils/helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  image: ImageSourcePropType;
  likes: number | undefined;
  isUniversityLiked?: boolean;
  onPress: (action: string) => void;
};

const DetailedHero = ({ likes, image, isUniversityLiked, onPress }: Props) => {
  const [likesState, updateLikesState] = useState(likes ?? 0);
  const [isLiked, updateIsLiked] = useState(isUniversityLiked);

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
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
        }}>
        <Icon
          name={isLiked ? 'heart' : 'heart-outline'}
          size={30}
          color={'#FFF'}
        />

        <Text style={styles.stat}>{likesState}</Text>
      </TouchableOpacity>

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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 16,
    bottom: 24,
    zIndex: 10,
  },
  stat: {
    color: '#FFF',
    fontSize: 16,
    paddingLeft: 8,
  },
  backdrop: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    zIndex: 1,
  },
});

export { DetailedHero };
