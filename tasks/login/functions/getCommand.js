const {getState} = require('./stateManager')
const getActionParams = require('./getActionParams')
const users = require('./users')

const addCommand = require('./commands/add')
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
      helpCommand();
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
