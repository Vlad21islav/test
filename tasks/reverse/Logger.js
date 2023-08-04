'use strict';

class Logger {
  constructor(massages) {
    this.massages = massages
  };

  info(str, value) {
    if (this.massages[str] === undefined) {
      console.log(str); 
    } else if (value === undefined) {
      console.log(this.massages[str])
    } else {
      let otv = this.massages;
      for (let num = 0; num != value.length; num++) {
        otv = otv.replace(('$' + (num + 1)), value[num])
      };
      console.log(otv);
    };
  };
};
module.exports = Logger;
