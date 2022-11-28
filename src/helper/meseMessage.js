export const meseMessage = (mese) => {
  let color, message;

  if (mese <= 20) {color = "#4336f4"; message = "좋음";}
  else if (mese <= 40) {color = "#4caf50"; message = "보통";}
  else if (mese <= 60) {color = "#ff9800"; message = "나쁨";}
  else if (mese > 60) {color = "#e91e63"; message = "매우 나쁨";}
  else {color = "#474747"; message = "알수 없음";}

  return {color, message}
}