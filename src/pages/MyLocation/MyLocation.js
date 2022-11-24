import Location from "components/Location/Location";
import { SMyLocation } from "./MyLocation.style";
import LoadingModal from "components/Loading/LoadingModal";
import getGeolocation from "api/getGeolocation";
import getKakaoAddress from "api/getKakaoAddress";
import { useEffect, useState } from "react";

const MyLocation = () => {
  const [location, setLocation] = useState({
    fullAddress: '',
    city: '',
    gu: '',
    dong: '',
    detail: ''
  })

  const getAddress = async () => {
    const { longitude, latitude } = await getGeolocation();
    const address = await getKakaoAddress(longitude, latitude);

    setLocation(prev => ({
      ...prev,
      fullAddress: address.address_name,
      city: address.region_1depth_name,
      gu: address.region_2depth_name,
      dong: address.region_3depth_name,
      detail: address.region_4depth_name,
    }))
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <SMyLocation>
      {location.fullAddress ? (
        <Location
          loadingModal={<LoadingModal />}
          geolocal={location.city.slice(0, 2)}
          sidoList={[location.city.slice(0, 2)]}
          currentStation={location.gu}
        ></Location>
      ) : (
        <LoadingModal />
      )}
    </SMyLocation>
  );
};

export default MyLocation;
