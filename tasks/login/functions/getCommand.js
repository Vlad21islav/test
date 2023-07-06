const getActionParams = require('./getActionParams')
const {setState} = require('./stateManager')
const users = require('./users')

function commands(line) {
  const splited = line.split(' ');
  const command = splited[0];
  switch (command) {
    case 'add':
      const params = getActionParams(splited).params
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
      
      }
      break;

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
      console.log(`1. add login=name password=password - команда добавления нового пользователя`);
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
