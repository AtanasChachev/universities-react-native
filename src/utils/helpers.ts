import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { University } from '@src/models/store/universities';
import { Linking } from 'react-native';

/*
  Function which shows the toast. Accepts three arguements.
  type: string - 'success' or 'error'.
  text1: string - Headline
  text2: string - Description
*/
export const showToastMessage = (
  type: string,
  text1: string,
  text2: string,
): void => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
  });
};

/* Storing data in the async storage */
export const storeData = async (key: string, value: string): Promise<void> => {
  return await AsyncStorage.setItem(key, value);
};

/* Get data in the async storage */
export const getData = async (key: string): Promise<string | null> => {
  return await AsyncStorage.getItem(key);
};

/* Checking if the university is already liked after favorites are being fetched from the AsyncStorage */
export const checkIfIsLiked = (
  favoriteUniversities: University[],
  university: University,
): void => {
  const activeUniversityIndex = favoriteUniversities.findIndex(
    (_university: University) => _university.name === university.name,
  );

  if (activeUniversityIndex > -1) {
    university.isLiked = true;
  }
};

/* Opening external url in a browser */
export const openUrl = async (url: string): Promise<void> => {
  await Linking.openURL(url);
};
