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
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      return error;
    });
}

const formInputs = {
  location: document.querySelector("input#location"),
  search: document.querySelector('input[type="submit"]'),
};

formInputs.search.addEventListener("click", (event) => {
  getWeather(formInputs.location.value);
  event.preventDefault();
});
