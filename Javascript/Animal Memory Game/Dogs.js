const cardArray = [
    { name: 'Australian Sheperd', img: 'images/Dogs/AustralianSheperd.jpg' },
    { name: 'Border Collie', img: 'images/Dogs/BorderCollie.jpeg' },
    { name: 'Corgi', img: 'images/Dogs/Corgi.jpg' },
    { name: 'German Sheperd', img: 'images/Dogs/GermanSheperd.png' },
    { name: 'Golden Retriever', img: 'images/Dogs/GoldenRetriever.jpeg' },
    { name: 'Pitbull', img: 'images/Dogs/Pitbull.jpg' },
    { name: 'Poodle', img: 'images/Dogs/Poodle.jpg' },
    { name: 'Shih Tzu', img: 'images/Dogs/ShihTzu.jpg' },
    { name: 'Swiss Sheperd', img: 'images/Dogs/SwissSheperd.jpg' }
];

let timer;
let timeLeft = 60;
let selectedImage = null;

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

    shuffledNamesArray.forEach((_, i) => {
        const textCard = createCard(i, shuffledNamesArray[i].name, true);
        textGridDisplay.appendChild(textCard);
    });

    shuffledImagesArray.forEach((card, i) => {
        const imageCard = createCard(i + shuffledNamesArray.length, `url(${card.img})`, false);
        gridDisplay.appendChild(imageCard);
    });
}

function createCard(id, content, isTextCard) {
    const card = document.createElement('div');
    card.classList.add(isTextCard ? 'text-card' : 'card');
    card.setAttribute('data-id', id);

    const cardInner = document.createElement('div');
    cardInner.classList.add(isTextCard ? 'text-card-inner' : 'card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add(isTextCard ? 'text-card-front' : 'card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add(isTextCard ? 'text-card-back' : 'card-back');
    if (isTextCard) {
        cardBack.textContent = content;
    } else {
        cardBack.style.backgroundImage = content;
    }

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    card.addEventListener('click', selectCard);
    return card;
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
    selectedImage = null; // Reset selected image
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

    if (!isTextCard) {
        selectedImage = shuffledImagesArray[cardIndex].name;
        cardsChosen.push(selectedImage);
        cardsChosenIds.push(cardId);
        this.classList.add('flipped');
    } else if (selectedImage) {
        cardsChosen.push(shuffledNamesArray[cardIndex].name);
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
        if (confirm("Congratulations! You've matched all the dogs. Do you want to move on to the next difficulty?")) {
            window.location.href = 'geckos.html';
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
    selectedImage = null;
}

startGame();
