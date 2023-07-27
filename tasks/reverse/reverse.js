'use strict';
const words = require('./words')
const Logger = require('./Logger')
const readline = require('node:readline');

class Game {
  constructor(words, logger) {
    this.logger = logger
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
            this.logger.info('YOU_HAVE_LOST', ''); this.logger.info('RECORD', this.index);
          } else {
            this.logger.info('YOU_HAVE_LOST', ''); this.logger.info('RECORD', this.index); this.logger.info('EVERAGE_TIME', this.getAverageTime()); this.logger.info('TOTAL_TIME', Math.floor(this.overTime / 1000 * 100) / 100);
          };
          process.exit(0);
        };
      } else {
        console.clear();
        this.index++;
        this.logger.info('YOU_WON', ''); this.logger.info('RECORD', this.index); this.logger.info('EVERAGE_TIME', this.getAverageTime()); this.logger.info('TOTAL_TIME', Math.floor(this.overTime / 1000 * 100) / 100);
        process.exit(0);
      };
    });
    this.next();
  };

  next() {
    console.clear();
    this.logger.info('REMEMBER_WORD', '')
    console.log(this.words[this.index].split('').reverse().join(''));
    setTimeout(() => {
      console.clear();
      this.logger.info('ENTER_WORD', '')
      this.rl.prompt();
      this.startTime = Date.now() 
      this.timeoutId = setTimeout(() => {
        console.clear();
        if (this.index === 0) {
          this.logger.info('TIME_IS_UP', ''); this.logger.info('RECORD', this.index)
        } else {
          this.logger.info('TIME_IS_UP', ''); this.logger.info('RECORD', this.index); this.logger.info('EVERAGE_TIME', this.getAverageTime()); this.logger.info('TOTAL_TIME', Math.floor(this.overTime / 1000 * 100) / 100);
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

let massages;
if (LANG === 'rus') {
  massages = require('./langueges/rus')
} else if (LANG === 'eng') {
  massages = require('./langueges/eng')
} else {
  massages = require('./langueges/rus')
}

new Game(words[LANG], new Logger(massages)).start()
