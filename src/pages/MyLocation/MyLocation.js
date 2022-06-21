import Location from "components/Location/Location";
import { SMyLocation } from "./MyLocation.style";
import LoadingModal from "components/Loading/LoadingModal";
import useCurrentLocation from "hooks/useCurrentLocation";
import kakaoLocal from "api/kakaoLocal";
import { useEffect, useState } from "react";

const MyLocation = () => {
  const { location, error } = useCurrentLocation();
  const [geolocal, setGeolocal] = useState("");
  const [sidoList, setSidoList] = useState([""]);

  useEffect(() => {
    if (location) {
      const { longitude, latitude } = location;
      //  kakaoLocal(longitude, latitude ).then(res => {
      //res.slice(0,2)
      setGeolocal("서울");
      setSidoList(["서울"]);
    }
  }, [location]);

  return (
    <SMyLocation>
      {geolocal ? (
        <Location
          loadingModal={<LoadingModal />}
          geolocal={geolocal}
          sidoList={sidoList}
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
