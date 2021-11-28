export type UniversitiesState = {
  universities: University[];
};

export type University = {
  'state-province'?: string | null;
  web_pages: string[];
  alpha_two_code: string;
  country: string;
  name: string;
  domains: string[];
};
