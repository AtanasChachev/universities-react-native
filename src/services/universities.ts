import { AxiosResponse } from 'axios';
import { apiService } from './api';

const universitiesService = {
  async fetchUniversitiesByCountry(country: string): Promise<AxiosResponse> {
    return await apiService.get(`search?country=${country}`);
  },

  async fetchUniversitiesByName(
    country: string,
    name: string,
  ): Promise<AxiosResponse> {
    return await apiService.get(`search?country=${country}&name=${name}`);
  },
};

export { universitiesService };
