'use strict';

class Logger {
  constructor(massage) {
    this.massage = massage;
    this.output = this.replace$1('RECORD', 'Vlad');
  };

  replace$1(str, value) {
    const otv = this.massage.str.replace(`$1`, value);
    if (otv === this.massage.str) {
      console.log(str);
    } else {
      console.log(otv);
    };
  };
};

const LANG = process.env.LANG !== 'rus' && process.env.LANG !== 'eng'
  ? 'rus'
  : process.env.LANG

let massage;
if (LANG === 'rus') {
  massage = require('./langueges/rus');
} else if (LANG === 'eng') {
  massage = require('./langueges/eng');
} else {
  massage = require('./langueges/rus');
};

new Logger(massage);
