const dropDownButton = document.querySelector(".dropdown__button");
const dropDownButtonSpan = document.querySelector(".dropdown__button-span")
const dropDownList = document.querySelector(".dropdown__list");
const dropDownListItems = document.querySelectorAll(".dropdown__list-item");
const dropDownCard = document.querySelector(".dropdown__card");
const dropDownCardCity = document.querySelector(".value-city");
const dropDownCardPhone = document.querySelector(".value-phone");
const dropDownCardAdress = document.querySelector(".value-adress");
const buttonCall = document.querySelector(".dropdown__card-telephone");

//button click. Open/close select
dropDownButton.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--visible')
    dropDownButton.classList.toggle('dropdown__button-active')
})

//Selecting a list item. Remember the selected value, close dropdown
dropDownListItems.forEach(function(listItem) {
    listItem.addEventListener('click', function() {
        dropDownButtonSpan.innerText = this.innerText;
        dropDownButtonSpan.style.fontSize = "16px";
        dropDownButton.style.backgroundColor = "#C1E698";
        dropDownCardCity.innerText = this.dataset.city;
        dropDownCardPhone.innerText = this.dataset.phone;
        dropDownCardAdress.innerText = this.dataset.adress;
        buttonCall.action = "tel:"+this.dataset.phone;
        dropDownCard.classList.add('dropdown__card--visible')
        dropDownList.classList.remove('dropdown__list--visible')
        dropDownButton.classList.remove('dropdown__button-active')
    })
})

//click outside the dropdown. Closing the dropdown
document.addEventListener('click', function(e){
    if (!e.composedPath().includes(dropDownButton)) {
         dropDownList.classList.remove('dropdown__list--visible')
         dropDownButton.classList.remove('dropdown__button-active')
    }

})

//closing the dropdown from the keyboard
document.addEventListener('keydown', function(e){
    if (e.key === "Tab" || e.key === "Escape") {
        dropDownList.classList.remove('dropdown__list--visible')
        dropDownButton.classList.remove('dropdown__button-active')
    }
})