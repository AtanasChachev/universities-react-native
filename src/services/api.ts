import axios, { AxiosResponse } from 'axios';
import Config from 'react-native-config';

const apiUrl: string = Config.APP_API;

const apiService = {
  /* Handling get methods */
  async get(endpoint: string, params?: any): Promise<AxiosResponse> {
    return await axios.get(`${apiUrl}/${endpoint}`, {
      params: params,
    });
  },

  /* Handling post methods */
  async post(endpoint: string, params?: any): Promise<AxiosResponse> {
    return await axios.post(`${apiUrl}/${endpoint}`, params);
  },
};

export { apiService };
