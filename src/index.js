import "normalize.css";
import "./index.css";

import dataFetcher from "./modules/dataFetcher";
import { formInputs, tableDataCells } from "./modules/pageElements";

formInputs.search.addEventListener("click", (event) => {
  dataFetcher(formInputs.location.value).then(function (weather) {
    tableDataCells.address.innerHTML = weather.address;
    tableDataCells.timezone.innerHTML = weather.timezone;
    tableDataCells.conditions.innerHTML = weather.conditions;
    tableDataCells.time.innerHTML = weather.time;
    tableDataCells.temperature.innerHTML = weather.temperature;
  });
  event.preventDefault();
});
