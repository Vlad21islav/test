'use strict';

class Logger {
  constructor(massages) {
    this.massages = massages
  };

  info(str, value) {
    let otv;
    for (let names of str) {
      otv += this.massages[names];
    };
    for (let num = 0; num != value.length; num++) {
      otv = otv.replace(('$' + (num + 1)), value[num])
      console.log(('$' + (num + 1)), value[num])
    };
    return otv;
  };
};
module.exports = Logger;
