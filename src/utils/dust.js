export const getDustMessageFromGrade = pm10Grade => {
  switch (pm10Grade) {
    case 1:
      return { bgColor: 'indigo', bgColorIdx: 8, message: '좋음' };
    case 2:
      return { bgColor: 'lime', bgColorIdx: 5, message: '보통' };
    case 3:
      return { bgColor: 'orange', bgColorIdx: 5, message: '나쁨' };
    case 4:
      return { bgColor: 'pink', bgColorIdx: 7, message: '매우 나쁨' };
    default:
      return { bgColor: 'gray', bgColorIdx: 8, message: '알수 없음' };
  }
};
