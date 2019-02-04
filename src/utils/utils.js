export function fillZero(num) {
  if (parseInt(num) < 10) {
    num = '0' + num;
  }
  return num;
}
export function formateDate(time) {
  let oDate = new Date(time),
    oYear = oDate.getFullYear(),
    oMonth = oDate.getMonth() + 1 ,
    oDay = oDate.getDate(),
    oHour = oDate.getHours(),
    oMinute = oDate.getMinutes(),
    oSecond = oDate.getSeconds(),
    oTime = fillZero(oYear) + '-' + fillZero(oMonth) + '-' + fillZero(oDay) + ' ' + fillZero(oHour) + ':' + fillZero(oMinute) + ':' + fillZero(oSecond)
  return oTime;
}
