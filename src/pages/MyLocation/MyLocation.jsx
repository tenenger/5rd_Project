import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSelectWeather } from "redux/slices/weather";

import { LoadingModal } from "../../components/common";
import { WeatherCard } from "../../components/UI";
import { getAddressData } from './../../helper/getData';

const MyLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const weatherData = useSelector((state) => state.weather.data);
  const dispatch = useDispatch();

  const getAddress = async () => {
    setIsLoading(true);

    const {region_1depth_name: division} = await getAddressData();
    dispatch(fetchSelectWeather(division));

    setIsLoading(false);
  };

  useEffect(() => {
    getAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{isLoading ? <LoadingModal /> : <WeatherCard isShow={false} data={weatherData} />}</>;
};

export default MyLocation;
