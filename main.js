const burgerMenu = document.querySelector('.burger__menu');
const burgerBtn = document.querySelector('.nav__burger');

burgerBtn.addEventListener('click', () => {
    if (burgerMenu.classList.contains('burger__menu--active')) {
        burgerMenu.classList.remove('burger__menu--active');
    } else {
        burgerMenu.classList.add('burger__menu--active');
    }
});