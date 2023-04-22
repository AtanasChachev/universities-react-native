import { useQuery } from '@tanstack/react-query';
import { queryFetcher } from '@src/services';
import { University, GetUniversitiesQueriesReturn } from '../types';
import { UseGetUniversitiesByCountryProps } from './types';

export const useGetUniversitiesByCountry = ({
  id,
}: UseGetUniversitiesByCountryProps): GetUniversitiesQueriesReturn => {
  const { data, ...args } = useQuery(['getUniversityByCountry'], () =>
    queryFetcher<University[]>(`search?country=${id}`),
  );

  return {
    universities: data || [],
    ...args,
  };
};
