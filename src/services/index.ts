import { HTTPMutationMethods } from './types';
import Config from 'react-native-config';

const API_URL = Config.APP_API || '';

export const queryFetcher = <T>(url: string): Promise<T> =>
  fetch(`${API_URL}/${url}`).then((response: Response) => response.json());

export const queryMutation = (
  url: string,
  method: HTTPMutationMethods,
  data?: unknown,
): Promise<Response> =>
  fetch(`${`${API_URL}/${url}`}`, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(async (response: Response) => {
    if (!response.ok) {
      throw new Error('Ooops, something went wrong');
    } else {
      if (response.status === 204) {
        return { success: true };
      }
      return response.json();
    }
  });
