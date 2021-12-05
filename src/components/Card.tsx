import React from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useColor } from '@src/styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

type CardType = {
  title: string;
  numberOfLikes?: number;
  image?: ImageSourcePropType;
  onPress?: () => void;
};

const Card = ({ title, image, numberOfLikes, onPress }: CardType) => {
  const theme = useColor();

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
                <Icon color={theme.iconActive} name="heart" size={30} />
                <Text style={{ ...styles.likes, color: theme.text }}>
                  {numberOfLikes}
                </Text>
              </View>
            )}

            <Text style={{ ...styles.anchor, color: theme.iconActive }}>
              View more
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  holder: {
    padding: 20,
  },
  imageHolder: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  backgroundImage: {
    height: 200,
  },
  button: {
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.22,
    elevation: 3,
  },
  contentHolder: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    paddingBottom: 10,
  },
  anchor: {
    fontSize: 16,
  },
  statsHolder: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  stats: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    paddingLeft: 4,
  },
});

export { Card };
