export const kakaoAddress = async (longitude, latitude) => {
  if (!longitude || !latitude) return console.log("값이 없음");
  const geocoder = new window.kakao.maps.services.Geocoder();

  const callback = async (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      console.log("지역 명칭 : " + result[0].address_name);
      console.log("행정구역 코드 : " + result[0].code);
    }
    return result[0];
  };

  const get = () => {
    return new Promise((resolve, reject) => {
      geocoder.coord2RegionCode(longitude, latitude, (result, status) => {
        resolve(callback(result, status));
      });
    });
  };

  const data = await get();
  return data;
};
