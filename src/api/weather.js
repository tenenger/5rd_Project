import axios from "axios";

const getParameters = {
  serviceKey:
    "MCyQJ8ZyrTNgRNNq0iZFNQLg9pzRBTBs89jRyN%2FcfwvBZk9WHb4TgNndmdvbVS5aMuttWijurhne3lPZgfde%2Fw%3D%3D",
  returnType: "json",
  numOfRows: 100,
  pageNo: 1,
  sidoName: "",
  ver: 1.0,
};

export const getWeather = async (sido) => {
  const url = `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters.serviceKey}&returnType=${getParameters.returnType}&numOfRows=${getParameters.numOfRows}&pageNo=${getParameters.pageNo}&sidoName=${sido}&ver=${getParameters.ver}`;
  const res = await axios.get(url);
  const data = await res.data.response.body.items;
  console.log(data);
  return data;
};
