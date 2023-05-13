import { useQuery } from '@tanstack/react-query';
import { sidoQueryKey } from '../constants';
import { getMySidoDust } from '../api/fetch';

const queryFn = sido => async () => {
  const data = await getMySidoDust(sido);
  return data;
};

const useSidoDust = sido => {
  const { data, isLoading, error } = useQuery({
    queryKey: [...sidoQueryKey, sido],
    queryFn: queryFn(sido),
    enabled: !!sido,
    staleTime: 300000,
  });

  return { sidoDust: data, isLoading, error };
};

export default useSidoDust;
