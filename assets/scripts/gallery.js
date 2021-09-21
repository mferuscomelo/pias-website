const images = document.querySelectorAll(".gallery-image");
const gallery = document.querySelector(".gallery");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let index = null;

images?.forEach((image) => {
  image.addEventListener("click", (event) => {
    const element = event.target.parentNode.parentNode;
    index = element.id;

    gallery.classList.add("maximized");
    arrowLeft.classList.remove("hidden");
    arrowRight.classList.remove("hidden");

    images?.forEach((image) => {
      image.classList.add("maximized");

      if (image.id == element.id) {
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
      }
    });
  });
});

arrowLeft.addEventListener("click", (event) => {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  images?.forEach((image) => {
    if (image.id == index) {
      image.classList.remove("hidden");
    } else {
      image.classList.add("hidden");
    }
  });
});

arrowRight.addEventListener("click", (event) => {
  index++;

  if (index > images.length - 1) {
    index = 0;
  }

  images?.forEach((image) => {
    if (image.id == index) {
      image.classList.remove("hidden");
    } else {
      image.classList.add("hidden");
    }
  });
});
