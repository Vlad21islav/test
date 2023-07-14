'use strict';

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
};

const words = shuffleArray(['привет', '', '', '', '', ]);
let exit = false;
console.log(words)

for (let word = 0; !exit || word <= words.length; word++) {
  console.clear();
  console.log('Запомните слово:');
  console.log(words[word].split(''.reverse().join('')));
  sleep(2000).then(() => console.clear());
  console.log('Введите слово правильно');

  rl.prompt();
  rl.on('line', (line) => {
    line = line.trim();

    switch (line) {
      case words[word]:
        rl.prompt()
        break;

      default:
        console.log(`Вы проиграли ваш рекорд ${word}`);
        exit = true;
    };
  });
};