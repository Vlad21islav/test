'use strict';

const readline = require('node:readline');

const {getState, setState} = require('./functions/changeStatus')
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

console.clear();

console.log('Введите имя');

rl.prompt();
rl.on('line', (line) => {
  line = line.trim();

  const {status} = getState();

  console.log(status)
  switch (status) {
    case 'start':
      inputName(line, users);
      break;

    case 'userlsFound':
      inputCommandOrIsPasswordRight(line);
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
