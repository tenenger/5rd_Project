import { useQueries } from '@tanstack/react-query';

import { getMySidoDust } from 'api/fetch';
import { sidoQueryKey, SIDO_NAMES } from 'constants';

const queryFn = sido => async () => {
  const data = await getMySidoDust(sido);
  return data;
};

const useAllSidoDust = filter => {
  const results = useQueries({
    queries: SIDO_NAMES.map(({ title }) => ({
      queryKey: [...sidoQueryKey, title],
      queryFn: queryFn(title),
      staleTime: 300000,
      select: sidoDust => (!filter ? sidoDust : sidoDust.filter(({ stationName }) => stationName.includes(filter))),
    })),
  });

  return { sidoDusts: results.map(({ data }) => data).flat(), isLoading: results.some(({ isLoading }) => isLoading) };
};

export default useAllSidoDust;
