const {getState, setState} = require('./stateManager')
const users = require('./users')

function commands(line) {
  if (String(line).split(' ')[0] === 'add') {
    let string = () => String(line).split(' ')[1].split('"')[1];
    setState({status: 'addingName'});
    module.exports = string;
  } else {
    switch (line) {
      case 'delete()':
        setState({status: 'deletingName'});
        console.log(`Введите имя: `);
        break;
  
      case 'list()':
        for (let user of users) {
          console.log(user.login);
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
  }
};
module.exports = commands;
