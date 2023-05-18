export const SIDO_NAMES = [
  { id: '서울', title: '서울' },
  { id: '부산', title: '부산' },
  { id: '대구', title: '대구' },
  { id: '인천', title: '인천' },
  { id: '광주', title: '광주' },
  { id: '대전', title: '대전' },
  { id: '경기', title: '경기' },
  { id: '강원', title: '강원' },
  { id: '충북', title: '충북' },
  { id: '충남', title: '충남' },
  { id: '전북', title: '전북' },
  { id: '전남', title: '전남' },
  { id: '경북', title: '경북' },
  { id: '경남', title: '경남' },
  { id: '제주', title: '제주' },
  { id: '세종', title: '세종' },
];

export const DUST_OPTIONS = {
  serviceKey: import.meta.env.VITE_APP_API_KEY,
  returnType: 'json',
  numOfRows: 100,
  dataTerm: 'DAILY',
  pageNo: 1,
  ver: 1.3,
};
