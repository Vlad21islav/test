'use strict';

class Logger {
  constructor(massages) {
    this.massages = massages;
  };

  info(str, value) {
    const otv = this.massages[str].replace(`$1`, value);
    if (otv === this.massages.str) {
      return(str);
    } else {
      return(otv);
    };
  };
};
module.exports = Logger;
