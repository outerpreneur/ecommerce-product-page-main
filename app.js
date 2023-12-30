// MENU MOBILE

const menuIcon = document.querySelector("#menu-icon");
const menuIconClose = document.querySelector("#mobile-menu-close");
const menuMobile = document.getElementById("mobile-menu");

menuIcon.addEventListener("click", (event) => {
  menuMobile.classList.remove("-translate-x-full");
});

menuIconClose.addEventListener("click", (event) => {
  menuMobile.classList.add("-translate-x-full");
});

// IMAGE SLIDER

let currentImage = 1;
const totalImages = 5;

// functions

function showImage(index) {
  // Hide all images
  for (let i = 1; i <= totalImages; i++) {
    document.getElementById(`picture-${i}`).classList.add("hidden");
  }

  // Show the selected image
  document.getElementById(`picture-${index}`).classList.remove("hidden");
}

function updateImage() {
  showImage(currentImage);
}

function moveToNextImage() {
  currentImage = (currentImage % totalImages) + 1;
  updateImage();
}

function moveToPreviousImage() {
  currentImage = ((currentImage - 2 + totalImages) % totalImages) + 1;
  updateImage();
}

// event trigers

document
  .getElementById("previous")
  .addEventListener("click", moveToPreviousImage);

document.getElementById("forward").addEventListener("click", moveToNextImage);

updateImage();
