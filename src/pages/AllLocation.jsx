import { useState } from 'react';

import { WeatherCard } from '../components/UI';
import { LoadingModal } from '../components/common';
import useSidoDust from '../hooks/useSidoDust';

const AllLocation = () => {
  const [sido, setSido] = useState('서울');
  const { sidoDust, isLoading, error } = useSidoDust(sido);

  const handleSelectChange = e => {
    setSido(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <WeatherCard isShow handleSelectChange={handleSelectChange} data={sidoDust} dosi={sido} />
      )}
    </>
  );
};

export default AllLocation;
