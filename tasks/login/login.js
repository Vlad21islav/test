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

let gameStatus;

let limit = 3;

let user;

let add;

let lastWord = 'Введите имя: ';

let userDelete;

let functionWasDone = false;

const allStatuses = [
  'start',
  'userlsFound',
  'waitCommand',
];

const changeStatus = (line) => {
  for (let status in allStatuses) {
    if (line === allStatuses[status]) {
      gameStatus = line;
    };
  };
};

changeStatus('start');


function inputing_Name(line) {
  user = users.find((element) => (element.login === line));
  if (user !== undefined) {
    console.log('Введите пароль: ');
    lastWord = 'Введите пароль: ';
    changeStatus('userlsFound'); // 'userlsFound'
    rl.prompt();
  } else {
    console.log('Пользователь не найден');
    console.log('Введите имя: ');
    lastWord = 'Введите имя: ';
    rl.prompt();
  };
};


function ifRegisterd_or_PasswordIsntRight(line) {
  if (line === user.password) {
    changeStatus('waitCommand'); // isUser
    limit = 3
    console.log('Введите команду(введите help(), чтобы вывести список команд): ');
    lastWord = 'Введите команду(введите help(), чтобы вывести список всех команд): '
    rl.prompt();
  } else {
      if (limit > 1) {
        limit--;
        console.log(`Пароль не верный. Попробуйте еще раз. y вас осталось ${limit} попытки`);
        console.log(`Введите пароль`);
        lastWord = `Введите пароль`
        rl.prompt();
      } else {
        console.log(`Вы потратили все попытки`);
        lastWord = `Вы потратили все попытки`
        process.exit(0);
      };
  };
};


function deleting_InputName(line) {
  userDelete = users.find((element) => (element.login === line));
    if (userDelete !== undefined) {
      if (userDelete.login === user.login) {
        console.log('нельзя удалить самого себя');
        console.log('Введите имя: ');
        lastWord = 'Введите имя: ';
        rl.prompt();
      } else {
        console.log(`${userDelete.login} удалён(ена)`);
        userDelete = users.findIndex((element) => (element.login === line));
        users.splice(userDelete, 1);
        changeStatus('waitCommand');
        console.log(`Введите команду: `);
        rl.prompt();
      }
    } else {
      console.log('Пользователь не найден');
      console.log('Введите имя: ');
      lastWord = 'Введите имя: ';
      rl.prompt();
    };
};


function adding_InputName(line) {
  const ifTheirIsName = users.find((element) => (element.login === line));
  if (ifTheirIsName === undefined) {
    add.login = line;
    adding_InputPassword(line);
    console.log(`Введите пароль: `);
    lastWord = `Введите пароль: `;
    rl.prompt();
  } else {
    console.log(`Такой пользователь уже есть: `);
    console.log(`Введите имя: `);
    lastWord = `Введите имя: `;
    rl.prompt();
  }
};


function adding_InputPassword(line) {
  changeStatus('waitCommand');
  add.password = line;
  users.push(add);
  console.log(`${add.login} добавлен(a)`);
  console.log(`Введите команду: `);
  lastWord = `Введите команду: `;
  rl.prompt();
};


function commands(line) {
  switch (line) {
    case 'add()':
      add = {};
      adding_InputName(line)
      console.log(`Введите имя: `);
      lastWord = 'Введите имя: ';
      rl.prompt();
      break;

    case 'delete()':
      add = {};
      deleting_InputName(line);
      console.log(`Введите имя: `);
      lastWord = 'Введите имя: ';
      rl.prompt();
      break;

    case 'list()':
      for (let userNames in users) {
        console.log(users[userNames].login);
      };
      console.log(`Введите команду: `);
      lastWord = `Введите команду: `;
      rl.prompt();
      break;

    case 'clear()':
      console.clear();
      console.log(lastWord);
      rl.prompt();
      break;

    case 'help()':
      console.log(`1. add() - команда добавления нового пользователя`);
      console.log(`2. delete() - команда удаления пользователя (нельзя удалить самого себя) (чтобы удалить, надо ввести пароль)`);
      console.log(`3. exit() - выход`);
      console.log(`4. help() - выводит список всех команд`);
      console.log(`4. list() - показывает список всех пользователей`);
      console.log(`6. clear() - отчистить консоль`);
      console.log(`Введите команду: `);
      lastWord = `Введите команду: `;
      rl.prompt();
      break;
      
    case 'exit()':
      console.log('bye');
      process.exit(0);
    
    default:
      console.log(`Такой команды нет`);
      console.log(`Введите команду: `);
      lastWord = `Введите команду: `;
      rl.prompt();
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
      
    };
});
