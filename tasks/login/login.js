'use strict';

const readline = require('node:readline');

const {getState} = require('./functions/stateManager')
const commands = require('./functions/getCommand')
const deleteUser = require('./functions/deleteUser')
const inputCommandOrIsPasswordRight = require('./functions/comparePassword')
const inputName = require('./functions/findUser')
const setName = require('./functions/setName')
const setPassword = require('./functions/setPassword')

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
      inputName(line);
      break;

    case 'userlsFound':
      inputCommandOrIsPasswordRight(line);
      break;

    case 'waitCommand':
      commands(line);
      break;

    case 'addingName':
      setName(line);
      break;

    case 'addingPassword':
      setPassword(line);
      break;

    case 'deletingName':
      deleteUser(line);
  };
  rl.prompt()
});
