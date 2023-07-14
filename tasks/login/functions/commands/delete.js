const users = require('./users');

function deleteCommand(params) {
    if (params.login === undefined) {
      console.log('Вы ввели не правильную команду');
      return;
    };

    const index = users.findIndex((user) => (user.login === params.login));
    if (users[index] === -1) {
      console.log('Такого пользователя нет');
      return;
    };

    const {user} = getState();
    if (users[index].login === user.login) {
      console.log('нельзя удалить самого себя');
      return;
    };
    console.log(`${users[index].login} удалён(ена)`);
    users.splice(index, 1);
    return;
};
module.exports = deleteCommand;
