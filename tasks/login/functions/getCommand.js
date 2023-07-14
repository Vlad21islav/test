const {getState} = require('./stateManager')
const getActionParams = require('./getActionParams')
const users = require('./users')

const addCommand = require('./commands/add')
const clearCommand = require('./commands/clear')
const deleteCommand = require('./commands/add')
const exitCommand = require('./commands/exit')
const helpCommand = require('./commands/help')
const listCommand = require('./commands/list')

function commands(line) {
  const {action, params} = getActionParams(line)
  switch (action) {
    case 'add':
      addCommand(params);
      break;

    case 'delete':
      deleteCommand(params);
      break;

    case 'list':
      listCommand(params)
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
