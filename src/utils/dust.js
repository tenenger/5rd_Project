export const getDustMessageFromGrade = pm10Grade1h => {
  switch (pm10Grade1h) {
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

export const sortSidoDust = (sorted, sidoDust) => {
  const delta = sorted.order === 'asc' ? 1 : -1;

  switch (sorted.subject) {
    case 'dictionary':
      return sidoDust.sort((a, b) => (a.stationName > b.stationName ? 1 * delta : -1 * delta));
    case 'dust':
      return sidoDust.sort((a, b) => (a.pm10Value - b.pm10Value) * delta);
    default:
      return sidoDust;
  }
};
