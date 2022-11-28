import axios from "axios";

export const DOSI_LIST = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종",
];

const getParameters = {
  serviceKey:
    "MCyQJ8ZyrTNgRNNq0iZFNQLg9pzRBTBs89jRyN%2FcfwvBZk9WHb4TgNndmdvbVS5aMuttWijurhne3lPZgfde%2Fw%3D%3D",
  returnType: "json",
  numOfRows: 100,
  pageNo: 1,
  ver: 1.0,
};

export const getAllWeather = async () => { 
  const {serviceKey, returnType, numOfRows, pageNo, ver} = getParameters;
  const result = [];

  for (const dosi of DOSI_LIST) {
    const url = `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${serviceKey}&returnType=${returnType}&numOfRows=${numOfRows}&pageNo=${pageNo}&sidoName=${dosi}&ver=${ver}`;

    try {
      const res = await axios.get(url);
      const data = await res.data.response.body.items;
      result.push(...data);
    } catch (err) {
      throw new Error('API 데이터 호출 실패')
    }
  }

  return result;
};

export const getSelectWeather = async (dosi) => { 
  const supportDosi = DOSI_LIST.find(listDosi => dosi.includes(listDosi))

  const url = `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters.serviceKey}&returnType=${getParameters.returnType}&numOfRows=${getParameters.numOfRows}&pageNo=${getParameters.pageNo}&sidoName=${supportDosi}&ver=${getParameters.ver}`;

  try {
    const res = await axios.get(url);
    const data = await res.data.response.body.items;

    return data;
  } catch (err) {
    throw new Error('지원하지 않는 도시입니다.')
  }
};

