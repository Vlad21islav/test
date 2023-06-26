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

let gameStatus = 'isPassword';

let limit = 3;

let user;

let add;

console.clear();

console.log('Введите имя: ');

rl.prompt();
rl.on('line', (line) => {
  line = line.trim();

  if (line === 'exit()') {
    console.log('bye');
    process.exit(0);
  } else {
    switch (gameStatus) {
      case 'deleteName':
        user = users.find((element) => (element.login === line));
        if (user !== undefined) {
          console.log('Введите пароль: ');
          gameStatus = 'deletePassword';
          rl.prompt();
        } else {
          console.log('Неизвестный пользователь');
          console.log('Введите имя: ');
          rl.prompt();
        }
        break;

      case 'deletePassword':
        gameStatus = 'isUser';
        if (line === user.password) {
          console.log(`${user.login} удалён(ена)`);
          user = users.findIndex((element) => (element.login === line));
          users.splice(user, 1);
          rl.prompt();
        } else {
          console.log(`Введите команду: `);
          rl.prompt();
        };
        break;
        
      case 'addName':
        add.login = line;
        gameStatus = 'addPassword';
        console.log(`Введите пароль: `);
        rl.prompt();
        break;

      case 'addPassword':
        gameStatus = 'isUser';
        add.password = line;
        users.push(add);
        console.log(`${add.login} добавлен(a)`);
        console.log(`Введите команду: `);
        rl.prompt();
        break;
      
      case 'isUser':
        if (line === `help()`) {
          console.log(`1. add() - команда добавления нового пользователя`);
          console.log(`2. delete() - команда удаления пользователя (нельзя удалить самого себя) (чтобы удалить, надо ввести пароль)`);
          console.log(`3. exit() - выход`);
          console.log(`4. help() - выводит список всех команд`);
          console.log(`4. show() - показывает список всех пользователей`);
          console.log(`5. switch() - переключиться на другого пользователя`);
          console.log(`Введите команду: `);
          rl.prompt();
        } else if (line === 'show()') {
          for (let userNames in users) {
            console.log(users[userNames].login);
          };
          console.log(`Введите команду: `);
          rl.prompt();
        } else if (line === 'switch()') {
          gameStatus = 'isPassword';
          console.log('Введите имя: ');
          rl.prompt();
        } else if (line === 'add()') {
          add = {};
          gameStatus = 'addName';
          console.log(`Введите имя: `);
          rl.prompt();
        } else if (line === 'delete()') {
          add = {};
          gameStatus = 'deleteName';
          console.log(`Введите имя: `);
          rl.prompt();
        } else {
          console.log(`Такой команды нет`);
          console.log(`Введите команду: `);
          rl.prompt();
        };
        break;
      
      case 'isPassword':
        user = users.find((element) => (element.login === line));
        if (user !== undefined) {
          console.log('Введите пароль: ');
          gameStatus = '';
          rl.prompt();
        } else {
          console.log('Неизвестный пользователь');
          console.log('Введите имя: ');
          rl.prompt();
        };
        break;

      default:
        if (line === user.password) {
          gameStatus = 'isUser';
          limit = 3
          console.log(`Привет, ${user.login}!`);
          console.log('Введите команду(введите help(), чтобы вывести список команд): ');
          rl.prompt();
        } else {
            if (limit > 1) {
              limit--;
              console.log(`Пароль не верный. Попробуйте еще раз. y вас осталось ${limit} попытки`);
              rl.prompt();
            } else {
              console.log(`Вы потратили все попытки`);
              process.exit(0);
            };
        };
      
    };
  };
});
