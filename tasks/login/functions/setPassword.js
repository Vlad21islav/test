module.export = function setPassword(line, users, add) {
    changeStatus('waitCommand');
    add.password = line;
    users.push(add);
    console.log(`${add.login} добавлен(a)`);
    console.log(`Введите команду: `);
};
module.export = setPassword;
