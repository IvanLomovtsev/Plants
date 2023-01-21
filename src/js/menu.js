const btnMenu = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu__navigation")

btnMenu.addEventListener('click', mobileMenu);
menu.addEventListener('click', mobileMenu)
document.addEventListener('click', (element)=> {
    if (!element.composedPath().includes(document.querySelector(".active"))) {
        btnMenu.classList.remove("active");
        menu.classList.remove("active")
    }  
})

function mobileMenu() {
    btnMenu.classList.toggle("active");
    menu.classList.toggle("active");
}
