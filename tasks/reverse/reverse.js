'use strict';
const logWords = require('./functions/logWords');
const shuffleArray = require('./functions/shuffleArray');
const {setState, getState} = require('./functions/variable');

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '──> ',
});

const words = shuffleArray(['привет', 'эскалатор', 'завтрак', 'тенис', 'телефон']);
let {word} = getState();

logWords();

rl.on('line', (line) => {
  if (word < words.length) {
    switch (line) {
      case words[word]:
        setState({isSleep: false});
        setState({word: word + 1});
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
