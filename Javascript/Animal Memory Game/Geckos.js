const cardArray = [
    { name: 'African Fat Tailed Gecko', img: 'images/Geckos/AfricanFatTailedGecko.jpg' },
    { name: 'Crested Gecko', img: 'images/Geckos/CrestedGecko.jpg' },
    { name: 'Gargoyle Gecko', img: 'images/Geckos/GargoyleGecko.png' },
    { name: 'Giant Day Gecko', img: 'images/Geckos/GiantDayGecko.jpg' },
    { name: 'Harlequin Gecko', img: 'images/Geckos/HarlequinGecko.jpg' },
    { name: 'Leopard Gecko', img: 'images/Geckos/LeopardGecko.jpg' },
    { name: 'Satanic Leaf Tailed Gecko', img: 'images/Geckos/SatanicLeafTailedGecko.jpg' },
    { name: 'Tokay Gecko', img: 'images/Geckos/TokayGecko.jpg' },
    { name: 'Turquoise Dwarf Gecko', img: 'images/Geckos/TurquoiseDwarfGecko.jpg' }
];

let timer;
let timeLeft = 60;
let selectedName = null;

const shuffledNamesArray = [...cardArray].sort(() => 0.5 - Math.random());
const shuffledImagesArray = [...cardArray].sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const textGridDisplay = document.querySelector('#text-grid');
const resultDisplay = document.querySelector('#result');
const matchedAnimalNameElement = document.getElementById('matchedAnimalName');
const timerDisplay = document.querySelector('#timer');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    gridDisplay.innerHTML = '';
    textGridDisplay.innerHTML = '';

    shuffledNamesArray.forEach((card, i) => createCard(textGridDisplay, i, card.name, 'text-card'));
    shuffledImagesArray.forEach((card, i) => createCard(gridDisplay, i + shuffledNamesArray.length, card.img, 'card'));
}

function createCard(display, id, content, cardClass) {
    const card = document.createElement('div');
    card.classList.add(cardClass);
    card.setAttribute('data-id', id);

    const cardInner = document.createElement('div');
    cardInner.classList.add(`${cardClass}-inner`);

    const cardFront = document.createElement('div');
    cardFront.classList.add(`${cardClass}-front`);

    const cardBack = document.createElement('div');
    cardBack.classList.add(`${cardClass}-back`);
    if (cardClass === 'text-card') {
        cardBack.textContent = content;
    } else {
        cardBack.style.backgroundImage = `url(${content})`;
    }

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    card.addEventListener('click', selectCard);
    display.appendChild(card);
}

function startGame() {
    createBoard();
    startTimer();
}

function startTimer() {
    timeLeft = 60;
    timerDisplay.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up! Game Over!');
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    cardsChosen = [];
    cardsChosenIds = [];
    cardsWon.length = 0;
    selectedName = null; 
    resultDisplay.textContent = 0;
    matchedAnimalNameElement.textContent = '';
    createBoard();
    startTimer();
}

function selectCard() {
    const cardId = this.getAttribute('data-id');
    const cardIndex = cardId < shuffledNamesArray.length ? cardId : cardId - shuffledNamesArray.length;
    const isTextCard = cardId < shuffledNamesArray.length;

    if (cardsChosenIds.length === 2 || cardsChosenIds.includes(cardId)) return;

    if (isTextCard) {
        selectedName = shuffledNamesArray[cardIndex].name;
        cardsChosen.push(selectedName);
        cardsChosenIds.push(cardId);
        this.classList.add('flipped');
    } else if (selectedName) {
        cardsChosen.push(shuffledImagesArray[cardIndex].name);
        cardsChosenIds.push(cardId);
        this.classList.add('flipped');
    }

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [optionOneId, optionTwoId] = cardsChosenIds;

    if (cardsChosen[0] === cardsChosen[1]) {
        markMatchedCards(optionOneId, optionTwoId);
        cardsWon.push(cardsChosen[0]);
        resultDisplay.textContent = cardsWon.length;
        selectedName = null;
    } else {
        alert('Sorry, try again.');
        resetChosenCards(optionOneId, optionTwoId);
    }

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === shuffledNamesArray.length) {
        clearInterval(timer);
        alert('Congratulations, you identified all ' + shuffledNamesArray.length + ' pairs!');
        if (confirm("Congratulations! You've completed all the levels. You will be redirected to the home page.")) {
            window.location.href = 'Introduction.html'; // Redirect to the home page
        }
    }
}

function markMatchedCards(id1, id2) {
    const cards = document.querySelectorAll('.card, .text-card');
    cards[id1].classList.add('matched');
    cards[id2].classList.add('matched');
    matchedAnimalNameElement.textContent = cardsChosen[0];
    setTimeout(() => {
        cards[id1].style.visibility = 'hidden';
        cards[id2].style.visibility = 'hidden';
    }, 500);
}

function resetChosenCards(id1, id2) {
    const cards = document.querySelectorAll('.card, .text-card');
    cards[id1].classList.remove('flipped');
    cards[id2].classList.remove('flipped');
    selectedName = null;
}

startGame();
