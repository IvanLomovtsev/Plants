const gardenBtn = document.querySelector(".button-gardens");
const lawnBtn = document.querySelector(".button-lawn");
const plantingBtn = document.querySelector(".button-planting");

const gardenCard = document.getElementsByClassName("gardens");
const lawnCard = document.getElementsByClassName("lawn");
const plantingCard = document.getElementsByClassName("planting");

gardenBtn.addEventListener('click', controlBlur.bind({
    button: gardenBtn, 
    cardUnBlur: gardenCard, 
    firstCardBlur: lawnCard, 
    secondCardBlur: plantingCard
}));
lawnBtn.addEventListener('click', controlBlur.bind({
    button: lawnBtn,  
    cardUnBlur:lawnCard, 
    firstCardBlur: gardenCard, 
    secondCardBlur: plantingCard
}));
plantingBtn.addEventListener('click', controlBlur.bind({
    button: plantingBtn, 
    cardUnBlur: plantingCard, 
    firstCardBlur: gardenCard, 
    secondCardBlur: lawnCard
}));

let queueButton = [];
let unBlur = [];

function controlBlur() {
    if (queueButton.indexOf(this.button) !== -1) {
        (this.button).classList.remove('button-active');
        queueButton.splice(queueButton.indexOf(this.button), 1);
        unBlur.splice(unBlur.indexOf(this.cardUnBlur), 1);
        console.log(unBlur)
        addBlur(unBlur)
        return
    }
    if (queueButton.length < 2) {
        queueButton.push(this.button);
        unBlur.push(this.cardUnBlur);
        (this.button).classList.add('button-active');
    }
    else {
        queueButton.push(this.button);
        (this.button).classList.toggle('button-active');
        unBlur.push(this.cardUnBlur);
        unBlur.shift();
        (queueButton.shift()).classList.toggle('button-active');
    }
    addBlur(unBlur)
}

function addBlur (unBlurCards) {
    let allCards = [gardenCard, lawnCard, plantingCard];
    if (unBlurCards.length === 0){
         allCards.forEach(cardsOneStyle => Array.from(cardsOneStyle).forEach(card=>card.style.filter = 'none'))
         return
    }
    let blurCards = allCards
                            .filter(card => !Array.from(unBlurCards).includes(card))
                            .concat(Array.from(unBlurCards).filter(card => !allCards.includes(card)))
    unBlurCards.forEach(cardsOneStyle => Array.from(cardsOneStyle).forEach(card=>card.style.filter = 'none'))
    blurCards.forEach(cardsOneStyle => Array.from(cardsOneStyle).forEach(card=>card.style.filter = 'blur(2px)'))
}