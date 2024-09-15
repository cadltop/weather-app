import "normalize.css";
import "./index.css";

import { dataFetcher } from "./modules/dataFetcher";

const formInputs = {
  location: document.querySelector("input#location"),
  search: document.querySelector('input[type="submit"]'),
};

const tableDataCells = {
  address: document.querySelector("td.address"),
  timezone: document.querySelector("td.timezone"),
  conditions: document.querySelector("td.conditions"),
  time: document.querySelector("td.time"),
  temperature: document.querySelector("td.temperature"),
};

formInputs.search.addEventListener("click", (event) => {
  dataFetcher.setLocation(formInputs.location.value).then(function (weather) {
    tableDataCells.address.innerHTML = weather.address;
    tableDataCells.timezone.innerHTML = weather.timezone;
    tableDataCells.conditions.innerHTML = weather.conditions;
    tableDataCells.time.innerHTML = weather.time;
    tableDataCells.temperature.innerHTML = weather.temperature;
  });
  event.preventDefault();
});
