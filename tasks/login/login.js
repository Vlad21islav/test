'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '──> ',
});

console.clear();

console.log('Введите имя');

rl.prompt();
rl.on('line', (line) => {
  line = line.trim();

  const {status} = getState();

  switch (status) {
    case 'start':
      findUser(line);
      break;

    case 'userlsFound':
      comparePassword(line);
      break;

    case 'waitCommand':
      getCommand(line);
      break;

  };
  rl.prompt()
});
