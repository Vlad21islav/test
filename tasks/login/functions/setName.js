const {setState} = require('./stateManager')
const string = require('./getCommand')
const users = require('./users')

function setName(line) {

  string = string();

  const user = users.find((element) => (element.login === string));  
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
