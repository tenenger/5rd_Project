import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFill } from "@fortawesome/free-solid-svg-icons";

import { SLayout, SSido, SDataTime, SMese, SMessage, SHeader, SIconButton } from "./Card.style";
import { meseMessage } from "../../../helper/meseMessage";
import { handleFavorite } from "../../../redux/slices/weather";

const Card = ({item}) => {
  const {sidoName, stationName, dataTime, pm10Value} = item;
  const { message, color } = meseMessage(Number(item.pm10Value));

  const favorite = useSelector(state => state.weather.favorite);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(favorite.includes(stationName));

  const handleClick = (station) => {
    setIsFavorite(prev => !prev)
    dispatch(handleFavorite(station))
  }

  return (
      <SLayout key={sidoName + stationName} meseColor={color}>
        <SHeader>
          <span>{stationName}</span>
          <SSido>{sidoName}</SSido>
          <SIconButton onClick={() => handleClick(stationName)}>
            {isFavorite ? <FontAwesomeIcon icon={faStarFill} /> : <FontAwesomeIcon icon={faStarEmpty} /> }
          </SIconButton>
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
