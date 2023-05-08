export const getDustMessageFromGrade = pm10Grade => {
  switch (pm10Grade) {
    case 1:
      return { color: '#4336f4', message: '좋음' };
    case 2:
      return { color: '#4caf50', message: '보통' };
    case 3:
      return { color: '#ff9800', message: '나쁨' };
    case 4:
      return { color: '#e91e63', message: '매우 나쁨' };
    default:
      return { color: '#474747', message: '알수 없음' };
  }
};
