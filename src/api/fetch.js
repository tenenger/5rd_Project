/* eslint-disable no-promise-executor-return */
import axios from 'axios';

import { tryCatch } from 'utils/api';
import { DUST_OPTIONS } from 'constants';

export const getGeolocation = tryCatch(async () => {
  const { coords } = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));

  return coords;
});

export const getKakaoAddresses = tryCatch(async ({ longitude, latitude }) => {
  const geocoder = new kakao.maps.services.Geocoder();
  const data = await new Promise(resolve => geocoder.coord2RegionCode(longitude, latitude, resolve));

  return data;
});

export const getMySidoDust = tryCatch(async sido => {
  const { serviceKey, returnType, numOfRows, dataTerm, pageNo, ver } = DUST_OPTIONS;
  const { data } = await axios.get(
    `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${serviceKey}&returnType=${returnType}&numOfRows=${numOfRows}&pageNo=${pageNo}&sidoName=${sido}&dataTerm=${dataTerm}&ver=${ver}`
  );

  return data.response.body.items;
});
