'use strict';
const words = require('./words')

class Logger {
  constructor(obgect) {
    this.obgect = obgect
  };

  replace$1(str, value) {
    return str.replace(`$1`, value);
  };

  start() {
    console.log(this.replace$1(this.obgect, 'Vlad'))
  }
};

new Logger('hello $1').start()
