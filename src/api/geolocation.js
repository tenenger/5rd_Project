const geolocation = async () => {
  const onSuccess = ({ coords }) => {
    return {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };
  };

  const onError = (error) => {
    return error.message;
  };

  function get() {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(onSuccess(position)),
        (error) => reject(onError(error))
      )
    );
  }

  const data = await get();
  return data;
};

export default geolocation;
