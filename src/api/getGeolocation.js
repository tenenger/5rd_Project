const getGeolocation = async () => {

  const geolocation = () => {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  }

  const data = await geolocation();
  return await data.coords;
};

export default getGeolocation;
