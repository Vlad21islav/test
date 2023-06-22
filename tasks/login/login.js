'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const users = {
    Vlad: {
        name: 'Vlad',
        password: '159478'
    },
    Alex: {
        name: 'Alex',
        password: '159236'
    }
};

const second_input = (inputName) => {
  rl.question('Введите пароль: ', (inputPassword) => {
    if (users[inputName][password] === inputPassword) {
        console.log(`привет ${inputName}`);
    }else {
        console.log(`${inputPassword} - это не правильный пароль`);
    }
    rl.close();
  });
}

const first_input = () => {
  rl.question('Введите имя: ', (inputName) => {
    if (users[inputName] !== undefined){
      second_input(inputName);
    }else {
      console.log(`Неизвестный пользователь`);
      first_input();
    }
      
    rl.close();
  });  
}

first_input();
