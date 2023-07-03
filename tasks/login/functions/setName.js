const {getState, setState} = require('./stateManager')
const users = require('./users')

function setName(line) {
  const user = users.find((element) => (element.login === line));  
  if (user === undefined) {
    const add = line 
    setState({status: 'addingPassword', add});
    console.log(`Введите пароль: `);
  } else {
    console.log(`Такой пользователь уже есть: `);
    console.log(`Введите команду: `);
    setState({status: 'waitCommand'});
  }
};
module.exports = setName;
