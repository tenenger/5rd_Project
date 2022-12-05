import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFilterWeather } from "../../redux/slices/weather";

import { LoadingModal } from "../../components/common";
import { WeatherCard } from "../../components/UI";

const Favorite = () => {
  const weatherStatus = useSelector((state) => state.weather.status);
  const favoriteData = useSelector((state) => state.weather.favoriteData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterWeather());
  }, [dispatch]);

  return <div>{weatherStatus === 'pending' ? <LoadingModal /> : <WeatherCard isShow={false} data={favoriteData} />}</div>;
};

export default Favorite;
