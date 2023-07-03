const {setState} = require('./stateManager')
const users = require('./users')
const userToAdd = require('./getCommand')

function setPassword() {
    setState({status: 'waitCommand'});
    users.push({login: userToAdd.login, password: userToAdd.password});
    console.log(`${userToAdd.login} добавлен(a)`);
    console.log(`Введите команду: `);
};
module.exports = setPassword;
