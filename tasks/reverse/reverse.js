'use strict';
const words = require('./words')
const readline = require('node:readline');

class Game {
  constructor(words, LANG) {
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
          if (LANG === 'рус') {
            if (this.index === 0) {
              console.log(`Вы проиграли, ваш рекорд ${this.index}`);
            } else {
              console.log(`Вы проиграли, ваш рекорд ${this.index}, среднее время записи слова - ${this.getAverageTime()} секунд, общее время - ${Math.floor(this.overTime / 1000 * 100) / 100} секунд`);
            };
          } else if (LANG === 'eng') {
            if (this.index === 0) {
              console.log(`You lost, your record is ${this.index}`);
            } else {
              console.log(`You lost, your record is ${this.index}, the average time of writing a word is ${this.getAverageTime()} seconds, total time is ${Math.floor(this.overTime / 1000 * 100) / 100} seconds`);
            };
          };
          process.exit(0);
        };
      } else {
        console.clear();
        this.index++;
        if (LANG === 'рус') {
          console.log(`Слова закончились, вы выиграли, ваш рекорд ${this.index}, среднее время записи слова - ${this.getAverageTime()} секунд, общее время - ${Math.floor(this.overTime / 1000 * 100) / 100} секунд`);
        } else if (LANG === 'eng') {
          console.log(`The words are over, you have won, your record is ${this.index}, the average time of writing a word is ${this.getAverageTime()} seconds, total time is ${Math.floor(this.overTime / 1000 * 100) / 100} seconds`);
        };
        process.exit(0);
      };
    });
    this.next();
  };

  next() {
    console.clear();
    if (LANG === 'рус') {
      console.log('Запомните слово:');
    } else if (LANG === 'eng') {
      console.log('Remember the word:');
    };
    console.log(this.words[this.index].split('').reverse().join(''));
    setTimeout(() => {
      console.clear();
      if (LANG === 'рус') {
        console.log('Введите слово правильно');
      } else if (LANG === 'eng') {
        console.log('Enter the word correctly');
      };
      this.rl.prompt();
      this.startTime = Date.now() 
      this.timeoutId = setTimeout(() => {
        console.clear();
        if (LANG === 'рус') {
          if (this.index === 0) {
            console.log(`время вышло, ваш рекорд ${this.index}`);
          } else {
            console.log(`время вышло, ваш рекорд ${this.index}, среднее время записи слова - ${this.getAverageTime()} секунд, общее время - ${Math.floor(this.overTime / 1000 * 100) / 100} секунд`);
          };
        } else if (LANG === 'рус') {
          if (this.index === 0) {
            console.log(`time is up, your record is ${this.index}`);
          } else {
            console.log(`time is up, your record is ${this.index}, the average time to write a word is ${this.getAverageTime()} seconds, total time is ${Math.floor(this.overTime / 1000 * 100) / 100} seconds`);
          };
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

const LANG = process.env.LANG !== 'рус' && process.env.LANG !== 'eng'
  ? 'рус'
  : process.env.LANG
new Game(words[LANG], LANG).start()
