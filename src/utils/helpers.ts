import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
