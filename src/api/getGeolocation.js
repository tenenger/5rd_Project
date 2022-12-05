const getGeolocation = async () => {

  const geolocation = () => {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  }

  try {
    const data = await geolocation();
    return await data.coords;
  } catch (err) {
    throw new Error(err)
  }
};

export default getGeolocation;
