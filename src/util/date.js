export function formatDate(str) {
  const obj = new Date(str);

  const year = obj.getFullYear();
  const month = doubleDigit(obj.getMonth() + 1);
  const date = obj.getDate();
  const hours = doubleDigit(obj.getHours());
  const minutes = doubleDigit(obj.getMinutes());
  const seconds = doubleDigit(obj.getSeconds());

  const format = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  return format;
}

function doubleDigit(number) {
  return ("0" + number).slice(-2);
}

const obj = {
  formatDate,
};

export default obj;
