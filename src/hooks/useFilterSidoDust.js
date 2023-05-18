import { useQueries } from '@tanstack/react-query';

import { getMySidoDust } from 'api/fetch';
import { sidoQueryKey } from 'constants';

const useFilterSidoDust = (sidoList, ...options) => {
  const results = useQueries({
    queries: sidoList.map(({ title }) => ({
      queryKey: [...sidoQueryKey, title],
      queryFn: async () => {
        const data = await getMySidoDust(title);
        return data;
      },
      staleTime: 300000,
      ...options,
    })),
  });

  return {
    data: results.map(result => result.data).flat(),
    isLoading: results.some(result => result.isLoading),
  };
};

export default useFilterSidoDust;
