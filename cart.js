// Get the cart icon element
const cartIcon = document.getElementById("cart-icon");

// Get the dialog element
const cartDrawer = document.getElementById("cart-drawer");

// Function to show the dialog
function showDialog() {
  cartDrawer.show();
}

// Function to close the dialog
function closeDialog() {
  cartDrawer.close();
}

// Event listener for clicking on the cart icon
cartIcon.addEventListener("click", showDialog);

// Event listener for clicking outside of the dialog
window.addEventListener("click", function (event) {
  if (event.target === dialog) {
    closeDialog();
  }
});
