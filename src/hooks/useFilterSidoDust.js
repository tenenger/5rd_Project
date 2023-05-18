import { useQueries } from '@tanstack/react-query';

import { getMySidoDust } from 'api/fetch';
import { sidoQueryKey } from 'constants';

const useFilterSidoDust = sidoList => {
  const results = useQueries({
    queries: sidoList.map(sido => ({
      queryKey: [...sidoQueryKey, sido],
      queryFn: async () => {
        const data = await getMySidoDust(sido);
        return data;
      },
      staleTime: 60000,
    })),
  });

  return {
    data: results.map(result => result.data).flat(),
    isLoading: results.some(result => result.isLoading),
  };
};

export default useFilterSidoDust;
