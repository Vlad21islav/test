'use strict';

const readline = require('node:readline');

const changeStatus = require('./functions/changeStatus')
const commands = require('./functions/commands')
const deleteUser = require('./functions/deleteUser')
const inputCommandOrIsPasswordRight = require('./functions/inputCommandOrIsPasswordRight')
const inputName = require('./functions/inputName')
const setName = require('./functions/setName')
const setPassword = require('./functions/setPassword')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '──> ',
});

const users = [
  { login: 'Vlad', password: '1324' },
  { login: 'Alex', password: '2546' },
]

let limit = 3;

let gameStatus, add, user;

changeStatus.changeStatus('start');

console.clear();

console.log('Введите имя');

rl.prompt();
rl.on('line', (line) => {
  line = line.trim();

  switch (changeStatus.gameStatus) {
    case 'start':
      inputName(line, users, user);
      break;

    case 'userlsFound':
      inputCommandOrIsPasswordRight(line, limit, user);
      break;

    case 'waitCommand':
      commands(line, users, add);
      break;

    case 'addingName':
      setName(line, users, add);
      break;

    case 'addingPassword':
      setPassword(line, users, add);
      break;

    case 'deletingName':
      deleteUser(line, users, user);
  };
  rl.prompt()
});
