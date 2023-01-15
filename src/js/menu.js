const btnMenu = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu__navigation")

btnMenu.addEventListener('click', mobileMenu);
menu.addEventListener('click', mobileMenu)

function mobileMenu() {
    btnMenu.classList.toggle("active");
    menu.classList.toggle("active");
}
