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
  { login: 'Alex' , password: '3256'},
]

const second_input = (inputName) => {
  rl.question('Введите пароль: ', (inputPassword) => {
    console.log(users[1])
    if (users[1] === inputPassword) {
        console.log(`привет ${inputName}`);
    }else {
        console.log(`${inputPassword} - это не правильный пароль`);
    }
    rl.close();
  });
}

const first_input = () => {
  rl.on('line', (inputName) => {
    inputName = inputName.trim()
    if (users[0] !== undefined){
      second_input(inputName);
    }else {
      console.log(`Неизвестный пользователь`);
      console.clear();
      rl.prompt();
    }
  });  
}

first_input();
