document.querySelector(".switch").addEventListener("change", (event) => {
  changeProjectTheme("main", "main", "main-night");
  changeProjectTheme(".birthplace", "color-day", "color-night");
  changeProjectTheme(".text", "color-day", "color-night");
});

const changeProjectTheme = (selector, dayClass, nightClass) => {
  const elem = document.querySelector(selector);

  elem.classList.toggle(dayClass);
  elem.classList.toggle(nightClass);
};
