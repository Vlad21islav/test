const {getState, setState} = require('./changeStatus')
const users = require('./users')

function setPassword(line) {
    const {user, add} = getState(); 
    setState({status: 'waitCommand', user});
    add.password = line;
    users.push(add);
    console.log(`${add.login} добавлен(a)`);
    console.log(`Введите команду: `);
};
module.exports = setPassword;
