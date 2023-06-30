const changeStatus = require('./functions/changeStatus')

function deleteUser(line, users, user) {
  const index = users.findIndex((user) => (user.login === line));
  if (users[index] !== undefined) {
    if (users[index].login === user.login) {
      console.log('нельзя удалить самого себя');
      console.log(`Введите команду: `);
    } else {
      console.log(`${users[index].login} удалён(ена)`);
      users.splice(index, 1);
      console.log(`Введите команду: `);
    }
  } else {
    console.log('Пользователь не найден');
    console.log(`Введите команду: `);
  };
  changeStatus('waitCommand');
};
module.exports = deleteUser;
