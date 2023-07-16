'use strict';

const { clear } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '──> ',
});

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    return array;
};

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
} 

function logWords() {
  console.clear();
  console.log('Запомните слово:');
  console.log(words[word].split('').reverse().join(''));
  sleep(3000).then(() => {
    console.clear();
    console.log('Введите слово правильно');
    rl.prompt();
    sleep(5000).then(() => {
      if (isSleep) {
        console.clear();
        console.log(`время вышло, ваш рекорд ${word}`);
        process.exit(0);
      } else {
        isSleep = true;
      };
    });
  });
};

const words = shuffleArray(['привет', 'эскалатор', 'завтрак', 'тенис', 'телефон']);
let word = 0;
let isSleep = true;

logWords();

rl.on('line', (line) => {
  if (word < words.length) {
    switch (line) {
      case words[word]:
        isSleep = false;
        word++;
        logWords();
        break;

      default:
        console.log(`Вы проиграли ваш рекорд ${word}`);
        process.exit(0);
    }
  } else {
    process.exit(0);
  };
});