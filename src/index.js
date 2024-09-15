import "normalize.css";
import "./index.css";

function getWeather(location) {
  const newLocation = location.toLowerCase();
  const APIKey = "FX2MGM34YSYBXLSDHZ6QUPTU4";

  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newLocation}?key=${APIKey} `,
  )
    .then(function (response) {
      return console.log(response);
    })
    .catch(function (error) {
      return console.error(error);
    });
}