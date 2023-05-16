import { Carousel, LoadingModal } from 'components/common';
import { WeatherCard } from 'components/UI';
import useAddress from 'hooks/useAddress';
import useSidoDust from 'hooks/useSidoDust';
import { SIDO_NAMES } from 'constants';

const MyLocation = () => {
  const { address } = useAddress();
  const SIDO_NAME = SIDO_NAMES.find(SIDO_NAME => address?.[0].region_1depth_name.includes(SIDO_NAME)) ?? '서울';
  const { sidoDust, isLoading } = useSidoDust(SIDO_NAME);

  return (
    <>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <>
          <Carousel autoplay />
          <WeatherCard data={sidoDust} isShow={false} />
        </>
      )}
    </>
  );
};

export default MyLocation;
