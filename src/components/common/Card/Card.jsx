import { useRecoilState } from 'recoil';

import { SLayout, SSido, SDataTime, SMese, SMessage, SHeader, SIconButton } from './Card.style';
import { getDustMessageFromGrade } from '../../../utils/dust';
import { EmptyStarIcon, FilledStarIcon } from '../icons';
import { favoriteGuRoState } from '../../../recoil/atoms/dust';
import { useState } from 'react';

const Card = ({ item: { sidoName, stationName, dataTime, pm10Value, pm10Grade } }) => {
  const [favorites, setFavorites] = useRecoilState(favoriteGuRoState);
  const [isFavorite, setIsFavorite] = useState(favorites[sidoName]?.includes(stationName) ?? false);
  const { bgColor, bgColorIdx, message } = getDustMessageFromGrade(+pm10Grade);

  const handleFavoriteClick = () => {
    setFavorites(
      isFavorite
        ? { ...favorites, [sidoName]: favorites[sidoName].filter(favorite => favorite !== stationName) }
        : { ...favorites, [sidoName]: favorites[sidoName] ? [stationName, ...favorites[sidoName]] : [stationName] }
    );
    setIsFavorite(!isFavorite);
  };

  return (
    <SLayout {...{ bgColor, bgColorIdx }}>
      <SHeader>
        <span>{stationName}</span>
        <SSido>{sidoName}</SSido>
        <SIconButton onClick={handleFavoriteClick}>{isFavorite ? <FilledStarIcon /> : <EmptyStarIcon />}</SIconButton>
      </SHeader>
      <SMessage>{message}</SMessage>
      <div>
        <SMese>미세먼지 수치 {pm10Value}</SMese>
        <SDataTime>({dataTime} 기준)</SDataTime>
      </div>
    </SLayout>
  );
};
export default Card;
