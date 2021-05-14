const imagesArray = ["lovepoltava.jpg", "poltava.jpg", "church.jpg"];
const imgFirPrefix = "images/";
const mainImage = document.querySelector("#main-image");
let currentIndex = 0;

const setImage = (imageIndex) => {
  if (mainImage) {
    mainImage.src = `${imgFirPrefix}${imagesArray[imageIndex]}`;
  }
};

setImage(currentIndex);

document.querySelector("#arrow-left").addEventListener("click", () => {
  if (!currentIndex) {
    return setImage(0);
  }

  setImage(--currentIndex);
});

document.querySelector("#arrow-right").addEventListener("click", () => {
  if (currentIndex === imagesArray.length - 1) {
    return setImage(imagesArray.length - 1);
  }

  setImage(++currentIndex);
});
