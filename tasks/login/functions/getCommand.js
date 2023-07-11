const {getState} = require('./stateManager')
const getActionParams = require('./getActionParams')
const users = require('./users')

function commands(line) {
  const {action, params} = getActionParams(line)
  switch (action) {
    case 'add':
      if (params.login !== undefined && params.password !== undefined) {
        const user = users.find((element) => (element.login === params.login));
        if (user === undefined) {
          users.push(params)
          console.log(`${params.login} добавлен(a)`);
          console.log(`Введите команду: `);
        } else {
          console.log('Такой пользователь уже есть')
          console.log(`Введите команду: `);
        }
      } else {
        console.log('Вы ввели не правильную команду')
        console.log(`Введите команду: `);
      }
      break;

    case 'delete':
      if (params.login !== undefined) {
        const index = users.findIndex((user) => (user.login === params.login));
        if (users[index] !== -1) {
          const {user} = getState(); 
          if (users[index].login === user.login) {
            console.log('нельзя удалить самого себя');
            console.log(`Введите команду: `);
          } else {
            console.log(`${users[index].login} удалён(ена)`);
            users.splice(index, 1);
            console.log(`Введите команду: `);
          }
        } else {
          console.log('Такого пользователя нет')
          console.log(`Введите команду: `);
        }
      } else {
        console.log('Вы ввели не правильную команду')
        console.log(`Введите команду: `);
      }
      break;

    case 'list':
      if (params.take !== undefined && params.skip !== undefined) {
        const take = Number(params.take) - 1
        const skip = Number(params.skip) - 1
        if (Number.isNaN(take) !== true && Number.isNaN(skip) !== true) {
          if (skip >= 2 && take < users.length + 1) {
            let usersData = []
            for (let user = skip; user !== skip + take; user++) {
              usersData.push(users[user])
            }
            console.table(usersData)
            console.log(`Введите команду: `);
          } else {
            console.log('He возможная команда')
            console.log(`Введите команду: `);
          }
        } else {
          console.log('Вы ввели не цифры')
          console.log(`Введите команду: `);
        }
      } else {
        console.log('Вы ввели не правильную команду')
        console.log(`Введите команду: `);
      }
      break;

    case 'clear':
      console.clear();
      console.log(`Введите команду: `);
      break;

    case 'help':
      console.log(`1. add login=name password=password - команда добавления нового пользователя`);
      console.log(`2. delete login=name - команда удаления пользователя (нельзя удалить самого себя)`);
      console.log(`3. exit - выход`);
      console.log(`4. help - выводит список всех команд`);
      console.log(`4. list take=20 skip=10 - выводит список (c 11 по 20 строки)`);
      console.log(`6. clear - отчистить консоль`);
      console.log(`Введите команду: `);
      break;

    case 'exit':
      console.log('bye');
      process.exit(0);

    default:
      console.log(`Такой команды нет`);
      console.log(`Введите команду: `);
      break;
  }
};
module.exports = commands;
