const cartCount = document.querySelector(".cart-count");
const bagPanel = document.querySelector(".bag-panel");
const overlay = document.querySelector(".overlay");
const bagItems = document.querySelector(".bag-items");
const subtotal = document.querySelector(".subtotal");
const cart = [];

function openBag() {
  bagPanel.classList.add("open");
  bagPanel.setAttribute("aria-hidden", "false");
  overlay.classList.add("open");
}

function closeBag() {
  bagPanel.classList.remove("open");
  bagPanel.setAttribute("aria-hidden", "true");
  overlay.classList.remove("open");
}

document.querySelector(".cart-button").addEventListener("click", openBag);
document.querySelector(".close-bag").addEventListener("click", closeBag);
overlay.addEventListener("click", closeBag);

document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    cart.push({ name, price: 2990 });
    cartCount.textContent = cart.length;
    bagItems.innerHTML = cart.map((item) => `<div class="bag-item"><span>${item.name}</span><strong>₹${item.price.toLocaleString("en-IN")}</strong></div>`).join("");
    subtotal.textContent = `₹${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString("en-IN")}`;
    openBag();
  });
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector(".announcement button").addEventListener("click", (event) => {
  event.currentTarget.parentElement.remove();
});

document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  form.querySelector(".form-message").textContent = "Thank you. You're on the list.";
  form.reset();
});
