import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSelectWeather } from '../../redux/slices/weather';

import { LoadingModal } from '../../components/common';
import { WeatherCard } from '../../components/UI';
import { getAddressData } from '../../helper/getData';

const MyLocation = () => {
  const weatherStatus = useSelector(state => state.weather.status);
  const weatherData = useSelector(state => state.weather.data);
  const dispatch = useDispatch();

  const getAddress = async () => {
    const { region_1depth_name: division } = await getAddressData();
    dispatch(fetchSelectWeather(division));
  };

  useEffect(() => {
    getAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{weatherStatus === 'pending' ? <LoadingModal /> : <WeatherCard isShow={false} data={weatherData} />}</>;
};

export default MyLocation;
