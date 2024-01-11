'use strict';

let score = 20;
let highscore = 0;

const createRandomValue = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = createRandomValue();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (value) {
  document.querySelector('.score').textContent = value;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setWidth = function (value) {
  document.querySelector('.number').style.width = value;
};

const setNumber = function (value) {
  document.querySelector('.number').textContent = value;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = createRandomValue();
  score = 20;

  displayMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  document.querySelector('.guess').value = '';

  setBackgroundColor('#222');
  setWidth('15rem');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct answer');
    setNumber(secretNumber);

    setBackgroundColor('#60b347');
    setWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      score--;
      displayMessage('💥 You lost the game ');
      setScore(score);
    }
  }
});
