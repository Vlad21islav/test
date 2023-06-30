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

let limit = 3;

let gameStatus, add, user;

const changeStatus = (line) => {
  gameStatus = line;
};

changeStatus('start');


function inputing_Name(line) {
  user = users.find((element) => (element.login === line));
  if (user !== undefined) {
    console.log('Введите пароль: ');
    changeStatus('userlsFound'); // 'userlsFound'
  } else {
    console.log('Пользователь не найден');
    console.log('Введите имя: ');
  };
};


function ifRegisterd_or_PasswordIsntRight(line) {
  if (line === user.password) {
    changeStatus('waitCommand'); // isUser
    limit = 3
    console.log('Введите команду(введите help(), чтобы вывести список команд): ');
  } else {
      if (limit > 1) {
        limit--;
        console.log(`Пароль не верный. Попробуйте еще раз. y вас осталось ${limit} попытки`);
        console.log(`Введите пароль`);
      } else {
        console.log(`Вы потратили все попытки`);
        process.exit(0);
      };
  };
};


function deleting_InputName(line) {
  const index = users.findIndex((user) => (user.login === line));
  if (users[index] !== undefined) {
    if (users[index].login === user.login) {
      console.log('нельзя удалить самого себя');
      console.log(`Введите команду: `);
    } else {
      console.log(`${users[index].login} удалён(ена)`);
      users.splice(index, 1);
      console.log(`Введите команду: `);
    }
  } else {
    console.log('Пользователь не найден');
    console.log(`Введите команду: `);
  };
  changeStatus('waitCommand');
};


function adding_InputName(line) {
  const user = users.find((element) => (element.login === line));
  if (user === undefined) {
    add.login = line;
    changeStatus('addingPassword');
    console.log(`Введите пароль: `);
  } else {
    console.log(`Такой пользователь уже есть: `);
    console.log(`Введите команду: `);
    changeStatus('waitCommand')
  }
};


function adding_InputPassword(line) {
  changeStatus('waitCommand');
  add.password = line;
  users.push(add);
  console.log(`${add.login} добавлен(a)`);
  console.log(`Введите команду: `);
};


function commands(line) {
  switch (line) {
    case 'add()':
      add = {};
      changeStatus('addingName');
      console.log(`Введите имя: `);
      break;

    case 'delete()':
      add = {};
      changeStatus('deletingName')
      console.log(`Введите имя: `);
      break;

    case 'list()':
      for (let userNames in users) {
        console.log(users[userNames].login);
      };
      console.log(`Введите команду: `);
      break;

    case 'clear()':
      console.clear();
      console.log(`Введите команду: `);
      break;

    case 'help()':
      console.log(`1. add() - команда добавления нового пользователя`);
      console.log(`2. delete() - команда удаления пользователя (нельзя удалить самого себя) (чтобы удалить, надо ввести пароль)`);
      console.log(`3. exit() - выход`);
      console.log(`4. help() - выводит список всех команд`);
      console.log(`4. list() - показывает список всех пользователей`);
      console.log(`6. clear() - отчистить консоль`);
      console.log(`Введите команду: `);
      break;
      
    case 'exit()':
      console.log('bye');
      process.exit(0);
    
    default:
      console.log(`Такой команды нет`);
      console.log(`Введите команду: `);
      break;
  }
};


console.clear();

console.log('Введите имя');

rl.prompt();
rl.on('line', (line) => {
  line = line.trim();

  switch (gameStatus) {
    case 'start':
      inputing_Name(line);
      break;
      
    case 'userlsFound':
        ifRegisterd_or_PasswordIsntRight(line);
      break;

    case 'waitCommand':
      commands(line);
      break;
    case 'addingName':
      adding_InputName(line);
      break;
    case 'addingPassword':
      adding_InputPassword(line);
      break;
    case 'deletingName':
      deleting_InputName(line);
  };
  rl.prompt()
});
