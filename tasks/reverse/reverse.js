'use strict';

const readline = require('node:readline');

class Game {
  constructor(words) {
    this.words = this.shuffleWords(words);
    this.overTime = 0;
    this.index = 0;
    this.timeoutId;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '──> '
    });
  };

  start() {
    this.rl.on('line', (line) => {
      clearTimeout(this.timeoutId);
      if (this.index < this.words.length - 1) {
        if (line === this.words[this.index]) {
          this.overTime += Date.now() - this.startTime;
          this.index++;
          this.next();
        } else {
          console.clear()
          if (this.index === 0) {
            console.log(`Вы проиграли, ваш рекорд ${this.index}`);
          } else {
            console.log(`Вы проиграли, ваш рекорд ${this.index}, среднее время записи слова - ${this.getAverageTime()} секунд, общее время - ${Math.floor(this.overTime / 1000 * 100) / 100} секунд`);
          };
          process.exit(0);
        };
      } else {
        console.clear();
        this.index++;
        console.log(`Слова закончились, вы выиграли, ваш рекорд ${this.index}, среднее время записи слова - ${this.getAverageTime()} секунд, общее время - ${Math.floor(this.overTime / 1000 * 100) / 100} секунд`);
        process.exit(0);
      };
    });
    this.next();
  };

  next() {
    console.clear();
    console.log('Запомните слово:');
    console.log(this.words[this.index].split('').reverse().join(''));
    setTimeout(() => {
      console.clear();
      console.log('Введите слово правильно');
      this.rl.prompt();
      this.startTime = Date.now() 
      this.timeoutId = setTimeout(() => {
        console.clear();
        if (this.index === 0) {
          console.log(`время вышло, ваш рекорд ${this.index}`);
        } else {
          console.log(`время вышло, ваш рекорд ${this.index}, среднее время записи слова - ${this.getAverageTime()} секунд, общее время - ${Math.floor(this.overTime / 1000 * 100) / 100} секунд`);
        };
        process.exit(0);
      }, 5000);
    }, 3000);
  };

  shuffleWords(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
    return array;
  };

  getAverageTime() {
    return Math.floor(this.overTime / this.index / 1000 * 100) / 100;
  }
};

if (process.env.LANG === 'рус' || process.env.LANG === 'русский') {
  const {russianWords} = require('./words')
  new Game(russianWords).start();
} else if (process.env.LANG === 'eng' || process.env.LANG ===  'english') {
  const {englishWords} = require('./words')
  new Game(englishWords).start();
} else {
  console.clear()
  console.log('Введите в консоль "cross-env LANG=язык(рус / русскый, eng / english) node .\tasks\reverse\reverse.js"');
  process.exit(0);
};
