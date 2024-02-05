'use strict';

// Generate a random number between 1 and 20.
let number = Math.trunc(Math.random() * 20) + 1;
let originalScore = Number(document.querySelector('.score').textContent);
let score = originalScore;
let highscore = Number(document.querySelector('.highscore').textContent);
let guessed = false;

// Functions.

function SetHighScore() {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = score;
  }
}

function LostGame() {
  if (score <= 0) {
    document.querySelector('.message').textContent = 'You Lost!';
  }
}

function Reset() {
  score = originalScore;
  guessed = false;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
}

document.querySelector('.check').addEventListener('click', function () {
  if (score === 0 || guessed) return;

  let guess = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');
  let scoreElement = document.querySelector('.score');

  if (!guess) {
    message.textContent = 'No Number! 🚫';
  } else if (guess < number) {
    message.textContent = 'Lower!';
    scoreElement.textContent = --score;
    LostGame();
  } else if (guess > number) {
    message.textContent = 'Higher!';
    scoreElement.textContent = --score;
    LostGame();
  } else {
    message.textContent = 'You guessed the right number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    guessed = true;
    SetHighScore();
  }
});

document.querySelector('.again').addEventListener('click', Reset);
