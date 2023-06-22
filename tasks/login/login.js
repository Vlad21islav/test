'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Введите имя: ',
});

rl.prompt();

const users = [
  ['Vlad', '1324'],
  ['Alex', '3256'],
]

let limit = 0;
const max = 3;

const second_input = (usersName, usersRassword) => {
  rl.on('line', (inputPassword) => {
    inputPassword = inputPassword.trim();
    if (usersRassword === inputPassword) {
        console.log(`привет ${usersName}`);
    }else {
      if (limit < max) {
        limit++;
        console.log(`${inputPassword} - это не правильный пароль, y вас осталось ${max - limit} попыток`);
        rl.prompt();
      } else console.log('попытки закончились');
    }
    rl.close();
  });
}

let isUndefined = undefined;

let usersName = users[0][0];
let usersPassword = users[0][1];

const first_input = () => {
  rl.on('line', (inputName) => {
    inputName = inputName.trim();
    for (let i in users) {
      if (users[i][0] === inputName) {
        isUndefined = false;
        usersName = users[i][0];
        usersPassword = users[i][1];
      }
    }
    if (isUndefined !== undefined){
      second_input(usersName, usersPassword);
    }else {
      console.clear();
      console.log(`Неизвестный пользователь`);
      rl.prompt();
    }
  });  
}

first_input();
