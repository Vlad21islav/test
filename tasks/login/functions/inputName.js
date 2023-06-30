const changeStatus = require('./changeStatus')

function inputName(line, users, user) {
    user = users.find((element) => (element.login === line));
    if (user !== undefined) {
        console.log('Введите пароль: ');
        changeStatus('userlsFound'); // 'userlsFound'
    } else {
        console.log('Пользователь не найден');
        console.log('Введите имя: ');
    };
};
module.exports = inputName;
