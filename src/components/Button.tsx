import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { ThemeColors } from '@src/styles/colors';

type ButtonType = {
  text: string;
  icon?: ImageSourcePropType;
  onPress: () => void;
};

const Button = ({ text, icon, onPress }: ButtonType) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {icon && <Image style={styles.icon} source={icon} />}

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 20,
    borderRadius: 8,
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
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export { Button };
