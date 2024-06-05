
const cardArray = [
    { name: 'Snow Leopard', img: 'images/SnowLeopard.jpg' },
    { name: 'Tiger', img: 'images/Tiger.jpg' },
    { name: 'Cheetah', img: 'images/Cheetah.jpg' },
    { name: 'Leopard', img: 'images/Leopard.jpg' },
    { name: 'Ocelot', img: 'images/Ocelot.jpg' },
    { name: 'Jaguar', img: 'images/Jaguar.jpg' },
    { name: 'Snow Leopard', img: 'images/SnowLeopard.jpg' },
    { name: 'Tiger', img: 'images/Tiger.jpg' },
    { name: 'Cheetah', img: 'images/Cheetah.jpg' },
    { name: 'Leopard', img: 'images/Leopard.jpg' },
    { name: 'Ocelot', img: 'images/Ocelot.jpg' },
    { name: 'Jaguar', img: 'images/Jaguar.jpg' },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const matchedAnimalNameElement = document.getElementById('matchedAnimalName');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', i);

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.style.backgroundImage = `url(${cardArray[i].img})`;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        card.addEventListener('click', selectCard);
        gridDisplay.appendChild(card);
    }
}

function selectCard() {
    const cardId = this.getAttribute('data-id');
    if (cardsChosenIds.length === 2 || cardsChosenIds.includes(cardId)) return;

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.classList.add('flipped');

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('.card');
    const [optionOneId, optionTwoId] = cardsChosenIds;

    if (optionOneId === optionTwoId) {
        alert('You have clicked the same image!');
        cards[optionOneId].classList.remove('flipped');
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found the ' + cardsChosen[0] + 's !');

        cards[optionOneId].classList.add('matched');
        cards[optionTwoId].classList.add('matched');
        matchedAnimalNameElement.textContent = cardsChosen[0];
        setTimeout(() => {
            cards[optionOneId].style.visibility = 'hidden';
            cards[optionTwoId].style.visibility = 'hidden';
        }, 500);
        
        cardsWon.push(cardsChosen[0]);
        resultDisplay.textContent = cardsWon.length;
    } else {
        alert('Sorry, try again');
        cards[optionOneId].classList.remove('flipped');
        cards[optionTwoId].classList.remove('flipped');
    }

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations, you identified all 6 cats!';
    }
}

createBoard();