import "normalize.css";
import "./index.css";

import dataFetcher from "./modules/dataFetcher";

const formInputs = {
  location: document.querySelector("input#location"),
  search: document.querySelector('input[type="submit"]'),
};

formInputs.search.addEventListener("click", (event) => {
  dataFetcher.location = formInputs.location.value;
  event.preventDefault();
});
