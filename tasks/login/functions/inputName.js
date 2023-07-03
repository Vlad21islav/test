const {setState} = require('./changeStatus')
const users = require('./users')

function inputName(line) {
    const user = users.find((element) => (element.login === line));
    if (user !== undefined) {
        console.log('Введите пароль: ');
        setState({status: 'userlsFound', user});
    } else {
        console.log('Пользователь не найден');
        console.log('Введите имя: ');
    };
};
module.exports = inputName;
