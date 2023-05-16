import { useState } from 'react';

import { LoadingModal } from 'components/common';
import { WeatherCard } from 'components/UI';
import useSidoDust from 'hooks/useSidoDust';

const AllLocation = () => {
  const [sido, setSido] = useState('서울');
  const { sidoDust, isLoading } = useSidoDust({ sido });

  const handleSelectChange = e => {
    setSido(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <WeatherCard data={sidoDust} dosi={sido} handleSelectChange={handleSelectChange} isShow />
      )}
    </>
  );
};

export default AllLocation;
