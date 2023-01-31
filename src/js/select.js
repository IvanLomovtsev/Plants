
//клик по кнопке. Открыть/закрыть select
document.querySelector(".dropdown__button").addEventListener('click', function () {
    document.querySelector(".dropdown__list").classList.toggle('dropdown__list--visible')
})

//Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
document.querySelectorAll(".dropdown__list-item").forEach(function(listItem) {
    listItem.addEventListener('click', function() {
        document.querySelector(".dropdown__button").innerText = this.innerText;
    })
})