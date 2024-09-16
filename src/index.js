import "normalize.css";
import "./index.css";

import dataFetcher from "./modules/dataFetcher";
import { formInputs, tableDataCells } from "./modules/pageElements";

formInputs.search.addEventListener("click", (event) => {
  dataFetcher(formInputs.location.value).then(function (weather) {
    tableDataCells.address.innerHTML = weather.address;
    tableDataCells.timezone.innerHTML = weather.timezone.replace("_", " ");
    tableDataCells.conditions.innerHTML = weather.conditions;
    tableDataCells.time.innerHTML = weather.time;
    tableDataCells.temperature.innerHTML = `${weather.temperature} °F`;

    document.querySelector("table").style.display = "table";
  });
  event.preventDefault();
});
