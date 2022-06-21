const kakaoLocal = async (latitude, longitude) => {
  const geocoder = new window.kakao.maps.services.Geocoder();

  const callback = (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      console.log("지역 명칭 : " + result[0].address_name);
      console.log("행정구역 코드 : " + result[0].code);
    }
  };

  geocoder.coord2RegionCode(longitude, latitude, callback);
};

export default kakaoLocal;
