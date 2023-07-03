const {getState, setState} = require('./changeStatus')

function setName(line, users) {
  const user = users.find((element) => (element.login === line));  
  setState({user: user, user});
  if (user === undefined) {
    const {add} = getState(); 
    add.login = line;
    setState({status: 'addingPassword', user});
    console.log(`Введите пароль: `);
  } else {
    console.log(`Такой пользователь уже есть: `);
    console.log(`Введите команду: `);
    setState({status: 'waitCommand', user});
  }
};
module.exports = setName;
