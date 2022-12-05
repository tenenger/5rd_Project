import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSelectWeather } from "../../redux/slices/weather";

import { WeatherCard } from "../../components/UI";
import { LoadingModal } from "../../components/common";

const AllLocation = () => {
  const [selectDosi, setSelectDosi] = useState("서울");
  const weatherData = useSelector((state) => state.weather.data);
  const weatherStatus = useSelector((state) => state.weather.status);
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    setSelectDosi(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchSelectWeather(selectDosi));
  }, [selectDosi, dispatch]);

  return (
    <div>
      {weatherStatus === 'pending' ? (
        <LoadingModal />
      ) : (
        <WeatherCard isShow handleSelectChange={handleSelectChange} data={weatherData} dosi={selectDosi} />
      )}
    </div>
  );
};

export default AllLocation;
