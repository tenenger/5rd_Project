import { useQuery } from '@tanstack/react-query';

import { getMySidoDust } from 'api/fetch';
import { sidoQueryKey } from 'constants';

const queryFn = sido => async () => {
  const data = await getMySidoDust(sido);
  return data;
};

const useSidoDust = ({ sido, ...options }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [...sidoQueryKey, sido],
    queryFn: queryFn(sido),
    enabled: !!sido,
    staleTime: 300000,
    ...options,
  });

  return { sidoDust: data, isLoading, error };
};

export default useSidoDust;
