'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Введите имя: ',
});

rl.prompt();

const users = [
  { login: 'Vlad' , password: '1324'},
  { login: 'Alex' , password: '2546'},
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

let usersName = users[0].login;
let usersPassword = users[0].password;

const first_input = () => {
  rl.on('line', (inputName) => {
    inputName = inputName.trim();
    for (let i in users) {
      if (users[i][0] === inputName) {
        isUndefined = false;
        usersName = users[i].login;
        usersPassword = users[i].password;
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
