const getKakaoAddress = async (longitude, latitude) => {
  if (!longitude || !latitude) return console.log("값이 없음");
  const geocoder = new window.kakao.maps.services.Geocoder();

  const get = () => {
    return new Promise((resolve, reject) => {
      geocoder.coord2RegionCode(longitude, latitude, resolve)
    });
  };

  const data = await get();
  console.log(data[0])
  console.log("지역 명칭 : " + data[0].address_name);
  console.log("행정구역 코드 : " + data[0].code);
  return data[0];
};

export default getKakaoAddress