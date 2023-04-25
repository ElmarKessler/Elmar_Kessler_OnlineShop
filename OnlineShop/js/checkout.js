// Checkout
let checkoutButton = document.querySelector("#checkoutButton");
let checkout = document.querySelector(".checkout");
let closeCheckout = document.querySelector("#close-checkout");

// Open Checkout
checkoutButton.onclick = () => {
  checkout.classList.add("active");
};
// Close Checkout
closeCheckout.onclick = () => {
  checkout.classList.remove("active");
};

// Checkout Working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
