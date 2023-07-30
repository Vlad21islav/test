'use strict';

class Logger {
  constructor(massages) {
    this.massages = massages;
  };

  info(str, value) {
    if (this.massages[str] === undefined) {
      console.log(str);
    } else if (value === undefined) {
      console.log(this.massages[str])
    } else {
      console.log(this.massages[str].replace(`$1`, value));
    };
  };
};
module.exports = Logger;
