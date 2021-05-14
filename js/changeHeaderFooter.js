document.querySelector(".switch").addEventListener("change", (event) => {
  changeTheme("header");
  changeTheme("footer");
});

const changeTheme = (selector) => {
  const elem = document.querySelector(selector);

  elem.classList.toggle("nightHeaderTheme");
  elem.classList.toggle("dayHeaderTheme");
};
