import { useEffect, useRef, useState } from "react";
import React from "react";
import { getWeather } from "../../api/weather";
import { useDispatch, useSelector } from "react-redux";
import { handleSido, selectWeather } from "../../redux/reducers/weather";

import LoadingModal from "../../components/Loading/LoadingModal";
import { SLocation, SSelect, SWeather } from "./Location.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const sidoList = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종",
];

const Location = () => {
  const [data, setDate] = useState(null);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [meseColor, setMeseColor] = useState("");
  const [selected, setSelected] = useState("서울");
  const stationRef = useRef();
  const sido = useSelector(selectWeather);
  const dispatch = useDispatch();

  const handleFilter = (stationName) => {
    const result = data.filter((item) => item.stationName === stationName);
    setFilter(...result);
  };

  const handleSidoChange = (e) => {
    // 시도가 선택되면, redux 시도 상태 변경.
    dispatch(handleSido(e.target.value));
    setSelected(e.target.value);
  };

  const handleStationChange = (e) => {
    handleFilter(e.target.value);
  };

  useEffect(() => {
    setDate(null);
    // 마운트하면, redux 시도로 api값 가져온다.
    getWeather(sido).then((data) => {
      setDate(data);
    });
  }, [sido]);

  useEffect(() => {
    if (data) {
      handleFilter(stationRef.current.value);
    }
  }, [data]);

  useEffect(() => {
    const mese = filter.pm10Value;
    // 미세먼지 상태 메시지 문자
    if (mese <= 20) {
      setMeseColor("#4336f4");
      setMessage("좋음");
    } else if (mese <= 40) {
      setMeseColor("#4caf50");
      setMessage("보통");
    } else if (mese <= 60) {
      setMeseColor("#ff9800");
      setMessage("나쁨");
    } else {
      setMeseColor("#e91e63");
      setMessage("매우 나쁨");
    }
  }, [filter]);

  return (
    <>
      {data ? (
        <SLocation>
          <SSelect>
            <select onChange={handleSidoChange} value={selected}>
              {sidoList.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select ref={stationRef} onChange={handleStationChange}>
              {data.map((item) => (
                <option key={item.stationName}>{item.stationName}</option>
              ))}
            </select>
          </SSelect>
          {filter && (
            <SWeather meseColor={meseColor}>
              <div>
                <span data-weather="station">{filter.stationName}</span>
                <span data-weather="sido">{filter.sidoName}</span>
                <FontAwesomeIcon icon={faStarEmpty} />
              </div>
              <span data-weather="message">{message}</span>
              <div>
                <div>미세먼지 수치 {filter.pm10Value}</div>
                <div data-weather="dataTime">({filter.dataTime} 기준)</div>
              </div>
            </SWeather>
          )}
        </SLocation>
      ) : (
        <LoadingModal />
      )}
    </>
  );
};
export default Location;
