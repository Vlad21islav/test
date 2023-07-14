const users = require('./users');

function addCommand(params) {
    if (params.login === undefined || params.password === undefined) {
        console.log('Вы ввели не правильную команду');
        return;
      };
      const findUser = users.find((element) => (element.login === params.login));
      if (findUser !== undefined) {
        console.log('Такой пользователь уже есть');
        return;
      };
      users.push(params)
      console.log(`${params.login} добавлен(a)`);
      return;
};
module.exports = addCommand;
