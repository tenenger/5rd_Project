import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSuccess = async (position) => {
    const { latitude, longitude } = await position.coords;
    setLocation({ latitude, longitude });
  };

  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      return setError("Geolocation is not supported.");
    }
    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return {
    location,
    error,
  };
};

export default useCurrentLocation;
