document.querySelector(".switch").addEventListener("change", (event) => {
  toggleTheme(".about-me");
  toggleTheme(".mood");
  toggleTheme(".favorite-quote");
  toggleTheme(".tv-shows");
  toggleTheme(".my-city");
  toggleTheme(".treats");
});

const toggleTheme = (selector) => {
  const elem = document.querySelector(selector);

  elem.classList.toggle("main");
  elem.classList.toggle("main-night");
  elem.classList.toggle("color-day");
  elem.classList.toggle("color-night");
};
