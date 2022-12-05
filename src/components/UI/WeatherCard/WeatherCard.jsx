import { useState } from "react";
import { DOSI_LIST } from "../../../api/getWeather";

import { Card } from "../../common";

import { SCardLayout, SSelect } from "./WeatherCard.style";

const WeatherCard = ({ data, isShow, dosi, handleSelectChange }) => {
  const [storage, setStorage] = useState(localStorage.getItem('favorite'));

  const handleClick = (station) => {
    setStorage((prev) => {
      const newStorage = prev.includes(station) ? prev.replace(station, '') : prev + station;
       localStorage.setItem('favorite', newStorage);
       return newStorage
    })
  }

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
          <Card key={item.stationName} item={item} handleClick={handleClick} isFavorite={storage.includes(item.stationName)} />
        ))}
      </SCardLayout>
    </>
  );
};
export default WeatherCard;
