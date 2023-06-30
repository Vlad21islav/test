module.export = function setName(line, users, add) {
    const user = users.find((element) => (element.login === line));
    if (user === undefined) {
      add.login = line;
      changeStatus('addingPassword');
      console.log(`Введите пароль: `);
    } else {
      console.log(`Такой пользователь уже есть: `);
      console.log(`Введите команду: `);
      changeStatus('waitCommand')
    }
};
module.export = setName;
