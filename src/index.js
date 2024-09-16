import "normalize.css";
import "./index.css";

import dataFetcher from "./modules/dataFetcher";
import { formInputs, tableDataCells } from "./modules/pageElements";

formInputs.search.addEventListener("click", (event) => {
  if (formInputs.location.value !== "") {
    const p = document.createElement('p');
    p.innerHTML = "Loading...";
    const container = document.querySelector('div#container');
    container.append(p);
    
    dataFetcher(formInputs.location.value).then(function (weather) {
      tableDataCells.address.innerHTML = weather.address;
      tableDataCells.timezone.innerHTML = weather.timezone.replace("_", " ");
      tableDataCells.conditions.innerHTML = weather.conditions;
      tableDataCells.time.innerHTML = weather.time;
      tableDataCells.temperature.innerHTML = `${weather.temperature} °F`;
      
      container.removeChild(p);
      document.querySelector("table").style.display = "table";
    });
  }
  event.preventDefault();
});
