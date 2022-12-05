import getGeolocation from './../api/getGeolocation';
import getKakaoAddress from './../api/getKakaoAddress';

export const getAddressData = async () => {
  try {
    const { longitude, latitude } = await getGeolocation();
    const address = await getKakaoAddress(longitude, latitude);
    return address;
  } catch (error) {
    throw new Error(error);
  }
};