import cartImg from "./images/cart.svg";

export function populateHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const headerContainer = document.getElementById("headerContainer");

  const header = document.createElement("nav");
  header.classList.add("header");

  const cart = document.createElement("button");
  cart.id = "cart";

  const buttonImg = document.createElement("img");
  buttonImg.src = cartImg;

  cart.appendChild(buttonImg);

  const logo = document.createElement("h1");
  logo.textContent = "CHASE BENJI";

  header.appendChild(logo);
  header.appendChild(cart);

  headerContainer.appendChild(header);
}
