const {setState} = require('./stateManager')
const users = require('./users')

function commands(line) {
  const splited = line.split(' ')
  const command = splited[0]
  switch (command) {
    case 'add':
      let login = splited[1].split('=')
      if (login[0] === 'login') {
        login = login[1]
        let password = splited[2].split('=')
        if (password.length === 3) {
          if (password[0] === 'password') {
          password = password[1]
          users.push({login: login, password: password});
          }
        }
      }

    case 'delete':
      setState({status: 'deletingName'});
      console.log(`Введите имя: `);
      break;

    case 'list':
      for (let user of users) {
        console.log(user.login);
      };
      console.log(`Введите команду: `);
      break;

    case 'clear':
      console.clear();
      console.log(`Введите команду: `);
      break;

    case 'help':
      console.log(`1. add() - команда добавления нового пользователя`);
      console.log(`2. delete() - команда удаления пользователя (нельзя удалить самого себя) (чтобы удалить, надо ввести пароль)`);
      console.log(`3. exit() - выход`);
      console.log(`4. help() - выводит список всех команд`);
      console.log(`4. list() - показывает список всех пользователей`);
      console.log(`6. clear() - отчистить консоль`);
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
