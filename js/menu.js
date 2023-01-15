button = document.querySelector(".menu__button");

function toggleMenu() {
  nav = document.querySelector(".menu");
  nav.classList.toggle("active");
}

button.addEventListener("click", toggleMenu);