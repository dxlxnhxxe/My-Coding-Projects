const cardArray = [
    { name: 'Snow Leopard', img: 'images/Felines/SnowLeopard.jpg' },
    { name: 'Tiger', img: 'images/Felines/Tiger.jpg' },
    { name: 'Cheetah', img: 'images/Felines/Cheetah.jpg' },
    { name: 'Leopard', img: 'images/Felines/Leopard.jpg' },
    { name: 'Ocelot', img: 'images/Felines/Ocelot.jpg' },
    { name: 'Jaguar', img: 'images/Felines/Jaguar.jpg' },
    { name: 'Lion', img: 'images/Felines/Lion.jpg' },
    { name: 'Lynx', img: 'images/Felines/Lynx.png' },
    { name: 'Puma', img: 'images/Felines/Puma.jpg' },
    { name: 'Snow Leopard', img: 'images/Felines/SnowLeopard.jpg' },
    { name: 'Tiger', img: 'images/Felines/Tiger.jpg' },
    { name: 'Cheetah', img: 'images/Felines/Cheetah.jpg' },
    { name: 'Leopard', img: 'images/Felines/Leopard.jpg' },
    { name: 'Ocelot', img: 'images/Felines/Ocelot.jpg' },
    { name: 'Jaguar', img: 'images/Felines/Jaguar.jpg' },
    { name: 'Lion', img: 'images/Felines/Lion.jpg' },
    { name: 'Lynx', img: 'images/Felines/Lynx.png' },
    { name: 'Puma', img: 'images/Felines/Puma.jpg' },
];

let level = 1;
let timer;
let timeLeft = 60;

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const matchedAnimalNameElement = document.getElementById('matchedAnimalName');
const timerDisplay = document.querySelector('#timer');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    gridDisplay.innerHTML = '';
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
            alert('Time is up! Game Over');
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    cardsChosen = [];
    cardsChosenIds = [];
    cardsWon.length = 0;
    resultDisplay.textContent = 0;
    matchedAnimalNameElement.textContent = '';
    createBoard();
    startTimer();
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
        clearInterval(timer);
        alert('Congratulations, you identified all ' + (cardArray.length / 2) + ' pairs!');
        if (confirm("Congratulations! You've matched all the felines. Do you want to move on to the next difficulty?")) {
            window.location.href = 'dogs.html'; // Redirect to the next difficulty (dogs)
        }
    }
}

startGame();
