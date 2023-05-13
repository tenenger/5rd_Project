import { LoadingModal } from '../components/common';
import { WeatherCard } from '../components/UI';
import { SIDO_NAMES } from '../constants';
import useAddress from '../hooks/useAddress';

import useSidoDust from '../hooks/useSidoDust';

const MyLocation = () => {
  const { address } = useAddress();
  const SIDO_NAME = SIDO_NAMES.find(SIDO_NAME => address?.[0].region_1depth_name.includes(SIDO_NAME)) ?? '서울';
  console.log(SIDO_NAME);
  const { sidoDust, isLoading, error } = useSidoDust(SIDO_NAME);

  return <>{isLoading ? <LoadingModal /> : <WeatherCard isShow={false} data={sidoDust} />}</>;
};

export default MyLocation;
