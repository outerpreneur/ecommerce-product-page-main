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
  if (!cartDrawer.contains(event.target) && event.target !== cartIcon) {
    closeDialog();
  }
});

let cartCount = 0;
let cartCounter = document.getElementById("cart-counter");
const cartMinus = document.getElementById("cart-minus");
const cartPlus = document.getElementById("cart-plus");
let addToCartTotal = 0;

cartMinus.addEventListener("click", (event) => {
  if (cartCount > 0) {
    event.preventDefault();
    cartCount--;
    cartCounter.innerText = cartCount;
    console.log(cartCount);
  } else if (cartCount === 0) {
    cartCount = 0;
    cartCounter.disabled = true;
    cartPlus.classList.remove("text-accentOrange");
    cartPlus.classList.add("text-gray-300");
  }
});

cartPlus.addEventListener("click", (event) => {
  event.preventDefault();
  cartCount++;
  cartCounter.innerText = cartCount;
  console.log(cartCount);
});

// get add to car button
const addToCart = document.getElementById("add-to-cart");
const cartSection = document.getElementById("cart");

// I want to get the number of the cart counter and add them to addToCartTotal

addToCart.addEventListener("click", (event) => {
  event.preventDefault();
  addToCartTotal += cartCount; // Add cartCount to addToCartTotal
  cartCount = 0; // Reset cartCount
  cartCounter.innerText = cartCount; // Update the counter display
  console.log(addToCartTotal);

  // Create a new element for the cart total
  const cartTotal = document.createElement("span");
  cartTotal.innerText = addToCartTotal;
  cartTotal.classList.add(
    "absolute",
    "-top-1",
    "left-1",
    "bg-orange-500",
    "rounded-full",
    "px-2",
    "py-1",
    "text-white",
    "text-xs",
    "h-6"
  );

  // Remove the old cart total if it exists
  const oldCartTotal = document.querySelector("#cart-icon span");
  if (oldCartTotal) {
    oldCartTotal.remove();
  }

  // Append the new cart total to the cart icon
  cartSection.appendChild(cartTotal);
});
