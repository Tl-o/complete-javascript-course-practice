'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// State variables
let score0 = 0;
let score1 = 0;
let current0 = 0;
let current1 = 0;
let playing = true;

// Functions
function ResetGame() {
  // Resets game status.
  score0El.textContent = current0El.textContent = current0 = score0 = 0;
  score1El.textContent = current1El.textContent = current1 = score1 = 0;
  playing = true;
  diceImg.classList.add('hidden');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  // Remove winner.
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
}

function SwitchPlayer() {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
}

function AddCurrent(num) {
  if (player0.classList.contains('player--active') && num !== 0) {
    current0 += num;
    current0El.textContent = current0;
  } else if (player1.classList.contains('player--active') && num !== 0) {
    current1 += num;
    current1El.textContent = current1;
  } else {
    current0 = current1 = 0;
    current0El.textContent = current1El.textContent = 0;
  }
}

function AddScore() {
  if (!playing) return;
  if (player0.classList.contains('player--active')) {
    score0El.textContent = score0 += current0;
    AddCurrent(0);
  } else {
    score1El.textContent = score1 += current1;
    AddCurrent(0);
  }

  if (score0 >= 20) {
    player0.classList.add('player--winner');
    player0.classList.remove('player--active');
    playing = false;
    diceImg.classList.add('hidden');
  } else if (score1 >= 20) {
    player1.classList.add('player--winner');
    player1.classList.remove('player--active');
    playing = false;
    diceImg.classList.add('hidden');
  } else SwitchPlayer();
}

// Starting Conditions
ResetGame();

// Adding functionality to buttons
btnRoll.addEventListener('click', function () {
  if (!playing) return;
  let diceRoll = Math.trunc(Math.random() * 6) + 1; // Generate a random number between 1 and 6.
  if (diceImg.classList.contains('hidden')) diceImg.classList.remove('hidden');
  diceImg.src = './dice-' + diceRoll + '.png';

  if (diceRoll === 1) {
    SwitchPlayer();
    AddCurrent(0); // Will reset.
    return;
  }

  AddCurrent(diceRoll);
});

btnHold.addEventListener('click', AddScore);

btnNew.addEventListener('click', ResetGame);
