const {setState} = require('./changeStatus')

function inputName(line, users) {
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
