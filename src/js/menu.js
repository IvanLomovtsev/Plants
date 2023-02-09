const btnMenu = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu__navigation")

btnMenu.addEventListener('click', mobileMenu);
menu.addEventListener('click', mobileMenu)

//burger menu activation
function mobileMenu() {
    btnMenu.classList.toggle("active");
    menu.classList.toggle("active");
}

//the menu is hidden if you click outside the given window
document.addEventListener('click', (element)=> {
    if (!element.composedPath().includes(document.querySelector(".active"))) {
        btnMenu.classList.remove("active");
        menu.classList.remove("active")
    }  
})