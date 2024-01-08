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

// Initialize current image index
let currentImage = 0;
const totalImages = 4;

// Show the initial image
window.onload = updateImage;

// Function to show the current image
function showImage(index) {
  // Hide all images
  for (let i = 0; i < totalImages; i++) {
    document.getElementById(`picture-${i}`).classList.add("hidden");
  }

  // Show the current image
  document.getElementById(`picture-${index}`).classList.remove("hidden");
}

// Function to update the current image
function updateImage() {
  showImage(currentImage);
}

// Function to move to the next image
function moveToNextImage() {
  currentImage = (currentImage + 1) % totalImages;
  updateImage();
}

// Function to move to the previous image
function moveToPreviousImage() {
  currentImage = (currentImage - 1 + totalImages) % totalImages;
  updateImage();
}

// Event listeners for previous and next buttons
document
  .getElementById("previous")
  .addEventListener("click", moveToPreviousImage);
document.getElementById("next").addEventListener("click", moveToNextImage);

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowLeft") {
    moveToPreviousImage();
  } else if (event.key === "ArrowRight") {
    moveToNextImage();
  }
});

// Slider touch

const imageSlider = document.getElementById("image-slider");

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
  if (touchEndX < touchStartX) {
    moveToNextImage();
  }
  if (touchEndX > touchStartX) {
    moveToPreviousImage();
  }
}

// Add event listeners for swipe events
imageSlider.addEventListener("touchstart", handleTouchStart, false);
imageSlider.addEventListener("touchmove", handleTouchMove, false);
imageSlider.addEventListener("touchend", handleTouchEnd, false);

// DESKTOP GALLERY LIGHTBOX

const desktopGallery = document.getElementById("desktop-gallery");
const desktopGalleryImages = document.querySelectorAll("#desktop-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");
const desktopGalleryLightbox = document.getElementById(
  "desktop-lightbox-gallery"
);
const desktopGalleryImagesLightbox = document.querySelectorAll(
  "#desktop-lightbox-gallery img"
);

desktopGalleryImages.forEach((image, index) => {
  image.addEventListener("click", (event) => {
    lightboxImage.src = image.src;
    lightbox.classList.remove("hidden");
  });
});

closeLightbox.addEventListener("click", (event) => {
  lightbox.classList.add("hidden");
});

desktopGalleryImagesLightbox.forEach((image, index) => {
  image.addEventListener("click", (event) => {
    lightboxImage.src = image.src;
  });
});
