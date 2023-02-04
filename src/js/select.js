const dropDownButton = document.querySelector(".dropdown__button");
const dropDownButtonSpan = document.querySelector(".dropdown__button-span")
const dropDownList = document.querySelector(".dropdown__list");
const dropDownListItems = document.querySelectorAll(".dropdown__list-item")
const dropDownInput = document.querySelector(".dropdown__input-hidden")

//клик по кнопке. Открыть/закрыть select
dropDownButton.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--visible')
    dropDownButton.classList.toggle('dropdown__button-active')
})

//Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
dropDownListItems.forEach(function(listItem) {
    listItem.addEventListener('click', function() {
        dropDownButtonSpan.innerText = this.innerText;
        dropDownButtonSpan.style.fontSize = "16px";
        dropDownButton.style.backgroundColor = "#C1E698";
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible')
        dropDownButton.classList.remove('dropdown__button-active')
    })
})

//клик снаружи дропдауна. Закрываем дропдаун
document.addEventListener('click', function(e){
    if (!e.composedPath().includes(dropDownButton)) {
         dropDownList.classList.remove('dropdown__list--visible')
         dropDownButton.classList.remove('dropdown__button-active')
    }

})
document.addEventListener('keydown', function(e){
    if (e.key === "Tab" || e.key === "Escape") {
        dropDownList.classList.remove('dropdown__list--visible')
        dropDownButton.classList.remove('dropdown__button-active')
    }
})