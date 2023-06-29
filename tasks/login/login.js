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

const commands = [
  'addPassword',
  'isUser',
  'addPassword',
  'isPassword',
  'addName',
  'deleteName',
  ''
];

const changeStatus = (line) => {
  for (let command in commands) {
    if (line === commands[command]) {
      gameStatus = line;
    };
  };
};

changeStatus('isPassword');


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
        changeStatus('isUser'); // isUser
        console.log(`Введите команду: `);
        rl.prompt();
      }
    } else {
      console.log('Неизвестный пользователь');
      console.log('Введите имя: ');
      lastWord = 'Введите имя: ';
      rl.prompt();
    };
};


function adding_InputName(line) {
  add.login = line;
  changeStatus('addPassword'); // addPassword
  console.log(`Введите пароль: `);
  lastWord = `Введите пароль: `;
  rl.prompt();
};


function adding_InputPassword(line) {
  changeStatus('isUser'); // isUser
  add.password = line;
  users.push(add);
  console.log(`${add.login} добавлен(a)`);
  console.log(`Введите команду: `);
  lastWord = `Введите команду: `;
  rl.prompt();
};


function userIsInHisAcaunt(line) {
  switch (line) {
    case 'exit()':
      console.log('bye');
      process.exit(0);
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
      console.log(`4. show() - показывает список всех пользователей`);
      console.log(`5. switch() - переключиться на другого пользователя`);
      console.log(`6. clear() - отчистить консоль`);
      console.log(`Введите команду: `);
      lastWord = `Введите команду: `;
      rl.prompt();
      break;
    case 'show()':
      for (let userNames in users) {
        console.log(users[userNames].login);
      };
      console.log(`Введите команду: `);
      lastWord = `Введите команду: `;
      rl.prompt();
      break;
    case 'switch()':
      changeStatus('isPassword'); // isPassword
      console.log('Введите имя(введите help(), чтобы вывести список команд): ');
      lastWord = 'Введите имя: ';
      rl.prompt();
      break;
    case 'add()':
      add = {};
      changeStatus('addName'); // addName
      console.log(`Введите имя: `);
      lastWord = 'Введите имя: ';
      rl.prompt();
      break;
    case 'delete()':
      add = {};
      changeStatus('deleteName'); // deleteName
      console.log(`Введите имя: `);
      lastWord = 'Введите имя: ';
      rl.prompt();
      break;
    default:
      console.log(`Такой команды нет`);
      console.log(`Введите команду: `);
      lastWord = `Введите команду: `;
      rl.prompt();
      break;
  }
};


function inputing_Password(line) {
  user = users.find((element) => (element.login === line));
  if (user !== undefined) {
    console.log('Введите пароль: ');
    lastWord = 'Введите пароль: ';
    changeStatus(''); // ''
    rl.prompt();
  } else {
    console.log('Неизвестный пользователь');
    console.log('Введите имя: ');
    lastWord = 'Введите имя: ';
    rl.prompt();
  };
};


function ifRegisterd_or_PasswordIsntRight(line) {
  if (line === user.password) {
    changeStatus('isUser'); // isUser
    limit = 3
    console.log(`Привет, ${user.login}!`);
    console.log('Введите команду(введите help(), чтобы вывести список команд): ');
    lastWord = 'Введите команду(введите help(), чтобы вывести список команд): '
    rl.prompt();
  } else {
      if (limit > 1) {
        limit--;
        console.log(`Пароль не верный. Попробуйте еще раз. y вас осталось ${limit} попытки`);
        lastWord = `Пароль не верный. Попробуйте еще раз. y вас осталось ${limit} попытки`
        rl.prompt();
      } else {
        console.log(`Вы потратили все попытки`);
        lastWord = `Вы потратили все попытки`
        process.exit(0);
      };
  };
};


function commandsIsntLogIn(line) {
  switch (line) {
    case 'exit()':
      console.log('bye');
      functionWasDone = true;
      process.exit(0);
    case 'clear()':
      console.clear();
      console.log(lastWord);
      rl.prompt();
      functionWasDone = true;
      break;
    case 'help()':
      console.log(`1. exit() - выход`);
      console.log(`2. help() - выводит список всех команд`);
      console.log(`3. clear() - отчистить консоль`);
      console.log(lastWord);
      rl.prompt();
      functionWasDone = true;
      break;
  }
}


console.clear();

console.log('Введите имя(введите help(), чтобы вывести список команд): ');

rl.prompt();
rl.on('line', (line) => {
  line = line.trim();

    switch (gameStatus) {
      case 'deleteName':
        commandsIsntLogIn(line)
        if (functionWasDone !== true) {
          deleting_InputName(line);
        } else functionWasDone = false;
        break;
        
      case 'addName':
        commandsIsntLogIn(line)
        if (functionWasDone !== true) {
          adding_InputName(line);
        } else functionWasDone = false;
        break;

      case 'addPassword':
        commandsIsntLogIn(line)
        if (functionWasDone !== true) {
          adding_InputPassword(line);
        } else functionWasDone = false;
        break;
      
      case 'isUser':
        userIsInHisAcaunt(line);
        break;
      case 'isPassword':
        commandsIsntLogIn(line)
        if (functionWasDone !== true) {
          inputing_Password(line);
        } else functionWasDone = false;
        break;

      default:
        commandsIsntLogIn(line)
        if (functionWasDone !== true) {
          ifRegisterd_or_PasswordIsntRight(line);
        } else functionWasDone = false;
    };
});
