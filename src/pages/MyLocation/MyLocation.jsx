import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import getGeolocation from "api/getGeolocation";
import getKakaoAddress from "api/getKakaoAddress";

import { fetchSelectWeather } from "redux/slices/weather";

import { LoadingModal } from "../../components/common";
import { WeatherCard } from "../../components/UI";

const MyLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const weatherData = useSelector((state) => state.weather.data);
  const dispatch = useDispatch();

  const getAddress = async () => {
    try {
      setIsLoading(true);
      const { longitude, latitude } = await getGeolocation();
      const address = await getKakaoAddress(longitude, latitude);
      dispatch(fetchSelectWeather(address.region_1depth_name));
      setIsLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{isLoading ? <LoadingModal /> : <WeatherCard isShow={false} data={weatherData} />}</div>;
};

export default MyLocation;
