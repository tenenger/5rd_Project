import { useQueries } from '@tanstack/react-query';

import { getMySidoDust } from 'api/fetch';
import { SIDO_NAMES, sidoQueryKey } from 'constants';

const queryFn = sido => async () => {
  const data = await getMySidoDust(sido);
  return data;
};

const LazySidoDustQuery = () => {
  useQueries({
    queries: SIDO_NAMES.map(({ title }) => ({
      queryKey: [...sidoQueryKey, title],
      queryFn: queryFn(title),
      staleTime: 300000,
    })),
  });

  return null;
};

export default LazySidoDustQuery;
