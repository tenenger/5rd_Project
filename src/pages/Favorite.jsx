import { LoadingModal } from '../components/common';
import { WeatherCard } from '../components/UI';
import useFavoritesSidoDust from '../hooks/useFavoritesSidoDust';
import { useRecoilValue } from 'recoil';
import { favoriteGuRoState } from '../recoil/atoms/dust';

const Favorite = () => {
  const favoritesSido = useRecoilValue(favoriteGuRoState);
  const { sidoDusts, isLoading, error } = useFavoritesSidoDust({
    select: sidoDusts =>
      sidoDusts.filter(({ sidoName, stationName }) => favoritesSido[sidoName]?.includes(stationName) ?? false),
  });

  return <div>{isLoading ? <LoadingModal /> : <WeatherCard isShow={false} data={sidoDusts} />}</div>;
};

export default Favorite;
