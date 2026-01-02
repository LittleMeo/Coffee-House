// querySelectors
const burgerMenu = document.querySelector(".burger__menu");
const burgerBtn = document.querySelector(".nav__burger");
const navItems = document.querySelectorAll(".nav__item");

// functions
const openBurger = () => {
  burgerMenu.classList.add("burger__menu--active");
};

const closeBurger = () => {
  burgerMenu.classList.remove("burger__menu--active");
};

// open and close burgerMenu
burgerBtn.addEventListener("click", () => {
  if (burgerMenu.classList.contains("burger__menu--active")) {
    closeBurger();
  } else {
    openBurger();
  }
});

// close burgerMenu clicked on nav-link
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    closeBurger();
  });
});
