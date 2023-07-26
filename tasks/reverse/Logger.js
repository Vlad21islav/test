'use strict';

class Logger {
  constructor(massages) {
    this.massages = massages;
  };

  info(str, value) {
    if (this.massages[str] === undefined) {
      return(str);
    } else {
      return(this.massages[str].replace(`$1`, value));
    };
  };
};
module.exports = Logger;
