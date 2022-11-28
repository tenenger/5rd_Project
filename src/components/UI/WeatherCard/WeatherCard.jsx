import { DOSI_LIST } from "../../../api/getWeather";

import { Card } from "../../common";

import { SCardLayout, SSelect } from "./WeatherCard.style";

const WeatherCard = ({ data, isShow, dosi, handleSelectChange }) => {
  console.log(data);
  return (
    <>
      {isShow && (
        <SSelect onChange={handleSelectChange} defaultValue={dosi}>
          {DOSI_LIST.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </SSelect>
      )}
      <SCardLayout>
        {data.map((item) => (
          <Card key={item.stationName} item={item} />
        ))}
      </SCardLayout>
    </>
  );
};
export default WeatherCard;
