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

export { formInputs, tableDataCells };
