import { Settings } from '@src/models/settings';
import { turkey, ireland, italy, germany } from '@src/assets';

/* Settings for pages and components across the app */
export const SETTINGS: Settings = {
  tabBar: {
    icons: {
      fontSize: 24,
      home: {
        outline: 'home-outline',
        filled: 'home',
      },
      settings: {
        outline: 'settings-outline',
        filled: 'settings',
      },
    },
  },
  countries: [
    {
      id: 'ireland',
      name: 'Republic of Ireland',
      image: ireland,
    },
    {
      id: 'turkey',
      name: 'Turkey',
      image: turkey,
    },
    {
      id: 'germany',
      name: 'Germany',
      image: germany,
    },
    {
      id: 'italy',
      name: 'Italy',
      image: italy,
    },
  ],
};
