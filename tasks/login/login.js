'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '──> ',
});

const users = [
  { login: 'Vlad' , password: '1324'},
  { login: 'Alex' , password: '2546'},
]

let isPassword;

let limit = 3;

let user;

console.clear();

console.log('Введите имя: ');

rl.prompt();
rl.on('line', (line) => {
  line = line.trim();

  if (line === 'exit') {
    console.log('bye')
    process.exit(0);
  } if (isPassword != true) {
    user = users.find((element) => (element.login === line));
    if (user !== undefined) {
      console.log('Введите пароль: ');
      isPassword = true;
      rl.prompt();
    } else {
      console.log('Неизвестный пользователь');
      console.log('Введите имя: ');
      rl.prompt();
    }
  } else {
    if (line === user.password) {
      console.log(`Привет, ${user.login}!`);
      rl.close();
    } else {
        if (limit > 1) {
          limit--;
          console.log(`Пароль не верный. Попробуйте еще раз. y вас осталось ${limit} попытки`);
          rl.prompt();
        } else {
          console.log(`Вы потратили все попытки`);
          rl.close();
        }
    }
  }
})
