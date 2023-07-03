const {setState} = require('./stateManager')
const userToAdd = require('./getCommand')
const users = require('./users')

function setName() {
  const user = users.find((element) => (element.login === userToAdd.login));  
  if (user === undefined) {
    setState({status: 'addingPassword'});
  } else {
    console.log(`Такой пользователь уже есть: `);
    console.log(`Введите команду: `);
    setState({status: 'waitCommand'});
  }
};
module.exports = setName;
