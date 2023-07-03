const {getState, setState} = require('./changeStatus')
const users = require('./users')

function setPassword(line) {
    const {add} = getState(); 
    setState({status: 'waitCommand'});
    users.push({login: add, password: line});
    console.log(`${add.login} добавлен(a)`);
    console.log(`Введите команду: `);
};
module.exports = setPassword;
