'use strict';
const words = require('./words')

class Logger {
  constructor(massage) {
    this.massage = massage
    this.output = this.replace$1(massage, 'Vlad')
  };

  replace$1(str, value) {
    const otv = str.replace(`$1`, value);
    if (otv === str) {
      console.log(str);
    } else {
      console.log(otv);
    };
  };
};
 
new Logger('hello $1');
