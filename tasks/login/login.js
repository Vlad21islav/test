'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '──> ',
});

const users = [
  { login: 'Vlad', password: '1324'},
  { login: 'Alex', password: '2546'},
]

let isPassword;

let limit = 3;

let user;

let isUser = false;

let addName = false;
let addPassword = false;

let deleteName;
let deletePassword;

let add;

console.clear();

console.log('Введите имя: ');

rl.prompt();
rl.on('line', (line) => {
  line = line.trim();

  if (line === 'exit()') {
    console.log('bye');
    process.exit(0);
  } else if (deleteName === true) {
    user = users.find((element) => (element.login === line));
    if (user !== undefined) {
      console.log('Введите пароль: ');
      deleteName = false;
      deletePassword = true
      rl.prompt();
    } else {
      console.log('Неизвестный пользователь');
      console.log('Введите имя: ');
      rl.prompt();
    }
  } else if (deletePassword === true) {
    deletePassword = false;
    if (line === user.password) {
      console.log(`${user.login} удалён(ена)`)
      users.shift(user);
      rl.prompt();
    } else {
      console.log(`Введите команду`)
      rl.prompt();
    }
  } else if (addName === true) {
    add.login = line;
    addName = false;
    addPassword = true;
    console.log(`Введите пароль: `)
    rl.prompt();
  } else if (addPassword === true) {
    addPassword = false;
    add.password = line;
    users.push(add)
    console.log(`Введите команду`)
    rl.prompt();
  } else if (isUser === true) {
    if (line === `help()`) {
      console.log(`1. add() - команда добавления нового пользователя`);
      console.log(`2. delete() - команда удаления пользователя (нельзя удалить самого себя) (чтобы удалить, надо ввести пароль)`);
      console.log(`3. exit() - выход`);
      console.log(`4. help() - выводит список всех команд`);
      console.log(`4. show() - показывает список всех пользователей`);
      console.log(`Введите команду`)
      rl.prompt();
    } else if (line === 'show()') {
      for (let userNames in users) {
        console.log(users[userNames])
      }
      console.log(`Введите команду: `)
      rl.prompt();
    } else if (line === 'add()') {
      add = {};
      addName = true;
      console.log(`Введите имя: `);
      rl.prompt();
    } else if (line === 'delete()') {
      add = {};
      deleteName = true;
      console.log(`Введите имя: `);
      rl.prompt();
    } else {
      console.log(`Такой команды нет`)
      console.log(`Введите команду: `)
      rl.prompt();
    }
  } else if (isPassword !== true) {
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
      isUser = true;
      console.log(`Привет, ${user.login}!`);
      console.log('Введите команду: ');
      rl.prompt();
    } else {
        if (limit > 1) {
          limit--;
          console.log(`Пароль не верный. Попробуйте еще раз. y вас осталось ${limit} попытки`);
          rl.prompt();
        } else {
          console.log(`Вы потратили все попытки`);
          process.exit(0);
        }
    }
  }
})
