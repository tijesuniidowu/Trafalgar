let menuButton = document.querySelector(".menu");
let closeButton = document.querySelector(".menu-close");
let closeBefore = document.querySelector(".nav-active:before");
let navigation = document.querySelector("nav");

function openMenu() {
  navigation.classList.add("nav-active");
}

const closeMenu = () => {
  navigation.classList.remove("nav-active");
};
// const closeBeforeMenu = () => {
//   navigation.classList.remove("nav-active");
// };

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
closeBefore.addEventListener("click", closeMenu);
