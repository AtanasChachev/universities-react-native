import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { University } from '@src/models/store/universities';

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
) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
  });
};

/* Storing data in the async storage */
export const storeData = async (key: string, value: string) => {
  return await AsyncStorage.setItem(key, value);
};

/* Get data in the async storage */
export const getData = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export const checkIfIsLiked = (
  favoriteUniversities: University[],
  university: University,
) => {
  const activeUniversityIndex = favoriteUniversities.findIndex(
    (_university: University) => _university.name === university.name,
  );

  if (activeUniversityIndex > -1) {
    university.isLiked = true;
  }
};
