import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFill } from "@fortawesome/free-solid-svg-icons";

import { SLayout, SSido, SDataTime, SMese, SMessage, SHeader, SIconButton } from "./Card.style";
import { meseMessage } from "../../../helper/meseMessage";

const Card = ({item, handleClick, isFavorite}) => {
  const {sidoName, stationName, dataTime, pm10Value} = item;
  const { message, color } = meseMessage(Number(item.pm10Value));

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
