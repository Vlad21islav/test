const changeStatus = require('./functions/changeStatus')

function setPassword(line, users, add) {
    changeStatus('waitCommand');
    add.password = line;
    users.push(add);
    console.log(`${add.login} добавлен(a)`);
    console.log(`Введите команду: `);
};
module.exports = setPassword;
