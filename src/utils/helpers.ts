import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    type,
    text1,
    text2,
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

/* Opening external url in a browser */
export const openUrl = async (url: string): Promise<void> => {
  await Linking.openURL(url);
};
