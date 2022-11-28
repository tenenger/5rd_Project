import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSelectWeather } from "../../redux/slices/weather";

import { WeatherCard } from "../../components/UI";
import { LoadingModal } from "../../components/common";

const AllLocation = () => {
  const [selectDosi, setSelectDosi] = useState("서울");
  const [isLoading, setIsLoading] = useState(false);
  const weatherData = useSelector((state) => state.weather.data);
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    setSelectDosi(e.target.value);
  };

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        dispatch(fetchSelectWeather(selectDosi));
        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    getData();
  }, [selectDosi, dispatch]);

  return (
    <div>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <WeatherCard isShow handleSelectChange={handleSelectChange} data={weatherData} dosi={selectDosi} />
      )}
    </div>
  );
};

export default AllLocation;
