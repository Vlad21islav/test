const {getState, setState} = require('./changeStatus')
const {setUser, getUser} = require('./users')

function setPassword(line) {
    const {user, add} = getState(); 
    setState({status: 'waitCommand', user});
    add.password = line;
    const {users} = getUser();
    setUser({users: users.push(add)});
    console.log(`${add.login} добавлен(a)`);
    console.log(`Введите команду: `);
};
module.exports = setPassword;
