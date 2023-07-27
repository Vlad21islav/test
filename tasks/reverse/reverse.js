'use strict';
const words = require('./words')
const Logger = require('./Logger')
const readline = require('node:readline');

class Game {
  constructor(words, languege) {
    this.languege = languege
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
            console.log(languege.info('YOU_HAVE_LOST', '')); languege.info('RECORD', this.index);
          } else {
            console.log(languege.info('YOU_HAVE_LOST', '')); languege.info('RECORD', this.index); languege.info('EVERAGE_TIME', this.getAverageTime()); languege.info('TOTAL_TIME', Math.floor(this.overTime / 1000 * 100) / 100);
          };
          process.exit(0);
        };
      } else {
        console.clear();
        this.index++;
        console.log(languege.info('YOU_WON', '')); languege.info('RECORD', this.index); languege.info('EVERAGE_TIME', this.getAverageTime()); languege.info('TOTAL_TIME', Math.floor(this.overTime / 1000 * 100) / 100);
        process.exit(0);
      };
    });
    this.next();
  };

  next() {
    console.clear();
    console.log(languege.info('REMEMBER_WORD', ''))
    console.log(this.words[this.index].split('').reverse().join(''));
    setTimeout(() => {
      console.clear();
      console.log(languege.info('ENTER_WORD', ''))
      this.rl.prompt();
      this.startTime = Date.now() 
      this.timeoutId = setTimeout(() => {
        console.clear();
        if (this.index === 0) {
          console.log(languege.info('TIME_IS_UP', '')); languege.info('RECORD', this.index)
        } else {
          console.log(languege.info('TIME_IS_UP', '')); languege.info('RECORD', this.index); languege.info('EVERAGE_TIME', this.getAverageTime()); languege.info('TOTAL_TIME', Math.floor(this.overTime / 1000 * 100) / 100);
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
  };

  peplace$1(str, value) {
    return str.replace(`$1`, value);
  };
};

const LANG = process.env.LANG !== 'rus' && process.env.LANG !== 'eng'
  ? 'rus'
  : process.env.LANG

let languege;
if (LANG === 'rus') {
  languege = require('./langueges/rus')
} else if (LANG === 'eng') {
  languege = require('./langueges/eng')
} else {
  languege = require('./langueges/rus')
}

new Game(words[LANG], new Logger(languege)).start()
