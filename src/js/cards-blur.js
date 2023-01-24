const gardenBtn = document.querySelector(".button-gardens");
const lawnBtn = document.querySelector(".button-lawn");
const plantingBtn = document.querySelector(".button-planting");

const gardenCard = document.getElementsByClassName("gardens");
const lawnCard = document.getElementsByClassName("lawn");
const plantingCard = document.getElementsByClassName("planting");

gardenBtn.addEventListener('click', controlBlur.bind({button: gardenBtn, firstCardBlur: lawnCard, secondCardBlur: plantingCard}));
lawnBtn.addEventListener('click', controlBlur.bind({button: lawnBtn, firstCardBlur: gardenCard, secondCardBlur: plantingCard}));
plantingBtn.addEventListener('click', controlBlur.bind({button: plantingBtn, firstCardBlur: gardenCard, secondCardBlur: lawnCard}));

let queueButton = [];


function controlBlur() {
    if (queueButton.indexOf(this.button) !== -1) {
        (this.button).classList.remove('button-active');
        queueButton.splice(queueButton.indexOf(this.button), 1);
        return
    }
    if (queueButton.length < 2) {
        queueButton.push(this.button);
        (this.button).classList.add('button-active')
    }
    else {
        queueButton.push(this.button);
        (this.button).classList.toggle('button-active');
        (queueButton.shift()).classList.toggle('button-active');
    }
}
    

    // console.log(queueButton);

    // (this.button).classList.toggle('button-active');
    // Array.from(this.firstCardBlur).forEach(card => card.classList.toggle('blur'));
    // Array.from(this.secondCardBlur).forEach(card => card.classList.toggle('blur'));
