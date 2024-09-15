import "normalize.css";
import "./index.css";

function getWeather(location) {
  const newLocation = location.toLowerCase();
  const APIKey = "FX2MGM34YSYBXLSDHZ6QUPTU4";

  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newLocation}?key=${APIKey} `,
    { mode: "cors" },
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (responseJSON) {
      const address = responseJSON.resolvedAddress;
      const timezone = responseJSON.timezone;
      const conditions = responseJSON.currentConditions.conditions;
      const time = responseJSON.currentConditions.datetime;
      const temperature = responseJSON.currentConditions.temp;
      return { address, timezone, conditions, time, temperature };
    })
    .catch(function (error) {
      return error;
    });
}
