import { useQueries } from '@tanstack/react-query';
import { sidoQueryKey } from '../constants';
import { getMySidoDust } from '../api/fetch';
import { useRecoilValue } from 'recoil';
import { favoriteSidoState } from '../recoil/selectors/dust';

const queryFn = sido => async () => {
  const data = await getMySidoDust(sido);
  return data;
};

const useFavoritesSidoDust = options => {
  const favoritesSido = useRecoilValue(favoriteSidoState);

  const results = useQueries({
    queries: favoritesSido.map(sido => ({
      queryKey: [...sidoQueryKey, sido],
      queryFn: queryFn(sido),
      staleTime: 300000,
      ...options,
    })),
  });

  return {
    sidoDusts: results.map(({ data }) => data).flat(),
    isLoading: results.some(({ isLoading }) => isLoading),
    error: results.some(({ error }) => error),
  };
};

export default useFavoritesSidoDust;
