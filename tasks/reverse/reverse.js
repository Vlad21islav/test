'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '──> ',
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    return array;
};

function logWords() {
  console.clear();
  console.log('Запомните слово:');
  console.log(words[index].split('').reverse().join(''));
  setTimeout(() => {
    console.clear();
    console.log('Введите слово правильно');
    rl.prompt();
    gameOver = setTimeout(() => {
        console.clear();
        console.log(`время вышло, ваш рекорд ${index}`);
        process.exit(0);
    }, 5000)
  }, 3000)
};

const words = shuffleArray(['привет', 'эскалатор', 'завтрак', 'тенис', 'телефон']);
let index = 0;

logWords();

rl.on('line', (line) => {
  if (index < words.length) {
    if (line === words[index]) {
      clearTimeout(gameOver);
      index++;
      logWords();
    } else {
      console.log(`Вы проиграли ваш рекорд ${index}`);
      process.exit(0);
    };
  } else {
    console.log(`Слова закончились, вы выиграли`);
    process.exit(0);
  };
});