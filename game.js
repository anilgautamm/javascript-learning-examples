const cards = document.querySelectorAll('.memory-card');
const matchCounter = document.getElementById('match-counter');
const clickCounter = document.getElementById('click-counter');

let numClicks = 0;
let numMatches = 0;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  numClicks++;
  if (lockBoard || this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    secondCard = this;
    hasFlippedCard = false; 
    checkForMatch();
  }
  updateCounters(); // Call this to update counters after each flip
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  numMatches++;
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
  updateCounters(); // Call this to update counters after each match
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function updateCounters() {
  matchCounter.textContent = numMatches;
  clickCounter.textContent = numClicks;
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 9);
    card.style.order = randomPos;
  });
})();

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

function resetGame() {
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });
  resetBoard();
  shuffleCards();
  numClicks = 0;
  numMatches = 0;
  updateCounters();
}

function shuffleCards() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 9);
    card.style.order = randomPos;
  });
}

resetGame(); 

cards.forEach(card => card.addEventListener('click', flipCard));
