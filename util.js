export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function getDateTime() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  const yyyy = d.getFullYear();

  let mm = d.getMonth() + 1; // Months start at 1
  let dd = d.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const now = dd + mm + yyyy + h + m + s;
  return now;
}

//convert a date  to a different format. ex: 01/12/23 --> 12/23
export function mmyyDateFormat(dateToBeChanged, itsSeparator, newSeparator) {
  const [year, month, day] = dateToBeChanged.split(itsSeparator);
  return [month, year.substring(year.length - 2)].join(newSeparator);
}

//extracts a json object from a response whose unique attribute matches the supplied attribute
export const extractJsonObject = (responseJson, uniqueId) =>
  responseJson.find((jsonObject) => jsonObject.uniqueId === uniqueId);
