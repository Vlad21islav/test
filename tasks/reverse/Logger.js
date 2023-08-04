'use strict';

class Logger {
  constructor(massages) {
    this.massages = massages
  };

  info(str, value) {
    let massage = this.get(str)
    if (this.massage === undefined) return console.log(str)

    if (value === undefined) return console.log(this.massage)

    value.forEach((value, index) => {
      massage = massage.replace(('$' + (index + 1)), value)
    });

    console.log(massage);
  };

  get(str) {
    return this.massages[str]
  }
};
module.exports = Logger;
