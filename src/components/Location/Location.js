import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

import { getWeather } from "api/weather";
import { handleSido, selectSido } from "redux/reducers/weather";

import { SLocation, SSelect, SWeather } from "./Location.style";


const sidoListDefault = [
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

const Location = ({
  loadingModal,
  geolocal = "",
  sidoList = sidoListDefault,
  currentStation = "",
  likeSido = "",
  station = "",
  favorite = false,
}) => {
  const stationRef = useRef();
  const reduxSido = useSelector(selectSido);
  const dispatch = useDispatch();

  const [data, setData] = useState("");
  const [message, setMessage] = useState("");
  const [meseColor, setMeseColor] = useState("");
  const [selectedSido, setSelectedSido] = useState("서울");
  const [selectedStationValue, setSelectedStationValue] =
    useState(currentStation);
  const [selectedStation, setSelectedStation] = useState("");
  const [sido, setSido] = useState(reduxSido);

  const handleSidoChange = (e) => {
    // 시도가 선택되면, redux 시도 변경.
    dispatch(handleSido(e.target.value));
    setSelectedSido(e.target.value);
    getData(e.target.value);
  };

  const handleStationChange = (e) => {
    setSelectedStationValue(e.target.value);
    handleFilter(e.target.value);
  };

  const handleFilter = (stationName) => {
    const result = data.filter((item) => item.stationName === stationName);
    setSelectedStation(...result);
  };

  const getData = async (sido) => {
    setData(null);
    const data = await getWeather(sido);
    if (favorite) {
      let likeStation = [];
      for (const gu of station) {
        likeStation.push(...data.filter((el) => el.stationName === gu));
      }
      setData(likeStation);
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    if (data) {
      handleFilter(stationRef.current.value);
    }
  }, [data]);

  useEffect(() => {
    if (selectedStation) {
      const mese = selectedStation.pm10Value;
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
      } else if (mese > 60) {
        setMeseColor("#e91e63");
        setMessage("매우 나쁨");
      } else {
        setMeseColor("#474747");
        setMessage("알수 없음");
      }
    }
  }, [selectedStation]);

  useEffect(() => {
    if (likeSido) {
      setSido(likeSido);
      dispatch(handleSido(likeSido));
    }
  }, [sido]);

  useEffect(() => {
    if (geolocal) getData(geolocal);
    else if (favorite) getData(likeSido);
    else getData("서울");
  }, [geolocal]);

  return (
    <>
      {data ? (
        <SLocation>
          <SSelect>
            <select onChange={handleSidoChange} value={selectedSido}>
              {sidoList.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select
              ref={stationRef}
              onChange={handleStationChange}
              value={selectedStationValue}
            >
              {data.map((item) => (
                <option key={item.stationName}>{item.stationName}</option>
              ))}
            </select>
          </SSelect>
          {selectedStation && (
            <SWeather meseColor={meseColor}>
              <div>
                <span data-weather="station">
                  {selectedStation.stationName}
                </span>
                <span data-weather="sido">{selectedStation.sidoName}</span>
                <FontAwesomeIcon icon={faStarEmpty} />
              </div>
              <span data-weather="message">{message}</span>
              <div>
                <div>미세먼지 수치 {selectedStation.pm10Value}</div>
                <div data-weather="dataTime">
                  ({selectedStation.dataTime} 기준)
                </div>
              </div>
            </SWeather>
          )}
        </SLocation>
      ) : (
        <div>{loadingModal}</div>
      )}
    </>
  );
};
export default Location;
