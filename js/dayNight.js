document.querySelector(".switch").addEventListener("change", (event) => {
  const checked = event.target.checked;

  if (checked) {
    return setNigthTheme();
  }

  return setDayTheme();
});

const setDayTheme = () => {
  const mainBlock = getMainBlock();
  const birthPalce = getSucceed();

  mainBlock.classList.remove("main-night");
  mainBlock.classList.add("main");
  birthPalce.classList.remove("color-night");
  birthPalce.classList.add("color-day");
  setDayTable();
};
const setNigthTheme = () => {
  const mainBlock = getMainBlock();
  const birthPalce = getSucceed();
  const succeedTable = getSucceedTable();

  mainBlock.classList.remove("main");
  mainBlock.classList.add("main-night");

  if (birthPalce) {
    birthPalce.classList.remove("color-day");
    birthPalce.classList.add("color-night");
  }

  if (succeedTable) {
    succeedTable.classList.remove("color-day");
    succeedTable.classList.add("color-night");
  }

  setNightTable();
};
const setDayTable = () => {
  const nodes = getTableNodes();
  nodes.forEach((node) => {
    node.classList.remove("color-night");
    node.classList.add("color-day");
  });
};

const setNightTable = () => {
  const nodes = getTableNodes();

  nodes.forEach((node) => {
    node.classList.remove("color-day");
    node.classList.add("color-night");
  });
};
const getTableNodes = () => {
  return [
    ...document.querySelectorAll("th"),
    ...document.querySelectorAll("td"),
  ];
};

const getMainBlock = () => {
  return document.querySelector("main");
};
const getSucceed = () => {
  return document.querySelector(".succeed");
};
const getSucceedTable = () => {
  return document.querySelector("table");
};
