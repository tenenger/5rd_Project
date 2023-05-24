import { useState } from 'react';

import { useRecoilState } from 'recoil';

import { EmptyStarIcon, FilledStarIcon } from 'components/common/icons';
import { getDustMessageFromGrade } from 'utils/dust';
import { favoriteGuRoState } from 'recoil/atoms/dust';

import { SLayout, SSido, SDataTime, SMese, SMessage, SHeader, SIconButton } from './Card.style';

const Card = ({ item, handleSelectCardClick }) => {
  const { sidoName, stationName, dataTime, pm10Value, pm10Grade1h } = item;
  const [favorites, setFavorites] = useRecoilState(favoriteGuRoState);
  const [isFavorite, setIsFavorite] = useState(favorites[sidoName]?.includes(stationName) ?? false);
  const { bgColor, bgColorIdx, message } = getDustMessageFromGrade(+pm10Grade1h);

  const handleFavoriteClick = e => {
    e.stopPropagation();

    setFavorites(
      isFavorite
        ? { ...favorites, [sidoName]: favorites[sidoName].filter(favorite => favorite !== stationName) }
        : { ...favorites, [sidoName]: favorites[sidoName] ? [stationName, ...favorites[sidoName]] : [stationName] }
    );
    setIsFavorite(!isFavorite);
  };

  return (
    <SLayout {...{ bgColor, bgColorIdx }} onClick={() => handleSelectCardClick(item)}>
      <SHeader>
        <span>{stationName}</span>
        <SSido>{sidoName}</SSido>
        <SIconButton onClick={handleFavoriteClick}>{isFavorite ? <FilledStarIcon /> : <EmptyStarIcon />}</SIconButton>
      </SHeader>
      <SMessage>{message}</SMessage>
      {pm10Grade1h && (
        <div>
          <SMese>미세먼지 수치 {pm10Value}</SMese>
          <SDataTime>({dataTime} 기준)</SDataTime>
        </div>
      )}
    </SLayout>
  );
};
export default Card;
