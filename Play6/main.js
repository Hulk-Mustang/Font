const text = document.querySelector('#enterNumber');
const content = document.querySelector('.content');
const content2 = document.querySelector('.content2');
let i = 'Hello World!'
text.value = ' ';
let score = 0
let numbers = [];

for (let l = 1; l <= 100; l++) {
  numbers.push(l);
}

text.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    checkNumber();
  }
});

function randomNumber() {
  let m = Math.floor(Math.random() * numbers.length)
  return m
}


function checkNumber() {
  let guessedNumber = Number.parseInt(text.value);

  if (i == 'Hello World!') {
    i = numbers[randomNumber()]
  }
  
  if (guessedNumber === i) {
    content.innerHTML = '';
    const p2 = document.createElement('p');
    p2.textContent = `Congratulations! You guessed the number! Number of attempts: ${score}`;
    p2.classList = 'p2'
    content2.appendChild(p2);
    text.value = '';  
    i = 'Hello World!'
    score = 0
  } else if (guessedNumber > i) {
    const p2 = document.createElement('p');
    p2.textContent = 'Too low! Try again.';
    p2.classList = 'p1';
    content.appendChild(p2);
    score++
    text.value = '';
  } else if (guessedNumber < i) {
    const p2 = document.createElement('p');
    p2.textContent = 'Too high! Try again.';
    p2.classList = 'p1';
    content.appendChild(p2);
    text.value = '';
    score++
  }
}
