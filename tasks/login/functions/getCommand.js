const {getState} = require('./stateManager')
const getActionParams = require('./getActionParams')
const users = require('./users')

function commands(line) {
  const {action, params} = getActionParams(line)
  switch (action) {
    case 'add':
      
      break;

    case 'delete':zz
      if (params.login === undefined) {
        console.log('Вы ввели не правильную команду');
        break;
      };

      const index = users.findIndex((user) => (user.login === params.login));
      if (users[index] === -1) {
        console.log('Такого пользователя нет');
        break;
      };

      const {user} = getState(); 
      if (users[index].login !== user.login) {
        console.log(`${users[index].login} удалён(ена)`);
        users.splice(index, 1);
        break;
      };
      console.log('нельзя удалить самого себя');
      break;

    case 'list':
      if (params.take === undefined || params.skip === undefined) {
        console.log('Вы ввели не правильную команду');
        break;
      };

      const take = Number(params.take);
      const skip = Number(params.skip);
      if (Number.isNaN(take) || !Number.isInteger(take) || take <= 0) {
        console.log('Параметр "take" должен быть целым положительным числом и должен быть больше нуля');
        break;
      };

      if (Number.isNaN(skip) || !Number.isInteger(skip) || skip < 0) {
        console.log('Параметр "take" должен быть целым неотрицательным числом и должен быть меньше илиравен нулю');
        break;
      };

      console.table(users.slice(skip, take + skip));
      
      break;

    case 'clear':
      console.clear();
      break;

    case 'help':
      console.log(`1. add login=name password=password - команда добавления нового пользователя`);
      console.log(`2. delete login=name - команда удаления пользователя (нельзя удалить самого себя)`);
      console.log(`3. exit - выход`);
      console.log(`4. help - выводит список всех команд`);
      console.log(`4. list take=20 skip=10 - выводит список (c 11 по 20 строки)`);
      console.log(`6. clear - отчистить консоль`);
      break;

    case 'exit':
      console.log('bye');
      process.exit(0);

    default:
      console.log(`Такой команды нет`);
      break;
  }
  console.log(`Введите команду: `);
};
module.exports = commands;
