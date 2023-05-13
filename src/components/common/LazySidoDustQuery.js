import { useQueries } from '@tanstack/react-query';
import { SIDO_NAMES, sidoQueryKey } from '../../constants';
import { getMySidoDust } from '../../api/fetch';

const queryFn = sido => async () => {
  const data = await getMySidoDust(sido);
  return data;
};

const LazySidoDustQuery = () => {
  useQueries({
    queries: SIDO_NAMES.map(sido => ({
      queryKey: [...sidoQueryKey, sido],
      queryFn: queryFn(sido),
      staleTime: 300000,
    })),
  });

  return null;
};

export default LazySidoDustQuery;
