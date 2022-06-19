import { useEffect, useRef, useState } from "react";
import React from "react";
import { getWeather } from "../../api/weather";
import { useDispatch, useSelector } from "react-redux";
import { handleSido, selectWeather } from "./../../redux/reducers/weather";
import { SMain } from "./Main.style";

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

const Main = () => {
  const [data, setDate] = useState(null);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
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
  };

  const handleStationChange = (e) => {
    handleFilter(e.target.value);
  };

  useEffect(() => {
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
    // 미세먼지 상태 메시지 문자
    if (filter.pm10Value <= 20) setMessage("좋음");
    else if (filter.pm10Value <= 40) setMessage("보통");
    else setMessage("나쁨");
  }, [filter]);

  return (
    <SMain>
      {data ? (
        <>
          <select onChange={handleSidoChange}>
            {sidoList.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select ref={stationRef} onChange={handleStationChange}>
            {data.map((item) => (
              <option key={item.stationName}>{item.stationName}</option>
            ))}
          </select>
          {filter && (
            <div>
              <div>{filter.stationName}</div>
              <div>{filter.sidoName}</div>
              <div>{message}</div>
              <h2>미세먼지 수치 {filter.pm10Value}</h2>
              <div>{filter.dataTime} 기준</div>
            </div>
          )}
        </>
      ) : (
        <strong>Loading....</strong>
      )}
    </SMain>
  );
};

export default Main;
