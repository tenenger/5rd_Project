import Location from "components/Location/Location";
import { SMyLocation } from "./MyLocation.style";
import LoadingModal from "components/Loading/LoadingModal";
import geolocation from "api/geolocation";
import { kakaoAddress } from "api/kakaoAddress";
import { useEffect, useState } from "react";

const MyLocation = () => {
  const [geolocal, setGeolocal] = useState("");
  const [sidoList, setSidoList] = useState([""]);
  const [currentStation, setCurrentStation] = useState("");

  const getAddress = async () => {
    const res = await geolocation();
    const { longitude, latitude } = res;
    const address = await kakaoAddress(longitude, latitude);
    console.log(address.region_1depth_name.slice(0, 2));
    setCurrentStation(address.region_2depth_name);
    setGeolocal(address.region_1depth_name.slice(0, 2));
    setSidoList([address.region_1depth_name.slice(0, 2)]);
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <SMyLocation>
      {geolocal ? (
        <Location
          loadingModal={<LoadingModal />}
          geolocal={geolocal}
          sidoList={sidoList}
          currentStation={currentStation}
        ></Location>
      ) : (
        <div>
          <LoadingModal />
        </div>
      )}
    </SMyLocation>
  );
};

export default MyLocation;
