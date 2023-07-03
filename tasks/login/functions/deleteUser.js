const {getState, setState} = require('./changeStatus')

function deleteUser(line, users) {
  const index = users.findIndex((user) => (user.login === line));
  const {user} = getState(); 
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
  setState({status: 'waitCommand', user});
};
module.exports = deleteUser;
