import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFilterWeather } from "../../redux/slices/weather";

import { LoadingModal } from "../../components/common";
import { WeatherCard } from "../../components/UI";

const Favorite = () => {
  const [isLoading, setIsLoading] = useState(true);
  const favoriteData = useSelector((state) => state.weather.favoriteData);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        dispatch(fetchFilterWeather());
        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    getData();
  }, [dispatch]);

  return <div>{isLoading ? <LoadingModal /> : <WeatherCard isShow={false} data={favoriteData} />}</div>;
};

export default Favorite;
