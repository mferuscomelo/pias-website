const images = document.querySelectorAll(".gallery-image");
const gallery = document.querySelector(".gallery");
const titles = gallery?.querySelectorAll(".title");
const arrowLeft = gallery?.querySelector(".arrow-left");
const arrowRight = gallery?.querySelector(".arrow-right");

let index = null;

images?.forEach((image) => {
  image.addEventListener("click", (event) => {
    const element = event.target.parentNode.parentNode;
    index = element.id;

    gallery.classList.add("maximized");
    arrowLeft.classList.remove("hidden");
    arrowRight.classList.remove("hidden");

    updateTitle();

    images?.forEach((image) => {
      image.classList.add("maximized");

      if (image.id == index) {
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
      }
    });
  });
});

arrowLeft?.addEventListener("click", (event) => {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  updateImages();
  updateTitle();
});

arrowRight?.addEventListener("click", (event) => {
  index++;

  if (index > images.length - 1) {
    index = 0;
  }

  updateImages();
  updateTitle();
});

function updateTitle() {
  titles?.forEach((title) => {
    if (title.id == index) {
      title.classList.remove("hidden");
    } else {
      title.classList.add("hidden");
    }
  });
}

function updateImages() {
  images?.forEach((image) => {
    if (image.id == index) {
      image.classList.remove("hidden");
    } else {
      image.classList.add("hidden");
    }
  });
}
