import { useRecoilValue } from 'recoil';

import { LoadingModal } from 'components/common';
import { WeatherCard } from 'components/UI';
import { useFavoritesSidoDust } from 'hooks';
import { favoriteGuRoState } from 'recoil/atoms/dust';

const Favorite = () => {
  const favoritesSido = useRecoilValue(favoriteGuRoState);
  const { sidoDusts, isLoading } = useFavoritesSidoDust({
    select: sidoDusts =>
      sidoDusts.filter(({ sidoName, stationName }) => favoritesSido[sidoName]?.includes(stationName) ?? false),
  });

  return <div>{isLoading ? <LoadingModal /> : <WeatherCard data={sidoDusts} isShow={false} />}</div>;
};

export default Favorite;
