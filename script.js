/*
    Name : Melih Arslan
    Project Name : Guess number
    Start Date : 03-02-2021
    Last Update : 03-02-2021
*/

'use strict';

const numberGenerator = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const randomNumber = numberGenerator();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ Please write a guess!');

    //When player wins
  } else if (guess === randomNumber) {
    displayMessage('🎉 You guessed right!');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // When guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber ? '🔺 Guess is too high!' : '🔻 Guess is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
      document.body.style.backgroundColor = '#222';
    } else {
      displayMessage('💣 You lost the game!');
      document.body.style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  numberGenerator();
  displayMessage('Here we go again!');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});
