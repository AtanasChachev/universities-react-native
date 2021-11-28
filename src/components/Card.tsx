import React from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeColors } from '@src/styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

type CardType = {
  title: string;
  numberOfLikes?: number;
  image?: ImageSourcePropType;
  onPress?: () => void;
};

const Card = ({ title, image, numberOfLikes, onPress }: CardType) => {
  return (
    <View style={styles.holder}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {image && (
          <View style={styles.imageHolder}>
            <ImageBackground source={image} style={styles.backgroundImage} />
          </View>
        )}

        <View style={styles.contentHolder}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.statsHolder}>
            {numberOfLikes && (
              <View style={styles.stats}>
                <Icon color={ThemeColors.persimmon} name="heart" size={30} />
                <Text>{numberOfLikes}</Text>
              </View>
            )}

            <Text style={styles.anchor}>View more</Text>
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
    backgroundColor: ThemeColors.colorWhite,
    shadowColor: ThemeColors.colorBlack,
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
    color: ThemeColors.persimmon,
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
});

export { Card };
