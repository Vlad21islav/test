'use strict';

const readline = require('node:readline');

const input1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input2 = readline.createInterface({
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

input1.question('Введите имя: ', (inputName) => {
  if (users[inputName] != undefined){
    input2.question('Введите пароль: ', (inputPassword) => {
        if (users[inputName][password] = inputPassword) {
            console.log(`привет ${inputName}`);
        }else {
            console.log(`${inputPassword} - это не правильный пароль`);
        }
        input2.close();
    });
  }else {
    console.log(`Неизвестный пользователь`);
  }
    
  input1.close();
});
