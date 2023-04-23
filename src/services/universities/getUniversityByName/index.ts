import { useQuery } from '@tanstack/react-query';
import { queryFetcher } from '@src/services';
import { GetUniversitiesQueriesReturn } from '../types';
import { UseGetUniversitiesByNameProps } from './types';
import { University } from '@src/models/store/universities';

export const useGetUniversitiesByName = ({
  id,
  name,
}: UseGetUniversitiesByNameProps): GetUniversitiesQueriesReturn => {
  const { data, ...args } = useQuery(['getUniversityByName'], () =>
    queryFetcher<University[]>(`search?country=${id}&name=${name}`),
  );

  return {
    universities: data || [],
    ...args,
  };
};
