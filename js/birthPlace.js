document.querySelector(".switch").addEventListener("change", (event) => {
  changeBirthPlaceTheme("main", "main", "main-night");
  changeBirthPlaceTheme(".birthplace", "color-day", "color-night");
});

const changeBirthPlaceTheme = (selector, dayClass, nightClass) => {
  const elem = document.querySelector(selector);

  elem.classList.toggle(dayClass);
  elem.classList.toggle(nightClass);
};
