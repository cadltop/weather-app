export default async function (text) {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices" +
      `/rest/services/timeline/${text}?key=FX2MGM34YSYBXLSDHZ6QUPTU4`,
    { mode: "cors" },
  );
  const weather = response.json().then(function (responseJSON) {
    const address = responseJSON.resolvedAddress;
    const timezone = responseJSON.timezone;
    const conditions = responseJSON.currentConditions.conditions;
    const time = responseJSON.currentConditions.datetime;
    const temperature = responseJSON.currentConditions.temp;
    return { address, timezone, conditions, time, temperature };
  });
  return weather;
}
